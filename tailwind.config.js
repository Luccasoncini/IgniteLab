/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur.png)'
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        theme: {
          green_light: "#00B37E",
          green: "#00875F",
          green_dark: "#015F43",

          blue: "#81D8F7",

          warning: "#FBA94C",

          red_error: "#F75A68",

          gray_title: "#E1E1E6",
          gray_text: "#C4C4CC",
          gray_apoio: "#8D8D99",
          gray_stroke: "#323238",
          gray_elements: "#29292E",
          gray_bars: "#09090A",
          gray_background: "#121214",

          white: "#FFFFFF"
        }
      }
    },
  },
  plugins: [],
}
