/**
 * Reverse Array
 */
function reverseArray(array) {
  let length = array.length - 1;

  // return array.map(() => array[--length])
  // return array.map(() => array.pop())
  return array.map(() => array[length--]);
}

// initialize and return a new array
const ReverseArray2 = (array) => {
  const newArray = [];
  let len = array.length;

  while (len--) {
    newArray.push(array[len]);
  }

  return newArray;
};
console.log(reverseArray([3, 2, 1]));
console.log(ReverseArray2([1, 2, 3, 4, 5])); //[5,4,3,2,1]
