function myFunction(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog)
    }, delay * 1000);
}
myFunction(5, "This string logged after 5 seconds");
myFunction(2.5, "This string logged after 2.5 seconds");
myFunction(3, "This string logged after 3 seconds");

const buttonTag = document.getElementById("btn");

buttonTag.addEventListener("click", () => {
    myFunction(5, "Called after 5 seconds");
});