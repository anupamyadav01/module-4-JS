const Products = [
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
];

const productListDiv = document.getElementById("product-list");
const cartItemsDiv = document.getElementById("cart-items");
const totalPriceSpan = document.getElementById("total-price");

let cart = [];

function renderProducts() {
    productListDiv.innerHTML = "";
    Products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
        <div class= "bg-productbg flex justify-between px-4 py-2 rounded-md items-center">
        <span>${product.name}</span>
        <span>${product.price}</span>
        <span class= "bg-buttonsbg px-4 rounded-md">
        <button class= "text-3xl" onclick="addToCart(${product.id})">+</button>
        <span  class= "text-2xl" id="quantity-${product.id}">0</span>
        <button class= "text-3xl" onclick="removeFromCart(${product.id})">-</button>
        </span>
        </div>
        `;
        productListDiv.appendChild(productDiv);
    });
}

function renderCart() {
    cartItemsDiv.innerHTML = "";
    if (cart.length === 0) {
        cartItemsDiv.textContent = "No Product added to the cart!!!";

    } else {
        let totalPrice = 0;
        cart.forEach((item) => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.textContent = `${item.name} Quantity: ${item.quantity}`;
            cartItemsDiv.appendChild(cartItemDiv);
            totalPrice += item.quantity * item.price;
        });
        totalPriceSpan.textContent = totalPrice;
    }
}

function addToCart(productId) {
    const product = Products.find((p) => p.id === productId);
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        });
    }
    renderCart();
    renderProducts();
}

function removeFromCart(productId) {
    const existingItemIndex = cart.findIndex(
        (item) => item.id === productId
    );
    if (existingItemIndex !== -1) {
        const existingItem = cart[existingItemIndex];
        if (existingItem.quantity > 1) {
            existingItem.quantity--;
        } else {
            cart.splice(existingItemIndex, 1);
        }
    }
    renderCart();
    renderProducts();
}

renderProducts();
renderCart();