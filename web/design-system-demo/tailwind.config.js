module.exports = require('@6thpath/design-system').tailwindConfig.generateTailwindConfig({
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
})
