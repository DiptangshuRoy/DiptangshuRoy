var a = 45;
a = 56;
console.log(a);
var x = 234;
console.log(x.toFixed(21)); // Type assertion to number
var add = function (a, b) { return a + b; };
// const add = (a, b) => a + b;     --vanilla js
(function (c) {
    // c='hello c';
    console.log(c);
})("hello world c");
(function (c) {
    var z = 'hello c';
    console.log(c);
})("hi c");
function printHello() {
    console.log('Hello!');
}
// the `?` operator here marks parameter `c` as optional
function sum(a, b, c) {
    return console.log(a + b + (c || 0));
}
sum(1, 2, 3); // returns 6
sum(1, 2); // returns 3
function printStatusCode(code) {
    // console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    if (typeof code === 'string') {
        console.log("My status code is ".concat(code.toUpperCase(), "."));
    }
}
function genericFunc(name) {
    return name;
}
// console.log(genericFunc<number>('hello world'));
console.log(genericFunc('Diptangshu'));
var obj = { value: 123 };
var obj2 = { value: 'hello' };
var pointPart = { x: 23 }; // `Partial` allows x and y to be optional
var value = 'hii'; // a string cannot be used here since Exclude removed it from the type.
function throwError(msg) {
    throw new Error(msg);
}
throwError('This is an error!');
