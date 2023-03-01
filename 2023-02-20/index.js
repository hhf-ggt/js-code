function index (n) {
  if (n === 0) {
    return 0
  }
  if ( n > 0 && n <= 2) {
    return n;
  }

  let a = 1, b = 2;
  for(let i = 0; i < n; i++) {
    b = a + b;
    a = b - a;
  }
  return b;
}