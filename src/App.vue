<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <card cl="privacy" name1="Privacy" name2="Coins"></card>
    <card cl="currency" name1="Crypto" name2="Currencies"></card>
    <card cl="exchange" name1="Token" name2="Exchanges"></card>
    <card cl="resource" name1="Computational" name2="Resources"></card>
    <card cl="gas" name1="Platform" name2="Gas"></card>
    <card cl="utility" name1="Utility" name2="Tokens"></card>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Card from './components/Card'
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
