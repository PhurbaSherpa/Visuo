function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
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
  }
  return arr;
}
