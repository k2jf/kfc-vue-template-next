import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import { Message } from 'iview'
import kfcAxios from './libs/kfc-axios'
import '@/icons'

import 'iview/dist/styles/iview.css'
import 'dayjs/locale/zh-cn'

Vue.prototype.$Message = Message
Vue.use(kfcAxios, {
  baseUrl: config.baseUrl,
  login: function () {
    console.warn('需要自己实现')
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
