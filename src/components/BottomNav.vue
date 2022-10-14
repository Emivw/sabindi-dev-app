<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent" v-for="item in items" :key="item.title" :to="item.to">
      <span{{item.title}}</span>

      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
      name: 'BottomNav',
      data: () => ({
        value: 'recent',
    items: [
      { title: 'Todo', icon: ' mdi-domain', to: "/" },
      { title: 'about', icon: ' mdi-message-text', to: "/about" },
    ],
  }),
    }
</script>

<style  scoped>

</style>