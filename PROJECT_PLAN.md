# Baby Touch Color App - Project Plan

## Project Overview
A simple Progressive Web App (PWA) where touching/clicking the screen draws colorful spots on a black canvas. Built with React and TypeScript for babies to enjoy visual feedback from their touches.

## Requirements to Fill In

### 1. Color Behavior
**Question:** How should colors be selected for each touch?
Cycle through a predefined color palette.
Use 7 rainbow colors in first design. But I prefer less vivid tone.

### 2. Spot Appearance
**Question:** What should the colored spots look like?
A spot consists of 3 concentric circles - 70%, 85%, 100%.
Three circles are of the same color.

First, animate with scaling. Grow from nothing to full size (ripple animation).
Then small breathing animation while alive.
Finally, shrink to nothing on removal.

### 3. Canvas Behavior
**Question:** What happens when the screen fills up?
A spot should be removed after 10 seconds with a shrink animation.

### 4. Touch Feedback
**Question:** Should there be any additional feedback?
A spot starts like ripple.

### 5. App Features
**Question:** What additional features do you want?
- Full screen without exit button.

### 6. PWA Installation
**Question:** App name and branding
- App Name: Baby Took My Phone 1
- App Icon: A baby holding a mobile phone
- Theme Color: Black

## Technical Details

### TypeScript
Use TypeScript + React + Vite to create the project.

### Git
Git is provided here. But you should not commit code by yourself. I will do committing.

### GitHub Page
The project will be simply hosted on GitHub Page in production stage.

### Components
You should divide the project into simple components, like <Canvas> and <Spot>.
I suggest each component having less than 100 lines, no more than 200 lines max.

### CSS
You should separate the CSS into .css file.

### Hooks
Create hook files like `useTouch` to handle events if needed.

### File Structure
Do not add "components", "hooks", "pages" files. I don't like separation in that way.
Instead, put files according to business separation.
For example, create "canvases" and "spots" folders.
Put related files together, including TSX, CSS, hooks and utilities.

### Coding Style
You should write concisely and do not over-engineer.