import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-br': 'linear-gradient(to bottom right, rgb(55 65 81), rgb(30 45 45))',
  //       'gradient-tl': 'linear-gradient(to top left, rgb(55 65 81), rgb(30 45 45))',
  //     },
  //   },
  // },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-martel-sans)'],
        mono: ['var(--font-source-code-pro)'],
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "corporate", "business", "emerald", "luxury",
      {
        andamio: {
          "primary": "#2D3339",
          "primary-content": "#F4F3ED",
          "primary-focus": "#424B54",
          "secondary": "#F4F3ED",
          "secondary-content": "#2D3339",
          "secondary-focus": "#EFEEE6",
          "neutral": "#8D91C7", // for lesson content
          "accent": "#400406",
          "accent-content": "#D6D7EB",
          "info": "#FFB100",
          "--rounded-box": "0.2rem",
          "--rounded-btn": "0.2rem"
        },
      },
      {
        slay: {
          "primary": "E6EB59",
          "primary-content": "#DD65E6",
          "primary-focus": "#FFFFFF",
          "secondary": "6BE73E",
          "secondary-content": "#FF844B",
          "secondary-focus": "#FFFFFF",
          "neutral": "#54F1DC", // for lesson content
          "accent": "#FF844B",
          "accent-content": "#000000",
          "info": "#54F1DC",
          "--rounded-box": "0.2rem",
          "--rounded-btn": "0.2rem"
        },
      },
    ],
  },
};
export default config;
