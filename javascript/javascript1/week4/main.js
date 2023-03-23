const names = [];
const notes = [];

function dialog() {
    const userInput = prompt("Hello there!");
    getReply(userInput);
}

function getReply(command) {

const words = command.split(" ");
  
if (words[0].toLowerCase() === "hello" && 
      words[1].toLowerCase() === "my" && 
      words[2].toLowerCase() === "name" && 
      words[3].toLowerCase() === "is") {
    const name = words.slice(4).join(" ");
    if (names.includes(name)) {
      alert(`Nice to see you again, ${name}!`);
    } else {
        names.push(name);
        alert(`Nice to meet you, ${name}!`);
    }

} else if (words.join(" ").toLowerCase() === "what is my name?") {

    if (names.length > 0) {
      alert(`Your name is ${names.at(-1)}`);
    } else {
        alert("Sorry, I don't know your name!");
    } 

} else if (words.at(0).toLowerCase() === "add" &&
           words.at(-3).toLowerCase() === "to" &&
           words.at(-2).toLowerCase() === "my" &&
           words.at(-1).toLowerCase() === "todo") {
    const note = words.slice(1, -3).join(" ");
    notes.push(note);
    alert(`${note} added to your todo`);

} else if (words.at(0).toLowerCase() === "remove" &&
           words.at(-3).toLowerCase() === "from" &&
           words.at(-2).toLowerCase() === "my" &&
           words.at(-1).toLowerCase() === "todo") {
    const note = words.slice(1, -3).join(" ");
    const index = notes.indexOf(note);
    if (index !== -1) {
      notes.splice(index, 1);
      alert(`Removed ${note} from your todo`);
    } else {
        alert(`${note} not found in your todo`);
    }

} else if (words.join(" ").toLowerCase() === "what is on my todo?") {
    if (notes.length > 0) {
        const numOfNotes = notes.length;
        alert(`You have ${numOfNotes} todo's: ${notes.join("; ")}`);
    } else {
        alert("You have nothing to do!");
    }

} else if (words.join(" ").toLowerCase() === "what day is it today?") {
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];

    const todayString = days[d.getDay()] + ", " + 
    d.getDate() + ". of " + 
    months[d.getMonth()] + " " + 
    d.getFullYear();

    alert(`Today is ${todayString}.`);

} else if (words.includes("+") || words.includes("-") || 
           words.includes("/") || words.includes("*")) {
    const operand1 = parseInt(words[2]);
    const operator = words[3];
    const operand2 = parseInt(words[4]);

    let result;
    switch(operator) {
        case "+": 
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
    } 
    
    alert(`It is ${result}`);

} else if (words.at(0).toLowerCase() === "set" &&
           words.at(1).toLowerCase() === "a" &&
           words.at(2).toLowerCase() === "timer" &&
           words.at(3).toLowerCase() === "for" &&
           words.at(-1).toLowerCase() === "minutes") {
    const interval = parseInt(words.at(-2)) * 60 * 1000;
    setTimeout(function() {
        alert("Timer: 00:00");
    }, interval);
    alert(`Timer set for ${words.at(-2)} minutes`);

} else if (words.join(" ").toLowerCase() === "what is the battery status?") {
    navigator.getBattery().then(function(battery) {
        let lvl = battery.level * 100;
        alert(`Battery level is at ${lvl.toFixed(0)}%`);
    })
    
} else {
    alert("Sorry, I don't understand you :(");
}
}

getReply("What is my name?");
getReply("Hello my name is Benjamin");
getReply("Hello my name is Benjamin");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 3 + 3");
getReply("What is 3 / 3");
getReply("Set a timer for 1 minutes");
getReply("What is the battery status?");