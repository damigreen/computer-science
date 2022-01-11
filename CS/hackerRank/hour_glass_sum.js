/**
 * Hourglass Sum 
    1 1 1 0  0 0
    0 1 0 0  0 0
    1 1 1 0  0 0
    0 0 2 4  4 0
     
    0 0 0 2  0 0
    0 0 1 2  4 0

    1 2 3 4
    2 3 4 5
    3 4 5 6
    4 5 6 7

    a[0][0] a[0][1] a[0][2]    a[0][1] a[0][2] a[0][3]  a[0][2] a[0][3] a[0][4]
            a[1][1]                    a[1][2]                  a[1][3]
    a[2][0] a[2][1] a[2][2]    a[2][1] a[2][2] a[2][3]  a[2][1] a[2][2] a[2][3]

    0: [0,1,2] [1,2,3] [2,3,4] [3,4,5]
    1:    1       2       3       4
    2: [0,1,2] [1,2,3] [2,3,4] [3,4,5]

    3: [0,1,2] [1,2,3] [2,3,4] [3,4,5]
    4:    1       2       3       4
    5: [0,1,2] [1,2,3] [2,3,4] [3,4,5]

 */

function hourglassSum(arr) {
  var result = [];
  for (var i = 0; i < arr.length - 2; i++) {
    for (var j = 0; j < arr.length - 2; j++) {
      let sum = 0;
      sum += arr[i][j];
      sum += arr[i][j + 1];
      sum += arr[i][j + 2];
      sum += arr[i + 1][j + 1];
      sum += arr[i + 2][j];
      sum += arr[i + 2][j + 1];
      sum += arr[i + 2][j + 2];

      result.push(sum);
    }
  }

  return result.length > 0 ? Math.max(...result) : 0;
}

const array2D = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// console.log(array2D[5][2])
// console.log(array2D[5][3])
console.log(">>-------------------->");
console.log(hourglassSum(array2D));
