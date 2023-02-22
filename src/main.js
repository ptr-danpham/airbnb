import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
import './../src/assets/scss/theme.scss'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const useArray = [
  BootstrapVue,
  IconsPlugin,
  infiniteScroll
];

useArray.forEach((item) => {
  Vue.use(item)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
