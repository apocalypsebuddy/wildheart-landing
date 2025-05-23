import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    animation: {
      "slide-in": "slide-in 0.5s ease-out forwards",
    },
    keyframes: {
      "slide-in": {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
