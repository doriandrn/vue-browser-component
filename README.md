# vue-browser-component
A __browser-like window container__ component for Vue that's ready to showcase anything inside it's screen (images, videos, iframes, etc). 6.8kb compressed, resizable & maintains it's aspect ratio, free of assets -> css only. [Contributions are welcome!](./CONTRIBUTE.md)

## Install
```sh
yarn add @doriandrn/vue-browser-component // or ofc, npm i @doriandrn/vue-browser-component
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

| param | type | description | required |
|:------|:---- |:------------|:---------|
| __url__ | String | appears on browser's top bar | false
