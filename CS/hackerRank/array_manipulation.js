/**
 * Array Manipulations
 */
function arrayManipulation(n, queries) {
  var arrZero = "0"
    .repeat(n)
    .split("")
    .map((e) => parseInt(e));

  // for (var j = 0; j < queries.length; j++) {
  //   queries[i][j]
  //   queries[i][j]
  // }
  for (var i = 0; i < queries.length; i++) {
    var startIndex = queries[i][0];
    var endIndex = queries[i][1];
    var addNumber = queries[i][2];
    for (var j = startIndex; j <= endIndex; j++) {
      arrZero[j - 1] += addNumber;
    }
  }
  return Math.max(...arrZero);
}

function arrayManipulatinOptimized(n, queries) {
  const arr = Array(n + 1);
  let maxValue = 0,
    currentNumber = 0;
  queries.forEach(([startIndex, endIndex, addNumber]) => {
    /* 
      arr: [{}, {start: 0, end: 0}, {start: 0, end: 0}, {start: 0, end: 0}...]
             0          1                 2
  
      currentNumber: 0
      maxValue: 0
      startIndex: 1
      endIndex: 5
      addNumber: 3
  
      arr: [{}, {start: 3, end: 0}, {start: 3, end: 0}, {start: 3, end: 0}...]
             0          1                 4                       6
      currentNumber
        cell 1: {start: 3, end: 0}
          currentNumber += start = 3
          (currentNumber > maxValue): (3 > 0)
          maxValue = 3
          currentNumber -= end = (3 - 0) = 3
  
        cell 4: {start: 3, end: 0}
          currentNumber += start = (3 + 3) = 6
          (currentNumber > maxValue): (6 > 3)
          maxValue = 6
          currentNumber -= end = (3 - 0) = 6
          
        cell 5: {start: 0, end: 3}
          currentNumber += start = (6 + 0) = 6
          (currentNumber > maxValue): (6 == 6)
          // maxValue = 6
          currentNumber -= end = (6 - 3) = 6
          
        cell 6: {start: 3, end: 0}
          currentNumber += start = (6 + 3) = 9
          (currentNumber > maxValue): (9 > 6)
          maxValue = 6
          currentNumber -= end = (9 - 0) = 9
  
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0]
        [0, 3, 3, 3, 10, 10, 7, 7, 7, 0, 0, 0]
        [0, 3, 3, 3, 10, 10, 8, 8, 8, 1, 0, 0]
  
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                        e
                     s   
       */
    arr[startIndex] = arr[startIndex] || { start: 0, end: 0 };
    arr[endIndex] = arr[endIndex] || { start: 0, end: 0 };
    arr[startIndex].start += addNumber;
    arr[endIndex].end += addNumber;
  });

  arr.forEach((cell) => {
    if (cell) {
      currentNumber += cell.start;
      if (currentNumber > maxValue) {
        maxValue = currentNumber;
      }
      currentNumber -= cell.end;
    }
  });

  return maxValue;
}

var queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];
console.log("**********Array Manipulations**********");
console.log("...");
console.log("**********Array Manipulations Optimized**********");
console.log(arrayManipulatinOptimized(10, queries));
