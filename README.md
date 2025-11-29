# Baby Took My Phone 1

A simple Progressive Web App for babies. Touch the screen to create colorful animated spots!

**Live Demo:** https://tommy-hylt.github.io/baby-took-my-phone-1/

![App Preview](preview/preview.gif)

## Features

- Touch/click creates animated concentric circles (70%, 85%, 100% sizes)
- 7 muted rainbow colors that cycle through
- Ripple animation (grow from nothing) on creation
- Gentle breathing animation while alive
- Shrink-to-nothing animation on removal
- Spots auto-remove after 10 seconds
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

## Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── canvases/        # Canvas component and touch handling
├── spots/           # Spot component, animations, and colors
├── App.tsx          # Main app with fullscreen logic
└── index.css        # Global styles
```

## PWA Icon

The app uses `public/icon_512.png` as the PWA icon. Replace with your own icon if needed.
