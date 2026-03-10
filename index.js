document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { id: 1, name: "Chilli Chicken", price: 130, image: "pexels-kunal-lakhotia-781256899-28674534.jpg" },
        { id: 2, name: "Paneer Butter Masala", price: 140, image: "pexels-dhiraj-jain-207743066-12737805.jpg" },
        { id: 3, name: "Dal Makhani", price: 90, image: "pexels-kunal-lakhotia-781256899-28674561.jpg" },
        { id: 4, name: "Fried Noodles", price: 60, image: "pexels-enginakyurt-2456435.jpg" },
        { id: 5, name: "Masala Dosa", price: 65, image: "pexels-jack-baghel-2199968-20422129.jpg" },
        { id: 6, name: "Idli", price: 45, image: "pexels-sarthak-2782336-4331491.jpg" },
        { id: 7, name: "Indian Breads", price: 12, image: "pexels-paggiarofrancesco-1117862.jpg" },
        { id: 8, name: "Coffee", price: 10, image: "pexels-chevanon-312418.jpg" },
        { id: 9, name: "Chai", price: 10, image: "pexels-charlotte-may-5946623.jpg" },
        { id: 10, name: "Butter Chicken", price: 150, image: "pexels-prabal-9609844.jpg" },
        { id: 11, name: "Poori Sabzi", price: 40, image: "pexels-saveurssecretes-8617361.jpg" },
        { id: 12, name: "Aloo Parantha", price: 50, image: "pexels-jack-baghel-2199968-20408462.jpg" }
    ];

    const menuContainer = document.getElementById('menu-items');

    menuItems.forEach(item => {
        // Create a div for each menu item
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.setAttribute('data-id', item.id);
        menuItemDiv.setAttribute('data-name', item.name);
        menuItemDiv.setAttribute('data-price', item.price);

        // Add content to the menu item
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <div class="menu-item-footer">
                <p class="price">₹${item.price}</p>
                <button class="add-to-cart"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        `;

        // Append the menu item to the menu container
        menuContainer.appendChild(menuItemDiv);
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            const itemId = menuItem.getAttribute('data-id');
            const itemName = menuItem.getAttribute('data-name');
            const itemPrice = parseFloat(menuItem.getAttribute('data-price')); 

            const cartItem = {
                id: itemId,
                name: itemName,
                price: itemPrice,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingItemIndex = cart.findIndex(item => item.id === itemId);

            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push(cartItem);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            alert(`${itemName} added to the cart!`);
        });
    });

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        
        document.getElementById('cart-count').textContent = cartCount;
        document.getElementById('cart-total').textContent = `₹${cartTotal}`;
    }

    // Initial cart count update
    updateCartCount();
});
