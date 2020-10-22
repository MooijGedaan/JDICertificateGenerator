module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#ebf8ff',
          150: '#E3F1FF',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#213855',
        }
      },
      fontFamily : {
        'jdi': ['din-2014', 'sans-serif'],
        'jdiCondens': ['din-condensed', 'sans-serif'],
        'custom': ['Sriracha', 'cursive'],
      }
    },
  },
  variants: {},
  plugins: [],
}
