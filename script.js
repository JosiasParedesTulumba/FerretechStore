// Product data
const products = [
    {
        id: "H001",
        name: "Martillo doméstico",
        category: "Manual",
        characteristics: "Mango de madera, cabeza de acero",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1587226960947-284a04cbb9e0?w=400",
    },
    {
        id: "H002",
        name: "Juego de destornilladores (6 piezas)",
        category: "Manual",
        characteristics: "Incluye planos y de estrella",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1596023575375-44e1d6c6e005?w=400",
    },
    {
        id: "H003",
        name: "Alicate universal",
        category: "Manual",
        characteristics: "Acero al carbono, mango ergonómico",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1599009426262-07f55d4f5e5f?w=400",
    },
    {
        id: "H004",
        name: "Cinta métrica 3m",
        category: "Medición",
        characteristics: "Compacta, con clip para cinturón",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1589939705384-8f4d1b8b5cda?w=400",
    },
    {
        id: "H005",
        name: "Nivel de burbuja 20cm",
        category: "Medición",
        characteristics: "Cuerpo plástico, burbuja horizontal",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400",
    },
    {
        id: "H006",
        name: "Taladro eléctrico básico",
        category: "Eléctrica",
        characteristics: "500W, velocidad variable",
        price: 160.00,
        image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400",
    },
    {
        id: "H007",
        name: "Caja de herramientas plástica",
        category: "Accesorio",
        characteristics: "Portátil, con compartimentos",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1585128719114-6dd65d58d55a?w=400",
    },
    {
        id: "H008",
        name: "Llave inglesa 8\"",
        category: "Manual",
        characteristics: "Ajustable, acero cromado",
        price: 30.00,
        image: "https://images.unsplash.com/photo-1588783849485-968c76c5929d?w=400",
    },
    {
        id: "H009",
        name: "Juego de llaves Allen (8 piezas)",
        category: "Manual",
        characteristics: "Medidas métricas",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400",
    },
    {
        id: "H010",
        name: "Serrucho manual",
        category: "Manual",
        characteristics: "Hoja de 20\" para madera",
        price: 40.00,
        image: "https://images.unsplash.com/photo-1603134554146-7f8c8df6c2a2?w=400",
    },
    {
        id: "H011",
        name: "Pistola de silicona chica",
        category: "Accesorio",
        characteristics: "Para barras de silicona de 7mm",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1598134439413-b8ac8c7c7f5f?w=400",
    },
    {
        id: "H012",
        name: "Juego de llaves combinadas (6 piezas)",
        category: "Manual",
        characteristics: "Incluye medidas de 8 a 17mm",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
    },
    {
        id: "H013",
        name: "Cutter retráctil",
        category: "Manual",
        characteristics: "Cuchilla intercambiable",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1599982892863-df38d7e88f61?w=400",
    },
    {
        id: "H014",
        name: "Flexómetro 5m",
        category: "Medición",
        characteristics: "Cinta de acero reforzado",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1589939705384-8f4d1b8b5cda?w=400",
    },
    {
        id: "H015",
        name: "Mini caja de puntas imantadas",
        category: "Accesorio",
        characteristics: "Incluye 20 puntas variadas",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
    },
    {
        id: "H016",
        name: "Guantes de trabajo básicos",
        category: "Seguridad",
        characteristics: "Algodón con palma de goma",
        price: 10.00,
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400",
    },
    {
        id: "H017",
        name: "Linterna LED recargable",
        category: "Eléctrica",
        characteristics: "Alcance 50m, batería interna",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400",
    },
    {
        id: "H018",
        name: "Tijeras multiuso",
        category: "Manual",
        characteristics: "Para cortar plástico y papel",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1589875522759-5bf0ff5b9e7c?w=400",
    },
    {
        id: "H019",
        name: "Mini taladro inalámbrico",
        category: "Eléctrica",
        characteristics: "12V, incluye brocas",
        price: 190.00,
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
    },
    {
        id: "H020",
        name: "Destornillador eléctrico pequeño",
        category: "Eléctrica",
        characteristics: "Recargable, 3.6V",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
    },
    {
        id: "H021",
        name: "Caja organizadora de tornillos",
        category: "Accesorio",
        characteristics: "Incluye tornillos variados",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1585128719114-6dd65d58d55a?w=400",
    },
    {
        id: "H022",
        name: "Escalera plegable 3 peldaños",
        category: "Accesorio",
        characteristics: "Acero pintado, antideslizante",
        price: 130.00,
        image: "https://images.unsplash.com/photo-1581092918484-8313e1f7dea4?w=400",
    },
    {
        id: "H023",
        name: "Brocas para madera (set de 5)",
        category: "Accesorio",
        characteristics: "Diferentes diámetros",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400",
    },
    {
        id: "H024",
        name: "Juego de clavos surtidos",
        category: "Consumible",
        characteristics: "100 piezas variadas",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
    },
    {
        id: "H025",
        name: "Juego de tornillos surtidos",
        category: "Consumible",
        characteristics: "Incluye pernos y tuercas",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1581092918484-8313e1f7dea4?w=400",
    },
    {
        id: "H026",
        name: "Llave de tubo con carraca",
        category: "Manual",
        characteristics: "Mango ergonómico, acero",
        price: 70.00,
        image: "https://images.unsplash.com/photo-1588783849485-968c76c5929d?w=400",
    },
    {
        id: "H027",
        name: "Cepillo metálico manual",
        category: "Manual",
        characteristics: "Para limpiar óxido o pintura",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1589875522759-5bf0ff5b9e7c?w=400",
    },
    {
        id: "H028",
        name: "Juego de espátulas",
        category: "Manual",
        characteristics: "Para masilla y pintura",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
    },
    {
        id: "H029",
        name: "Lija surtida (pack de 10)",
        category: "Consumible",
        characteristics: "Granos finos y gruesos",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1589875522759-5bf0ff5b9e7c?w=400",
    },
    {
        id: "H030",
        name: "Cinta aislante",
        category: "Consumible",
        characteristics: "PVC resistente, 10m",
        price: 8.00,
        image: "https://images.unsplash.com/photo-1581092918484-8313e1f7dea4?w=400",
    },
]

// Cart state
let cart = []

// Pagination variables
let currentPage = 1;
const productsPerPage = 10;

// Initialize products with pagination
function initProducts() {
    displayProducts();
    setupPagination();
}

// Display products for the current page
function displayProducts() {
    const productsGrid = document.getElementById("productsGrid");
    productsGrid.innerHTML = ''; // Clear current products
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
        productsGrid.innerHTML = '<p>No hay productos para mostrar.</p>';
        return;
    }
    
    paginatedProducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                    AGREGAR AL CARRITO
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    updatePaginationButtons();
}

// Setup pagination controls
function setupPagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    // Clear current page numbers
    pageNumbers.innerHTML = '';
    
    // Add page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
        });
        pageNumbers.appendChild(pageNumber);
    }
    
    // Previous button event
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
        }
    });
    
    // Next button event
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
        }
    });
    
    updatePaginationButtons();
}

// Update pagination buttons state
function updatePaginationButtons() {
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    
    // Update active page number
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach((num, index) => {
        if (index + 1 === currentPage) {
            num.classList.add('active');
        } else {
            num.classList.remove('active');
        }
    });
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

// Navegación entre secciones
function showSection(sectionId, event) {
    // Prevenir el comportamiento por defecto del enlace
    if (event) event.preventDefault();
    
    console.log('Mostrando sección:', sectionId); // Para depuración
    
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.page-section');
    console.log('Secciones encontradas:', sections.length); // Para depuración
    
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        console.log('Sección encontrada:', sectionId); // Para depuración
        section.style.display = 'block';
        
        // Desplazarse suavemente a la sección
        setTimeout(() => {
            window.scrollTo({
                top: section.offsetTop - 120, // Ajustar según la altura del header
                behavior: 'smooth'
            });
        }, 50);
    } else {
        console.error('No se encontró la sección con ID:', sectionId);
    }
    
    // Cerrar el sidebar después de seleccionar una opción (en móviles)
    if (window.innerWidth <= 768) {
        toggleSidebar(false);
    }
    
    // Si es la sección de inicio, asegurarse de que los productos se muestren
    if (sectionId === 'inicio') {
        initProducts();
    }
}

// Toggle Sidebar
function toggleSidebar(open) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (typeof open === 'boolean') {
        sidebar.classList.toggle('show', open);
        overlay.classList.toggle('show', open);
    } else {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
    }
    
    // Prevent body scroll when sidebar is open
    document.body.style.overflow = sidebar.classList.contains('show') ? 'hidden' : '';
}

// Close sidebar when clicking outside
const sidebar = document.getElementById('sidebar');
document.addEventListener('click', (e) => {
    const menuBtn = document.querySelector('.menu-btn');
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnMenuBtn = menuBtn && (menuBtn === e.target || menuBtn.contains(e.target));
    
    if (!isClickInsideSidebar && !isClickOnMenuBtn && sidebar.classList.contains('show')) {
        toggleSidebar(false);
    }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    initProducts();
    updateCart();
    toggleSidebar(false); // Ensure sidebar is closed on load
    
    // Add click event to menu button
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }
});
