import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Header_footer/Header'
import Footer from './Components/Header_footer/Footer'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
//global filter
Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase()
})

//jika kita mendeklarasikan mixin di global, maka akan terender di setiap intence component
Vue.mixin({
   created(){
     console.log('created')
   }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
