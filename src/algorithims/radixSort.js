function radixSort(arr) {
  let max = mostDigits(arr);

  for (let i = 0; i < max; i++) {
    let digits = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = findDigitInPlace(arr[i], k);
      digits[digit].push(arr[i]);
    }
    arr = [].concat(...digits);
  }
  return arr;
}

function findDigitInPlace(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function numOfDigits(num) {
  if (num === 0) return 1;
  return Math.floor(math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.lenght; i++) {
    max = Math.max(max, numOfDigits(nums[i]));
  }
  return max;
}

module.exports = { radixSort };
