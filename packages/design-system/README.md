# Design system

## Usage

### Installation

```bash
yarn add @6thpath/design-system
```

### Quickstart

- Use default Tailwindcss config + default Postcss config, create `postcss.config.js`:

```js
module.exports = require("@6thpath/design-system").postcssConfig.baseConfig;
```

### Advanced

- **(VSCode)** Install [Tailwindcss extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and [PostCSS Language Support extension](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

  - Add these settings to _.vscode/settings.json_

  ```jsonc
  {
    "css.lint.unknownAtRules": "ignore",
    "css.validate": false,
    "editor.quickSuggestions": {
      "strings": true
    }
  }
  ```

- Create `tailwind.config.js` **(for VSCode intellisense purpose)**

  - Use default:

  ```js
  module.exports = require("@6thpath/design-system").tailwindConfig.baseConfig;
  ```

  - Customise [Tailwindcss config](https://tailwindcss.com/docs):

  ```js
  module.exports =
    require("@6thpath/design-system").tailwindConfig.extendConfig({
      // ... Tailwindcss configs
    });
  ```

- Create `postcss.config.js`

  - Add config below:

  ```js
  module.exports = require("@6thpath/design-system").postcssConfig.extendConfig(
    {
      tailwindConfig: require("./tailwind.config"),
      postcssConfig: {
        // ... Postcss configs
      },
    }
  );
  ```

## Useful links

### Other color reference ideas

- [Tailwind colors](https://tailwindcss.com/docs/customizing-colors)
- [AntDesign colors](https://ant.design/docs/spec/colors)
- [Color wheel](https://www.canva.com/colors/color-wheel/)

### Tailwind plugins

- [Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Line clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [Aspect ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
