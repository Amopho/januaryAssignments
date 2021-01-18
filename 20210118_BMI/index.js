// Hi, I handled to do 3 of 6 given exercises on the same day they were assigned.

// Ex1.

//Mark and John and their BMIs
// Store Mark’s and John’s mass and height in variables.
let guysNames = ["Mark", "John"];
let mass = [65, 89];
let height = [1.8, 1.99];

// Calculate both their BMIs and store their BMIs in variables.
// BMI = mass/(height*height)// BMI- body mass index
// mass - in kg; height in m;

// Calculating BMIs with  values accessed from previous arrays;
let bmiMark = mass[0] / height[0] ** 2;
console.log(bmiMark);
console.log(`The Mark's body mass index is ${Math.floor(bmiMark)}`);

let bmiJohn = mass[1] / height[1] ** 2;
console.log(bmiJohn);
console.log(`The John's body mass index is ${Math.floor(bmiJohn)}`);

// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
let comparision = bmiMark > bmiJohn;
console.log(
  `Is Mark's BMI higher than this from John? Well, no it is not, it's ${comparision}.`
);

// Create an if statement which prints the name and BMI of the person with the highest BMI.

if (bmiMark > bmiJohn) {
  console.log(`The highest BMI has ${guysNames[0]}.`);
} else {
  console.log(`The highest BMI has ${guysNames[1]}.`);
}

// Ex2

//Am I still a baby?
// Make a variable for firstName and age and give each variable values.

let lookingAgeless = "Teenie";
let howOldIsAgeless = 50;
//Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”.

if (howOldIsAgeless < 13) {
  console.log(`${lookingAgeless} is a child.`);
} else if (howOldIsAgeless >= 13 && howOldIsAgeless < 20) {
  console.log(`${lookingAgeless} is a teenager.`); // cut that one by one 'else if'
} else {
  console.log(`${lookingAgeless} is an adult.`);
}

// Ex3

// Capitalize.
// Create a program that capitalizes the first letter of each element in an array of names. Examples:

let smallNames = ["matt", "sara", "lara"]; //Create an array
for (let i = 0; i < smallNames.length; i++) {
  // for loop where I starting from first string in array, doing one by one until each element of an array with length of smallNames is done;
  console.log(
    `${smallNames[i].charAt(0).toUpperCase() + smallNames[i].substr(1)}`
  ); // Take that string and display first character at the indices of 0 as capitalized and + substring of this string beginning from the second character.
}

/* 3 to go yet */

// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

// Ex4

// City Names.
// Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.

// Ex5

// Hello
//  Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
// Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.

// Ex6

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
