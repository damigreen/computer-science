// import helpers from "lodash";
// const { concat, findIndex, orderBy, uniqBy } = helpers;
// const { concat, findIndex, orderBy, uniqBy } = require("lodash")

var DICTIONARY = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
// console.log(DICTIONARY)

function encodeId(num) {
  var base = DICTIONARY.length; //36
  var encoded = "";

  if (num == 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }

  // encoded = "9ujd88"

  // console.log(encoded);
  return reverseWord(encoded);
}

function reverseWord(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    // reversed += str[i]
    reversed += str.charAt(i);
  }
  return reversed;
}
// console.log(encodeId(11231230));

function decodeId(id) {
  var base = DICTIONARY.length;
  var decoded = "";
  for (var i = 0; i < id.split("").length; i++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(i));
    console.log("decoded", decoded, base, DICTIONARY.indexOf(id.charAt(i)));
    // 6 36 6
    // 240 36 24
    // 8666 36 26
    // 311978 36 2
    // 11231230 36 22
    // 11231230
  }
  return decoded;
}

// console.log(decodeId(encodeId(11231230)))

var dict = "ABCDEFG";
var num = 12;
var base = "";
while (num > 0) {
  base += dict[num % 7];
  num = Math.floor(num / 7);
  console.log(base, dict[num % 7], num);
}
// console.log(base)

// console.log(new Date(1636146298918))

function modInverse(e, phi) {
  var m0 = phi,
    t,
    q;
  var x0 = 0,
    x1 = 1;

  if (phi == 1) {
    return 0;
  }

  console.log("e, phi, m0, x0, t, q, x1", e, phi, m0, x0, t, q, x1);
  console.log("------------------------");

  while (e > 1) {
    q = Math.floor(e / phi);
    t = phi;
    (phi = e % phi), (e = t);
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;

    console.log("e, phi, m0, x0, t, q, x1", e, phi, m0, x0, t, q, x1);
  }

  if (x1 < 0) {
    x1 += m0;
    console.log(">>------------>");
    console.log("e, phi, m0, x0, t, q, x1", e, phi, m0, x0, t, q, x1);
  }

  return x1;
}
// modInverse(7, 40);
// console.log(Math.floor(3/10))
