# Baby Took My Phone 1

A simple Progressive Web App for babies. Touch the screen to create colorful animated spots!

## Features

- Touch/click creates animated concentric circles
- 7 muted rainbow colors that cycle through
- Ripple animation followed by gentle breathing effect
- Spots auto-remove after 30 seconds
- Full-screen mode
- PWA installable on mobile devices

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Production Deployment (GitHub Pages)

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production build

3. Configure GitHub Pages to serve from the appropriate branch/folder

## Project Structure

```
src/
├── canvases/        # Canvas component and touch handling
├── spots/           # Spot component, animations, and colors
├── App.tsx          # Main app with fullscreen logic
└── index.css        # Global styles
```

## PWA Icons

The app uses placeholder SVG icons. Replace `public/pwa-192x192.svg` and `public/pwa-512x512.svg` with proper PNG icons showing a baby holding a phone for production use.
