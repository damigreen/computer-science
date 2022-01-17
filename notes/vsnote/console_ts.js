/** Sparse Array
 * strings=["ab", 'ab, 'abc']
 * queries=["ab", 'abc, 'bc']
 */
function sparseArrayTs(strings, queries) {
  var countArray = [];
  for (var j = 0; j < queries.length; j++) {
    var stringCountForQuery = 0;
    for (var i = 0; i < strings.length; i++) {
      if (queries[j] == strings[i]) {
        stringCountForQuery++;
      }
    }
    countArray.push(stringCountForQuery);
  }
  return countArray;
}
console.log(sparseArrayTs(["ab", "ab", "abc"], ["ab", "abc", "bc"]));
