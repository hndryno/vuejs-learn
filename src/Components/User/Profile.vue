<template>
    <div>
        <div class="user_profile">
            <h3>User Information:</h3>
            <ul>
                <li>
                    <span>Name:</span> {{ userName }}
                </li>
                <li>
                    <span>LastName:</span> {{ userLastName }}
                </li>
                <li>
                    <span>Age:</span> {{ userAge }}
                </li>    
            </ul>
            <h3>User Parent : </h3>
            <ul>
                <li v-for="(key,value,index) in userParents" :key="index">
                    <span>
                        {{ key }}:
                    </span>
                    {{value}}
                </li>
            </ul>
            <button @click="updateName">Update Name</button>
            <!-- function props from parent, update function-->
            <button @click="updateLastName('nndnbl')">Update Last Name</button>
            <!-- update child from child -->
            <div>
                <input type="text" v-model="friendInput">
                <button @click="addFriends">Add friend</button>
            </div>
        </div>
        
    </div>
</template>

<script>
    import {bus} from '../../main'
    export default {
        data(){
            return{
                friendInput:''
            }
        },
        props: {
            userName: String,
            userLastName: String,
            userAge: Number,
            userParents: Object,
            updateLastName: Function
        },
        methods: {
            updateName(){
                // this.userName = "francis"
                this.$emit('updateName', 'francis')
            },
            addFriends(){
                bus.$emit('addFriend', this.friendInput)
            }
        }
    }
</script>

<style>
    span {
        font-weight: 800
    }
    .user_profile {
        border: 1px solid #2196f3;
        padding: 10px 20px;
    }
</style>