import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import router from './router'
import store from './store'
import UUID from 'vue-uuid'
import Ads from 'vue-google-adsense'

import '@mdi/font/css/materialdesignicons.css'


new Vue({
  vuetify,
  router,
  store,
  UUID,
  Ads,
  render: (h) => h(App),
}).$mount('#app')
