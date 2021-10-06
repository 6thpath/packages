module.exports = require('@6thpath/design-system').tailwindConfig.generateTailwindConfig({
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
})
