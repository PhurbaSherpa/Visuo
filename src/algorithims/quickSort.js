function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let index = pivot(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let count = start;
  let val = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < val) {
      count++;
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
    }
  }
  let temp = arr[count];
  arr[count] = arr[start];
  arr[start] = temp;
  return count;
}

module.exports = quickSort;
