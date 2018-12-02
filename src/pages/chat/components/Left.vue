<template>
  <v-flex xs3 class="grey grey darken-3">
    <v-flex xs12> 
      <v-layout row>
        <add-user-modal></add-user-modal>
        <v-text-field
          v-model="search"
          label="Search"
          mt-0
          pt-0
          xs4
        ></v-text-field>
        <new-group-modal></new-group-modal>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-list two-line>
        <div v-for="(item, index) in items" :key="item.index">

          <v-divider></v-divider>

          <v-list-tile
            :key="item.title"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              J
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
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

  export default {
    components: {
      AddUserModal,
      NewGroupModal
    },
    data () {
      return {
        search: '',
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ]
      }
    },
    mounted: function () {
      function getRandomColor () {
        var letters = '0123456789ABCDEF'
        var color = '#'
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        return color
      }
      let avatars = document.querySelectorAll('.v-avatar')
      avatars.forEach(function (element) {
        element.style.background = getRandomColor()
        console.log(element.textContent.trim())
      })
    }
  }
</script>
