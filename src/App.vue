<template>
<div id="app">
  <v-app id="inspire" dark>
    <h1 class="grey--text text--lighten-2 text-xs-center header">{{ message }}</h1>
  </v-app>
</div></template>

<script>
export default {
  data () {
    return {
      message: 'Our new chat is awesome!'
    }
  },
  name: 'App'
}
</script>

<style lang="sass">
  @import "./styles/styles.sass"
</style>
