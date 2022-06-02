function solve1(arr, queries) {
  /**
   *
   * [33,11,44,11,55]
   * i: i < len;  i++
   * j: j < len
   *
   * [33,11], [11,44], [44,11],
   */
  let n = arr.length,
    arrMin = [];

  for (let i = 0; i < n; i++) {
    let arrMax = [],
      j = 0;

    while (i + j < n && j < queries) {
      arrMax.push(arr[i + j]);
      j++;
    }
    if (arrMax.length == queries) arrMin.push(Math.max(...arrMax));
  }

  return Math.min(...arrMin);
}

// let arr = [33, 11, 44, 11, 55];
// let query1 = 1;
// let query2 = 2;
// let query3 = 3;
// let query4 = 4;
// let query5 = 5;

// console.log(solve(arr, query2));
// console.log(solve1(arr, query2));

function solve(arr, queries) {
  /**
   *
   * [33,11,44,11,55]
   * i: i < len;  i++
   * j: j < len
   *
   * [33,11], [11,44], [44,11],
   */

  let n = arr.length,
    arrMinMax = [];
  for (let k = 0; k < queries.length; k++) {
    let arrMin = [];
    for (let i = 0; i < n; i++) {
      let arrMax = [],
        j = 0;

      while (i + j < n && j < queries[k]) {
        arrMax.push(arr[i + j]);
        j++;
      }
      if (arrMax.length == queries[k]) arrMin.push(Math.max(...arrMax));
    }
    console.log(Math.min(...arrMin));
    // return Math.min(...arrMin);
    arrMinMax.push(Math.min(...arrMin));
  }
  return arrMinMax;
}

function solveX(arr, queries) {
  const answers = [];
  for (let q of queries) {
    let t = [];
    let x = false;
    let max = Math.max(...arr.slice(0, q));
    let j = 0;
    while (q + j <= arr.length) {
      max = x
        ? Math.max(...arr.slice(j, j + q))
        : Math.max(max, arr[j + q - 1]);
      t.push(max);
      x = max === arr[j];
      j++;
    }
    answers.push(Math.min(...t));
  }
  return answers;
}

function solveY(arr, queries) {
  const n = arr.length,
    // Arrays to store previous and next larger
    left = Array(n).fill(-1),
    right = Array(n).fill(n);

  // The stack (used to find previous and next larger):
  let s = [],
    s_peek = () => s[s.length - 1];

  /* Fill elements of left[] (the closest
    larger value on the left of i) */
  for (let i = 0; i < n; i++) {
    while (arr[s_peek()] <= arr[i]) s.pop();
    if (s.length) left[i] = s_peek();
    s.push(i);
  }

  //Empty the stack, as stack is going to be used for right[]
  s = [];

  /* Fill elements of right[] (the closest
    larger value on the right of i) */
  for (let i = n - 1; i >= 0; i--) {
    while (arr[s_peek()] <= arr[i]) s.pop();
    if (s.length) right[i] = s_peek();
    s.push(i);
  }

  // Create and initialize the result array
  const result = Array(n + 1).fill(Infinity);

  /* Fill result[] by comparing maximums of all 
    sizes computed using left[] and right[] */
  for (let i = 0; i < n; i++) {
    // size of the window
    const size = right[i] - left[i] - 1;
    /* arr[i] is a possible result for this size window,
        so check if arr[i] is lesser than min for 'size' */
    result[size] = Math.min(result[size], arr[i]);
  }

  // Some entries in result[] may not be filled yet. Fill
  // them by taking values from right side of result[]
  for (let i = n - 1; i >= 1; i--) {
    result[i] = Math.min(result[i], result[i + 1]);
  }

  /* return the mapped 'query' array, replacing each query
    number (i.e. window size) by the result computed for it */
  return queries.map((query) => result[query]);
}

function arrayMax(arr, start, end) {
  let max = 0;
  while (start < end) {
    max = Math.max(max, arr[start++]);
  }
  return max;
}

function solveA(n, arr, queries) {
  return queries.map((d) => {
    let max = arrayMax(arr, 0, d);
    let min = max;
    let start = 0;
    for (let end = d + 1; end <= n; ++end) {
      // Equivalent to dequeue.
      if (arr[start++] === max) {
        max = arrayMax(arr, start, end);
        if (max < min) min = max;
      }
    }
    return min;
  });
}

console.log("=================== solve ===================");
let arr = [33, 11, 44, 11, 55];
let query1 = 1;
let query2 = 2;
let query3 = 3;
let query4 = 4;
let query5 = 5;

console.log("=================== solve ===================");
// console.log(solve(arr, query2));
console.log(solve(arr, [1, 2, 3, 4, 5]));
console.log(solveX(arr, [1, 2, 3, 4, 5]));
console.log(solveY(arr, [1, 2, 3, 4, 5]));
console.log(solveA(arr.length, arr, [1, 2, 3, 4, 5]));
console.log(new Date().getTime() / 1000);
