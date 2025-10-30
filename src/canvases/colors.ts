// Muted rainbow colors (less vivid)
const RAINBOW_COLORS = [
  '#CC6666', // muted red
  '#CC9966', // muted orange
  '#CCCC66', // muted yellow
  '#66CC66', // muted green
  '#6699CC', // muted cyan
  '#6666CC', // muted blue
  '#9966CC', // muted purple
];

export const getNextColor = (timestamp: number): string => {
  const index = timestamp % RAINBOW_COLORS.length;
  return RAINBOW_COLORS[index];
};
