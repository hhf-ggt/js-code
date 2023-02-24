const arr = [2, 9, 7, 11, 15];
// [2, 7, 9, 11,  15];
const target = 18;

// 暴力解法-时间复杂度O(n^2) 空间复杂度O(1)
function toSumTotal (arr, target) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] + arr[j] === target && i !== j) {
        res[0] = i;
        res[1] = j;
      }
    }
  }
  return res;
}

// console.log(toSumTotal(arr, target));

// 通过空间换算时间

function toSumTotal1 (arr, target) {
  const map = new Map();
  const res = [];

  for(let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let j = 0; j < arr.length; j++) {
    if (map.has(target - arr[j]) && map.get(target - arr[j]) !== j) {
      res[0] = j;
      res[1] = map.get(target - arr[j]);
    }
  }

  return res;
}

// console.log(toSumTotal1(arr, target));

// 排序使用双指针
function toSumTotal2 (arr, target) {
  let newArr = arr.sort((a, b) => a - b);
  let i = 0;
  let j = newArr.length - 1;

  while (i < j) {
    if (newArr[i] + newArr[j] === target) {
      return [i, j];
    } else if (newArr[i] + newArr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return res;
}

console.log(toSumTotal2(arr, target));

// O(nlog(n)) 时间复杂度 空间复杂度O(1)