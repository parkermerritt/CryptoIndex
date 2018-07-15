import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
console.log('test')

Vue.use(VueAxios, axios)

const cryptoCurrencyData = require('./crypto-data.json')
console.log('Hey')
console.log(cryptoCurrencyData)
export const store = {
  state: {
    totalMarketCapUSD: 0,
    cryptoCurrencies: [],
    privateIds: [],
    currencyIds: []
  },
  getCryptoCurrencies () {
    const getUrl = 'https://api.coinmarketcap.com/v2/ticker/?limit=100'
    axios
      .get(getUrl)
      .then((response) => {
        this.state.cryptoCurrencies = response.data
        this.state.cryptoCurrencies.length = 100
        var parent = this.state.cryptoCurrencies.data
        var arr = Object.keys(parent).map(function (k) { return parent[k] })
        console.log(arr)
        console.log('Adios')
        arr.forEach(data => this.addImageAndDescription(data))

        /* this.state.cryptoCurrencies.forEach(cryptoCurrency => this.addImageAndDescription(cryptoCurrency)) */
        /* Array.prototype.forEach.call(parent.data, data => this.addImageAndDescription(parent.data)) */

        console.log(parent.data)
        console.log('Holaa')
      })
  },
  addImageAndDescription (cryptoCurrency) {
    /* console.log(cryptoCurrency) */
    cryptoCurrency.id = cryptoCurrency.id in cryptoCurrencyData ? cryptoCurrency.id : undefined
    cryptoCurrency.class = cryptoCurrencyData[cryptoCurrency.id].class
    cryptoCurrency.color = cryptoCurrencyData[cryptoCurrency.id].color
    cryptoCurrency.dimx = cryptoCurrencyData[cryptoCurrency.id].dimx
    cryptoCurrency.dimy = cryptoCurrencyData[cryptoCurrency.id].dimy
    cryptoCurrency.pos = cryptoCurrencyData[cryptoCurrency.id].pos
    cryptoCurrency.size = cryptoCurrencyData[cryptoCurrency.id].size

    /* console.log('Yolo')
    console.log(cryptoCurrencyData[cryptoCurrency.id].class) */
    /* cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
    cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '') */
  },
  getTotalMarketCapUSD () {
    const getUrl = 'https://api.coinmarketcap.com/v1/global/'
    axios.get(getUrl).then((response) => {
      const globalData = response.data
      this.state.totalMarketCapUSD = globalData.total_market_cap_usd
    })
  }

}
console.log(this.response)
console.log(this.getUrl)
