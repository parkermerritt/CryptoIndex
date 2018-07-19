<template>
  <table>

    <thead class="chart-info">

      <tr>
        <!-- <td class="classAvgs">TOTAL:</td> -->
        <td colspan="2">TOTAL CAP &nbsp;<span v-bind:style="getColor(this.myReturn)">${{(Math.round( this.totalClassCap) / 1000000000).toFixed(2)}} B</span></td>
        <td colspan="1">24H &nbsp;<span v-bind:style="getColor(this.myReturn)">{{(this.myReturn).toFixed(2)}}%</span></td>
        <td colspan="1"> {{ this.quant }} assets </td>

      </tr>

      <tr>
            <td v-bind:class="tc">SYMBOL</td>
            <td v-bind:class="tc">PRICE (USD)</td>
            <td v-bind:class="tc">CHANGE</td>
            <td v-bind:class="tc">SHARE</td>
            <!-- <td>Class </td> -->

      </tr>

    </thead>
    <tbody>

                  <tr v-cloak v-for="(cryptoCurrency,index) in firstThreeCryptoCurrencies" :key="index" :cryptoCurrency-class.sync="cl" >
                    <td :key="cryptoCurrency.id">

                     <coin :col="cryptoCurrency.color" :pos="cryptoCurrency.pos" :size="cryptoCurrency.size"></coin>
                      {{  cryptoCurrency.symbol  }}

                    </td>

                    <td class="pricefont" v-bind:style="getColor(cryptoCurrency.quotes.USD.percent_change_24h)">
                      <span v-if="cryptoCurrency.quotes.USD.percent_change_24h > 0"></span>{{ cryptoCurrency.quotes.USD.price.toFixed(3)  }}
                    </td>

                    <td class="pricefont" v-bind:style="getColor(cryptoCurrency.quotes.USD.percent_change_24h)">
                      <span v-if="cryptoCurrency.quotes.USD.percent_change_24h > 0">+</span>{{ (cryptoCurrency.quotes.USD.percent_change_24h).toFixed(2) }}%
                    </td>
                    <!-- <td> {{cryptoCurrency.class}} </td> -->

                    <td class="pricefont" v-bind:style="getColor(cryptoCurrency.quotes.USD.percent_change_24h)">
                      {{ (100 * (cryptoCurrency.quotes.USD.market_cap)/totalClassCap).toFixed(2) }}%
                      <!--{{ cryptoCurrency.share }}%-->

                    </td>
                  </tr>

                  <tr v-cloak></tr>

      </tbody>

  </table>

</template>

<script>
import { store } from '../store.js'
import Coin from './Coin'

var state = store.state
var cryptoCurrencies = state.cryptoCurrencies.data

console.log({store})
console.log({state})
console.log({cryptoCurrencies})

export default {
  name: 'CardTable',
  components: {
    'coin': Coin
  },
  props: {
    cl: String,
    tc: String
  },
  data () {
    return {
      sharedState: store.state,
      isOpenedInIFrame: false,
      myReturn: 0,
      totalClassCap: 0,
      quant: 0
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  computed: {
    firstThreeCryptoCurrencies () {
      /* console.log('flag')
      console.log(this.sharedState.cryptoCurrencies)
      console.log(this.cl) */
      var thisClass = []
      var j = 0

      for (let i = 0; i < 3000; i++) {
        try {
          if (this.sharedState.cryptoCurrencies.data[i].class === this.cl) {
            thisClass[j] = this.sharedState.cryptoCurrencies.data[i]
            // eslint-disable-next-line
            // this.totalClassCap = this.totalClassCap + this.sharedState.cryptoCurrencies.data[i].quotes.USD.market_cap

            // eslint-disable-next-line
            // this.myReturn = Math.round( 100 *
            //   (this.myReturn + (this.sharedState.cryptoCurrencies.data[i].quotes.USD.percent_change_24h * (this.sharedState.cryptoCurrencies.data[i].quotes.USD.market_cap) / (this.totalClassCap)))
            // ) / 100

            j++
            // eslint-disable-next-line
            this.quant++
          }
        } catch (err) { }
      }
      for (let k = 0; k < j; k++) {
        // eslint-disable-next-line
        this.totalClassCap = this.totalClassCap + thisClass[k].quotes.USD.market_cap
        console.log(this.cl)
        console.log(k)
      }

      for (let l = 0; l < j; l++) {
        console.log(thisClass[l].quotes.USD.percent_change_24h)
        console.log(this.totalClassCap)
        console.log((thisClass[l].quotes.USD.percent_change_24h * ((thisClass[l].quotes.USD.market_cap) / this.totalClassCap)))
        // eslint-disable-next-line
        this.myReturn =
          (this.myReturn + (thisClass[l].quotes.USD.percent_change_24h * ((thisClass[l].quotes.USD.market_cap) / this.totalClassCap))
          )
        console.log(this.myReturn)
      }

      return thisClass
      /* return this.sharedState.cryptoCurrencies.data */
    }
    /* getMarketShare () {
      for (var k = 0; k < 10; k++) {
        try {
          thisClass[k].class-share = thisClass[k].market_cap

        } catch (err) { }
      }
      var share = 0
      return share
    } */
  },

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
  },
  directives: {
    col: {
      bind: function (el, binding) {
        var c = JSON.stringify
        el.color = c(binding.color)
        console.log(el.col)
      }
    },
    pos: {
      bind: function (el, binding) {
        var p = JSON.stringify
        el.backgroundPostion = p(binding.backgroundPostion)
        console.log(el.backgroundPostion)
      }
    },
    size: {
      bind: function (el, binding) {
        var s = JSON.stringify
        el.backgroundPostion = s(binding.backgroundSize)
        console.log(el.backgroundSize)
      }
    }
  }
}
</script>

<style>
@import '../assets/style.css';

* {
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}

table {
  width: 86%;
  margin-left: 22px;
  margin-right: 9px;
  z-index: 2;
  position: absolute;
  border-collapse: collapse;
}

td {
  font-size: 13px;
  line-height: 26px;
  vertical-align: top;
}

.chart-info {
  font-weight: bold;
}

.pricefont {
    font-size:15px;
    font-weight: 600;
}

thead tr:nth-child(1) td {
  font-size: 12px;
  line-height: 20px;

}
thead tr:nth-child(2) td {
  font-size: 14px;
  line-height: 22px;
  border: solid;
  border-width: 2px 0;
  border-top: none;
}

tbody tr td:nth-child(1) {
  font-size: 14px;
  font-weight: 5000;
}

tbody tr td:nth-child(2) {
  font-size: 18px;
  font-weight: 5000;
  padding-top: 20px;
}

tbody tr td:nth-child(3) {
  font-size: 18px;
  font-weight: 5000;
  padding-top: 20px;
}

tbody tr td:nth-child(4) {
  font-size: 18px;
  font-weight: 5000;
  padding-top: 20px;
}

tbody tr td {
  font-size: 20px;
  font-weight: 5000;
  line-height: 28px;
}
</style>
