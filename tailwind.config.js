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
      boxShadow: {
        glow: "0px 0px 20px 1px rgba(160, 221, 227, 0.1)",
      },
    },
  },
  plugins: [],
};
