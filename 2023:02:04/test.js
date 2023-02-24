const arr = [ 1, 7, 4, 2, 3, 14, 9, 0, 14, 9 ];

// 主要方式就是找出数组中非0并且不重复的数字个数

function minNums(arr) {
  let newArr = [];
  arr.forEach(m => {
    if (m !== 0 && !newArr.includes(m)) {
      newArr.push(m);
    }
  });
  return newArr.length;
}

// console.log(minNums(arr));

// js api使用
function minimumOperations (nums) {
  let set = new Set([...nums]);
  set.delete(0);
  return set.size;
}
// console.log(minimumOperations(arr));


// 最容易想到的方法 
function minimumOperations1 (nums) {
  // 排序
  let arr = nums.sort((a, b) => a - b);
  // 定义操作次数
  let count = 0;
  // 循环标识
  let i = 0;
  while(i < arr.length) {
    if (arr[i] === 0) {
      i++;
      continue;
    } else {
      let curNum = arr[i];
      for(let j = i; j < arr.length; j++) {
        arr[j] -= curNum;
      }
      count++;
    }
  }
  return count;
}

console.log(minimumOperations1(arr));