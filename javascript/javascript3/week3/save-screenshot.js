import env from "./env.json" assert {type:"json"};

const input = document.getElementById("inputURL");
const formGet = document.getElementById("form1");

const divTag = document.getElementById("box");
const image = document.createElement("img");

const btnList = document.getElementById("btn-list");
const myGallery = document.getElementById("gallery");

const loggedUser = JSON.parse((localStorage.getItem("loggedInUser")));
const username = loggedUser.username;


async function createScreenshot(url) {
    const req = {
        encodedUrl : encodeURIComponent(url),
        width : screen.width,
        height : screen.height,
        fullscreen : true
    }
    const screenshotUrl = `https://${env.Xhost}/screenshot?url=${req.encodedUrl}&width=${req.width}&height=${req.height}&fullscreen=${req.fullscreen}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": `${env.Xkey}`,
            "X-RapidAPI-Host": `${env.Xhost}`
        }
    };

    try {
        const response = await fetch(screenshotUrl, options);
        const result = await response.json();
        console.log(result.screenshotUrl);
        return result.screenshotUrl;
    } catch (error) {
        console.error(error);
    }
}

formGet.addEventListener("submit", getScreenshot);

async function getScreenshot(e) {
    try {
        e.preventDefault();
        const source = await createScreenshot(input.value);
        image.src = source;
        console.log(source);
        divTag.appendChild(image);
        
        const btnSave = document.createElement("button");
        btnSave.innerText = "Save";
        divTag.appendChild(btnSave);
    
        btnSave.addEventListener("click", () => {
            saveScreenshot();
            btnSave.style.display = "none";
            btnCancel.style.display = "none";
        });
    
        const btnCancel = document.createElement("button");
        btnCancel.innerText = "Cancel";
        divTag.appendChild(btnCancel);
    
        btnCancel.addEventListener("click", () => {
            cancelScreenshot();
            btnCancel.style.display = "none";
            btnSave.style.display = "none";
        });
    } catch(e){
        console.log(e)
    }
}


async function saveScreenshot() {
    try {
        const res = await fetch(`https://${env.baseURL}/api/${env.apiToken}/${username}`, {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                url: input.value,
                src: await createScreenshot(input.value),
                username
            })
        })
        const data = await res.json();
        console.log(data)
    } catch(e) {
        console.log(e);
    }
    cancelScreenshot();
}

function cancelScreenshot() {
    (divTag.contains(image)) && divTag.removeChild(image);
}

btnList.addEventListener("click", () => {
    myGallery.innerText = "";
    renderGallery();
});

async function getList() {
    try {
        const res = await fetch(`https://${env.baseURL}/api/${env.apiToken}/${username}`);
        const data = await res.json();
        console.log(data);
        return data;
    } catch(e) {
        console.log(e)
    }
}

async function renderGallery() { 
    try {
        const data = await getList();

        !data || data.length === 0 ? myGallery.innerText = "Your gallery is empty" :
    
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
    } catch(e) {
        console.log(e);
    }
}

function btnCloseAll() {
    const btnCloseAll = document.createElement("button");
    btnCloseAll.innerText = "Close all";
    myGallery.appendChild(btnCloseAll);
    btnCloseAll.addEventListener("click", () => {
        const images = myGallery.querySelectorAll("div");
        images.forEach(image => myGallery.removeChild(image));
        btnCloseAll.style.display = "none";
        myGallery.innerText = "";
    })
}

async function deleteScreenshot(id) {
    try {
        const res = await fetch(`https://${env.baseURL}/api/${env.apiToken}/${username}/${id}`,{
            method: "DELETE"
        });
    } catch(e) {
        console.log(e);
    }
}