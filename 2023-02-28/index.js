let str = '()';

// 使用数组来存储验证 栈结构来解决
function index (str) {
  let arr = [];
  let map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      arr.push(str[i]);
    } else if (map.get(arr.pop()) === str[i]) {
      continue;
    } else {
      return false;
    }
  }
  return arr.length ? false : true;
}

console.log(index(str));