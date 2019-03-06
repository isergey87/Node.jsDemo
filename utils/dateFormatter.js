//MM/DD/YY HH:mm:ss

const dateFormatter = function (date) {
  return `${headingZero(date.getMonth() + 1)}/${headingZero(date.getDate())}/${headingZero(date.getFullYear())} ${headingZero(date.getHours())}:${headingZero(date.getMinutes())}:${headingZero(date.getSeconds())}`;
};

function headingZero(value) {
  return ("0" + value).slice(-2);
}

module.exports = dateFormatter;