<template>
  <v-container fluid py-0 px-0 fill-height>
    <v-layout>
      <chat-left></chat-left>
      <v-flex xs9>
        xs10
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ChatLeft from '@/pages/chat/components/Left'
  
  export default {
    components: {
      ChatLeft
    }
  }
</script>
