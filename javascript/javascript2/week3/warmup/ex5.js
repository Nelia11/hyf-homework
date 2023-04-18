const btnTag = document.getElementById("btn");
const info = document.getElementById("info");

btnTag.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(successCallback);
});

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    info.innerHTML = `This is the latitude: ${latitude}. <br> This is the longitude: ${longitude}.`
};