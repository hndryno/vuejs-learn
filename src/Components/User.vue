<template>
    <div>
        <hr>
        <div>this is the list of cars</div>
        <ul>
            <li v-for="(car, index) in cars" :key="index">
                {{ car }}
            </li>
        </ul>
    </div>
</template>

<script>
import {carsMixin} from './mixin'

    export default {
        mixins: [carsMixin]
    }
    
</script>