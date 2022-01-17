
/** Sparse Array
 * strings=["ab", 'ab, 'abc']
 * queries=["ab", 'abc, 'bc']
 */
function sparseArrayTs(strings: string[], queries: string[]): string[] {
    let countArray = [];
    for (var j = 0; j < queries.length; j++) {
        let stringCountForQuery = 0;
        for (var i = 0; i < strings.length; i++) {
            if (queries[j] == strings[i]) {
                stringCountForQuery++;
            }
            countArray.push(stringCountForQuery)
        }

    }


    return strings;
}
console.log(sparseArrayTs(['ab', 'ab', 'abc'], ["ab", 'abc', 'bc']));