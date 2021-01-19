// conditions (===, !==, >=, <=, >, <)
//=
//==
//===
console.log(false);
let bool2 = false;
console.log(1 !== 1);
let che = 1 < 12;
console.log(che);
let age = 12;
let age2 = "12";
console.log("value check ==", age == age2); // true
console.log("value check ===", age === age2); // false
//ternary operator
console.log(true ? "I like apple" : "I like pizza");
console.log(1868677 < 100 ? "yeahhh" : "Nooo");
let varStr1 = "34";
let varStr2 = "43";
let resultStr = 1 < 55 ? varStr1 : varStr2;

console.log(resultStr);

//Js methgods from Math(.max, .min, .floor, .ceil, .random)

console.log(Math.min(22, 3, 45, 555, -1)); //-1
console.log(Math.max(1, 2, 455, 6675, 2, -1)); // 6675

let num1 = 33.5;
console.log(Math.floor(num1)); //33
console.log(Math.ceil(num1)); //34

let num2 = -33.5;
console.log(Math.floor(num2)); //33
console.log(Math.ceil(num2)); //34

let str3 = "Hi I like Javascript";
let userName = "Hadi ";
let lastName = "Nsreeny     ";
console.log(str3.trim());
console.log(str3.length);

let randomNum = Math.floor(Math.random() * str3.length);
console.log(str3[randomNum]); //
//JS methods for str (.trim, .length, .includes, .split, toUpperCase, .toLowerCase)
//                 Nsreeny.length
let newLastName = lastName.trim().toUpperCase();
console.log(newLastName);
console.log(lastName);
console.log("Hi");
console.log(Math.floor(1.22) / Math.random());

let str4 = "Hi I like. I need a. I want to sleep";
console.log(str4.includes("ooooo"));
let strToArr = str4.split(".");
console.log(strToArr);

let alie = "Hi";
console.log();
