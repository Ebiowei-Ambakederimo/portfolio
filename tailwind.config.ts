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
        primary: "#FFC107", // Branding color
        secondary: "#34C759", // Secondary color
        accent: "#8e24aa", // Accent color
        background: "#F7ECE9", // Background color
        foreground: "#09090B", // Foreground color
      },
    },
  },
  plugins: [],
};
export default config;
