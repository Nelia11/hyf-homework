const currencies = [];
const ratesStorage = {};

const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");

const inputTag = document.getElementById("from-amount");
const toConverted = document.getElementById("to-amount");

async function fetchCurrencyRates(base = "EUR") {
    try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
        const data = await res.json();

        currencies.push(...Object.keys(data.rates));

        return data;
    } catch (err) {
        console.error(`Something went wrong: ${err}`);
    } 
}

async function generateOptions() {
    await fetchCurrencyRates();
    const htmlOptions = currencies
    .map((option) => {
        return `<option value="${option}">${option}</option>`;
    }).join(" ");

    fromSelect.innerHTML = htmlOptions;
    toSelect.innerHTML = htmlOptions;
    toSelect.value = "DKK";
}

generateOptions();

async function convert(amount, from, to) {
    if(!ratesStorage[from]) {
        //console.log(`Unable to convert from ${from} to ${to}`);
        const rates = await fetchCurrencyRates(from);
        //console.log(rates);
        ratesStorage[from] = rates;
    }
    const rate = ratesStorage[from].rates[to];
    const convertedAmount = rate * amount;
    //console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
}

//console.log(ratesStorage);
//convert(10, "EUR", "DKK");

inputTag.addEventListener("input", inputHandler);

async function inputHandler(event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    const amount = await convert(
        inputTag.value, 
        fromSelect.value, 
        toSelect.value
    );
    toConverted.innerHTML = amount.toFixed(2);
}