import md5 from 'md5'

export default {
  methods: {
    getShortedName (name) {
      return name.charAt(0)
    },
    getColor (name) {
      return '#' + md5(name).substring(0, 6)
    }
  }
}
