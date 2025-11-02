// Product data
const products = [
    {
        id: "H001",
        name: "Martillo doméstico",
        category: "Manual",
        characteristics: "Mango de madera, cabeza de acero",
        price: 25.00,
        image: "https://png.pngtree.com/png-clipart/20220110/original/pngtree-home-decoration-tools-hammer-illustration-png-image_7070690.png",
    },
    {
        id: "H002",
        name: "Juego de destornilladores (6 piezas)",
        category: "Manual",
        characteristics: "Incluye planos y de estrella",
        price: 35.00,
        image: "https://elmachetazo.vtexassets.com/arquivos/ids/722581/Destornillador-Thirfty-Stanley%7C6-Piezas_1.png?v=638448250901700000",
    },
    {
        id: "H003",
        name: "Alicate universal",
        category: "Manual",
        characteristics: "Acero al carbono, mango ergonómico",
        price: 28.00,
        image: "https://perusupply.com/247-large_default/alicate-universal-de-6-1000v-mango-confort-grip-truper.jpg",
    },
    {
        id: "H004",
        name: "Cinta métrica 3m",
        category: "Medición",
        characteristics: "Compacta, con clip para cinturón",
        price: 15.00,
        image: "https://perusupply.com/256-large_default/wincha-gripper-3-metros-cinta-de-13-mm-resistente-al-impacto-truper.jpg",
    },
    {
        id: "H005",
        name: "Nivel de burbuja 20cm",
        category: "Medición",
        image: "https://www.pngall.com/wp-content/uploads/2016/04/Level-PNG.png",
        characteristics: "Cuerpo plástico, burbuja horizontal",
        price: 18.00,
        image: "https://media.adeo.com/media/3187058/media.png",
    },
    {
        id: "H006",
        name: "Taladro eléctrico básico",
        category: "Eléctrica",
        characteristics: "500W, velocidad variable",
        price: 160.00,
        image: "https://s.alicdn.com/@sc04/kf/H9997e0564a2140dda6a94eb606e4e516K/20V-Cordless-Impact-Drill-Electric-Screwdriver-Set-Variable-Speed-Max-Drilling-Diameter-30mm-Local-US-Warehouse.png_300x300.jpg",
    },
    {
        id: "H007",
        name: "Caja de herramientas plástica",
        category: "Accesorio",
        characteristics: "Portátil, con compartimentos",
        price: 55.00,
        image: "https://dojiw2m9tvv09.cloudfront.net/79550/product/cjh19m8795.png",
    },
    {
        id: "H008",
        name: "Llave inglesa 8\"",
        category: "Manual",
        characteristics: "Ajustable, acero cromado",
        price: 30.00,
        image: "https://perusupply.com/262-large_default/llave-francesa-cromada-8-confort-grip-truper.jpg",
    },
    {
        id: "H009",
        name: "Juego de llaves Allen (8 piezas)",
        category: "Manual",
        characteristics: "Medidas métricas",
        price: 22.00,
        image: "https://www.ferremorales.com.co/wp-content/uploads/2024/07/Juego-De-Llaves-Allen-8-Piezas-HHK14081.png",
    },
    {
        id: "H010",
        name: "Serrucho manual",
        category: "Manual",
        characteristics: "Hoja de 20\" para madera",
        price: 40.00,
        image: "https://bellota.b-cdn.net/CMP4506/PR5146BI4189_EAA_4551_Serrucho_carpintero_con_mango_madera_PEFC_4551_SZ5.png",
    },
    {
        id: "H011",
        name: "Pistola de silicona chica",
        category: "Accesorio",
        characteristics: "Para barras de silicona de 7mm",
        price: 25.00,
        image: "https://www.sajor.com.mx/assets/uploads/sw_324111.png",
    },
    {
        id: "H012",
        name: "Juego de llaves combinadas (6 piezas)",
        category: "Manual",
        characteristics: "Incluye medidas de 8 a 17mm",
        price: 60.00,
        image: "https://pimdatacdn.bahco.com/media/sub670/16a12faa45fae93f.png",
    },
    {
        id: "H013",
        name: "Cutter retráctil",
        category: "Manual",
        characteristics: "Cuchilla intercambiable",
        price: 12.00,
        image: "https://pimdatacdn.bahco.com/media/sub609/16a0e789818f1a3f.png",
    },
    {
        id: "H014",
        name: "Flexómetro 5m",
        category: "Medición",
        characteristics: "Cinta de acero reforzado",
        price: 25.00,
        image: "https://verticeindustrial.mx/wp-content/uploads/2022/01/Fluxometro-Surtek-5-Metros-1.webp",
    },
    {
        id: "H015",
        name: "Mini caja de puntas imantadas",
        category: "Accesorio",
        characteristics: "Incluye 20 puntas variadas",
        price: 35.00,
        image: "https://www.unionferretera.com/27476-large_default/juego-de-puntas-de-14-bahco-31-piezas.jpg",
    },
    {
        id: "H016",
        name: "Guantes de trabajo básicos",
        category: "Seguridad",
        characteristics: "Algodón con palma de goma",
        price: 10.00,
        image: "https://safetystoreperu.vtexassets.com/arquivos/ids/158335/guante-multiflex-mpa102-latex-hi-viz-palma-302020780101-1.png?v=638246341367730000",
    },
    {
        id: "H017",
        name: "Linterna LED recargable",
        category: "Eléctrica",
        characteristics: "Alcance 50m, batería interna",
        price: 45.00,
        image: "https://lukat.pe/wp-content/uploads/2022/09/307-linterna-led-recargable-5w-opaluxpng-1647729590-min.png",
    },
    {
        id: "H018",
        name: "Tijeras multiuso",
        category: "Manual",
        characteristics: "Para cortar plástico y papel",
        price: 20.00,
        image: "https://pimdatacdn.bahco.com/media/sub1125/18dc07eaddf7b03f.png",
    },
    {
        id: "H019",
        name: "Mini taladro inalámbrico",
        category: "Eléctrica",
        characteristics: "12V, incluye brocas",
        price: 190.00,
        image: "https://www.bosch-professional.com/es/es/ocsmedia/322934-54/application-image/1434x828/atornillador-a-bateria-bosch-go-06019h2101.png",
    },
    {
        id: "H020",
        name: "Destornillador eléctrico pequeño",
        category: "Eléctrica",
        characteristics: "Recargable, 3.6V",
        price: 110.00,
        image: "https://bigmarketperu.com/storage/products/nqecRl7Uq7xmVtslDQ9O5b0NcJKcAM3v90NBZClz.png",
    },
    {
        id: "H021",
        name: "Caja organizadora de tornillos",
        category: "Accesorio",
        characteristics: "Incluye tornillos variados",
        price: 35.00,
        image: "https://www.manaplas.com/wp-content/uploads/2018/03/041-2982-0-1.png",
    },
    {
        id: "H022",
        name: "Escalera plegable 3 peldaños",
        category: "Accesorio",
        characteristics: "Acero pintado, antideslizante",
        price: 130.00,
        image: "https://ferroveloz.facel.pe/assets/uploads/thumbs/25dcf63eac5aa62c16cde5c07c41c198.png",
    },
    {
        id: "H023",
        name: "Brocas para madera (set de 5)",
        category: "Accesorio",
        characteristics: "Diferentes diámetros",
        price: 28.00,
        image: "https://dojiw2m9tvv09.cloudfront.net/79550/product/x-d-71962-makita82025549.png",
    },
    {
        id: "H024",
        name: "Juego de clavos surtidos",
        category: "Consumible",
        characteristics: "100 piezas variadas",
        price: 18.00,
        image: "https://png.pngtree.com/png-vector/20241021/ourmid/pngtree-pile-of-nails-png-image_14139554.png",
    },
    {
        id: "H025",
        name: "Juego de tornillos surtidos",
        category: "Consumible",
        characteristics: "Incluye pernos y tuercas",
        price: 20.00,
        image: "https://cdn.zodiac.nl/media/zodiac-generated/1e2200dd/6f30/4885/831e/530420be7988/standard-rgba.png",
    },
    {
        id: "H026",
        name: "Llave de tubo con carraca",
        category: "Manual",
        characteristics: "Mango ergonómico, acero",
        price: 70.00,
        image: "https://asset.action.com/image/upload/t_digital_product_image/w_1080/35574378.webp",
    },
    {
        id: "H027",
        name: "Cepillo metálico manual",
        category: "Manual",
        characteristics: "Para limpiar óxido o pintura",
        price: 18.00,
        image: "https://www.cotecno.cl/wp-content/uploads/2021/07/H-3800.png",
    },
    {
        id: "H028",
        name: "Juego de espátulas",
        category: "Manual",
        characteristics: "Para masilla y pintura",
        price: 22.00,
        image: "https://i0.wp.com/colorcity.com.uy/wp-content/uploads/2024/12/zzeeeeeeeeeeeeeeeeeeeee.png?fit=250%2C250&ssl=1",
    },
    {
        id: "H029",
        name: "Lija surtida (pack de 10)",
        category: "Consumible",
        characteristics: "Granos finos y gruesos",
        price: 12.00,
        image: "https://lacasadelpintor.pe/cdn/shop/products/lijas-al-agua-super-finas-dewalt-gr1000-gr2500-lija-x-5-uni-D_NQ_NP_613018-MLA31088342361_062019-F-removebg-preview_f657fcfd-1abd-4bcd-a347-95a0f43e27af_1200x1200.png?v=1611166949",
    },
    {
        id: "H030",
        name: "Cinta aislante",
        category: "Consumible",
        characteristics: "PVC resistente, 10m",
        price: 8.00,
        image: "https://www.perubraun.com/wp-content/uploads/2018/08/Cinta-aislanteweb_Mesa-de-trabajo-1.png",
    },
]

// Cart state
let cart = []

// -----------------------------
//    Google Analytics 4 - Enhanced E-commerce Tracking
//    ----------------------------- */
function trackEvent(eventName, params = {}) {
    if (typeof gtag === 'function') {
        // Añadir información de la sesión
        const enhancedParams = {
            ...params,
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            send_to: 'G-H930MYG9WH'
        };
        
        console.log(`[GA4] Event: ${eventName}`, enhancedParams);
        gtag('event', eventName, enhancedParams);
    }
}

// Formatea los productos para el envío a GA4
function formatItemsForGA(items) {
    return items.map(item => ({
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Sin categoría',
        price: parseFloat(item.price).toFixed(2),
        quantity: parseInt(item.quantity) || 1,
        item_brand: 'FerreTech',
        item_variant: item.variant || 'standard',
        currency: 'MXN',
        item_list_name: 'default',
        item_list_id: 'default',
        index: 0,
        discount: 0.00
    }));
}

// Seguimiento de visualización de lista de productos
function trackViewItemList(items, listName = 'default', listId = 'default') {
    trackEvent('view_item_list', {
        item_list_id: listId,
        item_list_name: listName,
        items: formatItemsForGA(items)
    });
}

// Seguimiento de visualización de producto
function trackViewItem(product) {
    trackEvent('view_item', {
        currency: 'MXN',
        value: parseFloat(product.price).toFixed(2),
        items: [{
            item_id: product.id.toString(),
            item_name: product.name,
            item_category: product.category || 'Sin categoría',
            price: parseFloat(product.price).toFixed(2),
            quantity: 1,
            item_brand: 'FerreTech'
        }]
    });
}

// Seguimiento de producto añadido al carrito
function trackAddToCart(product, quantity = 1) {
    trackEvent('add_to_cart', {
        currency: 'MXN',
        value: (parseFloat(product.price) * parseInt(quantity)).toFixed(2),
        items: [{
            item_id: product.id.toString(),
            item_name: product.name,
            item_category: product.category || 'Sin categoría',
            price: parseFloat(product.price).toFixed(2),
            quantity: parseInt(quantity) || 1,
            item_brand: 'FerreTech'
        }]
    });
}

// Seguimiento de producto eliminado del carrito
function trackRemoveFromCart(product) {
    trackEvent('remove_from_cart', {
        currency: 'MXN',
        value: parseFloat(product.price).toFixed(2),
        items: [{
            item_id: product.id.toString(),
            item_name: product.name,
            item_category: product.category || 'Sin categoría',
            price: parseFloat(product.price).toFixed(2),
            quantity: 1,
            item_brand: 'FerreTech'
        }]
    });
}

// Seguimiento de inicio de checkout
function trackBeginCheckout(cartItems) {
    const items = cartItems.map(item => ({
        item_id: item.id.toString(),
        item_name: item.name,
        item_category: item.category || 'Sin categoría',
        price: parseFloat(item.price).toFixed(2),
        quantity: parseInt(item.quantity) || 1,
        item_brand: 'FerreTech'
    }));

    const totalValue = cartItems.reduce((sum, item) => {
        return sum + (parseFloat(item.price) * (parseInt(item.quantity) || 1));
    }, 0);

    trackEvent('begin_checkout', {
        currency: 'MXN',
        value: totalValue.toFixed(2),
        coupon: '',
        items: items
    });
}

// Seguimiento de compra completada
function trackPurchase(transaction) {
    if (!transaction || !transaction.id) {
        console.error('Transaction ID is required for purchase tracking');
        return;
    }

    const items = transaction.items || [];
    const totalValue = items.reduce((sum, item) => {
        return sum + (parseFloat(item.price || 0) * (parseInt(item.quantity) || 1));
    }, 0);

    trackEvent('purchase', {
        transaction_id: transaction.id.toString(),
        value: totalValue.toFixed(2),
        tax: parseFloat(transaction.tax || 0).toFixed(2),
        shipping: parseFloat(transaction.shipping || 0).toFixed(2),
        currency: 'MXN',
        coupon: transaction.coupon || '',
        payment_method: transaction.payment_method || 'No especificado',
        shipping_tier: transaction.shipping_tier || 'Estándar',
        items: items.map(item => ({
            item_id: item.id.toString(),
            item_name: item.name,
            item_category: item.category || 'Sin categoría',
            price: parseFloat(item.price).toFixed(2),
            quantity: parseInt(item.quantity) || 1,
            item_brand: 'FerreTech',
            coupon: item.coupon || '',
            discount: parseFloat(item.discount || 0).toFixed(2),
            item_variant: item.variant || 'standard'
        }))
    });
}

// Seguimiento de búsqueda de productos
function trackSearch(searchTerm) {
    trackEvent('search', {
        search_term: searchTerm
    });
}

// Seguimiento de registro
function trackSignUp(method = 'email') {
    trackEvent('sign_up', {
        method: method
    });
}

// Seguimiento de inicio de sesión
function trackLogin(method = 'email') {
    trackEvent('login', {
        method: method
    });
}

// Seguimiento de contacto
function trackContact() {
    trackEvent('contact');
}

// Seguimiento de compartir
function trackShare(method, contentType, itemId) {
    trackEvent('share', {
        method: method,
        content_type: contentType,
        item_id: itemId
    });
}

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
    // Track product list view for analytics
    try {
        trackViewItemList(paginatedProducts);
    } catch (e) {
        console.warn('trackViewItemList error', e);
    }
    
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
    // Analytics: add_to_cart
    try {
        trackAddToCart(product);
    } catch (e) {
        console.warn('trackAddToCart error', e);
    }
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
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">Eliminar</button>
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
        const prevQty = item.quantity
        item.quantity += change
        if (item.quantity <= 0) {
            // Track removal of remaining quantity
            try {
                const prod = products.find(p => p.id === productId) || item
                trackRemoveFromCart(prod)
            } catch (e) {
                console.warn('trackRemoveFromCart error', e)
            }
            removeFromCart(productId)
        } else {
            // If increased -> add_to_cart event; if decreased -> remove_from_cart event
            try {
                const prod = products.find(p => p.id === productId) || item
                if (change > 0) trackAddToCart(prod)
                else if (change < 0) trackRemoveFromCart(prod)
            } catch (e) {
                console.warn('track quantity change error', e)
            }
            updateCart()
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    // Find removed product for analytics
    const removed = cart.find(i => i.id === productId)
    cart = cart.filter((item) => item.id !== productId)
    updateCart()
    if (removed) {
        try {
            const prod = products.find(p => p.id === productId) || removed
            trackRemoveFromCart(prod)
        } catch (e) {
            console.warn('trackRemoveFromCart error', e)
        }
    }
}

// Toggle cart sidebar
function toggleCart(forceOpen = false) {
    const cartSidebar = document.getElementById("cartSidebar")
    const cartOverlay = document.getElementById("cartOverlay")

    if (forceOpen) {
        cartSidebar.classList.add("active")
        cartOverlay.classList.add("active")
        try { trackEvent('view_cart'); } catch(e){console.warn('view_cart',e)}
    } else {
        cartSidebar.classList.toggle("active")
        cartOverlay.classList.toggle("active")
        if (cartSidebar.classList.contains('active')) {
            try { trackEvent('view_cart'); } catch(e){console.warn('view_cart',e)}
        }
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
    // Analytics: track virtual page view for SPA-style navigation
    try {
        trackEvent('page_view', { page_path: '/' + sectionId });
    } catch (e) {
        console.warn('track page_view error', e);
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

    // Track initial page_view
    try {
        trackEvent('page_view', { page_path: window.location.pathname });
    } catch (e) {
        console.warn('track page_view init', e);
    }

    // Hook checkout button to track begin_checkout and (demo) purchase
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Build a simple cart snapshot
            const cartSnapshot = {
                items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
                total: cart.reduce((s, it) => s + it.price * it.quantity, 0)
            };
            try {
                trackBeginCheckout(cartSnapshot);
            } catch (err) {
                console.warn('trackBeginCheckout error', err);
            }

            // For demo: simulate immediate purchase (in real flow you'd call this after payment confirmation)
            const purchase = {
                id: 'T' + Date.now(),
                currency: 'PEN',
                total: cartSnapshot.total,
                items: cartSnapshot.items
            };
            try {
                trackPurchase(purchase);
            } catch (err) {
                console.warn('trackPurchase error', err);
            }

            // Clear cart after simulated purchase
            cart = [];
            updateCart();
            toggleCart(false);
            alert('Gracias por la compra (simulada). Eventos enviados a Analytics.');
        });
    }

    // Outbound link tracking
    document.addEventListener('click', (e) => {
        const a = e.target.closest && e.target.closest('a');
        if (!a || !a.href) return;
        try {
            const linkUrl = new URL(a.href, window.location.href);
            if (linkUrl.hostname !== window.location.hostname) {
                trackEvent('click_outbound', { link_url: linkUrl.href });
            }
        } catch (err) {
            // ignore invalid URLs
        }
    });
});
