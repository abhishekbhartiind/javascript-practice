/**
 * We can check if a value is an Array by using the 
 * Array.isArray method available from the Array global object. 
 * It returns true when the parameter pass to it is an Array otherwise false.
 */

console.log(Array.isArray(5)); // false
console.log(Array.isArray("")); // false
console.log(Array.isArray()); // false
console.log(Array.isArray(null)); // false
console.log(Array.isArray({ length: 5 })); // false
console.log(Array.isArray([])); // true

/**
 * Set object is an ES6 feature that lets you store unique values, primitives or object references. 
 * A value in a Set can only occur once. 
 * It checks if a value exists in the set object using the SameValueZero algorithm.
 */

 const set1 = new Set();
 const set2 = new Set(["a","b","c","d","d","e"]);

//! FizzBuzz
/**
    for (let i = 1; i <= 100; i++) {
        let f = i % 3 == 0, b = i % 5 == 0;
        console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
    }
*/