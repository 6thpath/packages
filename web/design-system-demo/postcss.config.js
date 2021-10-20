module.exports = require('@6thpath/design-system').postcssConfig.generatePostCSSConfig({
  tailwindConfig: require('./tailwind.config'),
  postcssConfig: {
    plugins: {
      'postcss-import': {},
      tailwindcss: require('./tailwind.config'),
      autoprefixer: {},
    },
  },
})
