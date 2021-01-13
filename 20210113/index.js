/* Giving a free chosen assignment another chance to make it spark */

console.log("--------Exercise 4-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

const whichMonth = (inputNumber) => {
    let monthFollowNumb = inputNumber - 1; // because the index starts at 0 and counts until 11 in scope of 12 monts
    let displayResult = "";
    if (monthFollowNumb >=0 && monthFollowNumb <= 11) { // condition
        displayResult = months[monthFollowNumb]
    }
    else {
        displayResult = `Ohhh, In our solar system we have only between 1 and 12 months`
    }
    return displayResult
}

console.log(whichMonth(5));

// Drawing a pattern

const numbersCount = () => {
    let text;
    for (let i= 5; i >= 0; i--) { // I assign a value to variable
        // condition that is true 0< 5
        text = "";
        // text= "" - nothing
        //              1<=4 and so on, repeating until condition breaks
        for (let j=1; j<= i; j++) {
            // i write another loop in a last loop
            text += j;
        }
        // "1234" +2
        console.log(text);
    }
};

numbersCount();
