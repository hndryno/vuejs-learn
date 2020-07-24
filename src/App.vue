<template>
  <div>
    <app-header/>
      <div class="container">
       <!-- same directive different argument -->
        <div>{{ userName }}</div>
        <div v-user-lastname="userLastName"></div>
        <hr>

        <div v-awesome.red.big="textToRender"></div> 
        <div v-awesome.blue.small="textToRender"></div>
      </div>
    <app-footer/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      userName: 'hendri',
      textToRender: 'Text as value',
      userLastName: 'hehehe'
    }
  },
  mounted(){
    setTimeout(() => {
      this.userName = 'yono'
    }, 3000)
  },
  directives: {
    'user-lastname': {
      bind(el, binding, vnode){
        el.innerHTML = binding.value
      }
    }
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