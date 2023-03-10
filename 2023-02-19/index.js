let prices = [7, 1, 5, 3, 4, 6];

// 主要是要读懂意思 找到数组中差值最大的两项、 并且是前者小于后着
// 双层循环会出现超时的问题
function index (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(prices[i] - min, max);
  }
  return max;
}

function index1 (prices) {
  let diff = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      console.log(prices[i], prices[j]);
      diff = Math.max(prices[j] - prices[i], diff);
    }
  }
  return diff;
}

console.log(index1(prices));
