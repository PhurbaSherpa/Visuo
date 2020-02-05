function radixSort(arr, index) {
  let max = mostDigits(arr);

  for (let i = index; i < max; i++) {
    let digits = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = findDigitInPlace(arr[j], i);
      digits[digit].push(arr[j]);
      console.log(digits);
    }
    arr = [].concat(...digits);
    console.log(arr);
    return { arr, index: index + 1 };
  }

  function findDigitInPlace(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }

  function numOfDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigits(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
      max = Math.max(max, numOfDigits(nums[i]));
    }
    return max;
  }
}

console.log(radixSort([12, 34, 5, 6, 7, 33, 2222, 444]));

module.exports = radixSort;
