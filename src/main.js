import Vue from 'vue'
import App from './App.vue'
import Header from './Components/Header_footer/Header'
import Footer from './Components/Header_footer/Footer'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

//global directive
Vue.directive('awesome', {
  //binding as event, vnode = virtual node component
  //bind terjadi sebelum vuejs memasukan sesuatu kedalam dom
  bind(el, binding, vnode){
    el.innerHTML = binding.value
    // el.style.color = 'red'

    // if(binding.arg === 'red'){
    //   el.style.color = 'red'
    // }else{
    //   el.style.color = 'blue'
    // }

    el.style.color = binding.modifiers.red ? 'blue' : 'red'
    el.style.fontSize = binding.modifiers.small ? '12px' : '30px'
    console.log(binding)
    console.log(el.parentNode)
  },
  inserted(el, binding, vnode){
    //parent node adalah div yang isinya adalah directive
    //setelah element memasukan sesuatu kedalam dom
    console.log(el.parentNode)
  },
  //ketika update ditrigger, bukan setelah update
  //sama seperti bind
  update(el, binding, vnode, oldVnode){
    // kita bisa tahu, kapan update terjadi diaplikasi kita 
    console.log('update') 
  },
  //sama seperti updated
  componentUpdated(){
     console.log('component updated')
  },
  //unbind dipanggil sekali ketika vue directive unbind the element
  unbind(){

  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
