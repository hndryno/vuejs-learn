<template>
    <div>
        <!-- header dari global -->
        <app-header></app-header>
        <!-- {{name}} {{lastName}} -->
        <div class="container">
                <!-- ini contoh komponen proops -->
                <compUserProfile
                    :userName="name"
                    :userLastName="lastName"
                    :userAge="age"
                    :userParents="parent"
                    @updateName="name = $event"
                    :updateLastName="updateLastName"
                />
                <compFriends/>  

                <!-- ini contoh komponen konten (slots) (dari child ke parent) -->
                <!-- apa yang ada didalam sini bisa dirender di komponennya sendiri -->
                <compHabilities>
                    <!-- slot yang tidak diberi nama akan mengikuti dimana ia dipanggilnya berapapun jumlahnya -->
                     <div>
                        <a href="#">See more about this user</a>
                    </div>
                    <ul slot="main_hab">
                        <li v-for="(hab, index) in habilities" :key="index">
                            {{hab}}
                        </li>
                    </ul>

                    <div slot="notes">
                        the use also knows PHP
                    </div>

                    <div>
                         <a href="#">See more about this user</a>
                    </div>
                    <!-- membuat slotnya menjadi dinamic -->
                    <div :slot="slotName">
                        Other
                    </div>
                </compHabilities>
                    
        </div> 
        <!-- footer bukan component global -->
        <compFooter/>
    </div>
</template>

<script>
    //local import
    import compFooter from './Components/Header_footer/Footer'
    import compUserProfile from './Components/User/Profile'
    import compFriends from './Components/User/Friend'
    import compHabilities from './Components/User/Habilities'
 
    export default{
        components:{
            compFooter,
            compUserProfile,
            compFriends,
            compHabilities
        },
        data(){
            return{ 
                name: 'Hendriyono',
                lastName: 'Pratama',
                age: 2,
                parent: {
                    mother: 'martha',
                    father: 'mario'
                },
                habilities: ['Js', 'Css', 'Html'],
                slotName:''
            }
        },
        methods:{
            updateLastName(value){
                this.lastName = value
            }
        },
        created(){
            setTimeout(() => {
                this.slotName = 'other'
            }, 3000)
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