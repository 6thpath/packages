const { blueGray } = require('tailwindcss/colors')

module.exports = {
  colors: {
    transparent: 'transparent',
    white: '#fff',
    black: '#000',
    neutral: Object.assign({}, Object.values(blueGray)),
    primary: {
      1: '#D4DFE0',
      2: '#8CC3CB',
      3: '#58AFBD',
    },
    secondary: {
      1: '#FFF8E7',
      2: '#FFE29D',
      3: '#FBB937',
    },
    success: {
      1: '#E3F0E1',
      2: '#99C997',
      3: '#4CAF50',
    },
    warning: {
      1: '#FFFEE6',
      2: '#FFE96B',
      3: '#FCCC18',
    },
    error: {
      1: '#FBEAEA',
      2: '#DB7878',
      3: '#D32F2F',
    },
  },
}
