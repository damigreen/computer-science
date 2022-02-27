var x = { a: 1, b: 2 };
var y = x;
y.a = 5;
y = { z: 3 };
console.log(x);
console.log(y);
