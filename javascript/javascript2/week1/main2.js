const buttonTag = document.getElementById("myButton");

function captureName() {
    let input = document.getElementById("input").value;
    if (input === "") {
        document.getElementById("output").innerHTML = "Please enter first name";
    } else if (/^[a-zA-Z]+$/.test(input)) {
        document.getElementById("output").innerHTML = input +" - The " + getRandomAnimal(spiritAnimals);
    } else {
        document.getElementById("output").innerHTML = "Plese use only letters"
    }
}

buttonTag.addEventListener("click", captureName);

const spiritAnimals = [
    "Amazing Unicorn",
    "Happy Lama",
    "Mystical Dragon",
    "Speedy Sloth",
    "Wild Wolf",
    "Courageous Pigeon",
    "Suspicious Racoon",
    "Aggressive Wasp",
    "Angry Beaver",
    "Innocent Snake",
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomAnimal (array) {
    return array[getRandomInt(10)];
}
