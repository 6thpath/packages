# Eslint

## Installation

> If using create-react-app to bootstrap a project, eslint is already included as a dependency through react-scripts, and therefore it is not necessary to explicitly install it with yarn.

> If not using this package in typescript project, **typescript** is unnecessary

```bash
yarn add @6thpath/eslint-config eslint typescript --dev
```

## Usage

- Add to your _.eslintrc_:

  - Configs for **typescript** project is exported by default

    ```jsonc
    {
      "extends": "@6thpath"
    }
    ```

  - For **React app**, use config below in _.eslintrc_ instead:

    ```jsonc
    {
      "extends": "@6thpath/eslint-config/typescript-react"
    }
    ```

- Install [VSCode Prettier ESLint extension](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

  - (Optional) Configure Recommended Extensions _.vscode/extensions.json_

    ```jsonc
    {
      "recommendations": ["rvest.vs-code-prettier-eslint"]
    }
    ```

- Add these config to _.vscode/settings.json_:

  ```json
  {
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[typescript]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[javascript]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  }
  ```

- Add script to _package.json_:

  ```json
  {
    "scripts": {
      "lint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
    }
  }
  ```

## Development notes

### ESLint + TypeScript

- Install

  ```bash
  yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
  ```

- Libraries:
  - [eslint](https://npm.im/eslint): The core ESLint linting library
  - [@typescript-eslint/parser](https://npm.im/@typescript-eslint/parser): The parser that will allow ESLint to lint TypeScript code
  - [@typescript-eslint/eslint-plugin](https://npm.im/@typescript-eslint/eslint-plugin): A plugin that contains a bunch of ESLint rules that

### Work with React

- Install

  ```bash
  yarn add eslint-plugin-react --dev
  ```

- Library:
  - [eslint-plugin-react](https://npm.im/eslint-plugin-react)

### Adding Prettier

- Install

  ```bash
  yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
  ```

- Libraries:

  - [prettier](https://npm.im/prettier): The core prettier library
  - [eslint-config-prettier](https://npm.im/eslint-config-prettier): Disables ESLint rules that might conflict with prettier
  - [eslint-plugin-prettier](https://npm.im/eslint-plugin-prettier): Runs prettier as an ESLint rule

- Important:
  - Make sure that **plugin:prettier/recommended** is the last configuration in the extends array

### Pre-commit checking

- [lint-staged](https://npm.im/lint-staged)
- [husky](https://npm.im/husky)
