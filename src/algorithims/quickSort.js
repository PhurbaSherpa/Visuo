// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let index = pivot(arr, left, right);
//     quickSort(arr, left, index - 1);
//     quickSort(arr, index + 1, right);
//   }

//   return arr;
// }

// function pivot(arr, start = 0, end = arr.length - 1) {
//   let count = start;
//   let val = arr[start];
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] < val) {
//       count++;
//       let temp = arr[i];
//       arr[i] = arr[count];
//       arr[count] = temp;
//     }
//   }
//   let temp = arr[count];
//   arr[count] = arr[start];
//   arr[start] = temp;
//   return count;
// }

function quickSort(arr, stack = []) {
  let start;
  let end;
  if (stack.length === 0) {
    start = 0;
    end = arr.length - 1;
    stack.push([start, end]);
  }

  start = stack[0][0];
  end = stack[0][1];
  stack.shift();

  let pivot = split(arr, start, end);

  if (pivot - 1 > start) {
    stack.push([start, pivot - 1]);
  }

  if (pivot + 1 < end) {
    stack.push([pivot + 1, end]);
  }

  return { arr: arr, stack: stack };

  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function split(arr, start, end) {
    let pivot = arr[end];
    let pIndex = start;

    for (let i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        swap(arr, i, pIndex);
        pIndex++;
      }
    }
    swap(arr, pIndex, end);
    return pIndex;
  }
}

module.exports = quickSort;
