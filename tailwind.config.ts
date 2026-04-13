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
        // Brand colors matched from ladlnmulege.org
        primary: {
          DEFAULT: "#253E80",  // navy blue — links & primary actions
          dark: "#1a2e61",
          light: "#3a57a8",
        },
        brand: {
          green: "#7A9B33",    // logo green (cactus, "los", "de los")
          red: "#F46A6A",      // logo red ("Amigos", accents)
          purple: "#6D63C7",   // logo purple ("Niños")
        },
        // Keep subtle neutrals
        sand: "#F5F5F0",
        desert: {
          DEFAULT: "#EEF0F5",
          light: "#F8F9FC",
        },
        // Legacy alias so existing className="text-terracotta" still works
        terracotta: {
          DEFAULT: "#253E80",
          dark: "#1a2e61",
          light: "#3a57a8",
        },
      },
      fontFamily: {
        sans: ["Alegreya", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
