console.log("Script loaded");

const products = getAvailableProducts();
const ulTag = document.querySelector("ul")

function renderProducts(products) {
    
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
