
//Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fib(number) {
    let a = 0; 
    let b = 1;
    let c = number;
    if(isNaN(number) || number === 0) {
        return "Please enter a number greater than 1";
    }
    if(number === 1) {
      return a;
    }
    if(number === 2) {
      return b;
    }
    
    for (i = 3; i <= number; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
    }
    console.log(fib("text"));
    console.log(fib(0));
    console.log(fib(1));
    console.log(fib(2));
    console.log(fib(3));
    console.log(fib(4));
    console.log(fib(5));
    console.log(fib(6));
    console.log(fib(10));

//Fizz buzz
function fizzBuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

//sentiment analyzer
function getSentimentScore(text) {

    const words = text.toLowerCase().split(" ");
    
    const positiveWords = [];
    const negativeWords = [];

    const positive = ["happy", "awesome", "good", "nice", "super"];
    const negative = ["sad", "terrible", "boring", "hate", "ugly"];
    let score = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (positive.includes(word)) {
          score++;
          positiveWords.push(word);
        } else if (negative.includes(word)) {
          score--;
          negativeWords.push(word);
        }
    }

    let obj = {
        score,
        positiveWords,
        negativeWords,
    };
    return obj;
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

console.log(sentimentScoreObject); 

//Credit card number formatter
function formatCreditCardNumber(number) {
    let formattedCreditCardObject;

    if (isNaN(parseInt(number))) {
        console.log("Please enter a 16 - digits number");
    } else {
        const original = number.toString().slice(0, 16);
        const formatted = original.slice(0, 4) + " " + 
                          original.slice(4,8) + " " + 
                          original.slice(8, 12) + " " + 
                          original.slice(12,16);
        formattedCreditCardObject = {
            original,
            formatted,
        }
    }
    return formattedCreditCardObject;
}
const formattedCreditCardObject = formatCreditCardNumber(12341234123412341234);
console.log(formattedCreditCardObject);

//Character frequencies
function getCharacterFrequencies(str) {
    const freq = [];
    for (let i = 0; i < str.length; i++) {
      let charFound = false;
      for (let j = 0; j < freq.length; j++) {
        if (freq[j].character === str[i]) {
          freq[j].count++;
          charFound = true;
          break;
        }
      }
      if (!charFound) {
        freq.push({ character: str[i], count: 1 });
      }
    }
    return { characters: freq, length: str.length };
}
  
  console.log(getCharacterFrequencies('happy'));

//Palindromic substring
function getCardInfo(cardNumber) {
    const cardNumberString = cardNumber.toString();
    
    if (/^(?:4[0-9]{3}(?:[\ -]?[0-9]{4}){3})$/.test(cardNumberString)) {
      return 'visa';
    } else if (/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)(?:[-\ ]?[0-9]{4}){3}$/.test(cardNumberString)) {
      return 'mastercard';
    } else if (/^(5[06-8]|6\d|60)[0-9]{14,17}$/.test(cardNumberString)) {
      return 'maestro';
    } else if (/^5019(?:[-\ ]?[0-9]{4}){3}$/.test(cardNumberString)) {
      return 'dankort';
    } else {
      return 'unknown';
    }
}
console.log(getCardInfo(4781321334789876)); // 'visa'
console.log(getCardInfo(5573980017793113)); // 'mastercard'
