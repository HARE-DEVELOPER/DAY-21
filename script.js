// Sample products data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
];

let cart = [];

// Function to display products
function displayProducts() {
    const productsDiv = document.getElementById("products");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Function to display cart
function displayCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove from Cart</button>
        `;
        cartDiv.appendChild(cartItemDiv);
        total += item.price;
    });

    document.getElementById("total").innerText = total;
}

// Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Initialize the page by displaying products
displayProducts();
