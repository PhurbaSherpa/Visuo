function selectionSort(arr, index) {
  for (let i = index; i < arr.length; i++) {
    let currentMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMin]) {
        currentMin = j;
      }
    }
    if (currentMin !== i) {
      let temp = arr[currentMin];
      arr[currentMin] = arr[i];
      arr[i] = temp;
    }
    return { arr, index: i + 1 };
  }
}

module.exports = selectionSort;
