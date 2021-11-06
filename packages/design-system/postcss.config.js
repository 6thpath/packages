const merge = require('deepmerge')

const { overwriteMerge } = require('./utils/deepmerge')
const { isEmptyObject } = require('./utils/object')

const { baseConfig: baseTailwindConfig } = require('./tailwind.config')

const baseConfig = {
  plugins: {
    'postcss-import': {},
    tailwindcss: baseTailwindConfig,
    'postcss-nested': {},
    'postcss-custom-properties': {},
    autoprefixer: {},
  },
}

function extendConfig(config = { tailwindConfig: {}, postcssConfig: {} }) {
  if (config.tailwindConfig && !isEmptyObject(config.tailwindConfig)) {
    baseConfig.plugins.tailwindcss = config.tailwindConfig
  }

  if (config.postcssConfig && !isEmptyObject(config?.postcssConfig)) {
    return merge(baseConfig, config.postcssConfig, {
      arrayMerge: overwriteMerge,
      customMerge: (key) => {
        if (key === 'plugins') {
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
