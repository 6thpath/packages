const plugin = require('tailwindcss/plugin')

/**
 * Base style
 */
const genericStyle = ['font-semibold', 'transition-all', 'outline-none', 'focus:outline-none']

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
  [
    'ghost',
    ['border-2', 'border-solid', 'border-primary-5', 'text-primary-5', 'bg-transparent'],
    ['hover:border-primary-6', 'hover:text-primary-6'],
    ['focus:ring', 'focus:ring-primary-2'],
    ['active:border-primary-7', 'active:text-primary-7'],
    ['disabled:border-neutral-3', 'disabled:text-neutral-3'],
  ],
  [
    'link',
    ['text-primary-5', 'bg-transparent'],
    ['hover:text-primary-6', 'hover:bg-primary-0'],
    ['focus:ring', 'focus:ring-primary-0'],
    ['active:text-white', 'active:bg-primary-2'],
    ['disabled:text-neutral-3', 'disabled:bg-neutral-3'],
  ],
  [
    'gradient',
    ['text-white', 'bg-gradient-to-br', 'from-primary-5', 'to-primary-3'],
    ['hover:filter', 'hover:brightness-110'],
    ['focus:ring', 'focus:ring-primary-2'],
    ['active:filter', 'active:brightness-105'],
    ['disabled:bg-neutral-3'],
  ],
]

const buttonPlugin = plugin(({ addComponents, prefix, theme }) => {
  return addComponents(
    buttonSizes.reduce((config, [size, [height, borderRadius, paddingHorizontal, fontSize, lineHeight]]) => {
      return (
        buttonTypes.map(([type, normalStyle, hoverStyle, focusStyle, activeStyle, disabledStyle]) => {
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
        }),
        config
      )
    }, {})
  )
})

module.exports = {
  buttonPlugin,
}
