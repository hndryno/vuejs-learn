<template>
    <div class="user_friends">
        <h2>User friends</h2>
        <ul>
            <li v-for="(friend, index) in friends" :key="index">
                {{friend}}
            </li>
        </ul>
    </div>
</template>

<script>
import {bus} from '../../main'

export default {
    data(){
        return {
            friends: ['katob', 'aceng', 'annas']
        }
    },
    created(){
        // on untuk listen dari emit
        bus.$on('addFriend', (value) => {
            this.friends.push(value)
        })
    }
}
</script>
<style>
    .user_friends {
        border: 1px solid #2196f3;
        padding: 10px 20px;
    }
</style>