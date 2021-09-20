# Design system

## Usage

### Quickstart

- Use default Tailwindcss config + default Postcss config, create `postcss.config.js`:

```js
module.exports = require('@6thpath/design-system').postcssConfig.baseConfig
```

### Advanced

- Install [VSCode Tailwindcss extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

- Create `tailwind.config.js` **(for VSCode intellisense purpose)**

  - Use default:

  ```js
  module.exports = require('@6thpath/design-system').tailwindConfig.baseConfig
  ```

  - Custom [Tailwindcss config](https://tailwindcss.com/docs):

  ```js
  module.exports = require('@6thpath/design-system').tailwindConfig.generateTailwindConfig({
    // tailwind configs
  })
  ```

- Create `postcss.config.js`

  - Add config below:

  ```js
  module.exports = require('@6thpath/design-system').postcssConfig.generatePostCSSConfig({
    newTailwindConfig: require('./tailwind.config'),
    postcssConfig: {
      // ...
    },
  })
  ```

## Useful links

### Colors

- [Tailwind colors](https://tailwindcss.com/docs/customizing-colors)
- [AntDesign colors](https://ant.design/docs/spec/colors)
- [Color wheel](https://www.canva.com/colors/color-wheel/)

### Plugins

- [Line clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [Forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - [Demo](https://tailwindcss-forms.vercel.app/)
