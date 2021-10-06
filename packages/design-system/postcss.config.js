const merge = require('deepmerge')

const { overwriteMerge } = require('./utils/deepmerge')
const { isEmptyObject } = require('./utils/object')

const baseConfig = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(require('./tailwind.config').baseConfig),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ],
}

function generatePostCSSConfig(config = { tailwindConfig: {}, postcssConfig: {} }) {
  if (config.tailwindConfig && !isEmptyObject(config.tailwindConfig)) {
    baseConfig.plugins[1] = require('tailwindcss')(config.tailwindConfig)
  }

  if (config.postcssConfig && !isEmptyObject(config.postcssConfig)) {
    return merge(baseConfig, config.postcssConfig, {
      arrayMerge: overwriteMerge,
    })
  }

  return baseConfig
}

module.exports = {
  baseConfig,
  generatePostCSSConfig,
}
