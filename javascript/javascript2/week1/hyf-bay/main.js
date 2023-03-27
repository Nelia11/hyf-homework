console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
    const ulTag = document.querySelector("ul");
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const liTag = document.createElement("li");
        liTag.innerHTML = `<strong>${product.name}</strong> 
        <br>price: ${product.price} 
        <br>Rating: ${product.rating}`;
        ulTag.appendChild(liTag);
    }
}
renderProducts(products);
