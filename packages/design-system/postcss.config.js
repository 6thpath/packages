const merge = require('deepmerge')

const { combineMerge } = require('./utils/deepmerge')
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

function generatePostCSSConfig(config = { newTailwindConfig: {}, postcssConfig: {} }) {
  if (config.newTailwindConfig && !isEmptyObject(config.newTailwindConfig)) {
    baseConfig.plugins[1] = require('tailwindcss')(config.newTailwindConfig)
  }

  if (config.postcssConfig && !isEmptyObject(config.postcssConfig)) {
    return merge(baseConfig, config.postcssConfig, {
      arrayMerge: combineMerge,
    })
  }

  return baseConfig
}

module.exports = {
  baseConfig,
  generatePostCSSConfig,
}
