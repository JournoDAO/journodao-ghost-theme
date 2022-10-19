const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.hbs'],
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'serif': ['RobotoSlab', ...defaultTheme.fontFamily.serif],
      'display': ['Anton'],
      'pridi': ['Pridi'],
      'codenext': ['CodeNext']
    }
  },
  plugins: [],
}
