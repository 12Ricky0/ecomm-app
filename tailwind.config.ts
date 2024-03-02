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
        "4": "repeat(2, 1fr)",
      },
      gridTemplateColumns: {
        "4": "1fr,1fr, 3fr",
        md: "1fr,1fr, 3.3fr",
        con: "1.5fr,1fr",
      },
    },
    colors: {
      primary: {
        brown: "#d87d4a",
        "very-dark": "#101010",
        gray: "#F1F1F1",
        "light-gray": "#FAFAFA",
        modal: "rgba(0, 0, 0, 0.5)",
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
