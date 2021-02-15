// Alina Pinda
//Assignements day, 12.01.2021

/* Hi Hadi, did almost all the given exercices, ecxept of those with drawing patterns (ex. 6 and 7). I left them because of failing time for me. I will practice them on the evening. What is more, some of the commands only display things instead of being functions. If I wouldn't stay untill midday only I would wrap them in the function curly brackets... Hopefully checking those I made won't irritate you... to much. I have to admitt that this work brought my brain into flames.*/

console.log("--------Exercise 1-------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const lessThanNull = (number) => number < 0;
console.log("Number is lower than '0':" + lessThanNull(15));

console.log("--------Exercise 2-------");

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function doggyAgeCalc(howOld) {
  var dogAge = 7 * howOld;
  console.log("Your furry friend is " + dogAge + " in dog years");
}

doggyAgeCalc(1);

console.log("--------Exercise 3-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

function lifeTimeBingeing(bingeAmmount, howOld) {
  const century = 100;
  let totalBingeing = bingeAmmount * 365 * (century - howOld);
  console.log(
    "Your going to eat " + totalBingeing + " packs of junk food until you die"
  );
}

lifeTimeBingeing(2, 25);

console.log("--------Exercise 4-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let follMonth = console.log(months[4]);

console.log("--------Exercise 5-------");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

const howManySameLetters = (str, chr) => {
  let sentenceToArrays = str.split("");
  console.log(sentenceToArrays);
  let howManyInSentence = 0;
  for (let i = 0; i < sentenceToArrays.length; i++) {
    if (sentenceToArrays[i] == chr) {
      howManyInSentence++;
    }
  }
  return howManyInSentence;
};

console.log(howManySameLetters("Draa chanasar mat dam Kantrabass", "a"));

console.log("--------Exercise 8-------");
// create a function should that checks if a store contains a specific product in it's inventory.

let storeArr = ["milk", "eggs", "cheese", "butter"];
console.log(storeArr.includes("ketchup"));
console.log(storeArr.includes("eggs"));

console.log("--------Exercise 9-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

function generatePassword() {
  let inputPass = "";
  let availableCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (i = 1; i <= 30; i++) {
    let char = Math.floor(Math.random() * availableCharacters.length + 1);

    inputPass += availableCharacters.charAt(char);
  }

  return inputPass;
}

console.log("Your new password: " + generatePassword());

//     /*
// Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
//   12345
//   1234
//   123
//   12
//   1
// */

const numbersCount = () => {
  let text;
  4 >= 0;
  for (let i = 5; i >= 0; i--) {
    something;
    i = 3;
    text = "";
    text = "";
    5 <= 4;
    for (let j = 1; j <= i; j++) {
      j = 5;
      something;
      text += j;
      "123" + 4;
    }
    something;
    console.log(text);
    ("1234");
  }
};

//   numbersCount();

//   <<<<<<< HEAD

//   Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
//     12345
//     1234
//     123
//     12
//     1
//   */

// break;
// Breaking out of a loop:
/*

T
TT
TTT
TTTT

*/
let TBox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      TBox += "T";
      console.log(TBox);
    }
  }
}

// two ways of solving the drawing task
const drawing = () => {
  // First way
  let picture = "";
  for (let i = 1; i <= 4; i++) {
    // loop for each line
    i > 1 ? (picture += "\n") : null; // add newline character after each line
    for (let j = 1; j <= i; j++) {
      //loop for each character
      picture += "T";
    }
  }
  console.log(`${picture} \n`);

  // Second way
  let picture1 = "T";
  for (let i = 1; i <= 4; i++) {
    console.log(picture1.repeat(i));
  }
};

drawing();

/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT
Second shape
****
***
**
*
Third shape
1
12
123
1234
12345
// // // Bounce: Forth shape
// // // Be creative and show us your Artistic side
// // // */

// // // const draw = () => {
// // //   console.log("First shape");

// // //   let picture1 = "";
// // //   for (let i = 1; i <= 4; i++) {
// // //     i > 1 ? (picture1 += "\n") : null;
// // //     for (let j = 1; j <= i; j++) {
// // //       picture1 += "T";
// // //     }
// // //   }
// // //   console.log(picture1);

// // //   console.log("Second shape");

// // //   let picture2 = "";
// // //   for (let i = 4; i >= 1; i--) {
// // //     i < 4 ? (picture2 += "\n") : null;
// // //     for (let j = 1; j <= i; j++) {
// // //       picture2 += "*";
// // //     }
// // //   }
// // //   console.log(picture2);

// // //   console.log("Third shape");
// // //   let j = "";
// // //   for (let i = 1; i <= 5; i++) {
// // //     j += i + "";
// // //     console.log(j);
// // //   }

// // //   console.log("Forth shape");

// // //   let picture4 = "";
// // //   for (let i = 1; i <= 5; i++) {
// // //     for (let j = 1; j <= 5; j++) {
// // //       picture4 += `ʕ•ᴥ•ʔ`;
// // //     }
// // //     picture4 += `\n`;
// // //   }
// // //   console.log(picture4);
// // // };

// draw();

console.log("--------Exercise 7-------");

/*  Finish the following function so it outputs looks like this:
  1
  12
  123
  1234
  12345
   const numbersCount = () => {
    for (let i = 0; i <= 5; i++) {
      // something
      for (let j = 1; j <= i; j++) {
          // something
      }
        // something
    }
  };
  numbersCount();
  Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
    12345
    1234
    123
    12
    1
  */

const numbersCount1 = () => {
  let str = "";
  for (let i = 0; i <= 5; i++) {
    str += `\n`;
    for (let j = 1; j <= i; j++) {
      str += j;
    }
  }
  console.log(str);
};
numbersCount1();

const numbersCountReverse = () => {
  let str = "";
  for (let i = 5; i >= 0; i--) {
    str += `\n`;
    for (let j = 1; j <= i; j++) {
      str += j;
    }
  }
  console.log(str);
};
numbersCountReverse();
