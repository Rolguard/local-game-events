import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary-500": "var(--color-primary-500)",
        "color-primary-600": "var(--color-primary-600)",
        "color-surface-100": "var(--color-surface-100)",
        "color-surface-200": "var(--color-surface-200)",
        "color-surface-300": "var(--color-surface-300)",
        "color-surface-400": "var(--color-surface-400)",
        "color-surface-500": "var(--color-surface-500)",
        "color-surface-600": "var(--color-surface-600)",
        "color-white-text": "var(--color-white-text)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
