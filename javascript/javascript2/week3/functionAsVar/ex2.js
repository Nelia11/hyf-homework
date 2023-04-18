/* So if you try to call a function expression before it's loaded, 
you'll get an error! If you call a function declaration instead, 
it'll always work, because no code can be called until all declarations are loaded. */

const functionAsConst = () => { //Function expressions load only when the interpreter reaches that line of code.
    console.log("This is function as const");
}

function classicFunction() { //Function declarations load before any code is executed.
    console.log("This is the standart function");
}

classicFunction();
functionAsConst()