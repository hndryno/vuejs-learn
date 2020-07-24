<template>
  <div>
      <form action="">
        <div class="col-xs-12">
          <h1>Contact us</h1>
          <hr>

          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text"
              id="name"
              class="form-control" v-model.lazy="formdata.name">
          </div>
          <div v-if="formdata.name.length < 7">
            <p style="color: red">maaf nama anda terlalu sedikit</p>
          </div>

          <div class="form-group">
            <label for="LastName">LastName</label>
            <input 
              type="text"
              id="lastname"
              class="form-control" v-model="formdata.lastname">
          </div>

          <div class="form-group">
            <label for="Subject">Subject</label>
            <input 
              type="text"
              id="subject"
              class="form-control" v-model="formdata.subject">
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              type="text"
              id="message"
              class="form-control" rows="3" v-model="formdata.message">Hello
              </textarea>
          </div>

          <div class="form-group">
            <label for="newsletter">Newsletter</label>
            <input type="checkbox" id="newsletter" value="newsletter"
            v-model="formdata.extras">

            <label for="promotions">Promotions</label>
            <input type="checkbox" id="promotions"
            v-model="formdata.extras" value="promotions"
            >
            <br>
           {{ formdata.extras }}
          </div>
          

          <div class="form-group">
            <label for="human">
            <input type="radio" id="human" value="human"
            v-model="formdata.gender">
            Human
            </label>

            <label for="alien">
            <input type="radio" id="alien" value="alien"
            v-model="formdata.gender">
            Alien
            </label>
            <br>
           {{ formdata.gender }}
          </div>

          <div class="form-group">
            <label for="country">Country</label>
            <select id="country" class="form-control" v-model="formdata.country">
              <option v-for="(country, index) in countries" :key="index">
                {{country}}
              </option>
            </select>
          </div>

          <button
            class="btn btn-primary"
            @click.prevent="submitForm"
          >Submit</button>
        </div>
        
      </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      countries:[
        'indonesia', 'malaysia', 'pilihphine'
      ],
      formdata:{
          name: '',
          lastname: '',
          subject: '',
          message: 'asdas',
          extras: [],
          gender:'',
          country: 'pilihphine'
      }
    }
  },
  methods:{
    submitForm(){
      console.log(this.formdata)
      console.log(JSON.stringify(this.formdata))
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
}
</style>
