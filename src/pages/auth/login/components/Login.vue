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
                type="password"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-checkbox
                :label="'Use safe store'"
                v-model="safeStoreChb"
              ></v-checkbox>
              <v-text-field
                v-if="safeStoreChb"
                prepend-icon="vpn_key"
                name="privateKey"
                label="Private Key"
                type="text"
                v-model="privateKey"
                :rules="privateKeyRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Login</v-btn>
          </v-card-actions>
          <v-card-text class="text-xs-center">
            <router-link :to="'/registration'" class="caption">Have no account? Create one!</router-link>
          </v-card-text>
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
      safeStoreChb: true,
      privateKey: '',
      valid: false,
      loginRules: [
        v => !!v || 'Login is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      privateKeyRules: [
        v => !!v || 'This field is required'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          login: this.login,
          password: this.password,
          privateKey: this.privateKey
        }
        console.log(user)
      }
    }
  }
}
</script>
