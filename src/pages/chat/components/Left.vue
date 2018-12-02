<template>
  <v-flex xs3 class="grey grey darken-3">
    <v-flex xs12> 
      <v-layout row>
        <add-user-modal></add-user-modal>
        <v-text-field
          v-model="search"
          @keyup.esc="clearInput"
          ref="searchInput"
          label="Search"
          class="search-input"
          mt-0
          pt-0
          xs4
        ></v-text-field>
        <new-group-modal></new-group-modal>
      </v-layout>
    </v-flex>
    <v-flex class="scroll dialogs-list">
      <v-list two-line>
        <div v-for="(item, index) in filteredList" :key="index">

          <v-divider></v-divider>

          <v-list-tile
            :key="item.name"
            avatar
            @click=""
          >
            <v-list-tile-avatar :style="{ background: getColor(item.name) }">
              {{ getShortedName(item.name) }}
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.message"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-flex>
  </v-flex>
</template>

<script>
  import AddUserModal from '@/pages/chat/modals/AddUserModal'
  import NewGroupModal from '@/pages/chat/modals/NewGroupModal'
  import avatar from '@/mixins/avatar'

  export default {
    mixins: [avatar],
    components: {
      AddUserModal,
      NewGroupModal
    },
    data () {
      return {
        search: '',
        items: [
          {
            name: 'Nikolay',
            message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            name: 'Ilya',
            message: "Wish I could come, but I'm out of town this weekend."
          },
          {
            name: 'Roman',
            message: 'Do you have Paris recommendations? Have you ever been?'
          },
          {
            name: 'Alex',
            message: 'Have any ideas about what we should get Heidi for her birthday?'
          },
          {
            name: 'Nikolay',
            message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            name: 'Ilya',
            message: "Wish I could come, but I'm out of town this weekend."
          },
          {
            name: 'Roman',
            message: 'Do you have Paris recommendations? Have you ever been?'
          },
          {
            name: 'Alex',
            message: 'Have any ideas about what we should get Heidi for her birthday?'
          },
          {
            name: 'Nikolay',
            message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            name: 'Ilya',
            message: "Wish I could come, but I'm out of town this weekend."
          },
          {
            name: 'Roman',
            message: 'Do you have Paris recommendations? Have you ever been?'
          },
          {
            name: 'Alex',
            message: 'Have any ideas about what we should get Heidi for her birthday?'
          }
        ]
      }
    },
    computed: {
      filteredList () {
        return this.items.filter(dialogue => {
          return dialogue.name.toLowerCase().includes(this.search.trim().toLowerCase())
        })
      }
    },
    methods: {
      clearInput () {
        this.search = ''
        this.$refs.searchInput.blur()
      }
    }
  }
</script>
