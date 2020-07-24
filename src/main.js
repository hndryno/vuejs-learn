import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Header_footer/Header.vue'

//global component
Vue.component('app-header', Header)

//bus untuk oper data antar child
//bus biasanya digunakan untuk applikasi kecil kalau app gede pake vuex
export const bus = new Vue()

new Vue({
    el: '#app',
    render: h => h(App)
})