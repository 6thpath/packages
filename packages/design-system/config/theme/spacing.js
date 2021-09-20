const coefficient = 4
const spacingVariables = [0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]

module.exports = {
  spacing: spacingVariables.reduce((acc, curr) => ((acc[curr * coefficient] = `${curr * coefficient}px`), acc), {}),
}
