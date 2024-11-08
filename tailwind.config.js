/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23be0a",
        "secondary-color": "#59C6D2",
      },
    },
  },
  plugins: [require("daisyui")],
};
