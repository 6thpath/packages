const { blueGray, green, yellow, red } = require('tailwindcss/colors')

const { generateColors } = require('../../utils/color')

// const neutralColor = '#bfbfbf'
const primaryColor = '#35a2b3'
const secondaryColor = '#A2B335'
// const successColor = '#52c41a'
// const warningColor = '#faad14'
// const dangerColor = '#f5222d'

module.exports = {
  colors: {
    transparent: 'transparent',
    white: '#fff',
    black: '#000',
    neutral: Object.assign({}, Object.values(blueGray)),
    primary: Object.assign({}, generateColors(primaryColor)),
    secondary: Object.assign({}, generateColors(secondaryColor)),
    success: Object.assign({}, Object.values(green)),
    warning: Object.assign({}, Object.values(yellow)),
    danger: Object.assign({}, Object.values(red)),
  },
}
