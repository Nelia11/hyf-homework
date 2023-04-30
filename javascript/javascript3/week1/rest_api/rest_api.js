//https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA24Kmj67SU0w5oXTaZPwkaYcvN4WUArYg

async function myFun() {
    try{
        const res = await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA24Kmj67SU0w5oXTaZPwkaYcvN4WUArYg");
        const data = await res.json();
        console.log(data);
    } catch(e) {
        console.log(e);
    }
}

myFun();