

let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  updateCartModal();
  
  console.log(`${productName} added to cart.`);
}

function updateCartModal() {
  let cartItems = document.getElementById('cart-items');
  let cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total;
}

function toggleCart() {
  let modal = document.getElementById('cart-modal');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}

function clearCart() {
  cart = [];
  cartCount = 0;
  document.getElementById('cart-count').innerText = cartCount;
  updateCartModal();
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
  } else {
    alert(`Total amount to pay: $${document.getElementById('cart-total').textContent}`);
    clearCart();
    // Here you can add additional logic for actual checkout process (e.g., redirecting to a payment gateway).
  }
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  let modal = document.getElementById('cart-modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

