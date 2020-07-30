<template>
  <div>
    <app-header/>
      <div class="container">

        <div>
          <span>Brand: </span> {{ brand | getBrand | to-uppercase}}
          <br>
          <span>Buyer: </span> {{ buyer | to-uppercase}}
        </div>

        <compUser/>
        <compClient/>
      </div>
      
    <app-footer/>
  </div>
</template>

<script>
import compUser from './Components/User.vue'
import compClient from './Components/Client.vue'

export default {
  name: 'app',
  data () {
    return {
      brand: 2,
      buyer: 'Francis'
    }
  },
  // local fiter
  filters: {
    getBrand(value){
      let brand = ''
      switch(value){
        case 1:
          brand = 'Coke'
        break;
        case 2:
          brand = 'Pepsi'
        break;
        case 3:
          brand = 'Juice'
        break;
        defaut:
          brand = 'no match'
        break;
      }
      return brand
    }
  },
  components: {
    compUser,
    compClient
  }
}
</script>

<style>
  body{
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
  }
  .container{
      min-height: 84vh;
      box-sizing: border-box;
      box-sizing: 20px;
      padding-bottom: 20px;
      padding-top: 20px;
  }
</style>
