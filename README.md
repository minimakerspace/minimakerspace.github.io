# mini MAKERSPACE Docs

The VitePress source for [docs.minimakerspace.id](https://docs.minimakerspace.id).

## Local development

Requires Node.js 22 or newer.

```sh
pnpm install
pnpm dev
```

## Production build

```sh
pnpm build
pnpm preview
```

The site deploys to GitHub Pages when changes are pushed to `main`.

## Custom domain checklist

1. In the repository settings, set **Pages → Source** to **GitHub Actions**.
2. Add a DNS `CNAME` record for `docs` pointing to `minimakerspace.github.io`.
3. In **Pages → Custom domain**, enter `docs.minimakerspace.id` and enable HTTPS after DNS is active.
