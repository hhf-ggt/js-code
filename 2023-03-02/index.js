let nums = [3, 2, 2, 4, 3];
let nums1 = [0,1,2,2,3,0,4,2];
function index (nums, val) {
  let k = 0; // 相当于就是记录有多少个与val不同值的个数
  for(let i = 0;i < nums.length;i++){
    if(nums[i] != val){
      nums[k++] = nums[i]
    }
  }
  return k;
}

// console.log(index(nums, 3));
console.log(index(nums1, 2));