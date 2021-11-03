// JavaScript Strings

var str = "Jesus is King"

const a = str.substring(9, 10)
const b = str.indexOf('Jesus')
const c = str.indexOf('Nothing')
// console.log(b)
// console.log(c)

function existsInString(stringValue, search) {
    return stringValue.indexOf(search) !== -1
};
// console.log(existsInString(str, "King"))

// Get the count  of a
var str = "He's my king from this day until the last day";
var count = 0;
var pos = str.indexOf('a')
while(pos !== -1) {
    pos = str.indexOf('a', pos + 1);
    count ++;
}
// console.log(count)

// String Decomposition
var test1 = "My head is blessed"
// console.log(test1.split('e'));

// String Replace
// console.log(test1.replace("head", "life"));

const ab = new String("A Good Day")
// console.log(ab)

const kdjd = "JavaScript DataStructures";
var n = kdjd.search(/^Ja/)
// n = kdjd.search(\d:ava)
// console.log(n)
n = kdjd.search(/[aSp]/)
n = kdjd.match(/[aSp]/)
n = kdjd.matchAll("Java").next()
n = kdjd.match(/[^Data]/)
n = kdjd.search(/[^u]/)
n = kdjd.search((/uu | Data/)) //Alternatives
// console.log(n)

var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
var myArray = /d(b+)d/g.exec('cdbbdbsbz');
console.log(myArray)

// Regex Validation
// var reg = /\d+/;
var reg = new RegExp(/\d+/); //Any Numeric character
var reg = new RegExp(/^\d+$/) // Only numeric characters
var reg = /^[0-9]*.[0-9]*[1-9]+$/; // Floating Numeric characters
// console.log(reg.test("123.344"))
// console.log(reg.exec("123.344"))
// console.log(reg.test("12"))
// console.log(reg.exec("12"))
// console.log(reg.match(/12/))
var reg = /[a-zA-Z0-9]/ // Alph Numeric
// console.log(reg.test("Damigreen2992"))
// console.log(reg.exec(/DamiII990393/))
var reg = /([^?=&])(=([^&]*))/ // Query String

var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
var queryString = {};
uri.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) { queryString[$1] = $3; }
    )
// console.log(uri.)
// console.log('ID: ' + queryString['product_id' ]); // ID: 2140
// console.log('Name: ' + queryString['product_name' ]); // Name: undefined
// console.log('Category: ' + queryString['category' ]); // Category: 4
console.log(a <= a)