const plugin = require('tailwindcss/plugin')

/**
 * [type, [font-size, line-height]]
 */
const headingStyleMapping = [
  ['h1', [40, 48]],
  ['h2', [32, 40]],
  ['h3', [28, 36]],
  ['h4', [24, 32]],
  ['h5', [20, 24]],
  ['h6', [14, 18]],
]

const baseTypographyPlugin = plugin(({ addBase, theme }) => {
  addBase(
    headingStyleMapping.reduce(
      (accumulator, [headingType, [fontSize, lineHeight]]) => (
        (accumulator[headingType] = {
          fontSize: theme(`fontSize.${fontSize}`),
          lineHeight: theme(`lineHeight.${lineHeight}`),
        }),
        accumulator
      ),
      {}
    )
  )
})

module.exports = {
  baseTypographyPlugin,
}
