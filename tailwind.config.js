/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "#a0dde3",
        "my-lilac-400": "#DDADFF",
        "my-lilac-600": "#C370FF",
        "my-lime-300": "#caff8a",
      },
    },
  },
  plugins: [],
};
