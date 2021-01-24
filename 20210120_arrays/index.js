const arr1 = []; // 1st way
arr1.push("Hi");
console.log(arr1);
const arr2 = ["Good", "Day"];

// new Arra
const arr3 = new Array();
arr3.push("cool");
console.log(arr3);
//.of()
let newArr = Array.of(1, 44, 55, 6);
console.log(newArr);

//.sort()
// to sort the elements in any array
// will use the UTF-16 code
let alpha = ["c", "b", "a", "A", "1", "$"];
let newSortedAlpha = alpha.sort();
console.log(newSortedAlpha);
//.reverse()
// to reverse an array aka first is last and last is firrst
let crazyArr = [3, 55, 2];
let crazyArrRe = crazyArr.reverse();
console.log(crazyArrRe);

// let arr5 = 0;

// //LOOPS
// // do - declare the counter outside the counter, conditions comes after the curly brackets
// let counter = 1;
// do {
//   console.log(counter);
//   arr5.push("Hi");
//   counter++;
// } while (counter <= 10);

// while

let loopOne = 1;
while (loopOne < 5) {
  loopOne++;
  console.log(loopOne);
}

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

// No Duplicates!
//  A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

// Dictionary. (take your time on this pls ) also as tip you can use .includes()
//  Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []
