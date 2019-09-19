const colorSets = {
  default: {
    primary: '#8cc73e',
    secondary: '#c6dca4'
  },

  dark: {
    primary: '#000',
    secondary: '#d3d3d3'
  }
};

const colors = (type = 'default') => colorSets[type] || colorSets.default

export default colors('default')
