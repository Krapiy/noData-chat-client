<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <v-btn
      slot="activator"
      flat
      ripple
      round
      icon
      class="btn_activator"
    >
      <v-icon>group</v-icon>
    </v-btn>

    <v-card>
      <v-card-title
        class="headline grey darken-1"
        primary-title
      >
        Create new chatroom
      </v-card-title>

      <v-divider></v-divider>

      <v-form>
        <v-container>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                v-model="chatroomName"
                label="Chatroom name"
                @keyup.esc="closeModal"
                autofocus
                required
              ></v-text-field>

              <v-divider></v-divider>

              <v-autocomplete
                v-model="choosenUsers"
                :disabled="isUpdating"
                :items="usersList"
                box
                chips
                label="Whom would you like to message?"
                item-text="name"
                item-value="name"
                multiple
              >
                <template
                  slot="selection"
                  slot-scope="data"
                >
                  <v-chip
                    :selected="data.selected"
                    close
                    class="chip--select-multi grey darken-4 white--text"
                    @input="remove(data.item)"
                  >
                    <v-list-tile-avatar :style="{ background: getColor(data.item.name) }">
                      {{ getShortedName(data.item.name) }}
                    </v-list-tile-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
                <template
                  slot="item"
                  slot-scope="data"
                >
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                  </template>
                  <template v-else>
                  <v-list-tile-avatar :style="{ background: getColor(data.item.name) }">
                    {{ getShortedName(data.item.name) }}
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                  </v-list-tile-content>
                  </template>
                </template>
              </v-autocomplete>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="cancelCreating"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          flat
          @click="dialog = false"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import avatar from '@/mixins/avatar'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [avatar],
    data () {
      return {
        dialog: false,
        isUpdating: false,
        chatroomName: '',
        choosenUsers: []
      }
    },
    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      }
    },
    computed: {
      ...mapGetters([
        'usersList'
      ])
    },
    methods: {
      remove (item) {
        const index = this.choosenUsers.indexOf(item.name)
        if (index >= 0) this.choosenUsers.splice(index, 1)
      },
      cancelCreating () {
        this.dialog = false
        this.choosenUsers = []
      }
    }
  }
</script>