var str = "Jesus is King"

const a = str.substring(9, 10)
const b = str.indexOf('Jesus')
const c = str.indexOf('Nothing')
// console.log(b)
// console.log(c)

function existsInString(stringValue, search) {
    return stringValue[search] !== -1
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
console.log(test1.split('e'));

// String Replace
console.log(test1.replace("head", "life"));

