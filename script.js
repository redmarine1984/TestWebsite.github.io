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
    { id: 1, name: "iPhone 15 Otter Box", price: 29.99, img: "https://i5.walmartimages.com/seo/OtterBox-Defender-Series-Pro-Case-for-Apple-iPhone-15-Plus-and-iPhone-14-Plus-Black_d947839e-28a3-4f42-a55e-5a296fb70d8f.d71b95f43f3874f3b102361dee39ccfd.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"},
    { id: 2, name: "Dell Inspiron 3000 Laptop", price: 499.99, img: "https://i5.walmartimages.com/seo/Dell-Inspiron-3000-Laptop-15-6-Non-touch-Intel-Celeron-Processor-N4020-Graphics-600-4GB-DDR4-Memory-128GB-SSD-Hard-Drive-Windows-10-Home-S-mode_b106bcee-6f1f-4c18-87fc-b1f9677d39df.65d263e5ab6bcaa6d9edae94627ece7f.jpeg"},
    { id: 3, name: "iPhone 16 256 Gb(Refurbished)", price: 399.99, img: "https://m.media-amazon.com/images/I/71QkWOSDkmL.jpg"},
    { id: 4, name: "iPhone 15 256 Gb(Refurbished)", price: 299.99, img: "https://t-mobile.scene7.com/is/image/Tmusprod/Apple-iPhone-15-Pro-Max-Black-Titanium-frontimage"},
    { id: 5, name: "Samsung Galaxy 21(Refurbished)", price: 299.99, img: "https://m.media-amazon.com/images/I/616kK0b+d+L._UF894,1000_QL80_.jpg"},
    { id: 6, name: "Moto G Play(Refurbished)", price: 99.99, img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6568/6568429_sd.jpg;maxHeight=1920;maxWidth=900?format=webp"},
    { id: 7, name: "Moto Razr(Refurbished)", price: 299.99, img: "https://m.media-amazon.com/images/I/51Q+JcbYziL.jpg"},
    { id: 8, name: "Moto G Otter Box", price: 29.99, img: "https://www.otterbox.com/on/demandware.static/-/Sites-masterCatalog/default/dw6333c29e/productimages/dis/cases-screen-protection/commuter-moto-g-stylus-5g-2023/commuter-moto-g-stylus-5g-2023-black-2.jpg"},
    { id: 9, name: "iPhone 15 Otter Box", price: 39.99, img: "https://m.media-amazon.com/images/I/71dTkLoBenL.jpg"},
    { id: 10, name: "Acer Aspire 1 A115-31-C2Y3 Laptop", price: 299.99, img: "https://i5.walmartimages.com/asr/fc604dd8-8761-486d-80ff-59551a330dd5.2a4dd8b264365b821849532a3d7b3d73.jpeg"}
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
            <img src = ${product.img} width="75">
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
