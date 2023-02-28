let items1 = [[1, 1], [4, 5], [3, 8]];
let items2 = [[3, 1], [1, 5]];

function index (items1, items2) {
  let map1 = new Map();
  for(let m = 0; m < items1.length; m++) {
    map1.set(items1[m][0], items1[m][1]);
  };
  for (let n = 0; n < items2.length; n++) {
    if (map1.has(items2[n][0])) {
      map1.set(items2[n][0], map1.get(items2[n][0]) + items2[n][1]);
    } else {
      map1.set(items2[n][0], items2[n][1]);
    }
  }

  return Array.from(map1).sort((a, b) => a[0] - b[0]);
}

console.log(index(items1, items2));
