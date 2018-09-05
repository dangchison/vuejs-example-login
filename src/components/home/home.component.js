export default {
  name: 'HomeComp',
  components: {},
  props: [],
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('sdc_token')
      this.$router.push({ name: 'login' })
    }
  }
}
