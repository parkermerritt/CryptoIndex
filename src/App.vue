<template>
  <div id="app">
    <fixed-header>
      <div :class="{ 'is-fixed': isFixed }">
      <h1>FINNDEX</h1>
      <h4>Cryptoasset Tracker</h4>
      <!--<h4><a href="#">Finndex Top 50</a> - <a href="#">ETF Builder</a> - <a href="#">Trending Indices</a></h4>-->
    </div></fixed-header>
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
import FixedHeader from 'vue-fixed-header'
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    Card,
    FixedHeader
  },
  data () {
    return {
      isFixed: false
    }
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

h1 {
  color: white;
  font-size: 60px;
  margin: 0;
}

a {
    text-decoration: none;
      color: white;

}

h4 {
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
  margin-top: -20px;
}

</style>
