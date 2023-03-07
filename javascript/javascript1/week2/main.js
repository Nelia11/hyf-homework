//Part one homework
console.log("My username on freeCodeCamp is: Nelia11.")

//Flight booking fullname function. Formal fullname 
let fullname1 = "Nelia";
let fullname2 = "Levit";

function getFullname(firstname, surname, useFormalName = false, isWoman = false) {
    if (firstname === "" || surname === "") {
        alert("Please, enter the name. Can’t be blank or empty !"); // alert for an empty string as firstname and lastname
    } else if ( useFormalName === true && isWoman === true) {
        console.log(`Lady ${firstname} ${surname}`); // formal, woman
    } else if (useFormalName === true && isWoman === false) {
        console.log(`Lord ${firstname} ${surname}`); // formal, man
    } else if (useFormalName === false && isWoman === false) {
        console.log(`${firstname} ${surname}`); // unformal
    } else if (useFormalName === true) {
        console.log(`Lord ${firstname} ${surname}`); // formal fullname by default for man
    } else {
        console.log(`${firstname} ${surname}`)
    }
    return `${firstname} ${surname}`;
}

getFullname("Benjamin", "Hughes"); // returns Benjamin Hughes
getFullname(fullname1, fullname2); // returns fullname1, fullname2

getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
getFullname("Benjamin", "Hughes", false); // returns "Benjamin Hughes"
getFullname(fullname1, fullname2, true, true); // returns Lady fullname1, fullname2
getFullname(fullname1, fullname2, false, true); // returns fullname1, fullname2
getFullname(""); // alert for blank input

//Event application
const daysWeek = [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"];

function getEventWeekday(days) {
    let currentDate = new Date(); // date from system 
    let futureDate = currentDate.getDate() + days; // adding days to current date
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
    return result;

}

getEventWeekday(0)