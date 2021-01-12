// Alina Pinda
//Assignements day, 12.01.2021

/* Hi Hadi, did almost all the given exercices, ecxept of those with drawing patterns (ex. 6 and 7). I left them because of failing time for me. I will practice them on the evening. What is more, some of the commands only display things instead of being functions. If I wouldn't stay untill midday only I would wrap them in the function curly brackets... Hopefully checking those I made won't irritate you... to much. I have to admitt that this work brought my brain into flames.*/

console.log("--------Exercise 1-------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

const lessThanNull = (number) => number< 0;
console.log("Number is lower than '0':" + lessThanNull(15));

console.log("--------Exercise 2-------");

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

function doggyAgeCalc(howOld) {
    var dogAge = 7*howOld;
    console.log("Your furry friend is " + dogAge + " in dog years");
}

doggyAgeCalc(1);

console.log("--------Exercise 3-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.


function lifeTimeBingeing (bingeAmmount, howOld) {
    const century = 100;
    let totalBingeing = (bingeAmmount* 365) * (century - howOld);
    console.log("Your going to eat " + totalBingeing + " packs of junk food until you die")
}

lifeTimeBingeing(2, 25)

console.log("--------Exercise 4-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];


    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let follMonth = console.log(months[4]);

console.log("--------Exercise 5-------");
    // Try to do it by yourself and don't look in yesterday solution. I trust you :)
    // Count Occurrences.
    // Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
    
    const howManySameLetters = (str, chr) => {
        let sentenceToArrays = str.split('');
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

    let storeArr= ["milk", "eggs", "cheese", "butter"];
    console.log(storeArr.includes("ketchup"));
    console.log(storeArr.includes("eggs"));
    
console.log("--------Exercise 9-------");
    // Extra work :)
    // create a repo for this app. we are coming later to it :)
    // Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password
    
    function generatePassword() { 
        let inputPass = ''; 
        let availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'; 
          
        for (i = 1; i <= 30; i++) { 
            let char = Math.floor(Math.random() 
                        * availableCharacters.length + 1); 
              
            inputPass += availableCharacters.charAt(char) 
        } 
          
        return inputPass; 
    }
    
    console.log("Your new password: " + generatePassword());
