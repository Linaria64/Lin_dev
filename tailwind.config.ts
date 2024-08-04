import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'inner_shadow_nav': 'inset 0 0 10px 0 rgb(118,147,220)',
      },
      backgroundImage:{
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "background-lin_dev": "url('/Background_Lin-dev_upscaled.png')",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'], // Ajoutez la variante hover pour boxShadow
      backgroundColor: ['hover'], // Ajoutez la variante hover pour backgroundColor
    },
  },
  plugins: [],
};
export default config;
