# vue-browser-component
A 'browser'-like container component for Vue that's ready to showcase anything inside it's screen (images, videos, iframes, etc). 6.8kb gzipped, resizable & maintains it's aspect ratio, free of assets -> css only. #[Contributions are welcome!](./CONTRIBUTE.md)

## Install
```shell
yarn add @doriandrn/vue-browser-component
```

## Usage
```html
<browser url="https://megawebsite.com"> ...(image or video or w/e inside the screen)... </browser>
```

```js
// vue
import browser from 'vue-browser-component'

export default {
  components: {
    browser
  }
}
```

## Params
url ?: { String } - appears on top of screen
