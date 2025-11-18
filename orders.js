const restaurantOptions = [
    { id: 'chillout', name: 'Chillout Food Hub' },
    { id: 'sibs', name: 'The Sibs Coffee' },
    { id: 'inato', name: 'Inato Hot Plates' },
    { id: 'suok', name: 'Su-Ok Kitchenette' },
    { id: 'clarkie', name: 'Clarkie Claveria' }
];

const menuData = {
    chillout: [
        { id: 1, name: "Sizzling Pork Sisig", price: 90, category: "Value Meals" },
        { id: 2, name: "Chicken Teriyaki", price: 145, category: "Chicken" },
        { id: 3, name: "Garlic Shrimps", price: 190, category: "Seafood" }
    ],
    sibs: [
        { id: 4, name: "Americano (Hot)", price: 85, category: "Coffee" },
        { id: 5, name: "Spanish Latte", price: 105, category: "Coffee" },
        { id: 6, name: "Kimchi Fried Rice", price: 125, category: "Meals" }
    ],
    inato: [
        { id: 7, name: "Sizzling Pork Sisig w/ Pork Belly", price: 158, category: "Sizzling Combo" },
        { id: 8, name: "Sizzling Crispy Sisig", price: 84, category: "Value Meal" },
        { id: 9, name: "Platter Pork Belly", price: 240, category: "Platter" }
    ],
    suok: [
        { id: 10, name: "Fried Liempo", price: 149, category: "Meal Deals" },
        { id: 11, name: "Veggie Fried Rice", price: 99, category: "Budget Meal" },
        { id: 12, name: "Chicken Tenders w/ Fries", price: 149, category: "Snacks" }
    ],
    clarkie: [
        { id: 13, name: "Pork Tocino", price: 89, category: "Rice Meals" },
        { id: 14, name: "Chicken Tenders + Lumpia", price: 169, category: "Sharing Serving" },
        { id: 15, name: "Mango Craze", price: 130, category: "Shaved Ice" }
    ]
};

let cart = [];
let orders = JSON.parse(localStorage.getItem('foodieOrders')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const restaurantSelect = document.getElementById('restaurant-select');
    restaurantSelect.addEventListener('change', loadMenu);
    populateRestaurantSelect();
    displayOrderHistory();
});

function populateRestaurantSelect() {
    const select = document.getElementById('restaurant-select');
    if (!select) return;
    restaurantOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.id;
        opt.textContent = option.name;
        select.appendChild(opt);
    });
}

function loadMenu() {
    const restaurantSelect = document.getElementById('restaurant-select');
    const selectedResto = restaurantSelect.value;
    const menuItemsDiv = document.getElementById('menu-items');
    
    menuItemsDiv.innerHTML = '';
    cart = [];
    updateCartDisplay();

    if (!selectedResto) return;

    const items = menuData[selectedResto] || [];
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p class="item-category">${item.category}</p>
            </div>
            <div class="menu-item-actions">
                <span class="item-price">₱${Number(item.price).toFixed(2)}</span>
                <button onclick="addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price})">Add to Cart</button>
            </div>
        `;
        menuItemsDiv.appendChild(itemDiv);
    });
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    updateCartDisplay();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartDisplay();
}

function updateQuantity(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(1, quantity);
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    const placeOrderBtn = document.getElementById('place-order-btn');

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-details">
                <h5>${item.name}</h5>
                <p>₱${item.price} each</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <p class="cart-item-total">₱${itemTotal}</p>
            <button onclick="removeFromCart(${item.id})" class="btn-remove">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    totalPriceSpan.textContent = total.toFixed(2);
    placeOrderBtn.disabled = cart.length === 0;
}

function placeOrder() {
    if (cart.length === 0) return;

    const restaurantSelect = document.getElementById('restaurant-select');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const order = {
        id: Date.now(),
        restaurant: restaurantSelect.options[restaurantSelect.selectedIndex].text,
        items: [...cart],
        total: total,
        date: new Date().toLocaleString(),
        status: 'Pending'
    };

    orders.unshift(order);
    localStorage.setItem('foodieOrders', JSON.stringify(orders));

    alert('Order placed successfully!');
    cart = [];
    restaurantSelect.value = '';
    updateCartDisplay();
    displayOrderHistory();
}

function displayOrderHistory() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';

    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="no-orders">No orders yet. Create one to get started!</p>';
        return;
    }

    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-card';
        const itemsList = order.items.map(item => `${item.name} (x${item.quantity})`).join(', ');
        const statusClass = order.status === 'Pending' ? '' : 'is-received';
        orderDiv.innerHTML = `
            <div class="order-header">
                <h4>${order.restaurant}</h4>
                <span class="order-status ${statusClass}">${order.status}</span>
            </div>
            <p class="order-items">${itemsList}</p>
            <div class="order-footer">
                <span class="order-date">${order.date}</span>
                <div class="order-footer-actions">
                    <strong class="order-amount">₱${order.total.toFixed(2)}</strong>
                    ${order.status === 'Pending' ? `<button class="order-received-btn" data-order-id="${order.id}">Order received</button>` : ''}
                    <button class="delete-order-btn" data-order-id="${order.id}">Delete</button>
                </div>
            </div>
        `;
        ordersList.appendChild(orderDiv);
    });
}

document.getElementById('place-order-btn')?.addEventListener('click', placeOrder);

document.getElementById('orders-list')?.addEventListener('click', (event) => {
    const receivedBtn = event.target.closest('.order-received-btn');
    if (receivedBtn) {
        const orderId = Number(receivedBtn.dataset.orderId);
        markOrderReceived(orderId);
        return;
    }
    
    const deleteBtn = event.target.closest('.delete-order-btn');
    if (deleteBtn) {
        const orderId = Number(deleteBtn.dataset.orderId);
        deleteOrder(orderId);
    }
});

function markOrderReceived(orderId) {
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex === -1) return;
    
    orders[orderIndex].status = 'Received';
    localStorage.setItem('foodieOrders', JSON.stringify(orders));
    displayOrderHistory();
}

function deleteOrder(orderId) {
    orders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('foodieOrders', JSON.stringify(orders));
    displayOrderHistory();
}
