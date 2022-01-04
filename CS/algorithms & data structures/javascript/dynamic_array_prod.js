/**
 * Dynamic array products
 *
 * Given an array of integers, return an array
 * products such that product[i] is equal to the
 * product of all elements except arr[i].
 * Solve without using the division operator
 * in O(n) time
 *
 * arr = [1,2,3,4]
 *     1        2        3        4
 * [2*3*4*5, 1*3*4*5, 1*2*3*5, 1*2*3*4] -> [24,12,8,6]
 *
 * befors   -> [1,1,2,6]
 * afters   -> [24,12,4,1]
 * products -> [24,12,8,6]
 *
 * Dynamic Arrays
 * Automatically resizes
 * Retrieving an element at a given index takes O(1) time
 * Appends - If a dynamic array needs to expand to fit a
 * new element, it copy all the existing element into a
 * second, bigger array, Hence an appends takes O(n)
 * with each doubling, the n doubles as well,
 * however with each doubling the number of O(1) appends
 * doubles too. These two things cance each other out so we
 * say appends have an amortized const of O(1)
 *
 */
function dynamicArrayProd(arr) {
  let beforeProductSoFar = 1;
  const productsOfBeforeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    // 1->1->2->6->24
    // [1,1,2,6,24]
    productsOfBeforeNumbers[i] = beforeProductSoFar;
    beforeProductSoFar *= arr[i];
  }

  let afterProductSoFar = 1;
  const productsOfAfterNumbers = [];
  for (let j = arr.length - 1; j > -1; j--) {
    productsOfAfterNumbers[j] = afterProductSoFar;
    afterProductSoFar *= arr[j];
  }

  const products = [];
  for (var k = 0; k < arr.length; k++) {
    products[k] = productsOfAfterNumbers[k] * productsOfBeforeNumbers[k];
  }

  return products;
}
console.log(dynamicArrayProd([1, 2, 3, 4, 5]));

function dynamicArrayProdRefactor(arr) {
  let beforeProductSoFar = 1;
  const products = [];
  for (var i = 0; i < arr.length; i++) {
    products[i] = beforeProductSoFar;
    beforeProductSoFar *= arr[i];
  }

  let numbersAfterProductSoFar = 1;
  for (let j = arr.length - 1; j > -1; j--) {
    products[j] *= numbersAfterProductSoFar;
    numbersAfterProductSoFar *= arr[j];
  }

  return products;
}
console.log(dynamicArrayProdRefactor([1, 2, 3, 4, 5]));
