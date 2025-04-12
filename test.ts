let a: number = 45;
a = 56;
console.log(a);


type Person = {
  readonly name: string;
}

type MyNumber = number;

let x: MyNumber = 234;
console.log((<number>x).toFixed(21)); // Type assertion to number



type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;
// const add = (a, b) => a + b;     --vanilla js

((c: string) => {
  // c='hello c';
  console.log(c);
  
})("hello world c");

((c: string) => {
  let z = 'hello c';
  console.log(c);
})("hi c")



function printHello(): void {
  console.log('Hello!');
}

// the `?` operator here marks parameter `c` as optional
function sum(a: number, b: number, c?: number) {
  return console.log(a + b + (c || 0));
}
sum(1, 2, 3); // returns 6
sum(1, 2); // returns 3



function printStatusCode(code: string | number) {
  // console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  if (typeof code === 'string') {
    console.log(`My status code is ${code.toUpperCase()}.`) }}


function genericFunc <Type> (name: Type): Type {
  return name;
}

// console.log(genericFunc<number>('hello world'));
console.log(genericFunc('Diptangshu'));


type MyType<T extends string | number> = {
  value: T;
};
const obj: MyType<number> = { value: 123 };
const obj2: MyType<string> = { value: 'hello' };


interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {x:23}  // `Partial` allows x and y to be optional
// pointPart.x = 10;


type Primitive = string | number | boolean
const value: Exclude<Primitive, number> = 'hii'; // a string cannot be used here since Exclude removed it from the type.


function throwError(msg: string): never {
  throw new Error(msg);
}
throwError('This is an error!');