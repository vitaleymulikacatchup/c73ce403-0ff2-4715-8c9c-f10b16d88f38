/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cloudflare-blue': '#1f88e5',
        'error-red': '#d32f2f',
        'success-green': '#7cb342',
        'gray-light': '#f5f5f5',
        'gray-medium': '#9e9e9e',
        'gray-dark': '#424242'
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif']
      }
    },
  },
  plugins: [],
}