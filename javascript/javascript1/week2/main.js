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
getFullname("") // alert for blank input