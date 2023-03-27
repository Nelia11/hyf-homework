function numOfLetter(str) {
    let total = 0;
    let æ = 0;
    let ø = 0;
    let å = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "æ") {
            æ++;
        } else if (str[i] === "ø") {
            ø++;
        } else if (str[i] === "å") {
            å++;
        }
    }
    total = æ + ø + å;
    let obj = {};
    total > 0 ? obj.total = total : console.log("danish letter not found");
    if (æ > 0) {
        obj.æ = æ;
    }
    if (ø > 0) {
        obj.ø = ø;
    }
    if (å > 0) {
        obj.å = å;
    }
    return obj;
}

const danishString = "Jeg har en blå bil";
const result = numOfLetter(danishString); 
console.log(result); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
const result2 = numOfLetter(danishString2); 
console.log(result2); // returns {total: 4, æ: 1, ø: 2, å: 1}

