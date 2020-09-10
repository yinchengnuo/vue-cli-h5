import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import plugin from '@/plugin'

Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
