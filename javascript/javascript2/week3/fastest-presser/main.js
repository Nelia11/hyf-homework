const time = [];
let counterS = 0;
let counterL = 0;
let isTimerActive = false;

const inputTag = document.getElementById("time");
const startGameButton = document.getElementById("startGame");

const pTagForS = document.getElementById("s");
const resultS = document.createElement("p");
pTagForS.appendChild(resultS);

const pTagForL = document.getElementById("l");
const resultL = document.createElement("p");
pTagForL.appendChild(resultL);

const canvasS = document.getElementById("confettiS");
const canvasL = document.getElementById("confettiL");

startGameButton.addEventListener("click", () => {
    if (!/^\d+$/.test(inputTag.value)) {
        inputTag.placeholder = "Please enter a number";
        return;
    }

    let seconds = inputTag.value;
    startGameButton.innerHTML = seconds;
    const timer = setInterval(()=>{
        seconds--;
        startGameButton.innerHTML = "" + seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            seconds = 0;
            startGameButton.innerHTML = `Start game!`;
        }
    }, 1000);

    function resetGame() {
        counterS = 0;
        counterL = 0;
        resultS.innerHTML = `0`;
        resultL.innerHTML = `0`;
    };

    resetGame();
    isTimerActive = true;
    time.push(seconds);

    setTimeout(() => {
        resultS.innerHTML = `${counterS}`;
        resultL.innerHTML = `${counterL}`;
        switch(true) {
            case counterS > counterL:
              const jsConfettiS = new JSConfetti({ canvas: canvasS });
              jsConfettiS.addConfetti();
              startGameButton.innerHTML = `S wins!`;
              break;
            case counterL > counterS:
              const jsConfettiL = new JSConfetti({ canvas: canvasL });
              jsConfettiL.addConfetti();
              startGameButton.innerHTML = `L wins!`;
              break;
            case counterS === 0 || counterL === 0:
              startGameButton.innerHTML = `You didn't play!`;
              break;
            case counterS === counterL:
              startGameButton.innerHTML = `It's a tie!`;
              break;
          }

        isTimerActive = false;
    }, time.at(-1) * 1000);
});

document.addEventListener("keydown", (event) => {
    if(isTimerActive) {
        switch (event.key) {
            case "s":
                counterS++;
                resultS.innerHTML = `` + `${counterS}`;
                break;
            case "l":
                counterL++;
                resultL.innerHTML = `` + `${counterL}`;
                break;
        }
    }
});
