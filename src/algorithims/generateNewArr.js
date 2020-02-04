function generateNewArr() {
  let arr = new Array(20).fill(0).map(function(n) {
    return Math.floor(Math.random() * (100 - 1) + 1);
  });
  return arr;
}

module.exports = generateNewArr;
