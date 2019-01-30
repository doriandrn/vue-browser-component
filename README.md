# vue-browser-component

A __browser-like window container__ component for Vue that's ready to showcase anything inside it's screen (images, videos, iframes, etc). 3.04kb gzipped, resizable & maintains it's aspect ratio, free of assets -> CSS only.

[Demo](https://doriandrn.github.io/vue-browser-component/demo.html)
*Demo HTML file was auto-generated using vue-cli.*

## Install

```sh
yarn add vue-browser-component
```

## Usage

### Browser

```html
<browser url="https://megawebsite.com"> ...(image or video or w/e inside the screen)... </browser>
```

### Vue / Nuxt

```js
import browser from 'vue-browser-component'

/**
 * Hook in the styles
 */
require('vue-browser-component/dist/index.css')

export default {
  components: {
    browser
  }
}
```

## Params

| param | type | description | required |
|:------|:---- |:------------|:---------|
| __url__ | String | appears on browser's top bar | false

Feel free to suggest more!

## Browser Support

[Check this](https://cli.vuejs.org/guide/browser-compatibility.html#browserslist) & Feel free, if you need, to make your own adjustments in package.json browserlist (for what's possible).

## Contribute

- [Read this before contributing](./CODE_OF_CONDUCT.md)
- [Quick HOW-TO step-by-step guide](./CONTRIBUTE.md)
