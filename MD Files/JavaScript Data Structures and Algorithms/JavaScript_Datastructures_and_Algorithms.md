# JavaScript Data Structrues and Algorithms

## The Big-O Notation

The `Big-O` notation measures the worst-case complexity of an algorithm. In `Big-O` notation, n represents the number of inputs. The question asked with `Big-O` is the following: “What will happen as n approaches infinity?”

When you implement an algorithm, `Big-O` notation is important because it tells you how efficient the algorithm

### Common Examples

`O(1)` does not change with respect to input space. Hence, `O(1)` is referred to as being **constant time**. An example of an O(1) algorithm is accessing an item in the array by its index. `O(n)` is **linear time** and applies to algorithms that must do **n operations** in the **worst-case** scenario.

An example of `O(n)` algorithm is printing a number from *0 to n-1*

    function exampleLinear(n) {
        for (var i = 0; i < n - 1 i++) {
            console.log(i);
        }
    }

Similarly O($n^2$) is **quadratic time**, and O($n^3$) is **cubic time** e.g.

    function exampleQuadratic(n) {
        for (var i = 0; i < n; i++) {
            console.log(i);
            for (var j = n ; j > -1; J --) {
                console.log(j);
            }
        }
    }

    function exampleCubic(n) {
        for (var i = 0; i < n; i++) {
            console.log(i);
            for (var j = n; j > -1; j--) {
                console.log(j);
                for (var k = 0; k < n; k ++) {
                    console.log(k);
                }
            }

        }
    }

Finally, an example algorithm of logarithmic time complexity is printing elements that  are a power of 2 between 2 and n.

    function exampleLogarithmic(n) {
        for (var i = 2; i <= n; i*2) {
            console.log(i);
        }
    }

### Rules of Big-O Notation

Let `f(n)` represents an algorithms complexity, n represents the number of inputs, f(n)time represents the time needed, f(n)space represent the space (additional memory) needed for the algorithms. It can be challengign to calculate the effieciency of an algorithms, the `Big-O` provides some fundamental rules to help in calculating the f(n) i.e the complexity of an algorithm

- *Coefficient rule*: If `f(n)` is `O(g(n))` then `Kf(n)` is `O(g(n))`, for any constant `k > 0`. This eliminates any coefficient that are not related to the input size, `n`. This is because as `n` approaches infinity, the other coefficients becomes negligible.

- *Sum rule*: If `f(n)` is `O(h(n))` and `g(n)` is `O(p(n))` then `f(n) + g(n)` is `O(h(n) + p(n))`. The sum rule states that if the resultant time complexity is the sum of two different time complexities, then the Big-O notation os also the sum of the two different Big-O notations.

- *Product rule*: If `f(n)` is `O(h(n))` and `g(n)` is `O(p(n))`, then `f(n)g(n)` is `O(h(n)p(n))`. This implies that the Big-O is multiplied when the time complexities is multiplied

- *Transitive rule*: If `f(n)` is `O(g(n))` and `g(n)` is `O(h(n))`. then `f(n)` is `O(h(n))`. Implies that the same time complexities have the same Big-O notation.

- *Polynomial Rule*: If `f(n)` is a polynomial of degree k, then `f(n)` is `O($n^k$)`. Implies that if a polynomial time complexity have a `Big-O` of the same polynomial degree.

- *Log of a power rule*: `log(nk)` is `O(log(n))` for any `k > 0`. Implies constants within a log function are ignored in `Big-O` notation.

#### Coefficient Rule: Get Rid of Constants

This rule requires us to ignore any non-input-size-related constants. Coeffiencts in `Big-O` are negligible with large input sizes.

If `f(n)` is `O(g(n))` then `Kf(n)` is `O(g(n))`,, for any constants `k > 0`

This means that both `5f(n)` and `f(n)` has the same `Big-O` notation of `O(h(n))`.

    // f(n) is 5n
    // Time complexity of O(n)
    // runs from 0 to n
    function a(n) {
        var count = 0;
        for (var i = 0; i < n; i++) {
            count += 1;
        }
        return count;
    }

    // f(n) is 5n
    // Time complexity of O(n)
    // Runs from 0 to 5n
    function a(n) {
        var count = 0;
        for (var i = 0; i < 5 * n; i++) {
            count += 1;
        } 
        return count;
    }

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

#### Sum Rule: “Add Big-Os Up”

The sum rule is intuitive to understand; time complexities can be added. Imagine a master algorithm that involves two other algorithms. The `Big-O` notation of that master algorithm is simply the sum of the other two Big-O notations.

If `f(n)` is `O(h(n))` and `g(n)` is `O(p(n))` then `f(n) + g(n)` is `O(h(n) + p(n))`.

It is important to remember to apply the coefficient rule after applying this rule.

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

#### Product Rule: “Multiply Big-Os”

The product rule simply states how Big-Os can be multiplied.

If `f(n)` is `O(h(n))` and `g(n)` is `O(p(n))`, then `f(n)g(n)` is `O(h(n)p(n))`

The following code block demonstrates a function with two **nested for loops** for which the product rule is applied:

    // f(n) = 5n*n
    // line 7 runs 5n times with a total of 5 iterations
    // Big-O is O(n2)
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

#### Polynomial Rule: “Big-O to the Power of k”

The polynomial rule states that polynomial time complexities have a `Big-O` notation of the same polynomial degree. Mathematically, it’s as follows:

If `f(n)` is a polynomial of degree k, then `f(n)` is `O($n^k$)`.

The following code block has only one for loop with **quadratic time** complexity:

    // f(n) = n2 i.e line 4 runs n*n iterations
    // O(n2)
    function a(n) {
        var count = 0;
        for (var i = 0; i < n * n; i++) {
            count += 1;
        }
        return count;
    }

## JavaScript: Unique Parts

### JavaScript Scope

The scope is what defines access to JavaScript variables. Variables can belong to global or local scope

#### Declaration with var: Functional Scope

In JavaScript, `var` is one keyword used to declare variable, these variable declarations "floats" all the way to the top. this is known as **variable hiosting**. That means even when a program is declared at the buttom of a script, it wont be the last thing to be executed by the program during its runtime

    // Functional Scope
    // bottom variable declaration is floated 
    // all the way to the top
    function scope1 () {
        var top = "top";
        bottom = "bottom";
        console.log(bottom);

        var bottom
    }
    // scope1()
    // Same as writing it these way
    function scope11 () {
        var top = "top";
        var bottom
        bottom = "bottom";
        
        console.log(bottom);
    }
    <!-- scope1() -->

the scope of variables declared with `var` keyword - The scope of the variable declared with the`var` keyword is the closest fuction scope

    // Fuction scope in action
    function scope2 (print) {
        if (print) {
            var insideIf = 12;
        }
        console.log(insideIf);
    }
    // scope2(true);

    function scope22 (print) {
        var insideIf;
        if (print) {
            insideIf = 12;
        }
        console.log(insideIf);
    }
    scope22('2');

#### Declaration with let: Block Scope

Any variable declared with the `let` keyword are in the block scope. Meaning the scope closest to the nearest `{}` they were declared in.

### Equality and Types

#### Variable Types

there are seven **primitive data types** in javascript and they are:

1. boolean
2. number
3. strings
4. undefined
5. objects
6. functions
7. symbols

`Undefined` are special values that are assigned to variables that have not been defined.

We use the `typeof` keyword to determine the type of a variable

##### Truthy / Falsy Check

Here are some expresions that evaluates to false -

- false
- 0
- NAN
- undefined
- ""
- null

Here are some expressions that evalueate to true

- true
- Any number greater than 0
- non empty string
- non empty object

##### === vs ==

Types are not assigned to a variable when they are declared, instead they are interpreted as the code runs because javascript is `dynamically typed`

##### Objects

Most strongly typed languages such as Java use isEquals() to check whether two objectsare the same. You may be tempted to simply use the == operator to check whether two
objects are the same in JavaScript.

However, this will not evaluate to true.

    var o1 = {}
    var o2 = {}

    o1 == o2 // return false
    o1 === o2 // return false

Although these objects are equivalent (same properties and values), they are not equal. Namely, the variables have different addresses in memory.

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

## JavaScript Numbers

This chapter will focus on JavaScript **number operations, number representation, Number objects, common number algorithms, and random number generation.**

Number operations allows you to compute numerical values

    + : addition
    - : subtraction
    / : division
    * : multiplication
    % : modulus

### Number System

JavaScript uses 32-bit floating-point representation for numbers - **Explore further**

### JavaScript Number Object

#### Integer Rounding

JavaScript uses floating point to represent all numbers, hence integer division does not work

`Math.floor` - rounds down to the nearest integer
`Math.round` - rounds to the nearest integer
`Math.ceil` - rounds up to the nearest integer

    Math.floor(0.9); // 0
    Math.floor(1.1); // 1
    Math.round(0.49); // 0
    Math.round(0.5); // 1
    Math.round(2.9); // 3
    Math.ceil(0.1); // 1 Math.ceil(0.9); // 1 Math.ceil(21);
    // 21 Math.ceil(21.01); // 22

#### Number.EPSILON

Returns the smallest interval between two representable numbers. This is usefull for the propblem with flloating poing approximation

    function numberEquals(x, y) {
        return Math.abs(x -y) < Number.EPSILON;
    }
    console.log(numberEquals((0.1 + 0.2), 0.3));
    console.log('ep', Number.EPSILON)

#### Maximus

`Number.MAX_SAFE_INTEGER` returns the largest intger

    var max = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
    console.log(max); // true

This returns true because it cannot go any higher. However, it does not work for floating-point decimals.

    var max2 = Number.MAX_SAFE_INTEGER + 1.11 === Number.MAX_SAFE_INTEGER + 2.23;
    console.log(max2); //false

`Number.MAX_VALUE` returns the largest floating point number possible
`Number.MAX_VALUE` is equal to 1.7976931348623157e+308

    Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
    Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true

#### Minimus

`Number.MIN_SAFE_INTEGER` returns the smallest intger
`Number.MIN_SAFE_INTEGER` is equal to -9007199254740991.

    Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true

This returns true because it cannot go any higher. However, it does not work for floating-point decimals.

    Number.MIN_SAFE_INTEGER + 1.11 === Number.MIN_SAFE_INTEGER + 2.23;

`Number.MIN_VALUE` returns the largest floating point number possible
`Number.MIN_VALUE` is equal to 1.7976931348623157e+308

    Number.MIN_VALUE - 1 === Number.MIN_VALUE - 2; // true
    Number.MIN_VALUE - 1.111 === Number.MIN_VALUE - 2.022; // true

#### Infinity

The only thing greater than Number.MAX_VALUE is Infinity, and the only thing smaller than Number.MAX_SAFE_INTEGER is -Infinity.

1 `Infinity` > `Number.MAX_SAFE_INTEGER`; // true
2 `-Infinity` < `Number.MAX_SAFE_INTEGER` // true;
3 `-Infinity` -32323323 == `-Infinity` -1; // true

This evaluates to true because nothing can go smaller than -Infinity

### Size Summary

This inequality summarizes the size of JavaScript numbers from smallest (left) to largest (right):

    -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_IN- TEGER < Number.MAX_VALUE < Infinity

### Number Algorithms

#### Primality Test

Check whether a number is a prime number

    // Primality test
    // Time Complexity O(n)
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

> Prime numbers list
> 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
> All primes are of the form 6k+-1, wth the exception of 2 and 3.
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
    console.log(isPrime(101));



    // O(sqrt(n))
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
    primFactors(30)

### Random Number Generator

Random number generation is important to simulate conditions. JavaScript has a built- in function for generating numbers: `Math.random()`.

`Math.random()` returns a float between 0 and 1.

To get floating points higher than 1, simply multiply `Math.random()` by the range.
Add or subtract from it to set the base.

- `Math.random() * 100`; // floats between 0 and 100
- `Math.random() * 25 + 5`; // floats between 5 and 30
- `Math.random() * 10 - 100`; // floats between -100 and -90

To get random integers, simply use `Math.floor()`, `Math.round()`, or `Math.ceil()` to round to an integer.

- `Math.floor(Math.random() * 100)`; // integer between 0 and 99
- `Math.round(Math.random() * 25) + 5`; // integer between 5 and 30
- `Math.ceil(Math.random() * 10) - 100`; // integer between -100 and -90
