<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <card name1="Privacy" name2="Coins"></card>
    <card name1="Crypto" name2="Currencies"></card>
    <card name1="Token" name2="Exchanges"></card>
    <card name1="Computational" name2="Resources"></card>
    <card name1="Platform" name2="Gas"></card>
    <card name1="Utility" name2="Tokens"></card>
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

body {
  background: #1f1f1f;
}
</style>
