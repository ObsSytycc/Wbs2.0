/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"]
    },
    fontSize: {
      "sm": "var(--h5)",
      "base": "var(--main-text)",
      "base-md": "var(--emph-text)",
      "base-lg": "var(--desc-text)",
      "lg": "var(--h4)",
      "xl": "var(--h3)",
      "2xl": "var(--h2)",
      "3xl": "var(--h1)"
    },
    colors: {
      primary: "rgb(--var(primary-color) / 1)",
      accent: "rgb(--var(accent-color) / 1)",
      "secondary-dark": "rgb(--var(secondary-dark) / 1)",
      "secondary-light": "rgb(--var(secondary-light) / 1)",
      gray: {
        100: "rgb(--var(gray-color1) / 1)",
        200: "rgb(--var(gray-color2) / 1)",
        300: "rgb(--var(gray-color3) / 1)",
        500: "rgb(--var(gray-color4) / 1)"
      }
    }
  },
  plugins: [],
}
