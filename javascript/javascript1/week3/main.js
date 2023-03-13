console.log("My username on freeCodeCamp is: Nelia11.")

//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
// Write some code here
for(let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove){
        names.splice(i, 1);
        i--; // decrement the index variable so it does not skip the next item in the array
    }
}
// Code done
  
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
  
//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

function getTime(distance, speed) {
    let time = (distance / speed) * 60; // convert from hrs to minutes
    let hours = Math.trunc(time / 60); // get the integer part (full hour)
    let minutes = time % 60; // get the minutes
    return `${hours} hours and ${minutes.toFixed(0)} minutes`;
}

const travelTime = getTime(travelInformation.destinationDistance,
    travelInformation.speed);

console.log(travelTime);

