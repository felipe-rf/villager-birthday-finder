/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ac-green": "#6fbf9b",
        "ac-green-dark": "#5aa989",
        "ac-green-light": "#c9ded4",
        "ac-text": "#2f3e3a",
        "ac-text-light": "#4b5f58",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
