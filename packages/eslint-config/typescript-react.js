const merge = require('deepmerge')

const baseConfig = require('./typescript')

module.exports = merge(
  baseConfig,
  {
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    settings: {
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    extends: ['plugin:react/recommended'],
    rules: {
      'react/boolean-prop-naming': 'warn',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-multi-comp': ['error', { ignoreStateless: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-boolean-value': 'never',
    },
    ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  },
  {
    customMerge: (key) => {
      if (key === 'extends') {
        return (basePlugins, reactPlugins) => [...reactPlugins, ...basePlugins]
      }
    },
  }
)
