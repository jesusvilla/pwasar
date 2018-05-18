import { openURL } from 'quasar'

export default {
  name: 'Modulo',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      arrUrl: [
        {url: 'http://quasar-framework.org', icon: 'school', label: 'Docs', sublabel: 'quasar-framework.org'},
        {url: 'https://github.com/quasarframework/', icon: 'code', label: 'GitHub', sublabel: 'github.com/quasarframework'}
      ]
    }
  },
  methods: {
    openURL
  }
}