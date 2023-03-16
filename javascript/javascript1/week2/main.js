//Part one homework
console.log("My username on freeCodeCamp is: Nelia11.")

//Flight booking fullname function. Formal fullname 
let fullname1 = "Nelia";
let fullname2 = "Levit";

function getFullname(firstname, surname, useFormalName) {
    if (!firstname || !surname) {
      console.log("Please, add a valid first name and surname");
    }
    
    if (useFormalName) {
      console.log("Lord " + firstname + " " + surname);
    } else {
      console.log(firstname + " " + surname);
    }
  }
  
  getFullname("Benjamin", "Hughes");
  getFullname(fullname1, fullname2);
  getFullname("Benjamin", "Hughes", true);
  getFullname("Benjamin", "Hughes", false);
  
  function getFullname(firstname, surname, useFormalName, gender) {
    if (!firstname || !surname) {
        console.log("Please, add a valid first name and surname");
      }

    if (useFormalName) {
        if (gender === "woman") {
            console.log("Lady " + firstname + " " + surname);
        } else {
            console.log("Lord " + firstname + " " + surname);
        }
    } else {
        console.log(firstname + " " + surname);
    }
  }
  getFullname(fullname1, fullname2, true, "woman");
  getFullname("Hans", "Andersen", true, "man");

//Event application
const daysWeek = [
    "Saturday",
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday" 
    ];

function getEventWeekday(days) {
    let currentDate = new Date().getDay(); // date from system 
    let futureDate = currentDate + days; // adding days to current date
    result = futureDate % 7; // checking with modulo
    switch (result) { // switch statement 
        case 0:
            console.log(daysWeek[1]);
            break;
        case 1:
            console.log(daysWeek[2]);
            break;
        case 2:
            console.log(daysWeek[3]);
            break;
        case 3:
            console.log(daysWeek[4]);
            break;
        case 4:
            console.log(daysWeek[5]);
            break;
        case 5:
            console.log(daysWeek[6]);
            break;
        case 6:
            console.log(daysWeek[0]);
            break;
        }
        if (isNaN(result) || days === "") {// test for missing argument
            console.log("Please, enter a date");
        }
        return result;
    
    }

    getEventWeekday("0");
    
    //Weather wear
     function getDressed(temp) {
    
        if (!temp) {
            return `Please, enter a temperature`;
        } else if (isNaN(temp)) {
            return `Please, enter a number`;
        } else if (temp >= 35 || temp <= -20) {
            return `It is better to stay home.`;
        } else if (temp >= 20 && temp < 35) {
            return `get shorts and a t-shirt`;
        } else if (temp >= 10 && temp < 20) {
            return `your favourite jeans and a jaket`;
        } else if (temp > -20 && temp < 10) {
            return `It is a sweater weather`;
        }

        return temp;
    }
    const clothesToWear = getDressed("0");
    console.log(clothesToWear);


//Student manager
const class07Students = [];


function addStudentToClass(studentName) {

    if (!class07Students.includes(studentName) // excludes duplicates
    && studentName != ``) { //  and does not add an empty string
        class07Students.push(studentName);
    } else if (class07Students.includes(studentName)) { // if includes duplicats does not add it
        console.log(`Student ${studentName} is already in the class`);
    }

    if (class07Students.length <= 6 
        && studentName === "Queen") { // always space for Queen
            class07Students.push();
        } else if (class07Students.length > 6 
        && studentName !== "Queen") { // otherwise max.length = 6
            class07Students.length = 6;
            console.log("Cannot add more students to class 07");
        } 

    return studentName;
}

addStudentToClass(""); 
addStudentToClass("Anna"); // 1
addStudentToClass("Maria"); // 2
addStudentToClass("Viktor"); // 3
addStudentToClass("Peter"); // 4
addStudentToClass("Viktoria"); // 5
addStudentToClass("Nelia"); // 6
addStudentToClass("Christian"); // Cannot add more students to class 07
addStudentToClass("Mathilda"); // Cannot add more students to class 07
addStudentToClass("Peter"); //  Student Peter is already in the class
addStudentToClass("Queen"); // adds Queen


console.log(class07Students)

function getNumberOfStudents(number) {
  number = class07Students.length;
  return number;
}
console.log(getNumberOfStudents());

// Candy helper 
const boughtCandyPrices = []; //array to store prices of different candies

//price list for 1g
const sweet = 0.5;
const chocolate = 0.7;
const toffee = 1.1;
const chewingGum = 0.03;

function addCandy(candyType = sweet, weight = 10) { //default value of parameters
    result = candyType * weight; // price for selected weight;
    return boughtCandyPrices.push(result); // push result to array
}
//add some sweets to array
addCandy(toffee, 20);
addCandy(chocolate, 30);
addCandy(chewingGum, 10);
console.log(boughtCandyPrices); // prices in array: 22, 21, 0.3

let amountToSpend = Math.random() * 100; // random number assigned to value we can spend
console.log(`You can spend up to $${amountToSpend.toFixed(2)}`); // round value to 2 decimals

let sum = 0;
let i = 0;
while (i < boughtCandyPrices.length) { // while loop to loop through an array
    sum = sum + boughtCandyPrices[i]; // each array element would be summed up to the value of sum
    i++;
}

console.log(`It will cost $${sum}`); // sum is 43.3

function canBuyMoreCandy(boughtCandyPrices) { // check if sum <, <= amountToSpend

    sum < amountToSpend ? 
    console.log("You can buy more, so please do") : 
    console.log("Enough candy for you!");

    return boughtCandyPrices;
}

canBuyMoreCandy();