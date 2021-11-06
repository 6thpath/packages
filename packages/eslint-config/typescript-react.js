const merge = require('deepmerge')

const baseConfig = require('./typescript')

module.exports = merge(
  baseConfig,
  {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    settings: {
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
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
      'react/jsx-boolean-value': 'error',
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/explicit-module-boundary-types': ['warn'],
          '@typescript-eslint/no-var-requires': 'error',
        },
      },
    ],
    ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  },
  {
    customMerge: (key) => {
      if (key === 'extends') {
        return (basePlugins, eslintReactPlugins) => [...eslintReactPlugins, ...basePlugins]
      }
    },
  }
)
