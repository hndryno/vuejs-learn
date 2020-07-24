import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Header_footer/Header'
import Footer from './Components/Header_footer/Footer'

//global component
Vue.component('app-footer', Footer)
Vue.component('app-header', Header)

new Vue({
  el: '#app',
  render: h => h(App)
})
