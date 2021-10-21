# Interview Questions

## General Questions

## HTML

`HTML` (HyperText Markup Language) is the most basic building block of the Web. It defines the **meaning and structure** of web content. Other technologies besides HTML are generally used to describe a web page's **appearance/presentation** (`CSS`) or **functionality/behavior** (`JavaScript`).

`"HyperText"` refers to links that connect web pages to one another, either within a single website or between websites.

`HTML` uses `"markup"` to `annotate` text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as `<head>, <title>` etc,

## CSS

## JavaScript

### Promise - WEBSITE

A `Promise` is an object representing the eventual completion (or failure) of an asynchromous operations and its resulting value

A Promise is in one of these states:

- *pending*: initial state, neither fulfilled nor rejected.
- *fulfilled*: meaning that the operation was completed successfully.
- *rejected*: meaning that the operation failed.

### Dan Abramov JavaScript Pointers

During my first few years of using JavaScript, I felt like a fraud. Even though I could build websites with frameworks, something was missing. I dreaded JavaScript job interviews because I didn't have a solid grasp on fundamentals.

Over the years, I've formed a mental model of JavaScript that gave me confidence. Here, I'm sharing a very compressed version of it. It's structured like a glossary, with each topic getting a few sentences.

As you read through this post, try to mentally keep score about how confident you feel about each topic. I won't judge you if quite a few of them are a miss! At the end of this post, there 

is something that might help in that case.

Value: The concept o  f a value is a bit abstract. It's a "thing". A value to JavaScript is what a number is to math, or what a point is to geometry. When your program runs, its world is full of values. Numbers like 1, 2, and 420 are values, but so are some other things, like this sentence: "Cows go moo". Not everything is a value though. A number is a value, but an if statement is not. We'll look at a few different kinds of values below.

Type of Value: There are a few different "types" of values. For example, numbers like 420, strings like "Cows go moo", objects, and a few other types. You can learn a type of some value by putting `typeof` before it. For example, console.log(typeof 2) prints "number".

Primitive Values: Some value types are "primitive". They include numbers, strings, and a few other types. One peculiar thing about primitive values is that you can't create more of them, or change them in any way. For example, every time you write 2, you get the same value 2. You can't "create" another 2 in your program, or make the 2 value "become" 3. This is also true for strings.

null and undefined: These are two special values. They're special because there's a lot of things you can't do with them -- they often cause errors. Usually, null represents that some value is missing intentionally, and undefined represents that a value is missing unintentionally. However, when to use either is left to the programmer. They exist because sometimes it's better for an operation to fail than to proceed with a missing value.

Equality: Like "value", equality is a fundamental concept in JavaScript. We say two values are equal when they're... actually, I'd never say that. If two values are equal, it means they are the same value. Not two different values, but one! For example, "Cows go moo" === "Cows go moo" and 2 === 2 because 2 is 2. Note we use three equal signs to represent this concept of equality in JavaScript.

Strict Equality: Same as above.

Referential Equality: Same as above.

Loose Equality: Oof, this one is different! Loose equality is when we use two equal signs (==). Things may be considered loosely equal even if they refer to different values that look similar (such as 2 and "2"). It was added to JavaScript early on for convenience and has caused endless confusion ever since. This concept is not fundamental, but is a common source of mistakes. You can learn how it works on a rainy day, but many people try to avoid it.

Literal: A literal is when you refer to a value by literally writing it down in your program. For example, 2 is a number literal, and "Banana" is a string literal.

Variable: A variable lets you refer to some value using a name. For example, let message = "Cows go moo". Now you can write message instead of repeating the same sentence every time in your code. You may later change message to point to another value, like message = "I am the walrus". Note this doesn't change the value itself, but only where the message points to, like a "wire". It pointed to "Cows go moo", and now it points to "I am the walrus".

Scope: It would suck if there could only be one message variable in the whole program. Instead, when you define a variable, it becomes available in a part of your program. That part is called a "scope". There are rules about how scope works, but usually you can search for the closest { and } braces around where you define the variable. That "block" of code is its scope.

Assignment: When we write message = "I am the walrus", we change the message variable to point to "I am the walrus" value. This is called an assignment, writing, or setting the variable.

let vs const vs var: Usually you want let. If you want to forbid assignment to this variable, you can use const. (Some codebases and coworkers are pedantic and force you to use const when there is only one assignment.) Avoid var if you can because its scoping rules are confusing.

Object: An object is a special kind of value in JavaScript. The cool thing about objects is that they can have connections to other values. For example, a {flavor: "vanilla"} object has a flavor property that points to the "vanilla" value. Think of an object as "your own" value with "wires" from it.

Property: A property is like a "wire" sticking from an object and pointing to some value. It might remind you of a variable: it has a name (like flavor) and points to a value (like "vanilla"). But unlike a variable, a property "lives" in the object itself rather than in some place in your code (scope). A property is considered a part of the object -- but the value it points to is not.

Object Literal: An object literal is a way to create an object value by literally writing it down in your program, like {} or {flavor: "vanilla"}. Inside {}, we can have multiple property: value pairs separated by commas. This lets us set up where the property "wires" point to from our object.

Object Identity: We mentioned earlier that 2 is equal to 2 (in other words, 2 === 2) because whenever we write 2, we "summon" the same value. But whenever we write {}, we will always get a different value! So {} is not equal to another {}. Try this in console: {} === {} (the result is false). When the computer meets 2 in our code, it always gives us the same 2 value. However, object literals are different: when a computer meets {}, it creates a new object, which is always a new value. So what is object identity? It's yet another term for equality, or same-ness of values. When we say “a and b have the same identity", we mean “a and b point to the same value" (a === b). When we say “a and b have different identities", we mean “a and b point to different values" (a !== b).

Dot Notation: When you want to read a property from an object or assign to it, you can use the dot (.) notation. For example, if a variable iceCream points to an object whose property flavor points to "chocolate", writing iceCream.flavor will give you "chocolate".

Bracket Notation: Sometimes you don't know the name of the property you want to read in advance. For example, maybe sometimes you want to read iceCream.flavor and sometimes you want to read iceCream.taste. The bracket ([]) notation lets you read the property when its name itself is a variable. For example, let's say that let ourProperty = 'flavor'. Then iceCream[ourProperty] will give us "chocolate". Curiously, we can use it when creating objects too: { [ourProperty]: "vanilla" }.

Mutation: We say an object is mutated when somebody changes its property to point to a different value. For example, if we declare let iceCream = {flavor: "vanilla"}, we can later mutate it with iceCream.flavor = "chocolate". Note that even if we used const to declare iceCream, we could still mutate iceCream.flavor. This is because const would only prevent assignments to the iceCream variable itself, but we mutated a property (flavor) of the object it pointed to. Some people swore off using const altogether because they find this too misleading.

Array: An array is an object that represents a list of stuff. When you write an array literal like ["banana", "chocolate", "vanilla"], you essentially create an object whose property called 0 points to the "banana" string value, property called 1 points to the "chocolate" value, and property called 2 points to the "vanilla" value. It would be annoying to write {0: ..., 1: ..., 2: ...} which is why arrays are useful. There are also some built-in ways to operate on arrays, like map, filter, and reduce. Don't despair if reduce seems confusing -- it's confusing to everyone.

Prototype: What happens if we read a property that doesn't exist? For example, iceCream.taste (but our property is called flavor). The simple answer is we'll get the special undefined value. The more nuanced answer is that most objects in JavaScript have a "prototype". You can think of a prototype as a "hidden" property on every object that determines "where to look next". So if there's no taste property on iceCream, JavaScript will look for a taste property on its prototype, then on that object's prototype, and so on, and will only give us undefined if it reaches the end of this "prototype chain" without finding .taste. You will rarely interact with this mechanism directly, but it explains why our iceCream object has a toString method that we never defined -- it comes from the prototype.

Function: A function is a special value with one purpose: it represents some code in your program. Functions are handy if you don't want to write the same code many times. "Calling" a function like sayHi() tells the computer to run the code inside it and then go back to where it was in the program. There are many ways to define a function in JavaScript, with slight differences in what they do.

Arguments (or Parameters): Arguments let you pass some information to your function from the place you call it: sayHi("Amelie"). Inside the function, they act similar to variables. They're called either "arguments" or "parameters" depending on which side you're reading (function definition or function call). However, this distinction in terminology is pedantic, and in practice these two terms are used interchangeably.

Function Expression: Previously, we set a variable to a string value, like let message = "I am the walrus". It turns out that we can also set a variable to a function, like let sayHi = function() { }. The thing after = here is called a function expression. It gives us a special value (a function) that represents our piece of code, so we can call it later if we want to.

Function Declaration: It gets tiring to write something like let sayHi = function() { } every time, so we can write use a shorter form instead: function sayHi() { }. This is called a function declaration. Instead of specifying the variable name on the left, we put it after the function keyword. These two styles are mostly interchangeable.

Function Hoisting: Normally, you can only use a variable after its declaration with let or const has run. This can be annoying with functions because they may need to call each other, and it's hard to track which function is used by which others and needs to be defined first. As a convenience, when (and only when!) you use the function declaration syntax, the order of their definitions doesn't matter because they get "hoisted". This is a fancy way of saying that conceptually, they all automatically get moved to the top of the scope. By the time you call them, they're all defined.

this: Probably the most misunderstood JavaScript concept, this is like a special argument to a function. You don't pass it to a function yourself. Instead, JavaScript itself passes it, depending on how you call the function. For example, calls using the dot . notation -- `like iceCream.eat()` -- will get a special this value from whatever is before the . (in our example, iceCream). The value of this inside a function depends on how the function is called, not where it's defined. Helpers like .bind, .call, and .apply let you have for more control over the value of this.

Arrow Functions: Arrow functions are similar to function expressions. You declare them like this: let `sayHi = () => { }`. They're concise and are often used for one-liners. Arrow functions are more limited than regular functions -- for example, they have no concept of this whatsoever. When you write this inside of an arrow function, it uses this of the closest "regular" function above. This is similar to what would happen if you used an argument or a variable that only exists in a function above. Practically, this means that people use arrow functions when they want to "see" the same this inside of them as in the code surrounding them.

Function Binding: Usually, binding a function f to a particular this value and arguments means creating a new function that calls f with those predefined values. JavaScript has a built-in helper to do it called .bind, but you could also do it by hand. Binding was a popular way to make nested functions "see" the same value of this as the outer functions. But now this use case is handled by arrow functions, so binding is not used as often.

Call Stack: Calling a function is like entering a room. Every time we call a function, the variables inside of it are initialized all over again. So each function call is like constructing a new "room" with its code and entering it. Our function's variables "live" in that room. When we return from the function, that "room" disappears with all its variables. You can visualize these rooms as a vertical stack of rooms -- a call stack. When we exit a function, we go back to the function "below" it on the call stack.

Recursion: Recursion means that a function calls itself from within itself. This is useful for when you want to repeat the thing you just did in your function again, but for different arguments. For example, if you're writing a search engine that crawls the web, your collectLinks(url) function might first collect the links from a page, and then call itself for every link until it visits all pages. The pitfall with recursion is that it's easy to write code that never finishes because a function keeps calling itself forever. If this happens, JavaScript will stop it with an error called "stack overflow". It's called this way because it means we have too many function calls stacked in our call stack, and it has literally overflown.

Higher-Order Function: A higher-order function is a function that deals with other functions by taking them as arguments or returning them. This might seem weird at first, but we should remember that functions are values so we can pass them around -- like we do with numbers, strings, or objects. This style can be overused, but it's very expressive in moderation.

Callback: A callback is not really a JavaScript term. It's more of a pattern. It's when you pass a function as an argument to another function, expecting it to call your function back later. You're expecting a "call back". For example, setTimeout takes a callback function and... calls you back after a timeout. But there's nothing special about callback functions. They're regular functions, and when we say "callback" we only talk about our expectations.

Closure: Normally, when you exit a function, all its variables "disappear". This is because nothing needs them anymore. But what if you declare a function inside a function? Then the inner function could still be called later, and read the variables of the outer function. In practice, this is very useful! But for this to work, the outer function's variables need to "stick around" somewhere. So in this case, JavaScript takes care of "keeping the variables alive" instead of "forgetting" them as it would usually do. This is called a "closure". While closures are often considered a misunderstood JavaScript aspect, you probably use them many times a day without realizing it!

JavaScript is made of these concepts, and more. I felt very anxious about my knowledge of JavaScript until I could build a correct mental model, and I'd like to help the next generation of developers bridge this gap sooner.

If you want to join me for a deeper dive in each of these topics, I have something for you. Just JavaScript is my distilled mental model of how JavaScript works, and it's going to feature visual illustrations by the amazing Maggie Appleton. Unlike this post, it goes at a slower pace so you can follow along on every detail.

Just JavaScript is in a very early stage so it's only available as a series of emails with zero polish or editing. If this project sounds interesting, you can click here to receive free drafts by email. I will be grateful for your feedback. Thank you!

You can read this article here on overreacted.io.

### Explain Event Delegation

Event delegation involves the technique of adding **event listners** to parent elements instead of adding them to descendant / child elements. The listner will fire up whenever the event is triggered from the descendant elements due to event bubling / propaggating up the DOM. Benefits include

* Memory footprint goes down /reduces because only one event handler is needed on the parent element, rather than having to attach event handlers to each descendant.

* There is no nedd to add / bind event handelers to every new element added to the DOM, and unbind for every element removed from the DOM.

        <ul id='parent-list'>
          <li id="post-1">Item 1</li>
          <li id="post-2">Item 2</li>
          <li id="post-3">Item 3</li>
          <li id="post-4">Item 4</li>
          <li id="post-5">Item 5</li>
          <li id="post-6">Item 6</li>
        </ul> 

        document.getElementById('parent-list').addEventListener('click', function(e) {
        // e,target is the clicked element
        // If it was a list item
        if(e.target && e.target.nodeName == 'LI') {
          // List item found Output the ID!
          console.log('List item', e.target.id.replace('post-', ''), 'was clicked!');
        }
      });

### Explain how `this` works in JavaScript

The value of `this` in JavaScript is determined by how a function is called. It can be set by assignment during execution. It behaves differently eachtime the function is called.

It behaviour when certain rules are applied

1. When the `new` keyword is used in calling the function, the `this` inside the function is a brand new object.

2. If `apply`, `call`, `bind` is used to create /call  a function,  the n the `this` is the object that is passed in as the argument.

3. If a function is called as a method, such as `obj.method()`,  this is the object that the function is a property of.

4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.

5. If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.

6. The arrow function ignores all the rules and recieves the `this` value of its surrounding scope at the time it is created.

* [Reference1](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3)
* [Reference2](https://stackoverflow.com/a/3127440/1751946)

### Explain how prototypal inheritance works

All Javascript obects has a `__proto__` property, which is a reference to another object, which is called the objects "prototype".  When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain.

* [Reference](https://davidwalsh.name/javascript-objects)
* [Reference](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/)
* [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### What  do you thik of AMD vs CommonJS

They are both ways of implementing **module systems** which is not natively present in JS untill ES2015. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server side development in mind while AMD, with its support for asynchronous loading of modules is intended for the browser.

I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file. CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development.

* [reference](https://auth0.com/blog/javascript-module-systems-showdown/)
* [reference](https://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs)

### Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?

IIFE stands for immediately invoked functions expressions The JavaScript parser reads `function foo(){ }();` as function `foo(){ }` and `();`, where the former is a **function declaration** and the latter (a pair of parentheses) is an attempt at calling a function but there is no name specified, hence it throws `Uncaught SyntaxError: Unexpected token`.

Here are two ways to fix it that involves adding more parentheses: `(function foo(){ })()` and `(function foo(){ }())`. Statements that begin with function are considered to be **function declarations**; by wrapping this function within `()`, it becomes a **function expression** which can then be executed with the subsequent `()`.

### What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?

**Undeclared variables** are created when you assign a value to an identifier that is not previously created using `var`, `let` or `const`. Undeclared variables will be defined globally, outside of the current scope. In strict mode, a `ReferenceError` will be thrown when you try to assign to an undeclared variable.

A variable that is `undefined` is a variable that has been declared, but not assigned a value. It is of type `undefined`. To check for it, compare using the **strict equality (===) operator** or `typeof` which will give the `'undefined'` string. Note that you should not be using the abstract equality operator to check, as it will also return `true` if the value is `null`.

A variable that is `null` will have been explicitly assigned to the `null` value. It represents **no value** and is different from `undefined` in the sense that it has been explicitly assigned. To check for null, simply compare using the **strict equality operator**. Note that like the above, you should not be using the abstract equality operator (==) to check, as it will also return `true` if the value is `undefined.`

* [references](https://stackoverflow.com/questions/15985875/effect-of-declared-and-undeclared-variables)
* [references](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/undefined)

### What is closure and how/why will you use one

A closure is the combination of a function and the lexical environment / surrounding environment within which that function was declared. Lexical refers to the fact that lexical scoping uses the location were a variable is declared within the source code to deteremine were the variable is available. closure are functions that have access to the outer(enclosing) function's variable scope chain even after the outer function has returned.

**MDN** In javascript a closure is created every time a function is created, at function created time. And it gives you access to an outer function scope from an inner function

      <!-- 
      The displayName function is returned from the outter function before beign executed
       -->
      function makeFunc() {
        var name = "damigreen";
        function displayName() {
          alert(name);
        }
        return displayName;
      }

      var myFunc = makeFunc()
      myFunc();

      /* 
      function makeAdder(x), that takes a single argument x, and returns a new function. 
      The function it returns takes a single argument y, and returns the sum of x and y.
      Add5 and add 10 are both closures. they share the same function defination
      but stores different lexical environment.
      */

      function makeAdder(x) {
        return function(y) {
          return x + y;
        };
      }
      // lexical environment 5
      var add5 = makeAdder(5);
      // lexical environment 10
      var add10 = makeAdder(10);

      console.log(add5(2)); //7
      console.log(add10(2)); //12

#### Why would you use one

* For data privacy /Emulate private method with closure.
* partial application or curring.
* Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data.

### Can you describe the main difference between a `.forEach` loop and a `.map()` loop and why you would pick one versus the other?

#### `array.forEach`

The forEach method executes a provided function once for each array element.

* Iterates through items in an array
* Executes a callbackk for each element
* Does not return a value

    const array1 = ['a', 'b', 'c']
    array1.forEach(element => console.log(element));
    // expected output: 'a' 
    // expected output: 'b' 
    // expected output: 'c' 

#### `array.map`

The `map()` method creates a new array with the result of calling a provided function on every element in the calling array.

* Iterates through the elements in an array
* Maps each element to a new element by calling the function oneach element, creating a new array as a result.

The main difference between `forEach()` and `map()` function is that `.map()` function returns a new array. If you need the result, but do not wish to mutate the original array, `.map()` is the clear choice.

    const array1 = [1, 4, 9, 16]
    const map1 = array1.map(x => x * 2);

    console.log(map1) // Array [2, 8, 18, 32]

    var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

    var reformattedArray = kvArray.map(obj => {
      var rObj = {};
      rObj[obj.key] = obj.value;
      return rObj
    });
    // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 
    // kvArray is still: 
    // [{key: 1, value: 10}, 
    //  {key: 2, value: 20}, 
    //  {key: 3, value: 30}]

### JavaScript Related

#### Curry

A curry is a function that taks a function with multiple paremeters as inputs and retuns a function with exactly one parameter.

#### Application

The process of applying a function to its arguments in order to produce a return value.

#### Partial Application

The process of applying a function to some of its arguments. The partially applied function gets returned for later use. In other words, a function that takes a function with multiple parameters and returns a function with fewer parameters.

## React

### What is React

React is an open-source frontend library which is used for building user interfaces especially for single page applications. It is used for handling view layout for mobile and web applications. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

### What are the major features of React

* It Uses a virtualDOM instaed of a realDOM
* Supports server side rendering
* Follows unidirecrtional data flow or data binding
* Uses reusable / composable UI component to develop the view.

### What is JSX

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to `React.createElement()` calls which returns a plain javascript object called **React elements**

`React DOM` uses camelCase property naming convention instead of HTML attribute names. For example, `tabindex` becomes `tabIndex` in JSX. The attribute class is also written as `className` since `class` is a reserved word in JavaScript:

    const name = 'Clementine';
    ReactDOM.render(
      <h1 className="hello">My name is {name}!</h1>,
      document.getElementById('root')
    );    

### What is the didfference between Element and Component

An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components.  Elements can contain other Elements in their props. Once an element is created, it is never mutated.

The object representation of React element is described below

    const element = React.createElement(
      'div',
      {id: 'login-btn'},
      'Login'
    )

the above `React.createElement()` function returns an object

    {
      type: 'div',
      props: {
        id: 'login-btn',
        children: 'Login'
      }
    }

And finally it renders to the DOM using the `ReactDOM.render()`:

    <div id="login-btn">Login</div>

Whereas a component can be declared in several different ways. It can be a class with a `render()` method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes `props` as an input, and returns a JSX tree as the output.

    const Button = ({ onLogin }) =>
      <div id={'login-btn'} onClick={onLogin}>Login</div>

Then JSX gets transpiled to a React.createElement() function tree:

const Button = React.createElement(
  'div',
  { id: 'login-btn', onClick: onLogin },
  'Login'
)

### How to create components in React

There are two possible ways to create a component.

1. **Function Components:** This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:

    function Greeting({ message }) {
      return <h1>{`Hello, ${message}`}</h1>

    }

2. **Class Component:** You can also use ES6 class to define a component. The above function component can be written as:

       class Greeting extends React.Component {
         render() {
           return <h1>{`Hello, ${this.props.message}`}</h1>
         }
       }

### When to use Class Component over a Function Component

If the component needs `state` or `lifecycle methods` then use class component otherwise use function component. However, from `React 16.8` with the addition of `Hooks`, you could use state , lifecycle methods and other features that were only available in class component right in your function component.

### What are Pure Components

`React.PureComponent` is exactly the same as `React.Component` except that it handles the `shouldComponentUpdate()` method for you. When `props` or `state` changes, `PureComponent` will do a shallow comparison on both `props` and `state`. Component on the other hand won't compare current `props` and `state` to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called.

### React Related

#### Components

React component are small, reusable pieces of codes that returns a React element to be rendered to the page. An exmaple is apure javascript function that returns a React element.

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

Components can also be ES6 classes.

    class Welcome extends Components {
      render() {
        return <h1>Hello, world</h1>
      }
    }

Compoents can be broken down into distincts pieces of functionality and used by other components. Componets can return other components, arrays, strings and numbers.

A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.

Components names should always be started witha capital letter.

#### Elements

React elements are the building blocks of React applications. An element describes what you want to see on the screen. React elements are immutable. typically they are not used directly , but they get returned by componets

    const element = <h1>Hello, world</h1>

The `state` of an application is needed to be updated in order to achieve dynamic UI udate. ie they are used to trigger a UI update

`props` are used in passing data from parent to child omponent

To use native javascript as an attribute value, the expression should be wrapped within `curly-braces{}`
