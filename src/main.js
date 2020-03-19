import Vue from 'vue'
import App from './App.vue'
import { VmCurrency } from './index'

Vue.config.productionTip = false
Vue.use(VmCurrency)

new Vue({
  components: { VmCurrency },
  render: h => h(App)
}).$mount('#app')
