# Deployment Guide for GitHub Pages

## Option 1: Using GitHub Actions (Recommended)

1. Add this to `vite.config.ts` (adjust the base path to match your repo name):
```ts
export default defineConfig({
  base: '/your-repo-name/', // e.g., '/baby-app/'
  plugins: [...]
});
```

2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

3. Push to GitHub and enable GitHub Pages in repository settings (source: GitHub Actions)

## Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production build

3. Push the `dist` folder to the `gh-pages` branch:
```bash
git subtree push --prefix dist origin gh-pages
```

4. Enable GitHub Pages in repository settings (source: gh-pages branch)

## Testing Locally

To test the PWA features locally:
```bash
npm run build
npm run preview
```

Open http://localhost:4173 in your browser.
