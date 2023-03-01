let x = 0;

function index (x) {
  let res = 0;
  while(x !== 0) {
    res = res*10 + x % 10;
    x = Math.trunc(x / 10);
  }
  return res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31) ? 0 : res;
}

console.log(index(x));