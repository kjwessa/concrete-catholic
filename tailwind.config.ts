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
          // Unused for Now
          aqua: "#59C3C3",
          navy: "#323C4F",
          lavender: "#CCD1E8",
          pearl: "#E2E2E2",
          silver: "#CCCCCC",
          ash: "#C1C1C1",
          gray: "#B5B5B5",
          dark: "#333333",
          black: "#000000",
          "white-90": "#FFFFFFED",
          "white-70": "#FFFFFFB3",
          "white-50": "#FFFFFF80",
          "white-10": "#FFFFFF1A",
          "black-20": "#00000033",
          "black-18": "#0000002E",
          "black-10": "#0000001A",
          "black-8": "#00000014",
          "black-4": "#0000000A",
        },
      },
    },
  },
};

export default config;
