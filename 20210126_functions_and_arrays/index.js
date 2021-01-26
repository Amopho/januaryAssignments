const userPrint = (firstName, add, age) => {
  console.log(`Hi ${firstName}, your ${age}, your address is ${add}`);
};
userPrint("Hadi", "Berlin", 31);

// defeult value
const halloUser = (userName = "Zain") => {
  console.log(`Hi ${userName}.`);
};
halloUser();
halloUser("Hadi");

// spread syntax
//array
const arr = ["Hi", "I", "You"];
const cloneArr = [101, ...arr, "super nice"];
cloneArr[0] = "cool";
console.log(cloneArr);
console.log(arr);

// ...args

// const sum = (x, y, z, w, s, u, q) => x + y + z + w + s + u + q;
// console.log(sum(2, 4, 5, 5, 76, 7, 2));
// const arr = ["Hi", "I", "You"];

const sum = (x, y) => x + y; // or {x+y} is the same
console.log(sum(2, 4));
const printFunThingsToDo = (userName, age, ...arr) => {
  console.log(arr);
  console.log(`Hi ${userName} I am ${age}, you like ${arr}`);
};
printFunThingsToDo("Hadi", 31, "Coding", "Do fun things", "Cool draws");

const numbers = (...nums) => {
  console.log(nums[0] + nums[1]);
  console.log(nums[nums.length - 1]);
};

numbers(2, 4, 5, 67, 7, 8, 3);
//cool functions
// (function printMyName() {
//   console.log(`Hi I am cool function `);
// })();

(function printMyName(x, y) {
  console.log(`Hi I am cool function ${x + y}`);
})(2, 3);

// Write a function that returns  “Two for me and one for you” when no arguments are passed
(function unfair(who) {
  who // ternary operator- display with who when it is given as an argument
    ? console.log(`Two for me and one for ${who}`)
    : console.log(`Two for me and one for you`); // otherwise display a defeult sentence
})("Fran");

// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"

// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
(function power(basis, raise) {
  raise // ternary operator- display with who when it is given as an argument
    ? console.log(`Result ${Math.pow(basis, raise)}`)
    : console.log(`Result ${Math.pow(basis, 2)}`); // otherwise display a defeult sentence
})(3);

// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9

// Write a function that it returns the total amount of arguments passed to it.
// e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1

// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70

// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14
