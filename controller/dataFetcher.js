const jsonFetch = require('../utils/jsonfetch');
const config = require('../config');

const DataFetcher = function () {
  this.options = config.symbol;

  this.fetchData = function (stock) {
    const quote = jsonFetch(`${this.options.urlPath}${stock}${this.options.suffixQuote}`);
    const logo = jsonFetch(`${this.options.urlPath}${stock}${this.options.suffixLogo}`);
    const news = jsonFetch(`${this.options.urlPath}${stock}${this.options.suffixNews}`);

    return Promise.all([quote, logo, news]);
  }
};


const stockFetcher = new DataFetcher();

module.exports = stockFetcher;
