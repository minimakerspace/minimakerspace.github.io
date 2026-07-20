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

The site deploys to GitHub Pages through GitHub Actions when changes are pushed to `prod`. Keep ongoing work on `main`, then merge it into `prod` when it is ready to publish.

## Custom domain checklist

1. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Do not select **Deploy from a branch**: the `prod` branch contains VitePress source code, while the workflow publishes its generated site files.
2. Add a DNS `CNAME` record for `docs` pointing to `minimakerspace.github.io`.
3. In **Pages → Custom domain**, enter `docs.minimakerspace.id` and enable HTTPS after DNS is active.
