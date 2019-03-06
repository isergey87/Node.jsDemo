const logger = require('../utils/logger');
const dataFetcher = require('./dataFetcher');
const symbolData = require('../model/symbolData');

const getSymbolData = function (symbol, request, response) {
  if (!symbol) {
    logger.error('request Error Incorrect symbol', request);
    response.statusCode = 404;
    response.end("Incorrect Stock symbol");
    return;
  }

  dataFetcher.fetchData(symbol)
    .then((result) => {
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(symbolData(result)));
      logger.log(`SUCCESS`, request);
    })
    .catch((e) => {
      logger.error(`request Failed get Info: ${e}`, request);
      response.statusCode = 404;
      response.end(`Failed get Info by symbol: ${e}`);
    });
};


module.exports = getSymbolData;