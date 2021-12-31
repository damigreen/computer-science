/**
 * Reverse Array
 */
function reverseArray(array) {
  let length = array.length - 1;

  // return array.map(() => array[--length])
  // return array.map(() => array.pop())
  return array.map(() => array[length--]);
}

console.log(reverseArray([3, 2, 1]));
console.log(ReverseArray2([1, 2, 3, 4, 5])); //[5,4,3,2,1]
