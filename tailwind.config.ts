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
        sans: ['var(--font-martel-sans)'],
        mono: ['var(--font-source-code-pro)'],
      },
      backgroundImage: {
        'test-1': "url('/bg-test-1.png')",
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
    ],
  },
};
export default config;
