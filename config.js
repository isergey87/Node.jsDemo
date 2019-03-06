module.exports = {
  hostname: '127.0.0.1',
  port: 3000,
  logger: {
    useConsole: true,
    filename: "app.log"
  },
  symbol: {
    urlPath: "https://api.iextrading.com/1.0/stock/",
    suffixQuote: "/quote",
    suffixLogo: "/logo",
    suffixNews: "/news/last/1",
  }
};
