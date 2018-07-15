<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <card tc="green" cl="currency" name1="Crypto" name2="Currencies"></card>
    <card tc="blue" cl="gas" name1="Platform" name2="Gas"></card>
    <card tc="purple" cl="exchange" name1="Token" name2="Exchanges"></card>
    <card tc="peach" cl="resource" name1="Computational" name2="Resources"></card>
    <card tc="gray" cl="privacy" name1="Privacy" name2="Coins"></card>
    <card tc="mustard" cl="utility" name1="Utility" name2="Tokens"></card>
  </div>
</template>

<script>
import Card from './components/Card'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Card,
    Header
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
