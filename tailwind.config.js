/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px)

      'md': '768px',
      // => @media (min-width: 768px) 

      'lg': '1024px',
      // => @media (min-width: 1024px) 

      'xl': '1280px',
      // => @media (min-width: 1280px) 
    },
    fontFamily: {
      'nunito': ['nunito', ''],
    },
    extend: {
      backgroundColor: {
        transparent: 'transparent',
        card: '#FDFDFD',
        login: '#FAFAFA',
        user_page: '#F1F5F9',
        input: '#F1F1F1',
        submit: '#02274F',
        white_2: 'rgba(244, 244, 244, 1)'
      },
      textColor: {
        'brightwhite': '#FAFAFA'
      },
      boxShadow: {
        'simple': '0px 0px 64px 0px rgba(0, 0, 0, 0.25)',
        'light': '0px 2px 10px 0px rgba(0, 0, 0, 0.1)'

      },
      borderRadius: {
        'default': '1.125rem',
        'small': '0.563rem',
        'xsm': '0.396rem'
      },
      fontSize: {
        'xsm': '12px'
      },
      margin: {
        '2.5': '9px',
        '7.5': '30px'
      }
    },
  },
  plugins: [],
}