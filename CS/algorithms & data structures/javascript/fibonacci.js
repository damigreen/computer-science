// Iterative Solution
// 0 1 1 2 3 5 8
// 2: last 1, lastlast = 0, sum = 1
// 3: last: sum = 1, lastlast = last = 1 sum = 2
// countDownToZero(10)
function getNthFibo(n) {
    if (n <= 1) return n;
    var sum = 0,
        last = 1,
        lastlast = 0;

    for(var i = 1; i < n; i++) {
        sum = last + lastlast;
        lastlast = last;
        last = sum;
    }
    return sum;
}

// console.log(getNthFibo(6));
function getNthFiboRec(n) {
    if (n <= 1) {
        return n;
    }
    return getNthFiboRec(n - 1) + getNthFiboRec(n - 2);
}
console.log(getNthFiboRec(6))

