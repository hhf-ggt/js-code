const arr = [ 0, 1, 0, 3, 12];

function move (nums) {
 let index = 0; // 记录非零数字的指针

 for (let i = 0; i < nums.length; i++) {
  console.log(index, nums[index], nums[i], i, nums);
  if (nums[i] !== 0) {
    let temp = nums[index];
    nums[index] = nums[i];
    nums[i] = temp;
    index++;
  }
 }
 return nums;
}

console.log(move(arr));