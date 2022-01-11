/**
 * Rotate Left
 */
function rotateLeft(d, arr) {
  // [1,2,3,4,5]
  /* 
  
    arr = [1,2,3,4,5]
    d=2
    arrNew = [3,4,5,1,2]
    length = 5;
    [1,2,3,4,5]
     0 1 2 3 4
    [1,2,3,4,5]
    
    0->4->3  1->0->4   2->1->0 ...
      l-d    l-d       l-d
      5-2=(3)  5-2=(3)   5-2=(3)
      3-(0)=3   3+(1)=4  3-(3)=0
        arr[i]   arr[i]    arr[i]
    if i = 0 // beginning index
      i* = length - d
  
  
    change index of arr 
     */

  // let arrNew = [];
  // let arrLen = arr.length;
  // for (var i = 0; i < arr.length; i++) {
  //   let indexPrime = arrLen - d;
  //   let newIndex = indexPrime - arr[i];
  //   arr[i] = arr[newIndex];
  // }

  let arrLen = arr.length - 1;
  let j = 0;
  let arrNew = [];
  let newIndex;
  for (var i = 0; i < arr.length; i++) {
    newIndex = i + d;
    /* 
         [1,2,3,4,5,6,7]
          0,1,2,3,4,5,6
  
  
         [1,2,3,4,5]
          0,1,3,4,5
  
          i = 0 i*=0+2=2p
          [3,4]
          i=3
            i*=0
          i=4
            i*=1
          
      */

    if (newIndex > arrLen) {
      newIndex = j;
      arrNew.push(arr[newIndex]);
      j++;
      // break;
      continue;
    }
    arrNew.push(arr[newIndex]);
  }

  return arrNew;
}
console.log(rotateLeft(2, [1, 2, 3, 5]));
