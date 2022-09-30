/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        124: "31rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
