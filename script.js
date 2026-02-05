// Cart State
let cart = [];
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const sidebar = document.getElementById('cart-sidebar');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Toggle Cart Sidebar
cartBtn.addEventListener('click', () => sidebar.classList.add('active'));
closeCart.addEventListener('click', () => sidebar.classList.remove('active'));

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        addToCart(name, price);
        
        // Visual feedback
        button.innerText = "Added!";
        button.style.background = "#42b983";
        button.style.color = "white";
        setTimeout(() => {
            button.innerText = "Add to Bag";
            button.style.background = "#e1e8ed";
            button.style.color = "black";
        }, 1000);
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    // Update Count
    cartCount.innerText = cart.length;

    // Update List
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.style.margin = "10px 0";
        itemDiv.style.borderBottom = "1px solid #eee";
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.innerText = total.toFixed(2);
}