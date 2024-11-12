// Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2
function displayProducts() {
    let container = document.getElementById('product-container');

    container.innerHTML = '';

    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;

        container.appendChild(productDiv);
    });
}

// Task 3
window.addEventListener('load', displayProducts);

