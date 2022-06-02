/**
 * [{a: 1, b: 5}, {a: 10, b: 3}, {a: 3, b: 4}]
 * [1,10, 3]
 * [5,3,4]
 * [-4,7,-1]
 * 7-1 = 6
 * 6-4 = 2
 *
 * petrol:     [3,4,6,3,4,3,7]
 * distance:   [2,4,9,1,3,6,2]
 * difference: [1,0,-3,2,1,-3,5]
 * 0: 1+0 = (1)-3 = (-2)
 * 1: (-3)
 * 2: (-3)
 * 3: 2+1=(3)-3=(0)-3=(-3)
 * 4: 0+1=(1)-3=(-2)
 * 5: 0-3=(-3)
 * 6: 0+5=(5)+1=(6)+0=(6)-3=(3)+2=(5)+1=(6)-3=(3)
 *
 *
 */
let petrolpump = [
  [1, 5],
  [3, 4],
  [10, 3],
];
// let petrolpump = [ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ]
// let petrolpump = [ [ 10, 3 ], [ 1, 5 ], [ 3, 4 ] ]
function truckTour(petrolpumps) {
  let n = petrolpumps.length,
    petrolDiff = 0,
    index = 0;
  for (let i = 0; i < n; i++) {
    petrolDiff += petrolpumps[i][0] - petrolpumps[i][1];
    if (petrolDiff < 0) {
      index = i + 1;
      petrolDiff = 0;
    }
  }
  return index;
}
let truck_tour = truckTour(petrolpump);
console.log(truck_tour);
