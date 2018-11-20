<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="grey darken-2">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
                v-model.trim="login"
                :rules="loginRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                :rules="pssswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onLogin"
              :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: '',
      valid: false,
      loginRules: [
        v => !!v || 'Login is required'
      ],
      pssswordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    onLogin () {
      if (this.$refs.form.validate()) {
        const user = {
          login: this.login,
          password: this.password
        }
        console.log(user)
      }
    }
  }
}
</script>
