import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "headphone-mob": "url('/assets/home/mobile/image-header.jpg')",
        "circle-pattern": "url('/assets/home/desktop/pattern-circles.svg",
      },
      fontSize: {
        sm: "13px",
        semi: "14px",
        md: "15px",
        xl: "36px",
      },
      gridTemplateColumns: {
        "3": "repeat(3, 1fr)",
      },
    },
    colors: {
      primary: {
        brown: "#d87d4a",
        "very-dark": "#101010",
        gray: "#F1F1F1",
        "light-gray": "#FAFAFA",
      },

      secondary: {
        "light-brown": "#fbaf85",
        white: "#FFFFFF",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
