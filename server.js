const http = require('http');
const url = require('url');
const logger = require('./utils/logger');
const config = require('./config');
const getSymbolData = require('./controller/symbolController');

http.createServer((request, response) => {
  request.on('error', (err) => {
    logger.error(`request Error ${err}`, request);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    logger.error(`response Error ${err}`, request);
  });

  const query = url.parse(request.url);
  const index = query.pathname.indexOf("/", 1);
  const hasOneParam = index < 0 || index === query.pathname.length - 1;

  if (query.pathname === '/' || !hasOneParam) {
    logger.error('request Error Incorrect URL', request);
    response.statusCode = 404;
    response.end();
  } else {
    getSymbolData(query.pathname.replace("/",""), request, response);
  }
}).listen(config.port, config.hostname, () => {
  logger.log(`Server running at http://${config.hostname}:${config.port}/`);
});
