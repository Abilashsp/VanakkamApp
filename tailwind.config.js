/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          "sans-serif1": 'sans-serif', 
        }
      }
    }
  },
  plugins: [],
}

