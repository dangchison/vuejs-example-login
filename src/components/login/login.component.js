import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginComp',
  data () {
    return {
      emailfrom: '',
      passfrom: ''
    }
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  },
  methods: {
    ...mapActions([
      'saveLocalStorage'
    ]),
    login() {
      this.saveLocalStorage({
        email: this.emailfrom,
        pass: this.passfrom
      })
    }
  }
}
