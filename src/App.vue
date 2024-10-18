<template>
  <v-app>
    <NavBar />
    <NavDrawer />
    <router-view />
  </v-app>
</template>

<script>
import NavDrawer from './components/global/NavDrawer.vue'
import NavBar from './components/global/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NavDrawer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@font-face {
  font-family: "DiabloLight";
  src: local("DiabloLight"),
    url(./fonts/DiabloLight.ttf) format("truetype");
}
</style>
