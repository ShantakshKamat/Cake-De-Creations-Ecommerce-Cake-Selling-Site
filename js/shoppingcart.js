// Define cart variable
let cart = [];

// Add event listeners to Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCartClicked);
});

// Add item to cart when Add to Cart button is clicked
function addToCartClicked(event) {
  const button = event.target;
  const name = button.dataset.name;
  const price = button.dataset.price;
  addItemToCart(name, price);
  updateCartTotal();
}

// Add item to cart array
function addItemToCart(name, price) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].quantity++;
      return;
    }
  }
  cart.push({name, price, quantity: 1});
}

// Update cart total
function updateCartTotal() {
  const cartTotal = document.getElementById("cart-total");
  let total = 0;
  for (let i in cart) {
    total += cart[i].price * cart[i].quantity;
  }
  cartTotal.innerText = `$${total}`;
}

// Render cart items in the shopping cart
function renderCartItems() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  for (let i in cart) {
    const item = document.createElement("li");
    item.innerText = `${cart[i].name} x ${cart[i].quantity} - $${cart[i].price * cart[i].quantity}`;
    cartItems.appendChild(item);
  }
}

// Add event listener to Checkout button
const checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", checkoutClicked);

// Show alert and clear cart when Checkout button is clicked
function checkoutClicked() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCartTotal();
  renderCartItems();
}
