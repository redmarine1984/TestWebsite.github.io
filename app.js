// Simulated user credentials
const user = {
  username: "admin",
  password: "1234"
};

let isLoggedIn = false;

function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  if (usernameInput === user.username && passwordInput === user.password) {
    isLoggedIn = true;
    showAddProductPage();
  } else {
    document.getElementById("login-error").innerText = "Invalid login credentials!";
  }
}

function logout() {
  isLoggedIn = false;
  document.getElementById("login-page").style.display = "block";
  document.getElementById("add-product-page").style.display = "none";
}

function showAddProductPage() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("add-product-page").style.display = "block";
}

function addProduct() {
  if (!isLoggedIn) {
    alert("You must be logged in to add a product.");
    return;
  }

  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;

  if (name && price) {
    const li = document.createElement("li");
    li.textContent = `${name} - $${price}`;
    document.getElementById("product-list").appendChild(li);

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}
