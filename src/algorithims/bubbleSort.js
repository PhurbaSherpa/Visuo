function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    let swapped = false;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
module.exports = {
  bubbleSort
};
