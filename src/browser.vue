<template lang="pug">
figure.browser
  .circles
    each val in [,,,]
      span.circle
  .url(v-if="url") {{ url }}
  .screen
    slot
</template>

<script>
export default {
  name: 'browser',
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
browser = {
  topbar: {
    height: 28px
  }
}

.browser
  background #e2e2e1
  position relative
  border-radius 5px
  width 100%
  overflow hidden
  width 100%
  padding-bottom 66% // adjust this for ratio

  .url
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    color #aaa
    font-size 12px
    line-height: browser.topbar.height

  .circle
    size 12px
    border-radius 50%
    background-color yellow
    display inline-block
    vertical-align top
    margin-right 6px
    border 1px solid rgba(black, .05)

    &s
      margin 9px

    &:first-child
      background-color #FF5F58

    &:nth-child(2)
      background-color #FFBE2F

    &:nth-child(3)
      background-color #29C93F

  .screen
    position: absolute browser.topbar.height 2px 2px
    background #fafafa
    border 1px solid rgba(white, .32)
    border-radius 4px
    overflow hidden
    display flex
    justify-content center

    @media screen and (min-width: 768px)
      border-radius 6px

    > *
      max-width 100%
      height auto
</style>
