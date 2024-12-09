/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseWhite: "#FFFFFF",
        baseBackground: "#101318",
        basePrimary: "#5C4BF0",
        baseGray100: "rgba(213, 214, 215, 0.80)",
        baseGray200: "rgba(213, 214, 215, 0.88)",
        baseGray: "#D5D6D7",
        baseText: "#FBFBFB",
        secondaryText: "#D5D6D7",
        baseBorder: "#3D3F45",
        success: "#259952",
        error: "#F15758",
      },
      screens: {
        xxs: "375px",
        xs: "425px",
      }
    }
  },
  plugins: [],
}
