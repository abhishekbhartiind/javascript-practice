//! Given two strings, return true if they are anagrams of one another.

/**
What is Anagram?

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once. 
For example, the word anagram can be rearranged into nag a ram, 
or the word binary into brainy or the word adobe into abode.
 */

let firstWord = 'Binary'
let secondWord = 'Brainy'

const isAnagram = (firstString, secondString) => {
    let first = firstString.toLowerCase();
    let second = secondString.toLowerCase();

    first = first.split("").sort().join("")
    second = second.split("").sort().join("")

    return first === second
}

console.log(isAnagram(firstWord, secondWord))