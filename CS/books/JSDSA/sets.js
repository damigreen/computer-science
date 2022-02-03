/**
 * Set
 */
 const exampleSet = new Set();
 // Set Insertion
 exampleSet.add(2)
 exampleSet.add([5,6])
 exampleSet.add(5,6)
 exampleSet.add(6)
 exampleSet.add('6')
 exampleSet.add(9, '6')
 // Set Deletion
 exampleSet.delete(6)
 // Set Contains
 exampleSet.has('6')
 // console.log(exampleSet.has('6'));
 // console.log(exampleSet)
 
 // Intersection
 function intersectSets(setA, setB) {
   var intersection = new Set();
   for (var ele of setB) {
     if (setA.has(ele)) {
       intersection.add(ele);
     }
   }
   return intersection;
 }
 var setA = new Set([1, 2, 3, 4]),
     setB = new Set([2, 3])
 // console.log(intersectSets(setA, setB));
 
 // isSuperSet
 function isSuperset(setA, subset) {
   for (var ele of subset){
     if (!setA.has(ele)) {
       return false;
     }
   }
   return true;
 }
 var setA = new Set([1, 2, 3, 4]),
     // setB = new Set([2, 3])
     setB = new Set([2, 3, 6])
 // console.log(isSuperset(setA, setB));
 
 // Union
 function unionSet(setA, setB) {
   var union = new Set(setA);
   for (var ele of setB) {
     union.add(ele);
   }
   return union;
 }
 // console.log(unionSet(setA, setB));
 
 // Difference
 // 1,2,3,4   1,2 == > 3,4
 function differenceSet(setA, setB) {
   var difference = new Set(setA);
   for (var ele of setB) {
     difference.delete(ele);
   }
   return difference;
 }
 // console.log(differenceSet(setA, setB));
 
 // Check for duplicates using sets
 function checkDuplicaes(arr) {
   var mySet = new Set(arr);
   return mySet.size < arr.length;
 }
 // console.log(checkDuplicaes([1,2,3,4,5,6]))
 // console.log(checkDuplicaes([1,2,3,1,2,6,4,5,6]))
 
 // Return unique values from seperate arrays
 function uniqueList(arr1, arr2) {
   var mySet = new Set(arr1.concat(arr2));
   console.log(mySet)
   return Array.from(mySet)
 }
 // console.log(uniqueList([1,1,2,2], [2,3,4,5]))
 // console.log(uniqueList([1,2,3], [4,5]))
 // console.log(uniqueList([], [4,4,5,5,6]))
 