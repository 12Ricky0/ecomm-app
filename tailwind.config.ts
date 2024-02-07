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
        "headphone-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "headphone-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        "mb-speaker": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "tb-speaker": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "dk-speaker": "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "mb-earphone": "url('/assets/home/mobile/image-earphones-yx1.jpg')",
        "tb-earphone": "url('/assets/home/tablet/image-earphones-yx1.jpg')",
        "dk-earphone": "url('/assets/home/desktop/image-earphones-yx1.jpg')",
      },
      fontSize: {
        sm: "13px",
        semi: "14px",
        md: "15px",
        ml: "28px",
        xl: "36px",
        xxl: "56px",
      },
      gridTemplateRows: {
        "2": "repeat(2, 280px)",
      },
      gridTemplateColumns: {
        "2": "repeat(2, auto)",
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
