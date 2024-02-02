/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      // primary
      orange:'hsl(35, 77%, 62%)',
      red:'hsl(5, 85%, 63%)',

      // secondary
      offwhite:'hsl(36, 100%, 99%)',
      grayishBlue:'hsl(233, 8%, 79%)',
      darkGrayishBlue:'hsl(236, 13%, 42%)',
      darkBlue:'hsl(240, 100%, 5%)'

    }
    ,
    extend: {
     
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{

        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
