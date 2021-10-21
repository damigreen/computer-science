/* 
    arr = [1, 1, 0, -1, -1]
*/

const arr = [1, 1, 0, -1, -1]
const arr2 = [-4, 3, -9, 0, 4, 1]
const arr3 = [1, 2, 3, -1, -2, -3, 0, 0]

const plusMinus = (arr) => {
    sumPositive = 0, sumNegative = 0, sumZero = 0;
    arrPositive = [], arrNegative = [], arrZero = [];
    const len = arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            arrZero.push(arr[i]);
        }
        else if (arr[i] < 0) {
            arrNegative.push(arr[i]);
        }
        else if (arr[i] > 0) arrPositive.push(arr[i]);
    }

    console.log((arrPositive.length / len).toFixed(6))
    console.log((arrNegative.length / len).toFixed(6))
    console.log((arrZero.length / len).toFixed(6))
    // console.log(arrZero)
    // console.log(arrNegative)
    // console.log(arrPositive)
}
// plusMinus(arr2)


const plusMinus2 = (arr) => {
    sumPositive = 0, sumNegative = 0, sumZero = 0;
    const len = arr.length || 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            sumZero ++;
        }
        else if (arr[i] < 0) {
            sumNegative ++;
        }
        else if (arr[i] > 0) sumPositive ++;
    }

    console.log((sumPositive / len).toFixed(6) || 0)
    console.log((sumNegative / len).toFixed(6) || 0)
    console.log((sumZero / len).toFixed(6) || 0)
}
// plusMinus2(arr2)
// plusMinus2(arr)
plusMinus2(arr3);

const plusMinus3 = ( arr ) => {
    let positives = 0, negatives = 0, zeros = 0;
    const len = arr.length || 0;
    if (len > 0 && len <= 100) {
        arr.map(( ele ) => {
            if (ele > 0) {
                positives++;
            } else if (ele < 0) {
                negatives++;
            } else zeros++;
            console.log(ele)
            return ele;
        });
    }

    console.log((positives / len ).toFixed(6) || 0);
    console.log((negatives / len ).toFixed(6) || 0);
    console.log((zeros / len ).toFixed(6) || 0);
}
plusMinus3(arr);
