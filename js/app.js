/**
 * Our Vue.js application.
 *
 * This manages the entire front-end website.
 */

// The API we're using for grabbing metadata about each cryptocurrency
// (including logo images). The service can be found at:
// https://www.cryptocompare.com/api/
let CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
let CRYPTOCOMPARE_URI = "https://www.cryptocompare.com";

// The API we're using for grabbing cryptocurrency prices.  The service can be
// found at: https://coinmarketcap.com/api/
let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";

// The amount of milliseconds (ms) after which we should update our currency
// charts.
let UPDATE_INTERVAL = 60 * 1000;


let privCoins = new Vue({
  el: "#privCoins",
  data: {
    coins: {},
    /* New code */
    privIds : [328,1024],
    privCoins : [],
    privData: {},
    /* */
    coinData: {}
  },
  methods: {

    /**
     * Load up all cryptocurrency data.  This data is used to find what logos
     * each currency has, so we can display things in a friendly way.
     */
    getCoinData: function() {
      let self = this;

      axios.get(CRYPTOCOMPARE_API_URI + "/data/all/coinlist")
        .then((resp) => {
          this.coinData = resp.data.Data;
          console.log(this.coinData);
          this.getCoins();
        })
        .catch((err) => {
          this.getCoins();
          console.error(err);
        });
    },

     /* Get the top 5 cryptocurrencies by value.  This data is refreshed each 5
    / * minutes by the backing API service. */

    getCoins: function() {
      let self = this;

      axios.get(COINMARKETCAP_API_URI + "/v2/ticker/?limit=100")
        .then((resp) => {
          this.coins = resp.data.data;
          console.log(this.coins[328]);
          this.privCoins.push(this.coins[328]);
          this.privCoins.push(this.coins[1437]);
          console.log(this.privCoins[0].symbol);
          console.log(this.privCoins[1].quotes.USD.price);




          }
        )
        .catch((err) => {
          console.error(err);
        });
    },













    /*getPriv: function() {
      let self = this;
      var i;
      var privIds = [328,1437];

      for (i = 0; i < 2; i++) {
          axios.get(COINMARKETCAP_API_URI + "/v2/ticker/" + privIds[i] + "/")
          .then((resp) => {
          this.coinData = resp.data.data;
          /*privObjs[i] = resp.data.data;*/
          /*console.log(resp.data.data);
          console.log(privObjs);
          privObjs.push(this.coinData);

          this.privCoins = resp.data.data;
          this.symbol = (this.privCoins || {}).symbol;
          /*console.log(this.symbol);
          this.price = (((this.privCoins || {}).quotes || {}).USD || {}).price;
          /* console.log(this.price);
          this.percent_change_24h = (((this.privCoins || {}).quotes || {}).USD || {}).percent_change_24h;
          /*console.log(this.privCoins);

      })
        .catch((err) => {
          console.error(err);
        });
      }
    },
    */







    /*
     * Given a cryptocurrency ticket symbol, return the currency's logo
     * image.

    getCoinImage: function(symbol) {

      // These two symbols don't match up across API services. I'm manually
      // replacing these here so I can find the correct image for the currency.
      //
      // In the future, it would be nice to find a more generic way of searching
      // for currency images
      symbol = (symbol === "MIOTA" ? "IOT" : symbol);
      symbol = (symbol === "VERI" ? "VRM" : symbol);

      try {
          return CRYPTOCOMPARE_URI + this.privCoins[symbol].ImageUrl;

      } catch(err) {
        console.log(err);
      }
    },


    /**
     * Return a CSS color (either red or green) depending on whether or
     * not the value passed in is negative or positive.
     */
    getColor: (num) => {
      return num > 0 ? "color:green;" : "color:#ff5656;";
    },
  },


/*  filters: {
    privList : function (value) {

    }
  },*/





/*
   * Using this lifecycle hook, we'll populate all of the cryptocurrency data as
   * soon as the page is loaded a single time.
*/
  created: function () {
    this.getCoinData();
  }
});

/*
 * Once the page has been loaded and all of our app stuff is working, we'll
 * start polling for new cryptocurrency data every minute.
 * This is sufficiently dynamic because the API's we're relying on are updating
 * their prices every 5 minutes, so checking every minute is sufficient.
*/
setInterval(() => {
  privCoins.getPriv();
}, UPDATE_INTERVAL);
