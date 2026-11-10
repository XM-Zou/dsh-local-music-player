#!/usr/bin/env node
/**
 * Repository checks that need no dependencies.
 *
 * Run with: npm run check
 */
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function extractObject(source, name) {
  const marker = `const ${name} = {`;
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`could not find ${name} in client.js`);
  const objectStart = start + marker.length - 1;
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = objectStart; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === '\\') {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
      continue;
    }
    if (character === "'" || character === '"' || character === '`') {
      quote = character;
      continue;
    }
    if (character === '{') depth += 1;
    if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        return Function(`return (${source.slice(objectStart, index + 1)})`)();
      }
    }
  }
  throw new Error(`unterminated ${name} object in client.js`);
}

function checkPackage() {
  const pkg = JSON.parse(read('package.json'));
  const name = typeof pkg.name === 'string' ? pkg.name : '';

  if (!name) fail('package.json: name is missing');
  if (pkg.private === true) fail('package.json: remove "private": true before publishing');
  if (name.startsWith('@local/')) fail('package.json: @local is not a publishable npm scope');
  if (!pkg.version) fail('package.json: version is missing');
  if (!pkg.license) fail('package.json: license is missing');
  if (!pkg.repository || !pkg.repository.url) fail('package.json: repository.url is missing');
  if (!pkg.engines || !pkg.engines.dsh) fail('package.json: engines.dsh is missing');
  if (name.startsWith('@') && (!pkg.publishConfig || pkg.publishConfig.access !== 'public')) {
    fail('package.json: scoped packages need publishConfig.access = "public"');
  }

  const requiredExports = ['.', './client', './icon', './locale/*.json'];
  for (const entry of requiredExports) {
    if (!pkg.exports || !pkg.exports[entry]) fail(`package.json: exports["${entry}"] is missing`);
  }

  if (!pkg.dsh || !pkg.dsh.bundle || !pkg.dsh.bundle.patch) {
    fail('package.json: dsh.bundle.patch is missing');
  }
  if (!pkg.dsh || !pkg.dsh.client || pkg.dsh.client.platform !== 'web') {
    fail('package.json: dsh.client.platform must be "web"');
  }

  const requiredFiles = [
    'index.js',
    'client.js',
    'cordis.patch.yml',
    'icon.svg',
    'locale/*.json',
    'README.md',
    'README.en.md',
    'LICENSE',
    'CHANGELOG.md',
  ];
  const files = Array.isArray(pkg.files) ? pkg.files : [];
  for (const entry of requiredFiles) {
    if (!files.includes(entry)) fail(`package.json: files is missing "${entry}"`);
  }

  return pkg;
}

function checkClient(pkg) {
  const source = read('client.js');
  const moduleId = source.match(/window\.__ModuleLoader__\.load\(\{\s*id:\s*'([^']+)'/);
  if (!moduleId) fail('client.js: could not find window.__ModuleLoader__.load({ id })');
  else if (moduleId[1] !== pkg.name) {
    fail(`client.js: module id "${moduleId[1]}" does not match package name "${pkg.name}"`);
  }

  const panelId = source.match(/const PANEL_ID = '([^']+)'/);
  if (!panelId) fail('client.js: PANEL_ID is missing');
  const dbName = source.match(/const DB_NAME = '([^']+)'/);
  if (!dbName) fail('client.js: DB_NAME is missing');
  else if (dbName[1] !== 'dsh-music-player') {
    warn(`client.js: DB_NAME is "${dbName[1]}"; existing libraries may not be found`);
  }

  const zh = extractObject(source, 'ZH');
  const en = extractObject(source, 'EN');
  const used = new Set();
  for (const match of source.matchAll(/\b(?:t|tt|tr)\(\s*(?:t,\s*)?'([^']+)'/g)) used.add(match[1]);

  const missingZh = [...used].filter((key) => !(key in zh));
  const missingEn = [...used].filter((key) => !(key in en));
  if (missingZh.length > 0) fail(`client.js: missing ZH keys: ${missingZh.join(', ')}`);
  if (missingEn.length > 0) fail(`client.js: missing EN keys: ${missingEn.join(', ')}`);

  const unusedZh = Object.keys(zh).filter((key) => !used.has(key));
  if (unusedZh.length > 0) warn(`client.js: unused ZH keys: ${unusedZh.join(', ')}`);

  if (source.includes('@local/')) fail('client.js: still contains an @local/ reference');
  if (!source.includes('const audioElement = document.createElement')) {
    warn('client.js: audio element bootstrap was not found');
  }

  return { panelId: panelId && panelId[1], used: used.size };
}

function checkPatch(panelId) {
  const patch = read('cordis.patch.yml');
  const name = patch.match(/name:\s*'([^']+)'/);
  const id = patch.match(/id:\s*([^\s]+)/);
  if (!name) fail('cordis.patch.yml: package name is missing');
  if (!id) fail('cordis.patch.yml: row id is missing');
  if (name && name[1].startsWith('@local/')) fail('cordis.patch.yml: @local is not publishable');
  if (name && panelId && name[1] !== undefined && panelId !== undefined) {
    // The row id and the panel id are independent, but keeping them equal is simpler.
    if (id && id[1] !== panelId) {
      warn(`cordis.patch.yml: row id "${id[1]}" differs from PANEL_ID "${panelId}"`);
    }
  }
  return { name: name && name[1] };
}

function checkPatchName(pkg, patch) {
  if (patch.name && patch.name !== pkg.name) {
    fail(`cordis.patch.yml: name "${patch.name}" does not match package name "${pkg.name}"`);
  }
}

function checkLocales() {
  for (const locale of ['en', 'zh']) {
    const file = `locale/${locale}.json`;
    if (!existsSync(join(root, file))) {
      fail(`${file}: file is missing`);
      continue;
    }
    let data;
    try {
      data = JSON.parse(read(file));
    } catch (error) {
      fail(`${file}: invalid JSON (${error.message})`);
      continue;
    }
    if (!data.meta || typeof data.meta.title !== 'string' || !data.meta.title.trim()) {
      fail(`${file}: meta.title is missing`);
    }
    if (!data.meta || typeof data.meta.description !== 'string' || !data.meta.description.trim()) {
      fail(`${file}: meta.description is missing`);
    }
  }
}

function checkIcon() {
  const file = 'icon.svg';
  if (!existsSync(join(root, file))) {
    fail(`${file}: file is missing`);
    return;
  }
  const icon = read(file);
  if (!/^\s*(?:<\?xml[^>]*>\s*)?<svg[\s>]/.test(icon)) fail(`${file}: does not start with an <svg> root`);
  if (!icon.includes('</svg>')) fail(`${file}: missing </svg>`);
  if (/<script\b/i.test(icon)) fail(`${file}: must not contain a <script> tag`);
  if (statSync(join(root, file)).size > 256 * 1024) fail(`${file}: must be 256 KiB or smaller`);
}

function checkRequiredFiles() {
  const required = [
    'index.js',
    'client.js',
    'cordis.patch.yml',
    'icon.svg',
    'locale/en.json',
    'locale/zh.json',
    'README.md',
    'README.en.md',
    'LICENSE',
    'CHANGELOG.md',
  ];
  for (const file of required) {
    if (!existsSync(join(root, file))) fail(`${file}: file is missing`);
  }
  for (const file of ['package.json', 'client.js', 'cordis.patch.yml']) {
    if (read(file).includes('@local/')) fail(`${file}: still contains an @local/ reference`);
  }
}

try {
  const pkg = checkPackage();
  const client = checkClient(pkg);
  const patch = checkPatch(client.panelId);
  checkPatchName(pkg, patch);
  checkLocales();
  checkIcon();
  checkRequiredFiles();

  if (warnings.length > 0) {
    console.warn('Warnings:');
    for (const message of warnings) console.warn(`  - ${message}`);
  }

  if (errors.length > 0) {
    console.error('Check failed:');
    for (const message of errors) console.error(`  - ${message}`);
    process.exit(1);
  }

  console.log(`OK: ${pkg.name}@${pkg.version} — ${client.used} translation keys, ${Array.isArray(pkg.files) ? pkg.files.length : 0} packaged entries`);
} catch (error) {
  console.error(`Check crashed: ${error.stack || error.message}`);
  process.exit(1);
}
