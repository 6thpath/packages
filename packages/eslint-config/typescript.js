const prettierConfig = require('@6thpath/prettier-config')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'no-sequences': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
  },
}
