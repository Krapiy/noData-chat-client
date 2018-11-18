<template>
  <h1
    class="logo"
    :style="{'font-size': size + 'px'}"
  >!D</h1>
</template>
 <script>
   export default {
     props: {
       size: {
         default: 99,
         type: Number
       }
     }
   }
 </script>
<style lang="sass" scoped>
  .logo
    display: inline-block
    line-height: 1
</style>
