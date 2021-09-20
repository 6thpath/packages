const merge = require('deepmerge')

const { overwriteMerge } = require('./utils/deepmerge')
const { isEmptyObject } = require('./utils/object')

const { borderRadius } = require('./config/theme/borderRadius')
const { colors } = require('./config/theme/colors')
const { fontFamily } = require('./config/theme/fontFamily')
const { fontSize } = require('./config/theme/fontSize')
const { lineHeight } = require('./config/theme/lineHeight')
const { spacing } = require('./config/theme/spacing')

const { buttonPlugin } = require('./config/plugin/button')
const { baseTypographyPlugin } = require('./config/plugin/typography')

const baseConfig = {
  // mode: 'jit', // ! not available at the moment
  purge: [],
  darkMode: 'class',
  theme: {
    borderRadius,
    colors,
    fontSize,
    lineHeight,
    spacing,
    extend: {
      fontFamily,
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      borderColor: ['active', 'disabled'],
      brightness: ['hover', 'active'],
      filter: ['hover', 'active'],
      textColor: ['active', 'disabled'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms'), buttonPlugin, baseTypographyPlugin],
}

function generateTailwindConfig(config = {}) {
  if (!isEmptyObject(config)) {
    return merge(baseConfig, config, {
      customMerge: (key) => {
        if (key === 'purge') {
          return overwriteMerge
        }
      },
    })
  }

  return baseConfig
}

module.exports = {
  baseConfig,
  generateTailwindConfig,
}