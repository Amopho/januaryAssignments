// let, var, const
let x = 10;
const personalId = 2525252;
var mainAdd = "Berlin";

//Strings
//          012345678910
let str = "This is a long.";

//bracket notions
console.log(str[10]);
// Escaping spatial characters \n , \', \"
let theStrWithChr = "I'am       \n Hi";
console.log(theStrWithChr);

//numbers
let y = 5;
console.log(x + y); // 10+5=15
let something;
console.log(something);
let float;
float = 22.5;
//typeof
console.log(typeof float);
console.log(typeof something);
console.log(typeof console);
// booleans
let bool = true;
console.log("bool =", bool);
let check = 12 < 20;
console.log(1 == 100);
let str1 = "Hi ";
let str2 = "I am Hadi";
console.log("check =", check);
console.log("__________________________");
// conditions (===, !==, >=, <=, >, <)
//
//==
//===
console.log(false);
console.log(!bool);
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

//Js methods from Math(.max, .min, .floor, .ceil, .random)

console.log(Math.min(22, 3, 45, 555, -1)); //-1
console.log(Math.max(1, 2, 455, 6675, 2, -1)); // 6675

let num1 = 33.5;
console.log(Math.floor(num1)); //33
console.log(Math.ceil(num1)); //34

let num2 = -33.5;
console.log(Math.floor(num2)); //33
console.log(Math.ceil(num2)); //34

let str3 = "Hi I like Javascript   ";
let userName = "Hadi             ";
let lastName = "Nsreeny     ";
console.log(userName);
console.log(lastName);
console.log(str3.length);
console.log(str3.trim().length);
console.log("________________________________");
let randomNum = Math.floor(Math.random() * str3.length);
console.log(str3[randomNum]); //
//JS methods for str (.trim, .length, .includes, .split, toUpperCase, .toLowerCase)
//                 Nsreeny.length
userName = "Hadi     ";
lastName = "Nsreeny       ";
// toUpperCase
let newLastName = lastName.trim().toUpperCase();
console.log(newLastName);
console.log(lastName);
console.log("Hi");
console.log(Math.floor(1.22) / Math.random());
console.log(1 / 0.07);
console.log("________________________________");
let str4 = "Hi I like. I need a 🍣. I want to sleep";
console.log(str4.includes("ooooo"));
console.log(str4.includes("need"));
let strToArr1 = str4.split(" ");
let strToArr = str4.split(".");
console.log(strToArr);
console.log(strToArr1);

// if
// || or, && and
if (1 == 122 || 1 == 1) {
  console.log("hi");
  x = 2 + 3;
  console.log("apple");
} else {
  console.log("Not cool");
}

// if (con) {
//correct
// } else { not true
// }
console.log("Hiiii");
// functions
function funName(num1, num2) {
  console.log(num1);
  let sumNumbers = 5555 + num1 * num2;
  return sumNumbers;
}
// [] {} () <> ; : , . - _ / \ ! ? @ % $
console.log(funName(2.5, 1));
// ES6 function
const functionName = () => {
  return `I am ES6 function`;
};
console.log(functionName());
//array
//
const names = ["Zain", "Olga", "Nancy"];
console.log(names[1]);
let number1 = 1;
//
console.log(names[number1]);
console.log(names[1]);
number1++;
console.log(names[number1]);
const NumArr = [22, 33, 55, 6754, 2, 22, 4, 55, 677, 432, 2];
console.log(NumArr[NumArr.length - 1]);
// for loop
let bOne = 33;
let billOneTip = 1.1;
result = `bOne ${Math.floor(bOne * billOneTip)}`;
console.log(result);
//
