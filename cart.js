document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart');
    const checkoutButton = document.getElementById('checkout-btn');

    // Retrieve cart from localStorage, or initialize as an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to render cart items
    function renderCart() {
        cartItemsContainer.innerHTML = ''; // Clear cart items display
        let total = 0;

        // Create cart item elements
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price}</p>
                </div>
                <div class="cart-item-actions">
                    <p>Qty: ${item.quantity}</p>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Total: ₹${total}`;

        // Show checkout button only if the cart has items
        checkoutButton.disabled = cart.length === 0;
    }

    // Function to remove an item from the cart
    window.removeFromCart = function(index) {
        cart.splice(index, 1); // Remove item from cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        renderCart(); // Re-render the cart
    };

    // Function to clear the entire cart
    clearCartButton.addEventListener('click', () => {
        cart = []; // Reset cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Save empty cart to localStorage
        renderCart(); // Re-render the cart
    });

    // Function to proceed to checkout
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            // Save cart to localStorage (if not already done for checkout)
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirect to checkout page
            window.location.href = 'checkout.html';
        } else {
            alert("Your cart is empty. Please add items to proceed.");
        }
    });

    renderCart(); // Initial rendering of the cart
});
