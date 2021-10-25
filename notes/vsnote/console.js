var x = [
  { user_id: 1, residences_id: undefined, walletBallance: 6000 },
  { user_id: 2, residences_id: 1, walletBallance: 39470 },
  { user_id: 3, residences_id: undefined, walletBallance: 200000 },
  { user_id: 4, residences_id: 1, walletBallance: 0 },
  { user_id: 5, residences_id: 2, walletBallance: 0 },
  { user_id: 6, residences_id: undefined, walletBallance: 0 },
  { user_id: 7, residences_id: 2, walletBallance: 0 },
  { user_id: 8, residences_id: 1, walletBallance: 0 },
  { user_id: 9, residences_id: 18, walletBallance: 0 },
  { user_id: 10, residences_id: 18, walletBallance: 0 },
  { user_id: 11, residences_id: undefined, walletBallance: 0 },
  { user_id: 12, residences_id: undefined, walletBallance: 0 },
  { user_id: 13, residences_id: 53, walletBallance: 0 },
  { user_id: 14, residences_id: undefined, walletBallance: 0 },
  { user_id: 15, residences_id: undefined, walletBallance: 0 },
  { user_id: 16, residences_id: 49, walletBallance: 0 },
  { user_id: 17, residences_id: 37, walletBallance: 169500 },
  { user_id: 18, residences_id: 37, walletBallance: 78000 },
  { user_id: 19, residences_id: 50, walletBallance: 0 },
  { user_id: 20, residences_id: 52, walletBallance: 0 },
  { user_id: 21, residences_id: 53, walletBallance: 120000 },
  { user_id: 22, residences_id: 53, walletBallance: 4000 },
  { user_id: 23, residences_id: 18, walletBallance: 0 },
  { user_id: 24, residences_id: 53, walletBallance: 0 },
  { user_id: 25, residences_id: 53, walletBallance: 0 },
  { user_id: 26, residences_id: 53, walletBallance: 0 },
  { user_id: 27, residences_id: 55, walletBallance: 0 },
  { user_id: 28, residences_id: 56, walletBallance: 0 },
  { user_id: 29, residences_id: 56, walletBallance: 0 },
  { user_id: 30, residences_id: 57, walletBallance: 0 },
  { user_id: 31, residences_id: 58, walletBallance: 0 },
  { user_id: 32, residences_id: 56, walletBallance: 1700 },
];

// const arr = [1, 3, 3, 1, 6, 8, 1, 4, 9, 4];
const groupArray = (arr) => {
  const map = {};
  const group = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof map[arr[i]] === "number") {
      group[map[arr[i]]].push(arr[i]);
    } else {
      //the push method returns the new length of array
      //and the index of newly pushed element is length-1
      map[arr[i]] = group.push([arr[i]]) - 1;
    }
  }
  return group;
};
// console.log(groupArray(arr));

var residencesBallanceArray = () => {
  const residencesId = [];
  for (var i = 0; i < x.length; i++) {
    residencesId.push(x[i].residences_id);
  }

  var groupedArray = groupArray(residencesId);
  groupedArray = groupedArray
    .map((arr) => arr.find((ele) => ele))
    .filter((item) => item != undefined);

  groupedArray = groupedArray.map((resId) => {
    let sum = 0;
    for (var i = 0; i < x.length; i++) {
      if (resId == x[i].residences_id) {
        sum += x[i].walletBallance;
        var arr = { residenceId: resId, walletBalance: sum };
      }
    }

    return arr;
  });

  return groupedArray;
};

console.log(residencesBallanceArray());
