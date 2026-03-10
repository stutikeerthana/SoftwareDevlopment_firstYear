document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById('cart-items-summary');
    const totalPriceElement = document.getElementById('cart-total-summary');
    const checkoutButton = document.getElementById('checkout-btn');
    const form = document.getElementById('order-form');
    
    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items on the checkout page
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        // Display cart items
        cart.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <div class="cart-item-actions">
                    <p>Qty: ${item.quantity}</p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Total: ₹${total}`;
    }

    // Handle form submission and process the checkout
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get order details from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const comments = document.getElementById('comments').value;

        // Validate form inputs
        if (!name || !email || !address || !phone) {
            alert("Please fill in all required fields.");
            return;
        }

        // Simulate order confirmation and clear the cart
        alert("Order placed successfully! Thank you for your purchase.");
        localStorage.removeItem('cart');  // Clear the cart from localStorage
        window.location.href = "index.html";  // Redirect to home page
    });

    // Render cart items when the page loads
    renderCartItems();
});
