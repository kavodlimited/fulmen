import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueberryLight: '#D0E7F2',  // Light Blue
        blueberryMedium: '#A1C5E5', // Medium Blue
        blueberry: '#5E87BB',       // Blue
        blueberryDark: '#2B547E',   // Dark Blue
        blueberryBlack: '#1A2B3D',  // Black/Deep Blue
      },
    },
  },
  plugins: [],
};
export default config;
