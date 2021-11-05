const merge = require('deepmerge')

const { overwriteMerge } = require('./utils/deepmerge')
const { isEmptyObject } = require('./utils/object')

const { borderRadius } = require('./config/theme/borderRadius')
const { colors } = require('./config/theme/colors')
const { fontFamily } = require('./config/theme/fontFamily')
const { fontSize } = require('./config/theme/fontSize')
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
    lineHeight,
    spacing,
    extend: {
      fontFamily,
    },
  },
  plugins: [
    // ref: https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // ref: https://github.com/tailwindlabs/tailwindcss-line-clamp
    require('@tailwindcss/line-clamp'),
    // ref: https://github.com/tailwindlabs/tailwindcss-aspect-ratio
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
