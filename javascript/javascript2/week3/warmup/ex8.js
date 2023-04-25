let timeout;
let counter = 0;

document.addEventListener("click", () => {
    counter++;
    console.log(counter);
    switch (counter) {
        case 1:
            timeout = setTimeout(() => {
                counter = 0;
            }, 500);
            break;
        case 2:
            clearTimeout(timeout);
            console.log("double click");
            counter = 0;
            break;
    }
})