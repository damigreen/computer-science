function primeFactors(n) {
  // 8
  // 8 / 2 = 4
  // 4 / 2 = 2
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  for (var i = 3; i * i <= n; i = i + 2) {
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }

  if (n > 2) {
    console.log(n);
  }

  // console.log(n);
  return 0;
}
// primeFactors(630)
// primeFactors(12);

// compute (x^y)%p
function modularExponentiation(base, exponent, modulus) {
  return Math.pow(base, exponent) % modulus;
}
const modExp = modularExponentiation(2, 3, 3);
// console.log(modExp)
// console.log(9 % 2)

function modularExponentiation1(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }

  return value;
}
const modExp1 = modularExponentiation(4, 3, 5);
// console.log(modExp1)

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
};
// console.log(isPrime(11));

function allPrimeLessThanN(n) {
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }

  return true;
}
// console.log(allPrimeLessThanN(16));

function maxDivide (number, divisor) {
  while(number % divisor == 0) {
    number /= divisor;
  }
  return number;
}

function isUgly(number) {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);

  return number === 1;
}

function arrayNUglyNumbers (n) {
  var counter = 0, currentNumber = 1;
  var uglyNumbers = []

  while( counter != n) {
    if (isUgly(currentNumber)) {
      uglyNumbers.push(currentNumber)
      counter++;
    }
    currentNumber++
  }
  return uglyNumbers;
}
// console.log(arrayNUglyNumbers(12))

console.log(new Date(1640563200000))