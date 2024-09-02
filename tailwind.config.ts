import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-eb-garamond)", "serif"],
      },
      colors: {
        cc: {
          // Main Dark BG Color
          charcoal: "#222831",
          // Main Light BG Color
          snow: "#F1F1F1",
          // Red BG Color
          crimson: "#A63D40",
          // Orange BG & Button Color
          sunset: "#C8812E",
          // Orange Text/Accent
          tangerine: "#F49D37",
          // Card White
          white: "#FFFFFF",
          // Card Charcoal Blue
          slate: "#425664",
          // Button Hover Color
          steel: "#393E46",
        },
      },
    },
  },
};

export default config;
