---
title: Contributing
description: Help improve mini MAKERSPACE Docs.
---

# Contributing

The docs are written in Markdown and built with VitePress. Small corrections, clearer explanations, and reproducible field notes are all welcome.

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
