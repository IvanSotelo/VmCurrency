<template lang="pug">
  #app
    vm-currency
</template>

<script>
import { VmCurrency } from './index'
export default {
  name: 'App',
  components: {
    VmCurrency
  }
}
</script>
<style lang="stylus">
#app
  /* Load system fonts */
  font-family -apple-system, BlinkMacSystemFont, 'San Francisco', 'Roboto', 'Oxygen', 'Segoe UI', 'Fire Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
  /* Make type rendering look crisper */
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  /* Disable auto-enlargement of small text in Safari */
  text-size-adjust 100%
  /* Enable kerning and optional ligatures */
  text-rendering optimizeLegibility

  /**
   * Form elements render using OS defaults,
   * so font-family inheritance must be specifically declared
   */
  button
  input
  optgroup
  select
  textarea
    font-family inherit
</style>
