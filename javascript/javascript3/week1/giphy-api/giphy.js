import { giphyKey } from "../secret.js";

const inputSearch = document.getElementById("search");
const formTag = document.getElementById("formGif");
const inputAmount = document.getElementById("amount");
const output = document.getElementById("result");

async function fetchGiphs(searchWord, limitGiphs) {
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchWord}&limit=${limitGiphs}`);
        const obj = await res.json();
        return obj.data;
    } catch(err) {
        console.log(err);
    }
}

formTag.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchWord = inputSearch.value;
    const data = await fetchGiphs(searchWord);
    renderGifs(data);
});

inputAmount.addEventListener("input", async (event) => {
    event.preventDefault();
    const searchWord = inputSearch.value;
    const limitGiphs = inputAmount.value;
    const data = await fetchGiphs(searchWord, limitGiphs);
    renderGifs(data);
});

function renderGifs(data) {
    output.innerText = "";
    data.forEach((item) => {
        const divTag = document.createElement("div")
        const gif = document.createElement("img");
        gif.src = item.images.downsized.url;
        gif.width = 300;
        divTag.appendChild(gif);
        output.appendChild(divTag);
    });
}