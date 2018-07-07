<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Card from './components/Card4'
export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
