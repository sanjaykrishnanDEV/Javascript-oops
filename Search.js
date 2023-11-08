//searching algos
//linear and binary
//linear
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 2;
function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return true;
    }
  }
  return false;
}
//console.log(linearSearch(arr,n))

// binarysearch
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
}
//console.log(binarySearch(arr,10))
