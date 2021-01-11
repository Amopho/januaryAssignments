const printFullWord = (firstName, age, add) => console.log('Hi `${firstName} I am ${age}, I live in ${add}`');

printFullWord("Hadi", 31, "Berlin");
printFullWord("Alie", 35, "Dresden");
let isLogged = false;
const login = () => {
    isLogged
};

login();

let name1= "Hadi";
let name2= "Zain";
let name3= "Nancy";
//              0       1       2
let namesArr = ["Hadi", "Zain", "Olga"];
console.log(namesArr[2]);
const numbers = [2, 0, 8, 3, 5, 1, 6, 4, 7, 9];
console.log(numbers[5]);

//loops

for (let i= 0; i<= 10; i++) {
    console.log(i);
}

for (let i= 1; i<= 10; i++) {
    console.log(`${i} * 1 = ${i * 1}`);
}

// array with names, make their first letters in upper case
const niceSmallNames = ["alie", "tolie", "tymie"];
for (let i = 0; i < niceSmallNames.length; i++) {
    console.log(niceSmallNames[i][0].toUpperCase()+ niceSmallNames[i].substring(1));
}

// count to 20 and determine if the following numbers are odd or even
for (let i=0; i<=20; i++) {
    i%2==0 ? console.log(`${i} is an even number`): console.log(`${i} is odd`);
}

// count to 1000 from 100, by adding 100
let centuries = "";
for (let i=100; i<=1000; i += 100) {
    console.log(centuries += 100);
}





