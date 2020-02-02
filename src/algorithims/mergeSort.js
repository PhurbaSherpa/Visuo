function mergeSort(arr) {
  let { leftarr, rightarr } = split(arr);

  if (leftarr.length > 1) leftarr = mergeSort(leftarr);
  if (rightarr.length > 1) rightarr = mergeSort(rightarr);

  return merge(leftarr, rightarr);
}

function split(arr) {
  let mid = Math.floor(arr.length / 2);
  let leftarr = arr.slice(0, mid);
  let rightarr = arr.slice(mid);
  return { leftarr, rightarr };
}

function merge(leftarr, rightarr) {
  let left = 0;
  let right = 0;
  let arr = [];
  while (left < leftarr.length && right < rightarr.length) {
    if (leftarr[left] < rightarr[right]) {
      arr.push(leftarr[left]);
      left++;
    } else {
      arr.push(rightarr[right]);
      right++;
    }
  }
  if (left === leftarr.length) {
    arr = arr.concat(rightarr.slice(right));
  } else arr = arr.concat(leftarr.slice(left));

  return arr;
}

module.exports = { mergeSort };
