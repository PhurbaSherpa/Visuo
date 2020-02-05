function generateNewArr(num = 100) {
  let arr = new Array(20).fill(0).map(function(n) {
    return Math.floor(Math.random() * (num - 1) + 1);
  });
  return arr;
}

module.exports = generateNewArr;
