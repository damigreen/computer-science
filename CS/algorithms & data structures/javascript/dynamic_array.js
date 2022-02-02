const xy = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

function dynamicArray(n, queries) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(new Array());
  }

  let lastAnswer = 0;
  let result = [];
  for (var i = 0; i < queries.length; i++) {
    var index = (queries[i][1] ^ lastAnswer) % n;
    if (queries[i][0] == 1) {
      arr[index].push(queries[i][2]);
    } else {
      let size = arr[index].length;
      lastAnswer = arr[index][queries[i][2] % size];
      result.push(lastAnswer);
    }
  }

  return result;
}
console.log(dynamicArray(2, xy));
