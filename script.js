// Product data
const products = [
    {
        id: 1,
        name: "Taladro Percutor 750W",
        category: "Herramientas Eléctricas",
        price: 1299.0,
        image: "/electric-drill-power-tool.jpg",
    },
    {
        id: 2,
        name: "Juego de Destornilladores 12 Piezas",
        category: "Herramientas Manuales",
        price: 349.0,
        image: "/jogo-chaves-fenda.png",
    },
    {
        id: 3,
        name: "Sierra Circular 1400W",
        category: "Herramientas Eléctricas",
        price: 1899.0,
        image: "/circular-saw-power-tool.jpg",
    },
    {
        id: 4,
        name: "Martillo de Carpintero",
        category: "Herramientas Manuales",
        price: 249.0,
        image: "/carpenter-hammer-tool.jpg",
    },
    {
        id: 5,
        name: "Nivel Láser Profesional",
        category: "Medición",
        price: 899.0,
        image: "/laser-level-measurement-tool.jpg",
    },
    {
        id: 6,
        name: "Llave Inglesa Ajustable",
        category: "Herramientas Manuales",
        price: 189.0,
        image: "/adjustable-wrench-tool.jpg",
    },
    {
        id: 7,
        name: "Amoladora Angular 900W",
        category: "Herramientas Eléctricas",
        price: 1499.0,
        image: "/angle-grinder-power-tool.jpg",
    },
    {
        id: 8,
        name: "Caja de Herramientas Metálica",
        category: "Almacenamiento",
        price: 599.0,
        image: "/metal-toolbox-storage.jpg",
    },
    {
        id: 9,
        name: "Pistola de Calor 2000W",
        category: "Herramientas Eléctricas",
        price: 799.0,
        image: "/heat-gun-power-tool.jpg",
    },
    {
        id: 10,
        name: "Alicate Universal 8 Pulgadas",
        category: "Herramientas Manuales",
        price: 159.0,
        image: "/pliers-hand-tool.jpg",
    },
    {
        id: 11,
        name: "Lijadora Orbital 300W",
        category: "Herramientas Eléctricas",
        price: 899.0,
        image: "/orbital-sander-power-tool.jpg",
    },
    {
        id: 12,
        name: "Cinta Métrica 5m",
        category: "Medición",
        price: 99.0,
        image: "/tape-measure-tool.jpg",
    },
]

// Cart state
let cart = []

// Initialize products
function initProducts() {
    const productsGrid = document.getElementById("productsGrid")

    products.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.className = "product-card"
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    AGREGAR AL CARRITO
                </button>
            </div>
        `
        productsGrid.appendChild(productCard)
    })
}

// Add to cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId)
    const existingItem = cart.find((item) => item.id === productId)

    if (existingItem) {
        existingItem.quantity++
    } else {
        cart.push({
            ...product,
            quantity: 1,
        })
    }

    updateCart()
    toggleCart(true)
}

// Update cart display
function updateCart() {
    const cartBadge = document.getElementById("cartBadge")
    const cartItems = document.getElementById("cartItems")
    const cartTotal = document.getElementById("cartTotal")

    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartBadge.textContent = totalItems

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>'
    } else {
        cartItems.innerHTML = cart
            .map(
                (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
                </div>
            </div>
        `,
            )
            .join("")
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    cartTotal.textContent = `$${total.toFixed(2)}`
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find((item) => item.id === productId)
    if (item) {
        item.quantity += change
        if (item.quantity <= 0) {
            removeFromCart(productId)
        } else {
            updateCart()
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId)
    updateCart()
}

// Toggle cart sidebar
function toggleCart(forceOpen = false) {
    const cartSidebar = document.getElementById("cartSidebar")
    const cartOverlay = document.getElementById("cartOverlay")

    if (forceOpen) {
        cartSidebar.classList.add("active")
        cartOverlay.classList.add("active")
    } else {
        cartSidebar.classList.toggle("active")
        cartOverlay.classList.toggle("active")
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    initProducts()
    updateCart()
})
