import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input|modal).js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      boxShadow: {
        'smmoth': 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
      }
    },
  },
  plugins: [nextui()],
  darkMode: 'class'
};
export default config;
