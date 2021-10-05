const plugin = require('tailwindcss/plugin')

/**
 * Base style
 */
const genericStyle = ['transition-all', 'focus:outline-none']

/**
 * [type(size), style[height, borderRadius, padding-horizontal, font-size, line-height]]
 */
const buttonSizes = [
  ['sm', [24, 5, 12, 12, 16]],
  ['md', [32, 5, 20, 14, 20]],
  ['lg', [56, 10, 24, 16, 24]],
]

/**
 * [type, normal[style], hover[style], focus[style], active[style], disabled[style]]
 */
const buttonTypes = [
  [
    'solid',
    ['text-white', 'bg-primary-5'],
    ['hover:bg-primary-6'],
    ['focus:ring', 'focus:ring-primary-2'],
    ['active:bg-primary-7'],
    ['disabled:bg-neutral-3'],
  ],
]

const buttonPlugin = plugin(({ addComponents, prefix, theme }) => {
  return addComponents(
    buttonSizes.reduce(
      (config, [size, [height, borderRadius, paddingHorizontal, fontSize, lineHeight]]) => {
        return (
          buttonTypes.map(
            ([type, normalStyle, hoverStyle, focusStyle, activeStyle, disabledStyle]) => {
              const styles = [
                ...genericStyle,
                `px-${paddingHorizontal}`,
                ...normalStyle,
                ...hoverStyle,
                ...focusStyle,
                ...activeStyle,
                ...disabledStyle,
              ].join(' ')

              return (
                (config[prefix(`.button-${type}-${size}`)] = {
                  [`@apply ${styles}`]: {},
                  height,
                  borderRadius: theme(`borderRadius.${borderRadius}`),
                  fontSize: theme(`fontSize.${fontSize}`),
                  lineHeight: theme(`lineHeight.${lineHeight}`),
                }),
                type
              )
            }
          ),
          config
        )
      },
      {}
    )
  )
})

module.exports = {
  buttonPlugin,
}
