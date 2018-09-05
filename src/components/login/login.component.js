export default {
  name: 'LoginComp',
  data () {
    return {
      emailfrom: '',
      passfrom: ''
    }
  },
  computed: {},
  methods: {
    login() {
      localStorage.setItem('sdc_token', JSON.stringify({
        email: this.emailfrom,
        pass: this.passfrom
      }))

      this.$router.push({ name: 'home' })
    }
  }
}
