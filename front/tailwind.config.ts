import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        colorPrimario: "var(--colorPrimario)",
        colorSecundario: "var(--colorSecundario)",
        colorTerciario: "var(--colorTerciario)",
        opcional1: "var(--opcional1)",
        opcional2: "var(--opcional2)",
        opcional3: "var(--opcional3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
