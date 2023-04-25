function jokeCreator(shouldTellFunnyJoke = true, logFunnyJoke, logBadJoke) {
    shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
    console.log("HTML is a programming language.");
};

function logBadJoke() {
    console.log("AI will replace you.");
};

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);