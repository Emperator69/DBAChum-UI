module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'indigo': '#4649ff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}