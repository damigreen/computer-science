/**
 * * Diagonal Difference
 * 
      1 2 3
      4 5 6
      9 8 9 

 * */

// Find the sum of one diagonal

const diagonal = [
    // [1, 2, 3],
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];

const diagonal2 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
/* 
  [0][2] : i = 0, j = L - 1
  [1][1] : i = 1, j = 1
  [2][0] : i = 2, j = 0
*/
  
function diagDiff(arr) {
  let diffA = [], diffB = [];

  for (let i = 0; i < diagonal.length; i++) {
    // for (let j = 0; j < diagonal[i].length; j++) {
    for (let j = 0; j <= 2; j++) {
      if (i == j) { 
        diffA.push(arr[i][j]);
      }
      if (j === diagonal.length - 1 - i)
        diffB.push(arr[i][j]);
    }
  }

  diffA = diffA.reduce((a, b) => (a + b), 0)
  diffB = diffB.reduce((a, b) => (a + b), 0)

  return Math.abs(diffA - diffB);
}

const diagDiff2 = (arr) => {
  let diffA = 0, diffB = 0, diff = 0;
  const len = arr.length;
  for (var i = 0, j = len - 1; i < len, j > -1; i++, j--) {
    diffA += arr[i][i]
    diffB += arr[i][j]
  }

  diff = diffA - diffB;
  if (diff < 0) return diff = diff*(-1)
  else if (diff > 0) return diff
  else return 0
}
const ans = diagDiff2(diagonal2)
// console.log(ans);
  
const diagDiff3 = (arr) => {
  let diffA = 0, diffB = 0, sum = 0;
  const len = arr.length;
  for (var i = 0, j = len - 1; i < len, j > -1; i++, j--) {
    // diffA += arr[i][i]
    diffB += arr[i][j]
    console.log(diffA, diffB)
  }
}
// diagDiff2(diagonal)
  

function diagDiff1(arr) {
  const dim = arr[0].length;
  let first_diagonal_sum = 0;
  let second_diagonal_sum = 0;
  let sum = 0;

  for (let i = 0, j = (dim - 1); i < dim, j > -1; i++, j--) {
    first_diagonal_sum += arr[i][i];
    second_diagonal_sum += arr[i][j]
  }
  sum = first_diagonal_sum - second_diagonal_sum;

  if (sum > 0) return sum;
  else if (sum < 0) return sum * (-1);
  else return 0;
}

const answer = diagDiff(diagonal2);
const answer1 = diagDiff1(diagonal);
// console.log(answer)
// console.log(answer1)