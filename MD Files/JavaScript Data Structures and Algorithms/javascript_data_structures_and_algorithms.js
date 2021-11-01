// Linear space complexity
function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}
// exampleLinear(3)

function exampleQuadratic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = n; j > -1; j--) {
      console.log(j);
    }
  }
}
// exampleQuadratic(4)

function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = n; j > -1; j--) {
      console.log(j);
      for (var k = 0; k < n; k++) {
        console.log(k);
      }
    }
  }
}
// exampleCubic(2)

function exampleLogarithmic(n) {
  for (var i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}
// exampleLogarithmic(10)

// Time complexity of O(n)
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}
// console.log(a(9));

// Time complexity of O(n)
function a(n) {
  var count = 0;
  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
// console.log(a(9));

// Time complexity of O(n)
// f(n) is n + 1
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}
// console.log(a(9));

// from line 4, f(n) = n
// from line 7, g(n) = 5n
// f(n) + g(n) = 6n
// O(n) = n
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
  }
  for (var i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
// console.log(a(9));

// f(n) = 5n*n
// line 7 runs 5n times with a total of 5 iterations
// O(n) = n2
function a(n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += 1;
    // for (var j = 0; j < 5 * n; j++) {
    for (var j = 0; j < n; j++) {
      count += 1;
    }
  }

  return count;
}
// console.log(a(3));

// f(n) = n2 i.e line 4 runs n*n iterations
// O(n) = n2
function a(n) {
  var count = 0;
  for (var i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
// console.log(a(3));

// Functional Scope
// bottom variable declaration is floated
// all the way to the top
function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log(bottom);

  var bottom;
}
// scope1()
// Same as writing it these way
function scope11() {
  var top = "top";
  var bottom;
  bottom = "bottom";

  console.log(bottom);
}
// scope1()

// Fuction scope in action
function scope2(print) {
  if (print) {
    var insideIf = 12;
  }
  console.log(insideIf);
}
// scope2(true);

function scope22(print) {
  var insideIf;
  if (print) {
    insideIf = 12;
  }
  console.log(insideIf);
}
// scope22('2');

// Block scope
function scope3(print) {
  if (print) {
    let insideIf = 12;
  }
  // console.log(insideIf);
}
scope3(true);

// Object Equivalence
function isEquivalent(a, b) {
  // array of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // if there property length are different, then they are diiferent object
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If the values of property are different, not equal
    if (a[propName] != b[propName]) {
      return false;
    }
  }

  // If everything matches, correct
  return true;
}
// const x = isEquivalent({ name: "dami", age: 29}, { name: "dami", age: 29});
// console.log(x)

function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
// console.log(numberEquals((0.1 + 0.2), 0.3));
// console.log('ep', Number.EPSILON)

// Maximus
var max = Number.MAX_SAFE_INTEGER;
// console.log(max);
var max1 = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
// console.log(max1);
var max2 = Number.MAX_SAFE_INTEGER + 1.11 === Number.MAX_SAFE_INTEGER + 2.23;
// console.log(max2); //false

Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true


// Primality test
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    // check from 2 to n-1
    for (var i = 2;  i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(6))




function primFactors(n) {
  // n = 12 12/2=6 6/2=3 3/2=1r1
  while(n % 2 == 0) {
      console.log(2)
      n = n / 2;
  }

  // n must be odd at this point. So we can skip one element
  // (Note i = i +2)
  for (var i = 3; i * i <= n; i = i +2) {
      while(n % i == 0) {
          console.log(i);
          n = n / i;
      }
  }

  // This condition is to handle the case when n is a prime number
  // greater than 2
  if (n > 2) console.log(n)
}

// console.log(primFactors(12));
// primFactors(30)



// > Prime numbers list
// > 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
// > All primes are of the form 6k+-1, wth the exception of 2 and 3.
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n%2 == 0 || n%3 == 0) return false;

    for (var i = 5; i*i <= n; i+=6) {
        if (n%i == 0  || n%(i+2) == 0) return false
    }

    return true;
}
// console.log(isPrime(101));


