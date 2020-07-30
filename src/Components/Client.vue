<template>
    <div>
        <hr>
        <div>this is the list of cars</div>
        <div>hello my name is {{name}}</div>
        <ul>
            <li v-for="(car, index) in cars" :key="index">
                {{ car }}
            </li>
        </ul>
    </div>
</template>

<script>
    //mixin bisa di set local dan global, contoh mixin local
    import { carsMixin } from './mixin.js'

    export default {
        mixins:[carsMixin],
        data(){
            return {
                name: 'hendry' //jika punya 2 nama yang sama di mixin atau di export default, maka yang ditampilkan adalah yang di export default, karena yang di mixin akan dirender terlebih dahulu, setelah itu baru yang di component utama
            }
        }
    }
</script>