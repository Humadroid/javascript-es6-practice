// Import stylesheets
import {
  from,
  of,
  fromEvent,
  interval,
  merge,
  forkJoin
} from 'rxjs';
import {
  tap,
  map,
  pluck,
  switchMap,
  mergeMap,
  debounceTime,
  distinctUntilChanged,
  take,
  takeUntil,
  takeWhile,
  takeLast,
  concat,
  count
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import "./style.css";

/*************************************************************
 *************************************************************
 * Basic JS / Es6 Programs ***********************************
 *************************************************************
 *************************************************************
 */

/**
 * 1) Armstrong Number
 * abcd... = a^n + b^n + c^n + d^n + ...
 * 153 = 1*1*1 + 5*5*5 + 3*3*3  // 153 is an Armstrong number.
 */
function armStrong(number) {
  let numLen = number.length;
  if (numLen != 0) {
    let sum = 0;
    for (let i = 0; i < numLen; i++) {
      sum += Math.pow(number.charAt(i), numLen);
    }
    if (sum == number) {
      alert("Armstrong Number");
    } else {
      alert("Not an Armstrong Number");
    }
  } else {
    armStrong(prompt("Enter a valid number"));
  }
}
// armStrong(prompt("Enter a number"));

/**
 * 2) Fibonacci Series/Sequence
 * next number is the sum of previous two numbers
 * example -> 0, 1, 1, 2, 3, 5, 8, 13, 21 etc.
 *
 *
 * With Recursion
 */
function fibonacci_series(n) {
  if (n === 0) {
    return [0];
  } else {
    if (n === 1) {
      return [0, 1];
    } else {
      var s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
}
//alert(`The Fibonacci Series of ${1} numbers is --> ${fibonacci_series(1)}`);

/**
 * Without Recursion
 */
function fibonacci(nNumbers) {
  if (nNumbers > 0) {
    const result = [0, 1];
    for (var i = 2; i < nNumbers; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }
    return result; // or result[nNumbers-1] for upto nth term
  } else {
    return [0];
  }
}
// alert(`The Fibonacci Series of ${10} numbers is --> ${fibonacci(10)}`);

/**
 * Palindrome string
 * Reverse of the string equals the string itself
 * example -> noon, madam, wow
 */
let isPalindrome = function (string) {
  let strLower = string.toLowerCase();
  if (strLower == strLower.split('').reverse().join('')) {
    alert(string + ' is palindrome.');
  }
  else {
    alert(string + ' is not palindrome.');
  }
}
// isPalindrome('Lol');

/**
 * String Reverse
 * 
 * example -> "I love JavaScript" will be "tpircSavaJ evol I"
 */
let strReverse = str => str.split('').reverse().join('');
// alert(strReverse('Hello World'));

/**
 * example -> "I love JavaScript" will be "JavaScript love I"
 */
let wordReverse = str => str.split(' ').reverse().join(' ');
// alert(wordReverse('Hello World'));

/**
 * example -> "I love JavaScript" will be "I evol tpircSavaJ"
 */
let individualWordReverse = (str) => {
  let splitedStr = str.split(' ');
  let newStr = [];
  for (let i in splitedStr) {
    newStr.push(splitedStr[i].split('').reverse().join(''));
  }
  return newStr.join(' ');
}
// alert(individualWordReverse('Hello World'));

/**
 * Decimal to binary, hexadecimal, octal
 * 
 * using parseInt 
 */
let dec_to_bho = (n, base) => {

  if (n < 0) {
    n = 0xFFFFFFFF + n + 1;
  }

  switch (base) {
    case 'B':
      return parseInt(n, 10).toString(2);
      break;
    case 'H':
      return parseInt(n, 10).toString(16);
      break;
    case 'O':
      return parseInt(n, 10).toString(8);
      break;
    default:
      return ("Wrong input.........");
  }
}
// alert(`Binary for ${120} is ${dec_to_bho(120, 'B')}`);
// alert(`Hexadecimal for ${120} is ${dec_to_bho(120, 'H')}`);
// alert(`Octal for ${120} is ${dec_to_bho(120, 'O')}`);

/**
 * Factorial of a Number
 * 
 * n! = n * (n - 1) * (n - 2) * ...*1
 * P.S. Hint: n! can be written as n * (n-1)! 
 * For instance: 3! = 3*2! = 3*2*1! = 6
 */
let factorial = n => n ? n * factorial(n - 1) : 1;
// alert(factorial(5));

/**
 * Swap Number
 * 
 * Input: a=10 b=20
 * Output: a=20 b=10
 * 
 * without using 3rd variable
 * 
 * es6 array swap
 * shortest style
 */
let swapES6 = (a, b) => {
  alert(`Entered values -> a: ${a} b: ${b}`);
  [a, b] = [b, a];
  alert(`Swapped values -> a: ${a} b: ${b}`);
}
// swapES6(1, 5);

/**
 * swap classic
 * better performance than array
 * fastest
 */
let swap = (a, b) => {
  alert(`Entered values -> a: ${a} b: ${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  alert(`Swapped values -> a: ${a} b: ${b}`);
}
// swap(1, 5);

/**
 * using 3rd or temporary variable
 * most maintainable
 */
let swapNums = (a, b) => {
  alert(`Entered values -> a: ${a} b: ${b}`);
  let temp = '';
  temp = a;
  a = b;
  b = temp;
  alert(`Swapped values -> a: ${a} b: ${b}`);
}
// swapNums(1, 5);

/**
 * Generator function
 * 
 * Generators simplify iterator-authoring using function* and yield.
 *  A function declared as function* returns a Generator instance.
 * Generators are subtypes of iterators which include additional 
 * next and throw. 
 */
function* idMaker() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
let gen = idMaker()
// console.log(gen.next().value);  // → 0
// console.log(gen.next().value);  // → 1
// console.log(gen.next().value);  // → 2

/**
 * async await
 * 
 * await is a new operator used to wait for a promise 
 * to resolve or reject. 
 * It can only be used inside an async function.
 */
//Example 1
function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 2000);
  });
}

async function msg() {
  const msg = await scaryClown();
  // console.log('Message:', msg);
}

// msg(); // Message: 🤡 <-- after 2 seconds

//Example 2
function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks');
    }, 300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();
  // console.log(`${a} ${b} ${c}`);
}

// msg(); // 🤡 lurks in the shadows <-- after 1 second

//Example 3
/**
 * A word of caution however, in the above example 
 * each step is done sequentially, 
 * with each additional step waiting for the step before to resolve 
 * or reject before continuing.
 */
// If you instead want the steps to happen in parallel, 
// you can simply use Promise.all 
// to wait for all the promises to have fulfilled:
async function msg() {
  const [a, b, c] = await Promise.all([who(), what(), where()]);
  // console.log(`${a} ${b} ${c}`);
}
// msg(); // 🤡 lurks in the shadows <-- after 

// Example 4
// Promise returning
async function hello() {
  return 'Hello Alligator!';
}
// hello().then(x => console.log(x)); // Hello Alligator!

// Example 5
// Error handling
function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 or 1, at random

    val ? resolve('Lucky!!') : reject('Nope 😠');
  });
}
// using try catch()
async function msg() {
  try {
    const msg = await yayOrNay();
    // console.log(msg);
  } catch(err) {
    // console.log(err);
  }
}

// msg();
// msg();
// msg();
// msg();
// msg();

// or with a .catch()
async function msg() {
  const msg = await yayOrNay();
  // console.log(msg);
}
// msg().catch(x => console.log(x));

/**
 * Set Data-structure
 *
 * Creating sets 
 */
// 1) use the constructor without any parameters to create an empty Set:
const emptySet = new Set();
// console.log(emptySet.size == 0); // true

// 2)pass an iterable (e.g., an Array) to the constructor. 
// The iterated values become elements of the new Set:
let set = new Set(['red', 'green', 'blue']);
// console.log(set.size == 3); // true

/**
 * Adding, deleting, checking, clearing 
 * from the set 
 */
// Adding
let set = new Set();
set.add('red');

// the .add() method adds elements to a Set and is chainable:
let set = new Set()
  .add('red')
  .add('green')
  .add('blue');

// Deleting
let deleteFromSet = set.delete('red');
// console.log(deleteFromSet == true); // there was a deletion

// Checking 
let has = set.has('blue');
// console.log(has); // false

// Clearing
let clear = set.clear();
// console.log(set.size == 0); // All elements in set cleared

// set to sort an array
let sorted1 = Array.from(new Set(["b","a","c"])).sort();
// console.log(sorted1); //logs: ["a", "b", "c"]

/*************************************************************
 *************************************************************
 * Array Methods *********************************************
 *************************************************************
 *************************************************************
 */

/**
 * toString()
 * The JavaScript method toString() converts an array to a string 
 * separated by a comma.
 */
let colors = ['green', 'yellow', 'blue'];
// console.log(colors.toString());

/**
 * join()
 * The JavaScript join() method combines all array elements into a string.
 * It is similar to toString() method, but here you can specify the 
 * separator instead of the default comma.
 */

let colors = ['green', 'yellow', 'blue'];
// console.log(colors.join('-')); // green-yellow-blue

/**
 * concat()
 * This method combines two arrays together or add more items 
 * to an array and then return a new array.
 */
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];

let merged = firstNumbers.concat(secondNumbers);
// console.log(merged); // [1, 2, 3, 4, 5, 6]

/**
 * PUSH()This method adds items to the end of an array
 * and changes the original array.
 */
let browsers = ['chrome', 'firefox', 'edge'];

browsers.push('safari', 'opera mini');
// console.log(browsers);
// ["chrome", "firefox", "edge", "safari", "opera mini"]

/**
 * POP() This method removes the last item 
 * of an array and returns it.
 */
let browsers = ['chrome', 'firefox', 'edge'];
browsers.pop(); // "edge"
// console.log(browsers); // ["chrome", "firefox"]

/**
 * SHIFT()
 * This method removes the first item of an array and returns it
 */
let browsers = ['chrome', 'firefox', 'edge'];
browsers.shift(); // "chrome"
// console.log(browsers); // ["firefox", "edge"]

/**
 * UNSHIFT()
 * This method adds an item(s) to the beginning of an array 
 * and changes the original array.
 */
let browsers = ['chrome', 'firefox', 'edge'];
browsers.unshift('safari');
// console.log(browsers); //  ["safari", "chrome", "firefox", "edge"]

/**
 * SPLICE()
 * This method changes an array, by adding, removing and inserting elements.
 * 
 * The syntax is:
 * array.splice(index[, deleteCount, element1, ..., elementN])
 * 
 * Index here is the starting point for removing elements in the array
 * deleteCount is the number of elements to be deleted from that index
 * element1, …, elementN is the element(s) to be added
 * Removing items
 * after running splice(), it returns the array with the item(s) removed and removes it from the original array.
 */
let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(0, 3);
// console.log(colors); // ["purple"]
// deletes ["green", "yellow", "blue"]
// NB: The deleteCount does not include the last index in range.

// If the second parameter is not declared, every element starting from 
// the given index will be removed from the array:
let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(3);
// console.log(colors); // ["green", "yellow", "blue"]
// deletes ['purple']

// In the next example we will remove 3 elements from the array and replace them with more items:
let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];
// removes 4 first elements and replace them with another
schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');
// console.log(schedule);
// ["we", "are", "going", "to", "swim", "tommorrow"]

// Adding items
// To add items, we need to set the deleteCount to zero
let schedule = ['I', 'have', 'a', 'meeting', 'with'];
// adds 3 new elements to the array
schedule.splice(5, 0, 'some', 'clients', 'tommorrow');
// console.log(schedule);
// ["I", "have", "a", "meeting", "with", "some", "clients", "tommorrow"]

/**
 * SLICE()
 * This method is similar to splice() but very different. It returns subarrays instead of substrings.
 * 
 * This method copies a given part of an array and returns that copied part as a new array. 
 * It does not change the original array.
 * 
 * The syntax is:
 * array.slice(start, end)
 * 
 * Here’s a basic example:
 */
let numbers = [1, 2, 3, 4]
numbers.slice(0, 3)
// returns [1, 2, 3]
// console.log(numbers) // returns the original array

/**
 * The best way to use slice() is to assign it to a new variable.
 */
let message = 'congratulations'
const abbrv = message.slice(0, 7) + 's!';
// console.log(abbrv) // returns "congrats!"

/**
 * SPLIT()
 * This method is used for strings. It divides a string into substrings and returns them as an array.
 * 
 * Here’s the syntax:
 * string.split(separator, limit);
 * The separator here defines how to split a string either by a comma.
 * The limit determines the number of splits to be carried out
 */
let firstName = 'Sourav';
// return the string as an array
firstName.split() // ["Sourav"]

// another example:
let firstName = 'hello, my name is sourav, I am a dev.';
firstName.split(',', 2); // ["hello", " my name is sourav"]

// NB: If we declare an empty array, like this: firstName.split(''); 
// then each item in the string will be divided as substrings:
let firstName = 'Sourav';
firstName.split('') // ["S", "o", "u", "r", "a", "v"]

/**
 * INDEXOF()
 * This method looks for an item in an array and returns the index where it was found else it returns -1
 */
let fruits = ['apple', 'orange', false, 3];
fruits.indexOf('orange'); // returns 1
fruits.indexOf(3); // returns 3
fruits.indexOf(null); // returns -1 (not found)

/**
 * LASTINDEXOF()
 * This method works the same way indexOf() does except that it works from right to left. 
 * It returns the last index where the item was found
 */
let fruits = ['apple', 'orange', false, 3, 'apple']
fruits.lastIndexOf('apple'); // returns 4

/**
 * FILTER()
 * This method creates a new array if the items of an array pass a certain condition.
 * 
 * The syntax is:
 * let results = array.filter(function(item, index, array) {
 *  returns true if the item passes the filter
 * });
 * 
 * Example:Checks users from Nigeria
 */
const countryCode = ['+234', '+144', '+233', '+234'];
const nigerian = countryCode.filter(code => code === '+234');
// console.log(nigerian); // ["+234", "+234"]

/**
 * MAP()
 * This method creates a new array by manipulating the values in an array.
 * 
 * Example:
 * Displays usernames on a page. (Basic friend list display)
 */
const userNames = ['tina', 'danny', 'mark', 'bolaji'];
const display = userNames.map(item => {
  '<li>' + item + '</li>';
})
const render = '<ul>' + display.join('') + '</ul>';
// console.log(render);

// another example:
// adds dollar sign to numbers
const numbers = [10, 3, 4, 6];
const dollars = numbers.map(number => '$' + number);
// console.log(dollars);
// ['$10', '$3', '$4', '$6'];

/**
 * REDUCE()
 * This method is good for calculating totals.
 * 
 * reduce() is used to calculate a single value based on an array.
 * 
 * The syntax is:
 * let value = array.reduce(function(previousValue, item, index, array) {
 *  ...
 * }, initial);
 * 
 * example:
 * To loop through an array and sum all numbers in the array up, 
 * we can use the for of loop.
 */
const numbers = [100, 300, 500, 70];
let sum = 0;
for (let n of numbers) {
  sum += n;
}
// console.log(sum);

// Here’s how to do same with reduce()
const numbers = [100, 300, 500, 70];
const sum = numbers.reduce((accummulator, value) => accummulator + value, 0);
// console.log(sum); // 970

// If you omit the initial value,
// the total will by default start from the first item in the array.
const numbers = [100, 300, 500, 70];
const sum = numbers.reduce((accummulator, value) => accummulator + value);
// console.log(sum); // still returns 970

/**
 * FOREACH() 
 * This method is good for iterating through an array.
 * 
 * It applies a function on all items in an array
 */
const colors = ['green', 'yellow', 'blue'];
colors.forEach((item, index) => {
  // console.log(index, item);
});
// returns the index and the every item in the array
// 0 "green"
// 1 "yellow"
// 2 "blue"

// iteration can be done without passing the index argument
const colors = ['green', 'yellow', 'blue'];
colors.forEach((item) => {
  // console.log(item);
});
// returns every item in the array
// "green"
// "yellow"
// "blue"

/**
 * EVERY()
 * This method checks if all items in an array pass the specified condition and return true if passed, else false.
 * 
 * check if all numbers are positive
 */
const numbers = [1, -1, 2, 3];
let allPositive = numbers.every((value) => {
  value >= 0;
});
// console.log(allPositive);

/**
 * SOME()
 * This method checks if an item (one or more) in an array 
 * pass the specified condition and return true if passed, else false.
 * checks if at least one number is positive
 */
const numbers = [1, -1, 2, 3];
let atLeastOnePositive = numbers.some((value) => {
  value >= 0;
});
// console.log(atLeastOnePositive);

/**
 * INCLUDES()
 * This method checks if an array contains a certain item. 
 * It is similar to .some(), 
 * but instead of looking for a specific condition to pass,
 * it checks if the array contains a specific item. 
 */
let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
users.includes('baddy'); // returns true
// If the item is not found, it returns false

/*************************************************************
 *************************************************************
 * Object Methods ********************************************
 *************************************************************
 *************************************************************
 */

/**
 * The Object.assign() method is used to copy the values of all
 * enumerable own properties from one or more source objects to a 
 * target object. It will return the target object.
 */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

/**
 * The Object.create() method creates a new object, using an 
 * existing object as the prototype of the newly created object.
 */
const person = {
  isHuman: false,
  printIntroduction: function () {
    // console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Sourav";
// "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Sourav. Am I human? true"

/**
 * The static method Object.defineProperty() defines a new 
 * property directly on an object, or modifies an existing 
 * property on an object, and returns the object.
 * 
 * Note: You call this method directly on the Object constructor 
 * rather than on an instance of type Object.
 */
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

// object1.property1 = 77;
// throws an error in strict mode

// console.log(object1.property1);
// expected output: 42

/**
 * The Object.defineProperties() method defines new or modifies 
 * existing properties directly on an object, 
 * returning the object.
 */
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

// console.log(object1.property1);
// expected output: 42

/**
 * The Object.entries() method returns an array 
 * containing all of the [key, value] pairs of a 
 * given object's own enumerable string properties.
 */
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  // console.log(`${key}: ${value}`);
}
// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

/**
 * The Object.freeze() method freezes an object. 
 * A frozen object can no longer be changed; 
 * freezing an object prevents new properties from being added to 
 * it, existing properties from being removed, prevents changing 
 * the enumerability, configurability, or writability of existing 
 * properties, and prevents the values of existing properties 
 * from being changed. 
 * In addition, freezing an object also 
 * prevents its prototype from being changed. freeze() returns 
 * the same object that was passed in.
 */
const obj = {
  prop: 42
};

Object.freeze(obj);

// obj.prop = 33;
// Throws an error in strict mode

// console.log(obj.prop);
// expected output: 42

/**
 * The Object.fromEntries() method 
 * transforms a list of key-value pairs into an object.
 */
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

// console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

/**
 * The Object.getOwnPropertyDescriptor() method returns 
 * a property descriptor for an own property 
 * (that is, one directly present on an object 
 * and not in the object's prototype chain) of a given object.
 */
const object1 = {
  property1: 42
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

// console.log(descriptor1.configurable);
// expected output: true

// console.log(descriptor1.value);
// expected output: 42

/**
 * The Object.getOwnPropertyDescriptors() method 
 * returns all own property descriptors of a given object.
 */
const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

// console.log(descriptors1.property1.writable);
// expected output: true

// console.log(descriptors1.property1.value);
// expected output: 42

/**
 * The Object.getOwnPropertyNames() method 
 * returns an array of all properties 
 * (including non-enumerable properties 
 * except for those which use Symbol) 
 * found directly in a given object.
 */
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

// console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

/**
 * The Object.getOwnPropertySymbols() 
 * method returns an array of all symbol properties 
 * found directly upon a given object.
 */
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

// console.log(objectSymbols.length);
// expected output: 2

/**
 * The Object.getPrototypeOf() method returns the prototype 
 * (i.e. the value of the internal [[Prototype]] property) 
 * of the specified object.
 */
const prototype1 = {};
const object1 = Object.create(prototype1);

// console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true

/**
 * The Object.is() method determines 
 * whether two values are the same value.
 */
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true

Object.is(NaN, 0 / 0);       // true

/**
 * The Object.isExtensible() method determines 
 * if an object is extensible 
 * (whether it can have new properties added to it).
 */
const object1 = {};

// console.log(Object.isExtensible(object1));
// expected output: true

Object.preventExtensions(object1);

// console.log(Object.isExtensible(object1));
// expected output: false

/**
 * The Object.isFrozen() determines if an object is frozen.
 */
const object1 = {
  property1: 42
};

// console.log(Object.isFrozen(object1));
// expected output: false

Object.freeze(object1);

// console.log(Object.isFrozen(object1));
// expected output: true

/**
 * The Object.isSealed() method determines if an object is sealed.
 */
const object1 = {
  property1: 42
};

// console.log(Object.isSealed(object1));
// expected output: false

Object.seal(object1);

// console.log(Object.isSealed(object1));
// expected output: true

/**
 * The Object.keys() method 
 * returns an array of a given object's 
 * own enumerable property names, in the same order 
 * as we get with a normal loop.
 */
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

// console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

/**
 * The Object.preventExtensions() method 
 * prevents new properties from ever being added to an object 
 * (i.e. prevents future extensions to the object).
 */
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  // console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}

/**
 * The Object.seal() method seals an object, 
 * preventing new properties from being added to it 
 * and marking all existing properties as non-configurable. 
 * Values of present properties can still be changed 
 * as long as they are writable.
 */
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
// console.log(object1.property1);
// expected output: 33

// delete object1.property1; 
// throws error: cannot delete when sealed
// console.log(object1.property1);
// expected output: 33

/**
 * The Object.setPrototypeOf() method sets the prototype 
 * (i.e., the internal [[Prototype]] property) 
 * of a specified object to another object or null.
 */
var dict = Object.setPrototypeOf({}, null);

/**
 * The Object.values() method returns an array of a given 
 * object's own enumerable property values, 
 * in the same order as that provided by a for...in loop 
 * (the difference being that a for-in loop 
 * enumerates properties in the prototype chain as well).
 */
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

// console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

/**
 * call()/apply() and bind()
 * 
 * You can use call()/apply() to invoke the function immediately. 
 * 
 * So bind() can be used when the function needs to be called 
 * later in certain events when it's useful. 
 */

/**
 * call() or Function.prototype.call()
 * 
 * The first parameter in call() method sets the "this" value, 
 * which is the object, on which the function is invoked upon.
 * 
 * The rest of the parameters are the 
 * arguments to the actual function.
 */
//Demo with javascript .call()
var obj = { name: "Sourav" };

var greeting = function (a, b, c) {
  return `welcome ${this.name} to  ${a} ${b} in ${c}`;
};

// console.log(greeting.call(obj, "Gachibowli", "Hyderabad", "TG"));
// returns output as welcome Sourav to Gachibowli Hyderabad in TG

/**
 * apply() or Function.prototype.apply()
 * 
 * The only difference of apply() with the call() method is that 
 * the second parameter of the apply() method accepts the 
 * arguments to the actual function as an array.
 */
//Demo with javascript .apply()

var obj = { name: "Sourav" };

var greeting = function (a, b, c) {
  return `welcome ${this.name} to  ${a} ${b} in ${c}`;
};

// array of arguments to the actual function
var args = ["Gachibowli", "Hyderabad", "TG"];
// console.log("Output using .apply() below ")
// console.log(greeting.apply(obj, args));
// Output using .apply() below
// welcome Sourav to Gachibowli Hyderabad in TG 

/**
 * bind() or Function.prototype.bind()
 * 
 * bind() returns a bound function that, when executed later, 
 * will have the correct context ("this") for calling the 
 * original function.
 */
//Use .bind() javascript
var obj = { name: "Sourav" };

var greeting = function (a, b, c) {
  return `welcome ${this.name} to  ${a} ${b} in ${c}`;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj);

// console.dir(bound); // returns a function
// console.log("Output using .bind() below ");
// console.log(bound("Gachibowli", "Hyderabad", "TG")); //call the bound function
// Output using .bind() below
// welcome Sourav to Gachibowli Hyderabad in TG

/*************************************************************
 *************************************************************
 * RxJS ******************************************************
 *************************************************************
 *************************************************************
 */

/**
 * from()
 * 
 * Creates an Observable from an Array, an array-like object, 
 * a Promise, an iterable object, or an Observable-like object.
 * Converts almost anything to an Observable.
 */
let array = [10, 20, 30, 40];
let result = from(array);

// result.subscribe(x => console.log(x));

/**
 * of()
 * 
 * Converts the arguments to an observable sequence.
 */
let list = of(10, 20, 30)

// list.subscribe(
//   next => console.log('next:', next),
//   err => console.log('error:', err),
//   () => console.log('the end'),
// );

/**
 * map()
 * 
 * Applies a given project function to each value 
 * emitted by the source Observable, 
 * and emits the resulting values as an Observable.
 * 
 * Like Array.prototype.map(), it passes each source value 
 * through a transformation function 
 * to get corresponding output values.
 */
let clicks = fromEvent(document, 'click');
let positions = clicks.pipe(map(ev => ev.clientX));
// positions.subscribe(x => console.log(x));

/**
 * tap()
 * 
 * Perform a side effect for every emission on the source 
 * Observable, but return an Observable 
 * that is identical to the source.
 */
let clicks = fromEvent(document, 'click');
let positions = clicks.pipe(
  tap(ev => console.log(ev)),
  map(ev => ev.clientX),
);
// positions.subscribe(x => console.log(x));

/**
 * pluck()
 * 
 * Maps each source value (an object) 
 * to its specified nested property.
 */
let clicks = fromEvent(document, 'click');
let tagNames = clicks.pipe(pluck('target', 'tagName'));
// tagNames.subscribe(x => console.log(x));

/**
 * switchMap()
 * 
 * The main difference between switchMap and other flattening 
 * operators is the cancelling effect. 
 * On each emission the previous inner observable 
 * (the result of the function you supplied) 
 * is cancelled and the new observable is subscribed. 
 * You can remember this by the phrase 
 * switch to a new observable.
 * 
 * This works perfectly for scenarios like typeaheads
 */
let clicks = fromEvent(document, 'click');
let switchIntervals = clicks.pipe(
  // restart counter on every click
  switchMap(() => interval(1000))
);
// switchIntervals.subscribe(console.log);

/**
 * mergeMap() or flatMap()
 * 
 * Projects each source value to an Observable 
 * which is merged in the output Observable.
 * 
 * Map and flatten each letter to an Observable ticking every 1 second
 */
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x + i))),
);
// result.subscribe(x => console.log(x));

/**
 * debounceTime()
 * 
 * Emits a value from the source Observable 
 * only after a particular time span has passed 
 * without another source emission.
 * 
 * used in typeahead
 */
// elem ref
const searchBox = document.getElementById('search');
// streams
const keyup$ = fromEvent(searchBox, 'keyup');
// wait .5s between keyups to emit current value
let searchedString = keyup$.pipe(
  map(i => i.currentTarget.value),
  debounceTime(500)
);
// searchedString.subscribe(console.log);

/**
 * distinctUntilChanged()
 * 
 * Returns an Observable that emits all items 
 * emitted by the source Observable 
 * that are distinct by comparison from the previous item.
 */
let duplicateItems = of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4);
let unique = duplicateItems.pipe(distinctUntilChanged());
// unique.subscribe(x => console.log(x));

/**
 * take()
 * 
 * Emits only the first count values emitted by the source Observable.
 */
const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
// takeFive.subscribe(x => console.log(x));

/**
 * takeUntil()
 * 
 * Emits the values emitted by the source Observable 
 * until a notifier Observable emits a value.
 */
const source = interval(1000);
const clicks = fromEvent(document, 'click');
const result = source.pipe(takeUntil(clicks));
// result.subscribe(x => console.log(x));

/**
 * takeWhile()
 * 
 * Emit values until provided expression is false.
 * 
 * When the optional inclusive parameter is set to true 
 * it will also emit the first item 
 * that didn't pass the predicate.
 */
//emit 1,2,3,4,5
let source$ = of(1, 2, 3, 4, 5);
//allow values until value from source is greater than 4, then complete
let takenValue = source$.pipe(takeWhile(val => val <= 4));
// log: 1,2,3,4
//takenValue.subscribe(val => console.log(val));

// with inclusive flag, the value causing 
let source$ = of(1, 2, 3, 9);
// the predicate to return false will also be emitted
let takenValue = source$.pipe(takeWhile(val => val <= 3, true))
// log: 1, 2, 3, 9
// takenValue.subscribe(console.log);

/**
 * takeLast()
 * 
 * Emit the last n emitted values before completion
 */
const source = of('Ignore', 'Ignore', 'Hello', 'World!');
// take the last 2 emitted values
const example = source.pipe(takeLast(2));
// Hello, World!
// example.subscribe(val => console.log(val));

/**
 * concat()
 * 
 * Subscribe to observables in order as previous completes
 */
let concatObservables = concat(
  of(1, 2, 3),
  // subscribed after first completes
  of(4, 5, 6),
  // subscribed after second completes
  of(7, 8, 9)
);
// concatObservables.subscribe(console.log);
// log: 1, 2, 3, 4, 5, 6, 7, 8, 9

/**
 * merge()
 * 
 * Flattens multiple Observables together 
 * by blending their values into one Observable.
 */
let clicks = fromEvent(document, 'click');
let timer = interval(1000);
let clicksOrTimer = merge(clicks, timer);
// clicksOrTimer.subscribe(x => console.log(x));

/**
 * forkJoin()
 * 
 * when all observables complete, provide the last
 * emitted value from each as dictionary
 * 
 * as of RxJS 6.5+ we can use a dictionary of sources
*/
let forkJoinObservables = forkJoin({
  google: ajax.getJSON('https://api.github.com/users/google'),
  microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
  users: ajax.getJSON('https://api.github.com/users')
});
// forkJoinObservables.subscribe(console.log);
// { google: object, microsoft: object, users: array }

/**
 * count()
 * 
 * Tells how many values were emitted, when the source completes.
 */
let seconds = interval(1000);
let clicks = fromEvent(document, 'mouseup');
let secondsBeforeClick = seconds.pipe(takeUntil(clicks));
let result = secondsBeforeClick.pipe(count());
// result.subscribe(x => console.log(x));

