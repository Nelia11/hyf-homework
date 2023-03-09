//Part one homework
console.log("My username on freeCodeCamp is: Nelia11.")

//
let yearOfBirth = 1996;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`)

//Age-ify (A future age calculator) 
let dogYearOfBirth = 2017;
let dogYearFuture = 2027
let dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYears = true; // can be changed to false
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`)
} else {
    console.log(`Your dog will be ${dogYearFuture - dogYearOfBirth} years old in ${dogYearFuture}.`);
}

//Housey pricey (A house price estimator)
function getHousePrice (houseW, houseD, houseH, gardenSizeInM2) {
    let result = houseW * houseD * houseH * 2.5 * 1000 + gardenSizeInM2 * 300;
    return result;
}

let peterHouseW = 8;
let peterHouseD = 10;
let peterHouseH = 10;
let peterGardenSizeInM2 = 100;
let peterHouseCost = 2500000;
let peterHousePrice = getHousePrice(8, 10, 10, 100);
//let peterHousePrice = peterHouseW * peterHouseD * peterHouseH * 2.5 * 1000 + peterGardenSizeInM2 * 300;
let peter = peterHouseCost > peterHousePrice ? "Peter pays too much." : "Peter pays too little.";

let juliaHouseW = 5;
let juliaHouseD = 11;
let juliaHouseH = 8;
let juliaGardenSizeInM2 = 70;
let juliaHouseCost = 1000000;
let juliaHousePrice = getHousePrice(5, 11, 8, 70);
//let juliaHousePrice = juliaHouseW * juliaHouseD * juliaHouseH * 2.5 * 1000 + juliaGardenSizeInM2 * 300;
let julia = juliaHouseCost > juliaHousePrice ? "Julia pays too much." : "Julia pays too little.";

console.log(peter);
console.log(julia);

//Ez Namey (Startup name generator)
const firstWords = ["Easy", "Awesome", "Green", "Reliable", "Smart", "Perfect", "Subsequent", "Feminist", "Other", "Nothern"];
const secondWords = ["Business", "Artificial", "Company", "Light", "Only", "Future", "Stories", "Comfort", "Touch", "Life"];
let startupName;
const randomNumber = Math.floor(Math.random() * 10);
startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;
let charAmount = startupName.length;
console.log(`The startup ${startupName} contains ${charAmount} characters.`)

//class exercises: Pizza project, part 1
let pizName = "Ouattro Formaggi";
let pizPrice = 20;
console.log (`New pizza order: ${pizName}. The price of the pizza is: $${pizPrice}.`)

//class exercises: Pizza project, part 2
let pizAmount = 5;
let isItFamily = true;
let pizFamily = "family size";
let pizMedium = "medium size";
if (isItFamily) {
    let totalPrice = pizPrice * pizAmount * 2;
    console.log(`New pizza order: ${pizAmount} ${pizFamily} ${pizName}. Total cost for the order is: $${totalPrice}.`);
} else {
    let totalPrice = pizPrice * pizAmount;
    console.log(`New pizza order: ${pizAmount} ${pizMedium} ${pizName}. Total cost for the order is: $${totalPrice}.`);
}