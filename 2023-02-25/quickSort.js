// 快速排序

let arr = [1, 3, 2, 6, 8, 7, 20, 14, 17];

// 惯用思路 O(nlogn) 时间复杂度、最差是o(n^2)
function quickSort (arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let midValue = arr[Math.round(arr.length / 2)];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > midValue) {
      right.push(arr[i]);
    } else if (arr[i] < midValue) {
      left.push(arr[i]);
    } else {
      continue;
    }
  }

  return [...quickSort(left), midValue, ...quickSort(right)];
}

console.log(quickSort(arr));




// 冒泡排序 O(n^2)

function bubleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubleSort(arr));