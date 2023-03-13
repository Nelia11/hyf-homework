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

//Series duration of my life
const seriesDurations = [];

seriesDurations.push(
    {
    title: "Unorthodox",
    days: 0,
    hours: 3,
    minutes: 36,
    },
);

seriesDurations.push(
    {
    title: "Wrong Turn",
    days: 0,
    hours: 11,
    minutes: 56,
    },
);

seriesDurations.push(
    {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
    },
);

function logOutSeriesText(seriesDurations) {
    // write code here
    const minsInYear = 365 * 24 * 60; //convert  1 year in min
    const minsInLifespan = 80 * minsInYear; // convert lifespan in min
    let minsSpent = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        const currentSeriesDurations = seriesDurations[i];
        const totalMinsTV = currentSeriesDurations.days * 24 * 60 + currentSeriesDurations.hours * 60 + currentSeriesDurations.minutes;
        minsSpent += totalMinsTV;
        const percent = ((minsSpent/minsInLifespan) * 100).toFixed(3);
        console.log(`${currentSeriesDurations.title} took ${percent}% of my life`);
    }
    const totalPercent = ((minsSpent/minsInLifespan) * 100).toFixed(3);
    console.log(`In total that is ${totalPercent}% of my life`);
  }
  
logOutSeriesText(seriesDurations);
