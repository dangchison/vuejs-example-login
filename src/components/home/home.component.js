import { mapActions } from 'vuex'

export default {
  name: 'HomeComp',
  components: {},
  props: [],
  data () {
    return {
      drawer: null
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
