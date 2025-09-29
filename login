<!DOCTYPE html>
<html>
<head>
  <title>Login to Add Products</title>
</head>
<body>

  <div id="login-page">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username"><br><br>
    <input type="password" id="password" placeholder="Password"><br><br>
    <button onclick="login()">Login</button>
    <p id="login-error" style="color: red;"></p>
  </div>

  <div id="add-product-page" style="display: none;">
    <h2>Add Product</h2>
    <input type="text" id="product-name" placeholder="Product Name"><br><br>
    <input type="number" id="product-price" placeholder="Price"><br><br>
    <button onclick="addProduct()">Add Product</button>
    <ul id="product-list"></ul>
    <button onclick="logout()">Logout</button>
  </div>

  <script src="app.js"></script>
</body>
</html>
