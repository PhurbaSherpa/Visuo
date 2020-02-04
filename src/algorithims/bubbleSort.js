//one step not full sort is repeated in side Graph till sorted
function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    let index = false;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        index = i + 1;
      }
      if (!index) index = i;
    }
    return { arr, index };
  }
}
module.exports = bubbleSort;
