<template>
<div id="app">
  <v-app id="inspire" dark>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Our new chat is awesome!'
    }
  }
}
</script>
<style lang="sass">
  @import "./styles/styles.sass"
</style>
