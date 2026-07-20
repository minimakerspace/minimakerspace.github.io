---
title: Contributing
description: Help improve mini MAKERSPACE Docs.
---

# Contributing

The docs are written in Markdown and built with VitePress. Small corrections, clearer explanations, and reproducible field notes are all welcome.

## Contribute through GitHub

You can add or update a Markdown page entirely on GitHub:

1. Open the [`docs` folder in the mini MAKERSPACE repository](https://github.com/minimakerspace/minimakerspace.github.io/tree/main/docs).
2. To update an existing page, open its `.md` file and select the pencil icon. To add a page, select **Add file → Create new file**.
3. Give new files a short, descriptive name using lowercase letters and hyphens, such as `assembly-guide.md`.
4. Add the page title and description at the top, followed by the page content:

   ```md
   ---
   title: Assembly Guide
   description: How to assemble the product.
   ---

   # Assembly Guide

   Write the instructions here.
   ```

5. Use the **Preview** tab to check the formatting.
6. Select **Commit changes**, create a new branch, and open a pull request describing what you added or changed.

If you add a new page, also update `docs/.vitepress/config.mts` so it appears in the navigation or sidebar. If you do not have write access, GitHub will guide you through creating a fork before opening the pull request.

## Run the site locally

```sh
pnpm install
pnpm dev
```

Open the local address shown in the terminal. Most content lives in the `docs` directory, and navigation is configured in `docs/.vitepress/config.mts`.

## Writing principles

- Explain the reason behind a setting or step.
- Record machine, material, component, and software versions when they affect the result.
- Separate observed results from assumptions.
- Include safety limits and known failure modes.
- Prefer a small reproducible example over a broad claim.

## Before opening a change

```sh
pnpm build
```

The build checks links, Markdown, theme code, and the generated site.
