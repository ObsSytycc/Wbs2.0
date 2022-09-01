/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '2px 2px 8px rgba(0, 0, 0, 0.25)',
     
      }
    },
  },
  plugins: [],
}
