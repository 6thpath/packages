const merge = require('deepmerge')

const { overwriteMerge } = require('./utils/deepmerge')
const { isEmptyObject } = require('./utils/object')

const { borderRadius } = require('./config/theme/borderRadius')
const { colors } = require('./config/theme/colors')
const { fontFamily } = require('./config/theme/fontFamily')
const { fontSize } = require('./config/theme/fontSize')
const { fontWeight } = require('./config/theme/fontWeight')
const { letterSpacing } = require('./config/theme/letterSpacing')
const { lineHeight } = require('./config/theme/lineHeight')
const { spacing } = require('./config/theme/spacing')

const { typographyPlugin } = require('./config/plugin/typography')

const baseConfig = {
  purge: [],
  darkMode: 'class',
  theme: {
    borderRadius,
    colors,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    spacing,
    extend: {
      fontFamily,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    typographyPlugin,
  ],
}

function extendConfig(config = {}) {
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
  extendConfig,
}
