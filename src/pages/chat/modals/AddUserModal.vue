<template>
  <v-dialog
    v-model="dialog"
    width="350"
  >
    <v-btn
      slot="activator"
      flat
      ripple
      round
      icon
      class="btn_activator"
    >
      <v-icon>person_add</v-icon>
    </v-btn>

    <v-card>
      <v-form>
        <v-card-title
          class="headline grey darken-1"
          primary-title
        >
          Add User
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="newUsername"
            label="Username"
            autofocus
            required
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="onSubmit"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        newUsername: ''
      }
    },
    methods: {
      onSubmit () {
        this.dialog = false
      }
    }
  }
</script>
