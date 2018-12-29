# vue-browser-component
A 'browser'-like container component for Vue to showcase screenshots

## Install
```shell
yarn add @doriandrn/vue-browser-component
```

## Usage
```html
<browser url="https://megawebsite.com"> ...(image or video or w/e inside the screen)... </browser>
```

```vue
import browser from '@doriandrn/vue-browser-component'

export default {
  components: {
    browser
  }
}
```

## Params
url ?: { String } - appears on top of screen
