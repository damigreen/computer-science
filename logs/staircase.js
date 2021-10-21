/* 
* Staircase

       #
      ##
     ###
    ####

    n = 4

    0: ***# 
        i: 0
        j: 4,3,2,1
        *: 3 => n - 1 - i
        #: 1 => i + 1
    1: **##
        i: 1
        j: 3,2 
        *: 2 => n - 1 - i
        #: 2 => i + 1
    2: *###
        i: 2
        j: 3,2,1
        *: 1 => n-1-i => 4-1-2
        #: 3 => i+1 => 2+1
    3: ####
        i: 3
        j: 3,2,1,0
        *: 1 => n-1-i => 4-1-2
        #: 3 => i+1 => 2+1

    i:0
    at j = 2,1,0 print * => j < n-1-1
        j:4
        j:3 => 3=3
        j:2 => 2<3 - *
        j:1 => 1<3 - *
        j:0 => 0<3 - *
        j:-1 => -1<3 //

        0: *       - i = 0, j = 0  (j:: )
        1: * *     - i = 1, j = 0, 1
        2: * * *   - i = 1, j = 0, 1, 2
        3: * * * * - i = 1, j = 0, 1, 2 2, 3

        for (j > 0) dont print j
            print * for j = 0 (j <= i)
        for 

        ***#
        **##
        *###
        ####

*/

console.log('********* STAIRCASE *********')

function staircase6(n) {
    for (var i = 0; i < n; i++) {
        let steps = "";
        for (var j = 0; j < n - 1 - i; j++) {
            steps += " ";
        }
        for (var k = 0; k < i + 1; k++) {
            steps += "#";
        }
        console.log(steps)
    }
}
staircase6(6);

const starircase5 = (n) => {
    var arr = " ";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1;  j++) {
            arr += '*'
        }
        console.log(arr)
    }
}
// starircase5(4);

const staircase4 = (n) => {
    var count = "";
    for (var i = 0; i < n; i++) {
        for (var j = n - 1; j > -1; j--) {
            if (j < n - 1 - i) {
                count += "*"
                console.log(count);
            }
        }
        for (var k = 0; k < n; k++) {
            if (j < i + 1) {
                count += "#"
                console.log(count)
            }
        }
        console.log('\n');
    }
}
// console.log(staircase4(4));

function staircase3(n) {
    // intiate an empty n*n matrix
    let matrix = Array(n).fill().map(() => Array(n).fill());

    matrix.map((curArr, idY) => { // for each array row in matrix
        curArr.map((curVal, idX) => { // for each element in the current array row
            // evaluate each element's to-be-assigned value
            matrix[idY][idX] = (idX + idY + 1 >= n) ? '#' : ' ';
        }, [])
    }, [])

    // convert each row into string
    matrix.forEach((row) => {
        console.log(row.join(''));
    })
    // now we have the staircase
}
// staircase3(7)

const staircase2 = (n) => {
    for (var i = 1; i <= n; i++) {
        var col = i;
        for(var j = 1; j <= n - col; j++) {
            process.stdout.write(' ');
        }
        for(var j = 1; j <= col; j++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}
// console.log(staircase2(4))


const staircase1 = (n) => {
    var line = Array(n + 1).fill(" ");
    line[n] = '\n';
    for (var i = n - 1; i >= 0; i--) {
        line[i] = '#';
        console.log(line.join(''));
    }
}
// console.log(staircase1(4));


const staircase = (n) => {
    var char = ""
    for (var i = 0; i < n; i++) {
        for (var j = n - 1; j > -1; j--) {
            if (j < n - 1 - i) {
                char += "*"
                console.log(char);
            }
        }
    }
}
// console.log(staircase(4));

