<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="grey darken-2">
            <v-toolbar-title>Registration</v-toolbar-title>
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
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="confirm-password"
                label="Confirm Password"
                type="password"
                v-model="confirmPassword"
                :rules="confirmPassswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Sign Up</v-btn>
          </v-card-actions>
          <v-card-text class="text-xs-center">
            <router-link :to="'/login'" class="caption">Already have account?</router-link>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const passwordRegex = /\s/
export default {
  data () {
    return {
      login: '',
      password: '',
      confirmPassword: '',
      valid: false,
      loginRules: [
        v => !!v || 'Login is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => !passwordRegex.test(v) || 'Password shouldn\'t contain whitespace characters'
      ],
      confirmPassswordRules: [
        v => !!v || 'Passwords should match',
        v => v === this.password || 'Passwords should match'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          login: this.login,
          password: this.password,
          safeStore: true,
          privateKey: ''
        }
        console.log(user)
      }
    }
  }
}
</script>
