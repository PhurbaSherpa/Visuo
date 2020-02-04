function insertionSort(arr, index = 1) {
  var currentVal;
  for (var i = index; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    return { arr, index: j + 1 };
  }
}

module.exports = insertionSort;
