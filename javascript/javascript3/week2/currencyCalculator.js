const currencies = [];
const ratesStorage = JSON.parse(localStorage.getItem("ratesStorage")) || {};

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
    currencies.forEach(currency => {
        const optionFrom = document.createElement("option");
        optionFrom.setAttribute("value", currency);
        optionFrom.innerHTML = currency;
        fromSelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.setAttribute("value", currency);
        optionTo.innerHTML = currency;
        toSelect.appendChild(optionTo);
        toSelect.value = "DKK";
    })
}
generateOptions()

async function convert(amount, from, to) {
    if(!ratesStorage[from]) {
        const rates = await fetchCurrencyRates(from);
        ratesStorage[from] = rates;
        localStorage.setItem("ratesStorage", JSON.stringify(ratesStorage));
    }
    const rate = ratesStorage[from].rates[to];
    const convertedAmount = rate * amount;
    return convertedAmount;
}

inputTag.addEventListener("input", inputHandler);

async function inputHandler(event) {
    const amount = await convert(
        inputTag.value, 
        fromSelect.value, 
        toSelect.value
    );
    toConverted.innerHTML = amount.toFixed(2);
}