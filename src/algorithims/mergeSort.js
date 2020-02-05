function mergeSort(array) {
  let result;
  if (!Array.isArray(array[0])) {
    result = array.map(num => [num]);
    return result;
  } else {
    result = array;
  }
  if (result.length > 1) {
    const oddNumbered = result.length % 2 !== 0;
    let temp = [];

    for (let i = 0; i < result.length; i += 2) {
      let a = result[i];
      let b = result[i + 1];

      if (oddNumbered && i === result.length - 3) {
        b = merge(b, result[i + 2]);
        i++;
      }

      temp.push(merge(b, a));
    }

    result = temp;

    return temp;
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

module.exports = mergeSort;
