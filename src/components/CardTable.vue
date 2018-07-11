<template>
  <table>
    <thead class="chart-info">
      <tr>
        <td>Symbol</td>
        <td>Price (USD)</td>
        <td>Change </td>
        <td>Class </td>
      </tr>
    </thead>
    <tbody>

                  <tr v-cloak v-for="(cryptoCurrency,index) in firstThreeCryptoCurrencies" :key="index">
                    <td :key="cryptoCurrency.id">
                      {{  cryptoCurrency.symbol  }}
                    </td>

                    <td class="pricefont" v-bind:style="getColor(cryptoCurrency.quotes.USD.percent_change_24h)">
                      <span v-if="cryptoCurrency.quotes.USD.percent_change_24h > 0"></span>{{ cryptoCurrency.quotes.USD.price }}
                    </td>

                    <td class="pricefont" v-bind:style="getColor(cryptoCurrency.quotes.USD.percent_change_24h)">
                      <span v-if="cryptoCurrency.quotes.USD.percent_change_24h > 0">+</span>{{ cryptoCurrency.quotes.USD.percent_change_24h }}%
                    </td>
                    <td> {{cryptoCurrency.class}} </td>

                  </tr>

                  <tr v-cloak></tr>

                </tbody>
  </table>

</template>

<script>
import { store } from '../store.js'
var state = store.state
var cryptoCurrencies = state.cryptoCurrencies.data

console.log({store})
console.log({state})
console.log({cryptoCurrencies})

export default {
  props: {},
  name: 'CardTable',
  data () {
    return {
      sharedState: store.state,
      cryptoCurrencies: store.state.cryptoCurrencies.data,
      isOpenedInIFrame: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  computed: {
    firstThreeCryptoCurrencies () {
      console.log('flag')
      console.log(this.sharedState.cryptoCurrencies.data)
      return this.sharedState.cryptoCurrencies.data
    }
  },
  /*,
    secondThreeCryptoCurrencies () {
      return this.sharedState.cryptoCurrencies.slice(3, 6)
    }
  }, */

  methods: {
    getDifferenceInChange (cryptoCurrency) {
      cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
      cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
    },
    getPriceUSD (cryptoCurrency) {
      const priceUsd = cryptoCurrency.price_usd
      return Number(priceUsd).toFixed(2)
    },
    getPercentChange (cryptoCurrency) {
      return cryptoCurrency.percentChange24h
    },
    getColor: (num) => {
      return (num > 0.00 ? 'color:#42f456;' : 'color:#ff7a7a;')
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}

table {
  width: 99%;
  margin-left: 5px;
  margin-right: 9px;
}

td {
  font-size: 13px;
  line-height: 40px;
  vertical-align: top;
}

.chart-info {
  font-weight: bold;
}

.pricefont {
    font-size:15px;
    font-weight: 600;
}

</style>
