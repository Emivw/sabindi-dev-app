<template>
  <v-app   id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="black"
      v-if="user"
    > 
    <v-list-item class="backgrd"  color="white">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="drw_list">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logOut" to="/signup">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon  v-if="user" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sabindi Global Group</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
  
    <BottomNav v-if="user" style="margin-top:150%" />
      <!--  -->
    </v-main>
    
  </v-app>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue'
  export default {
    name: 'App',
      data () {
    return {
      items: [
        { title: 'User Profile', icon: 'mdi-account-circle-outline', to:'/userprofile' },
        { title: 'Settings', icon: 'mdi-cog-outline', to:'/settings' }
      ],
      drawer: null,
    }
  },
    components:{
      BottomNav,
    },
    computed:{
   user(){
    return this.$store.state.user
   }
 },
 methods:{
  logOut(){
   return (this.$store.state.user= null ,
   localStorage.removeItem('vuex')
   )
    }
 }
  }
</script>

<style>
.v-app-bar{
  z-index: 1000 !important;
}
.v-toolbar__content{
  background-color:black;
  color:white;
}

.backgrd{
  background:linear-gradient(black,orange);
  border:none !important;
  color:white;
}

.text-h6{
  color:white;
}
.account{
    color: orange !important;
}

.mdi-account-circle::before {
    content: "\F0009";
    color: orange !important;
}

.pa-3{
    color: #fb8c00 !important;
}
.mdi-microphone::before {
    content: "\F036C";
    color: orange !important;
}


::before {
    text-decoration: inherit;
    vertical-align: inherit;
    color: orange !important;
}

 .drw_list {
    color: white;
}

.mdi-delete::before {
    content: "\F01B4";
    color: white !important;
}

.mdi-plus::before {
    content: "\F0415";
    color: white !important;
}

.mdi-pencil::before {
    content: "\F03EB";
    color: white !important;
}

.mdi-close::before {
    content: "\F0156";
    color: white !important;
}



.v-input--selection-controls__ripple{
  color:orange;
}



.v-input--selection-controls__ripple:before {
    border-radius: inherit;
    bottom: 0;
    content: "";
    position: absolute;
    opacity: 0.2;
    left: 0;
    right: 0;
    top: 0;
    transform-origin: center center;
    transform: scale(0.2);
    transition: inherit;
    color: orange !important;
}

.v-application .primary--text {
    color: orange !important;
    caret-color: #1976d2 !important;
}

.mdi-domain::before {
    content: "\F01D7";
    color: white !important;
}

.mdi-message-text::before {
    content: "\F0369";
    color: white !important;
}

.mdi-account::before {
    content: "\F0004";
    color: white !important;
}

.mdi-account-tie::before {
    content: "\F0CE3";
    color: white !important;
}

.mdi-briefcase::before {
    content: "\F00D6";
    color: white !important;
}

.mdi-format-quote-close::before {
    content: "\F027E";
    color: white !important;
}

.mdi-cart-arrow-down::before {
    content: "\F0D66";
    color: white !important;
}

.mdi-chart-box::before {
    content: "\F154D";
    color: white !important;
}

.mdi-factory::before {
    content: "\F020F";
    color: white !important;
}

.mdi-store-edit-outline::before {
    content: "\F18CA";
    color: white !important;
}

.mdi-cash-multiple::before {
    content: "\F0116";
    color: white !important;
}

.mdi-home::before {
    content: "\F02DC";
    color: white !important;
}

.primary{
  color: orange !important;
}

</style>