let s = 'pwwkew';
let s1 = 'abcbca';

function index (s) {
  let max = 0;
  let str = '';
  for(let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) !== -1) {
      str += s[i];
      str = str.slice(str.indexOf(s[i]) + 1);
    } else {
      str += s[i];
    }
    max = Math.max(max, str.length);
    console.log(str);
  }
  return max;
}

console.log(index(s));