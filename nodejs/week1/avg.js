const newArr = process.argv.slice(2);
if(newArr.length === 0) {
    console.log("You did not provide arguments")
    return;
} else {
    const containsNaN = newArr.some(isNaN);

    if(containsNaN) {
        console.log("Provided arguments are not numbers");
        return;
    } else {
        const avg = newArr.reduce((acc, val) => Number(acc) + Number(val)) / newArr.length;
        console.log(avg);
    }
}