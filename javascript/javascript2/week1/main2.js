const buttonTag = document.getElementById("myButton");

function captureName() {
    const input = document.getElementById("input").value;
    if (input === "") {
        document.getElementById("output").innerHTML = "Please enter first name";
    } else if (/^[a-zA-Z]+$/.test(input)) {
        document.getElementById("output").innerHTML = input +" - The " + getRandomAnimal(spiritAnimals);
    } else {
        document.getElementById("output").innerHTML = "Plese use only letters"
    }
}

const selectOption = document.getElementById("dropdown");

selectOption.addEventListener("change", function(){
    const value = selectOption.value;
    const inputTag = document.getElementById("input");

    if (value === "click") {
        buttonTag.addEventListener("click", captureName);
        inputTag.removeEventListener("mouseover", captureName);
        inputTag.removeEventListener("input", captureName);
    } else if (value === "hover") {
        inputTag.addEventListener("mouseover", captureName);
        buttonTag.removeEventListener("click", captureName);
        inputTag.removeEventListener("input", captureName);
    } else if (value === "isWritten") {
        inputTag.addEventListener("input", captureName);
        inputTag.removeEventListener("mouseover", captureName);
        buttonTag.removeEventListener("click", captureName);
    }
})

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
