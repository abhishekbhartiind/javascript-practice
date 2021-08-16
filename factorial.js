/**
 * Implement a function named factorial that has one parameter: an integer, . 
 * It must return the value
 */

const factorial = (number) => {
    return number >= 1
    ? number * factorial(number - 1)
    : 1
}

console.log(factorial(15))