module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textIndent: (theme, { negative }) => ({
      ...{
         sm: '2rem',
         md: '3rem',
         lg: '40rem',
      },
      ...negative({
         sm: '2rem',
         md: '3rem',
         lg: '10rem',
      }),
    }),
  },
  variants: {
    extend: {},
    textIndent: ['responsive'],
  },
  plugins: [
    require('tailwindcss-text-indent')(),
  ],
}
