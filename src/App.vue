<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    > 
    <v-list-item>
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
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sabindi Global Group</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    <BottomNav v-if="isLoggedIn"/>
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
        { title: 'Help', icon: 'mdi-view-dashboard' },
        { title: 'Info', icon: 'mdi-image' }
      ],
      drawer: null,
    }
  },
    components:{
      BottomNav,
    }
  }
</script>

<style>
.v-toolbar__content{
  background:linear-gradient(
  black,)
  ;
  color:white
}

</style>