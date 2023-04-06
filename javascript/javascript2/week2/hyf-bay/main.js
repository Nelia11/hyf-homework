console.log("Script loaded");
const products = getAvailableProducts();
//render random products 

function renderProducts(products) {
    const ulTag = document.querySelector("section ul");
    products.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
        <ul>
            <li>${product.name}</li>
            <li>price: ${product.price}</li>
            <li>Rating: ${product.rating}</li>
        </ul>
        `;
    ulTag.appendChild(liTag);
    })
}
renderProducts(products);

//render filtered products by searching the name 
const inputTag = document.getElementById("searchByName");
inputTag.addEventListener("input", () => renderFilteredArray(products));

function renderFilteredArray (products) {
    const filteredArray = products.filter(product => 
        product.name.toLowerCase().startsWith(inputTag.value.toLowerCase())
    );
     
    const ulTag = document.createElement("ul");
    filteredArray.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
            <ul>
              <li>${product.name}</li>
              <li>Price: ${product.price}</li>
              <li>Rating: ${product.rating}</li>
            </ul>
        `;
    ulTag.appendChild(liTag);
    });

    const result = document.querySelector("section ul");
    result.innerHTML = "";
    result.appendChild(ulTag);
}
renderFilteredArray(products);

const inputPriceTag = document.getElementById("maxPrice");
inputPriceTag.addEventListener("input", () => renderMaxPrice(products));

function renderMaxPrice(products) {
    const filteredArray = products.filter(product => product.price <= inputPriceTag.value);

    const ulTag = document.createElement("ul");
    filteredArray.forEach(product => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `
            <ul>
              <li>${product.name}</li>
              <li>Price: ${product.price}</li>
              <li>Rating: ${product.rating}</li>
            </ul>
        `;
    ulTag.appendChild(liTag);
    });

    const result = document.querySelector("section ul");
    result.innerHTML = "";
    result.appendChild(ulTag);
}

