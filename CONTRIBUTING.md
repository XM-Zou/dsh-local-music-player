# Contributing

Thanks for considering a contribution.

## Before opening a pull request

```sh
npm run check
```

This validates the package manifest, locale files, icon, module/patch identity, and translation-key coverage.

## Guidelines

- Keep the plugin dependency-free and build-free unless there is a strong reason to add tooling.
- Match the host's theme tokens (`--dsw-alias-*`) instead of hard-coded surface colors.
- Keep `DB_NAME` and the `LS_*` storage keys stable. If a migration is unavoidable, include it in the same change.
- Update `CHANGELOG.md` for user-visible changes.
- Keep the UI bilingual when adding user-facing text: update both `ZH` and `EN` dictionaries in `client.js`.
- Do not commit `node_modules`, personal music, profile data, or screenshots containing private information.

## Reporting bugs

Include the DSH version, browser/Electron version, the audio format, and any console errors. Do not attach copyrighted audio unless you have the right to share it.
