import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
import plugin from '@/plugin'

import 'vant/lib/index.css'

Vue.use(Vant)

Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
