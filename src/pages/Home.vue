<template>
  <v-container>
    <v-layout row class="mt-5 pt-5" align-center>
      <v-flex class="text-xs-center">
        <app-logo
          :size="170"
        ></app-logo>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-5 pt-5">
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <v-card color="transparent" flat>
          <v-card-actions>
            <v-btn large :to="'/registration'">Registration</v-btn>
            <v-spacer></v-spacer>
            <v-btn large :to="'/login'">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppLogo from '@/ui/logo/Logo'
export default {
  components: {
    AppLogo
  },
  data () {
    return {
      message: 'Our new chat is awesome!'
    }
  }
}
</script>
