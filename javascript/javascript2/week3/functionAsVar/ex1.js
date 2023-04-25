const arr = [one, two, three];

function one() {
    console.log("first function");
};

function two() {
    console.log("second function");
};

function three() {
    console.log("third function");
};

arr.forEach(func => func());