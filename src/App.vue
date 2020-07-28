<template>
  <div>
    <app-header/>
    <div class="container">

      <!-- <transition name="slideup">  
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello2</div>
      </transition>

      <transition name="appear">  
        <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
      </transition>

      <button class="btn btn-primary" @click="display = !display">Toogle animation</button> -->

      <!-- ================================================================================= -->

      <!-- key agar vue js bisa membedakan div satu dengan div lain -->

      <!-- mode untuk jika out-in vue akan menunggu jika satu sudah selesai, maka do the other one, jika in-out, pertama lakukan in, jika in selesai maka lakukan out-->

      <!-- <hr> -->

      <!-- <button class="btn btn-primary" @click="status = !status">Toogle Status</button> --> 
      
      <!-- <transition name="appear" mode="in-out">
         <div class="p-3 mb-2 bg-success text-white" v-if="!status" key="status_down">STATUS IS FALSE</div>
         <div class="p-3 mb-2 bg-success text-white" v-else key="status_up">STATUS IS TRUE</div>
      </transition> -->

      <!-- ================================================================================= -->

      <!-- <hr> -->
<!-- 
      <button class="btn btn-primary" @click="custom = !custom">CUSTOM</button>

      <transition 
        name="awesome"
        enter-active-class="animate__bounce rotateInDownRight"
        leave-active-class="animate__bounce rollOut" -->
      <!-- > -->
         <!-- <div class="p-3 mb-2 bg-success text-white" v-if="!custom">CUSTOM</div> -->
         <!-- <div class="p-3 mb-2 bg-success text-white" v-else key="status_up">STATUS IS TRUE</div> -->
      <!-- </transition> -->

      <!-- =================================================================================== -->

      <!-- <hr> -->

      <!-- <transition 
        name="appear"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <div class="p-3 mb-2 bg-success text-white" v-if="hook">HOOK</div>
      </transition>

      <button class="btn btn-primary" @click="hook = !hook">Toogle HOOK</button> -->

      <!-- =================================================================================== -->

       <!-- <hr>

      <transition 
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <div class="p-3 mb-2 bg-success text-white" v-if="velocity">velocity</div>
      </transition>

      <button class="btn btn-primary" @click="velocity = !velocity">Toogle velocity</button> -->

      <!-- =================================================================================== -->

      <hr>

      <input v-model="name">
      <button class="btn btn-primary" @click="addOne">Add One</button>
      <ul class="list-group">
        <transition-group name="appear">
          <li
            class="list-group-item"
            v-for="(item, index) in list"
            :key="item"
            @click="removeItem(index)"
          >
          {{item}}
          </li>
        </transition-group>
      </ul>


       <hr>

      <!-- <transition name="slideup" appear>  
        <div class="p-3 mb-2 bg-success text-white" v-if="onload">Hello2</div>
      </transition> -->
      
      <transition name="slideup" appear>
        <compUser/>
      </transition>
      </div>

    <app-footer/>
  </div>
</template>
 
<script>
import compUser from './Components/User'
export default {
  name: 'app',
  data () {
    return { 
      onload: true,
      list:['Francis', 'Ron', 'James'],
      velocity: false,
      hook: false,
      display: false,
      status: false,
      custom: false,
      name: ''
    }
  },
  methods: {
    addOne() {
      if(!this.list.includes(this.name)){
        this.list.unshift(this.name)
      }
    },
    removeItem(index){
      this.list.splice(index, 1)
    },
    beforeEnter: (el) => {
      el.style.opacity = 0
    },
    enter: (el, done) => {
      Velocity(el, {
        opacity: 1,
        fontsize: '20px'
      }, {
        duration: 2000,
        complete: done
      })
    },
    afterEnter: (el) => {
      console.log('element added')
    },
    enterCancelled: (el) => {
      //sebelum elemen added proses kita batalkan
      console.log('enter canceled')
    },
    //leaving
    beforeLeave: (el) => {
      console.log('before leaving')
    },
    leave: (el, done) => {
      Velocity(el, {
        rotateZ: '100deg'
      }, {
        loop: 2,
        complete: done
      })
    },
    afterLeave: (el) => {
      console.log('after leave')
    },
    leaveCancelled: (el) => {
      console.log('after cancel')
    }
  },
  components: {
    compUser
  }
}
</script>

<style>

  .awesome-enter{
    opacity: 0;
  }

  .awesomeEnter {
    transition: all 1s ease;
  }

  .awesomeLeave {
    transition: all 1s ease;
    opacity: 0;
  }

  .appear-enter {
    transform: translateX(30px);
    opacity: 0;
  }

  .appear-enter-active {
    /* transition: opacity 1s; */
    transition: all .3s ease;

  }

  .appear-enter-leave {

  }

  .appear-leave-active {
    transform: translateX(30px);
    opacity: 0;
    transition: all .3s ease;
    position: absolute;

  }

  .appear-move {
    transition: transform 1s;
  }

  .slideup-enter {
    opacity: 0;
  }

  .slideup-enter-active {
    transition: opacity 1s;
    animation: slideUp 1s ease-out;
  }

  .slideup-leave {

  }

  .slideup-leave-active {
    opacity: 0;
    transition: opacity 1s;
    animation: slideDown 1s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px)
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(20px);
    }
  }

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
