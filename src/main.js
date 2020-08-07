import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueLazyload)

axios.defaults.baseURL = 'https://mindgeek-app.test'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
