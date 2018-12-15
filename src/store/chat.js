export default {
  state: {
    users: [
      {
        name: 'Nikolay',
        message: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        name: 'Nicole',
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
  },
  getters: {
    usersList: state => state.users
  }
}
