// Initialize Firebase (replace with your actual config)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function displayProducts() {
  const productsContainer = document.getElementById("products-container");
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef);

  querySnapshot.forEach((doc) => {
    const product = doc.data();

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.name;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);

    productsContainer.appendChild(productCard);
  });
}

displayProducts();
