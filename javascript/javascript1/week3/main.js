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
  
