const coefficient = 4
const spacingVariables = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 20, 24, 28, 32, 36, 40,
  44, 48, 52, 56, 60, 64, 72, 80, 96,
]

module.exports = {
  spacing: spacingVariables.reduce(
    (accumulator, variable) => (
      (accumulator[variable * coefficient] = `${variable * coefficient}px`), accumulator
    ),
    { px: '1px' }
  ),
}
