<template>
  <div>
    <app-header/>
      <div class="container">
        <div>
          <button @click="compToRender = 'homeComponent'">Home</button>
          <button @click="compToRender = 'pageComponent'">Page</button>
          <button @click="compToRender = 'contactComponent'">Contact</button>
        </div>
        <keep-alive>
          <component :is="compToRender"></component>
        </keep-alive>
      </div>
    <app-footer/>
  </div>
</template>

<script>
import contactComponent from './Components/Contact'
import homeComponent from './Components/Home'
import pageComponent from './Components/Page'

export default {
  name: 'app',
  data () {
    return {
     compToRender:'homeComponent'
    }
  },
  components: {
    contactComponent,
    homeComponent,
    pageComponent
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
