import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#143b30",
        leaf: "#1f5b46",
        gold: "#c9a94e",
        sand: "#f4f6f1"
      }
    },
  },
  plugins: [],
};

export default config;
