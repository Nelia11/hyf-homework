window.addEventListener("DOMContentLoaded", () => {
    const alerts = document.querySelectorAll('.alert');

    alerts.forEach((alert) => {
        alert.style.display = "none";
    })
})

const inputTagName = document.getElementById("inputName");
const txtAreaMsg = document.getElementById("msg");

const formTag = document.getElementById("my-form");

const happy = document.getElementById("alert-happy");
const sad = document.getElementById("alert-sad");
const neutral = document.getElementById("alert-neutral");

const userNames = document.querySelectorAll(".user-name");

async function sentimentAnalysis(message) {
    const url = `https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${encodeURIComponent(message)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cc50b58122msh6db94dd8136f094p14c905jsn889e7873546e',
            'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.type;
    } catch (error) {
        console.error(error);
    }
}

formTag.addEventListener("submit", async (e) => {
    e.preventDefault();
    const type = await sentimentAnalysis(txtAreaMsg.value);
    showResult(type);
})

function showResult(type) {

    userNames.forEach(userName => {
        userName.innerText = inputTagName.value;
    });

    switch (type) {
        case "positive":
            happy.style.display = "block";
            sad.style.display = "none";
            neutral.style.display = "none";
            break;
        case "negative":
            sad.style.display = "block";
            happy.style.display = "none";
            neutral.style.display = "none";
            break;
        case "neutral":
            neutral.style.display = "block";
            happy.style.display = "none";
            sad.style.display = "none"
            break;
    }
}