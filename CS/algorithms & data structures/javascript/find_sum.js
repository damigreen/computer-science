// Using two for loops
// Time Complexity: O(n2)
// Space Complexity: Object(1)
function fundSum(arr, weight) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}
// console.log(fundSum([2,4,5,6,2], 9));

/* 
[1,2,3], 5

i = 2
differenct = 3

0: currentElement = 1 difference = 4
1: currentElement = 2 difference = 3
2: currentElement = 3 difference = 2

if the hashtable[currentElement] != undefined
[i, hashtable[weight - difference]]

{
    4: 0
    3: 1

}
*/
// Time Complexity: O(n)
// Space Complexity: O(n)
function findSumHash(arr, weight) {
  var hashtable = {};
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // Check if the right one already exists
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[weight - difference]];
    } else {
      // store index
      hashtable[difference] = i;
    }
  }
  return -1;
}
console.log(findSumHash([1, 3, 3,7, 4, 12, 2, 9, 2], 14));
