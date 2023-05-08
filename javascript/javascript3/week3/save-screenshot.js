import env from "./env.json" assert {type:"json"};

const input = document.getElementById("inputURL");
const formGet = document.getElementById("form1");

const divTag = document.getElementById("box");
const image = document.createElement("img");

const btnSave = document.getElementById("btn-save");
const btnCancel = document.getElementById("btn-cancel");

const btnList = document.getElementById("btn-list");
const myGallery = document.getElementById("gallery")

formGet.addEventListener("submit", getScreenshot);

function getScreenshot(e) {
    e.preventDefault();
    image.src = input.value;
    divTag.appendChild(image);
}

btnSave.addEventListener("click", saveScreenshot);

async function saveScreenshot(url, src) {
    try {
        const res = await fetch(`https://${env.baseURL}/api/${env.apiToken}/screenshots`, {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                url: input.value,
                src: input.value
            })
        })
        const data = await res.json();
        console.log(data)
    } catch(e) {
        console.log(e);
    }
    cancelScreenshot();
}

btnCancel.addEventListener("click", cancelScreenshot);

function cancelScreenshot() {
    (divTag.contains(image)) && divTag.removeChild(image);
}

btnList.addEventListener("click", renderGallery);

async function getList() {
    try {
        const res = await fetch(`https://${env.baseURL}/api/${env.apiToken}/screenshots`);
        const data = await res.json();
        console.log(data);
        return data;
    } catch(e) {
        console.log(e)
    }
}

async function renderGallery() { 
    myGallery.innerText = "";
    const data = await getList();
    //console.log(data[0]._id);

    data.forEach(item => {
        const wrapper = document.createElement("div");
        const image = document.createElement("img");
        wrapper.appendChild(image);

        if(item.src !== "") {
            const btnDelete = document.createElement("button");
            btnDelete.innerText = "Delete";
            wrapper.appendChild(btnDelete);
            btnDelete.addEventListener("click", () => {
                deleteScreenshot(item._id)
                btnDelete.parentNode.remove();
            });
        }


        image.src = item.src;

        myGallery.appendChild(wrapper);
    })

    btnCloseAll();

}

function btnCloseAll() {
    const btnCloseAll = document.createElement("button");
    btnCloseAll.innerText = "Close all";
    myGallery.appendChild(btnCloseAll);
    btnCloseAll.addEventListener("click", () => {
        const images = myGallery.querySelectorAll("div");
        images.forEach(image => myGallery.removeChild(image));
        btnCloseAll.style.display = "none";
    })
}

async function deleteScreenshot(id) {
    try {
        const res = await fetch(`https://${env.baseURL}/api/${env.apiToken}/screenshots/${id}`,{
            method: "DELETE"
        });
    } catch(e) {
        console.log(e);
    }
}


// async function test() {
//     const url = 'https://website-screenshot6.p.rapidapi.com/screenshot?url=https%3A%2F%2Frapidapi.com%2Fmarketplace&width=1920&height=1080&fullscreen=true';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cc50b58122msh6db94dd8136f094p14c905jsn889e7873546e',
// 		'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// test()