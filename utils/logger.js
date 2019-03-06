const fs = require('fs');
const config = require('../config');
const dateFormatter = require('./dateFormatter');

const Logger = function () {
  this.options = config.logger;

  this.stream = null;

  if (this.options.filename) {
    this.stream = fs.createWriteStream(this.options.filename, {
      flags: 'a',
      autoClose: false
    });
    this.stream.on('error', (e) => {
      console.log(e);
      this.stream.end();
      this.stream = null;
    });
  }

  this.commonLog = function (msg, request = null, level = "log") {
    setImmediate(() => {
      const date = dateFormatter(new Date());
      const url = request ? `url(${request.url})` : "";
      const resultMsg = `${date} ${level.toLocaleUpperCase()} ${url} ${msg}`;
      if (this.options.useConsole) {
        switch (level) {
          case "log": {
            console.log(resultMsg);
            break;
          }
          case "error": {
            console.error(resultMsg);
            break;
          }
        }
      }

      if (this.stream) {
        this.stream.write(`${resultMsg}\n`);
      }
    });
  };

  this.log = function (msg, request = null) {
    this.commonLog(msg, request, "log");
  };
  this.error = function (msg, request = null) {
    this.commonLog(msg, request, "error");
  };
};

const log = new Logger();

module.exports = log;