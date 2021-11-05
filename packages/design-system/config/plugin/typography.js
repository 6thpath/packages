const plugin = require('tailwindcss/plugin')

const headingTextStyleMapping = [
  {
    htmlTag: 'h1',
    styles: { fontSize: 52, lineHeight: '67.6px', letterSpacing: 'wider' },
  },
  {
    htmlTag: 'h2',
    styles: { fontSize: 40, lineHeight: '52px', letterSpacing: 'wider' },
  },
  {
    htmlTag: 'h3',
    styles: { fontSize: 36, lineHeight: '50.4px', letterSpacing: 'wider' },
  },
  {
    htmlTag: 'h4',
    styles: { fontSize: 24, lineHeight: '33.6px', letterSpacing: 'wider' },
  },
  {
    htmlTag: 'h5',
    styles: { fontSize: 18, lineHeight: '25.2px', letterSpacing: 'normal' },
  },
  {
    htmlTag: 'h6',
    styles: { fontSize: 16, lineHeight: '22.4px', letterSpacing: 'normal' },
  },
]

module.exports = {
  typographyPlugin: plugin(({ addBase, theme }) => {
    addBase(
      headingTextStyleMapping.reduce(
        (accumulator, { htmlTag, styles }) => (
          (accumulator[htmlTag] = {
            fontSize: theme(`fontSize.${styles.fontSize}`),
            fontWeight: theme('fontWeight.bold'),
            lineHeight: styles.lineHeight,
            letterSpacing: theme(`letterSpacing.${styles.letterSpacing}`),
          }),
          accumulator
        ),
        {}
      )
    )
  }),
}
