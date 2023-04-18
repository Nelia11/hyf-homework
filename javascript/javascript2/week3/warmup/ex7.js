function runAfterDelay(delay, callback){
    setTimeout(callback, delay * 1000)
};

runAfterDelay(4, function() {
    console.log("should be logged after 4 seconds");
});
runAfterDelay(2, function() {
    console.log("should be logged after two seconds");
});