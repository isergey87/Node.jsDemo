const symbolData = function (data) {
  if (data && data.length === 3) {
    return {
      stockPrice: parseData(data[0], "latestPrice"),
      logo: parseData(data[1], "url"),
      latestNews: parseArrayData(data[2], 0, "url"),
    }
  }
};

function parseData(el, path) {
  return el ? el[path] : "";
}
function parseArrayData(array, index, path) {
  return (array && array[index]) ? array[index][path] : "";
}

module.exports = symbolData;