// Muted rainbow colors (less vivid)
export const RAINBOW_COLORS = [
  '#CC6666', // muted red
  '#CC9966', // muted orange
  '#CCCC66', // muted yellow
  '#66CC66', // muted green
  '#6699CC', // muted cyan
  '#6666CC', // muted blue
  '#9966CC', // muted purple
];

let currentColorIndex = 0;

export const getNextColor = (): string => {
  const color = RAINBOW_COLORS[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % RAINBOW_COLORS.length;
  return color;
};
