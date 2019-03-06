const http = require('http');
const https = require('https');

const jsonFetch = function (url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const request = mod.get(url, (response) => {
      const {statusCode} = response;
      const contentType = response.headers['content-type'];
      let error;
      if (statusCode < 200 || statusCode > 299) {
        error = new Error(`Failed to fetch Data from page, status code: ${response.statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          `Expected application/json but received ${contentType}`);
      }

      if (error) {
        reject(error);
        response.resume();
        return;
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => {
        resolve(body.join(''));
      });
    }).on('error', (e) => {
      reject(new Error(`Failed to get URL: ${e.message}`));
    });

  })
    .then(JSON.parse);
};

module.exports = jsonFetch;