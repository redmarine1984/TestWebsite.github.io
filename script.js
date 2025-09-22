document.addEventListener('DOMContentLoaded', (event) => {
    // Dynamically set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const products = [
    { id: 1, name: "Product A", price: 10.00 },
    { id: 2, name: "Product B", price: 15.50 },
    { id: 3, name: "Product C", price: 20.00 }
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    const productToAdd = products.find(p => p.id === productId);
    const existingCartItem = cart.find(item => item.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cart.push({ ...productToAdd, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.getElementById('cart-count');

    cartItemsList.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    cartTotalPrice.textContent = total.toFixed(2);
    cartCount.textContent = itemCount;
}

function toggleCart() {
    const shoppingCart = document.getElementById('shopping-cart');
    shoppingCart.classList.toggle('hidden');
}

function checkout() {
    alert('Proceeding to checkout!');
    // Implement actual checkout logic here (e.g., sending data to a server)
    cart = []; // Clear the cart after checkout
    updateCartDisplay();
    toggleCart(); // Close the cart after checkout
}

// Initial render of products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay(); // Ensure cart count is correct on load
});
