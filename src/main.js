import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import 'normalize.css'

FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
