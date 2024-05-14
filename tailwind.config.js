/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
        login: '#FAFAFA',
        user_page: '#F1F5F9'
      },
    },
  },
  plugins: [],
}