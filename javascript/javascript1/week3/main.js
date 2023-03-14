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

//NOnoN0nOYes (Note taking app)

//Save a note
const notes = [];

function saveNote(content, id) {
  // write some code here
  return notes.push({content, id});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
function getNote(id) {
  // your code here
  if (id === undefined || isNaN(id)) {
    return console.error("invalid ID or ID not found");
  }

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) {
    return note;
    }
  }
  return console.error(`Note with ID ${id} not found`);

}
  const firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}
  
//Log out notes
function logOutNotesFormatted() {
    // your code here
    for (i = 0; i < notes.length; i++) {
    const note = notes[i];
    console.log(`The note with id ${note.id}, has the following note text: ${note.content}`);
    }
    return notes;
}
logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// Unique feature 
function jobIsDone(id) { // show note that is done and show notes that remained
  if (id === undefined || isNaN(id)) {
    return console.error("invalid ID or ID not found");
  }

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) {
    notes.splice(i, 1);
    console.log(`The note with id ${note.id} and content ${note.content} is done!`);
    return logOutNotesFormatted();
    }
  }
  return console.error(`Note with ID ${id} not found`);
}

jobIsDone(2);
