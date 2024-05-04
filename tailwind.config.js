/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-text": "#020617",
        "secondary-text": "#696969",
        "border-color-gray": "#C0C0C0",
        "primary-btn": "#1e293b",
      },
      boxShadow: {
        'purple-border': '0 0 2px 4px #8000801a',
      }
    },
  },
  plugins: [],
}