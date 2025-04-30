import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "var(--main)",
        sub: "var(--sub)",
        mainDark: "var(--main-dark)",
        subDark: "var(--sub-dark)",
      },
      padding: {
        sideNav: "0 0 0 7rem",
        topNav: "4rem 0 0 0",
      },
      width: {
        sideNav: "7rem",
      },
      height: {
        topNav: "4rem",
      }
    },
  },
  plugins: [],
} satisfies Config;
