import { googleFontskey } from "../secret.js";

async function fetchData() {
    try{
        const res = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontskey}`);
        const data = await res.json();
        console.log(data);
    } catch(e) {
        console.log(e);
    }
}

fetchData();