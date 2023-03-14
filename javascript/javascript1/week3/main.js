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

//CactusIO-interactive (Smart phone usage app)
//Adding an activity
const activities = [];
const limitUsage = 180; // usage limit is 180 min

function addActivity(date, activity, duration) {
    let actObj = {
        date,
        activity,
        duration,
    };
    activities.push(actObj);
}
showStatus(activities);
addActivity("23/7-18", "Youtube", 30);

//Show my status
function showStatus (activities) {

    if (activities.length === 0) {
        console.error("Add some activities before calling showStatus");
        return null;
    }

    let totalAmount = activities.length;
    let totalMins = 0;

    for (i = 0; i < activities.length; i++) {
        totalMins += activities[i].duration;
    }

    console.log(`You have added ${totalAmount} activities. They amount to ${totalMins} min. of usage`);
    //Usage limit
    totalMins > limitUsage ? 
    console.log("You have reached your limit, no more smartphoning for you!") :
    "";
}

addActivity("23/7-18", "Facebook", 60);
addActivity("23/7-18", "Instagram", 40);
addActivity("23/7-18", "Telegram", 51);

showStatus(activities);

//Extra feature 
function wastedTime(activities) { // calculate % of wasted time from day
    let totalMins = 0;
    let dayDurationMins = 24 * 60;
    
    for (i = 0; i < activities.length; i++) {
        totalMins += activities[i].duration;
    }

    let persentOfDay = ((totalMins / dayDurationMins) * 100).toFixed(1);
    console.log(`You successfully wasted ${persentOfDay}% of the day!`);
}
wastedTime(activities);

//Optional 
// improved the addActivity
function addActivityImproved(date = "", activity, duration) { // improved the addActivity
    if (!date) {
        date = new Date().toLocaleDateString("en-GB");
    }

    let actObj = {
        date,
        activity,
        duration,
    };
    activities.push(actObj);
}

addActivityImproved("", "Youtube", 15);
console.log(activities.at(-1));

// improved the showStatus
function showStatusImproved(activities) {
    const activityCountsByDate = {};
  
    for (let i = 0; i < activities.length; i++) {
      const activity = activities[i];
      if (activityCountsByDate[activity.date] === undefined) {
        activityCountsByDate[activity.date] = 0;
      }
      activityCountsByDate[activity.date]++;
    }
  
    for (const date in activityCountsByDate) {
      console.log(`The number of activities for ${date} is: ${activityCountsByDate[date]}`);
    }
  }
  showStatusImproved(activities);

// calculating the activity a user has spent the most time on 
function showActivityWithMaxDuration(activities) {
    let maxDuration = 0;
    let maxDurationActivity = null;
  
    for (let i = 0; i < activities.length; i++) {
      const activity = activities[i];
  
      if (activity.duration && activity.duration > maxDuration) {
        maxDuration = activity.duration;
        maxDurationActivity = activity.activity;
      }
    }
  
    console.log(`You spent the most time using ${maxDurationActivity}`);
  }

  showActivityWithMaxDuration(activities);