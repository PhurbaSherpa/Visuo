// function mergeSort(arr) {
//   let { leftarr, rightarr } = split(arr);

//   if (leftarr.length > 1) leftarr = mergeSort(leftarr);
//   if (rightarr.length > 1) rightarr = mergeSort(rightarr);

//   return merge(leftarr, rightarr);
// }

// function split(arr) {
//   let mid = Math.floor(arr.length / 2);
//   let leftarr = arr.slice(0, mid);
//   let rightarr = arr.slice(mid);
//   return { leftarr, rightarr };
// }

// function merge(leftarr, rightarr) {
//   let left = 0;
//   let right = 0;
//   let arr = [];
//   while (left < leftarr.length && right < rightarr.length) {
//     if (leftarr[left] < rightarr[right]) {
//       arr.push(leftarr[left]);
//       left++;
//     } else {
//       arr.push(rightarr[right]);
//       right++;
//     }
//   }
//   if (left === leftarr.length) {
//     arr = arr.concat(rightarr.slice(right));
//   } else arr = arr.concat(leftarr.slice(left));

//   return arr;
// }

function mergeSort(array) {
  // break array into individual arrays of single integers
  let result;
  if (!Array.isArray(array[0])) {
    result = array.map(num => [num]);
    return { arr: result, index: 0 };
  } else {
    result = array;
  }

  // keep merging until result contains a single array
  if (result.length > 1) {
    const oddNumbered = result.length % 2 !== 0;
    let temp = [];

    // iterate 2 subarrays at a time and merge into larger subarray
    for (let i = 0; i < result.length; i += 2) {
      let a = result[i];
      let b = result[i + 1];

      // pre-merge 3 subarrays into 2 if there are odd number of subarrays
      if (oddNumbered && i === result.length - 3) {
        b = merge(b, result[i + 2]);
        i++;
      }
      // accumulate intermediate result
      temp.push(merge(b, a));
    }
    // current level merged, update result
    result = temp;

    return { arr: temp, index: 0 };
  }

  function merge(arrA, arrB) {
    const merged = [];
    let j = 0;
    let k = 0;

    while (merged.length !== arrA.length + arrB.length) {
      if (arrB[k] === undefined || arrA[j] <= arrB[k]) {
        merged.push(arrA[j]);
        j++;
      } else if (arrA[j] === undefined || arrA[j] > arrB[k]) {
        merged.push(arrB[k]);
        k++;
      }
    }
    return merged;
  }
}

// console.log(
//   mergeSort([
//     [1],
//     [4],
//     [56],
//     [233],
//     [2],
//     [4234],
//     [3],
//     [424],
//     [21],
//     [41],
//     [3],
//     [124],
//     [234],
//     [23],
//     [424],
//     [4243],
//     [2],
//     [423],
//     [427],
//     [42]
//   ])
// );

module.exports = mergeSort;
