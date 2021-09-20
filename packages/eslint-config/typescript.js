const prettierConfig = require('@6thpath/prettier-config')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'no-sequences': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
  },
}
