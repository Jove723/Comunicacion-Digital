// ============================================
// CART FUNCTIONALITY - Supermerprado El Rey
// ============================================

const CART_KEY = 'elrey_cart';

// Get cart from localStorage
function getCart() {
    const cartData = localStorage.getItem(CART_KEY);
    return cartData ? JSON.parse(cartData) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartUI();
}

// Update cart badge in header
function updateCartBadge() {
    const badge = document.querySelector('.header__cart-badge');
    if (!badge) return;
    
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    badge.textContent = totalItems;
    
    // Pulse animation
    badge.classList.add('header__cart-badge--pulse');
    setTimeout(() => {
        badge.classList.remove('header__cart-badge--pulse');
    }, 300);
}

// Calculate cart total
function calculateTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Format price
function formatPrice(price) {
    return '$' + price.toLocaleString('es-CO');
}

// Add item to cart
function addToCart(product) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += product.quantity || 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: product.quantity || 1
        });
    }
    
    saveCart(cart);
}

// Remove item from cart
function removeFromCart(productId) {
    const cartItem = document.querySelector(`.cart-item[data-id="${productId}"]`);
    
    if (cartItem) {
        cartItem.classList.add('cart-item--removing');
        setTimeout(() => {
            const cart = getCart().filter(item => item.id !== productId);
            saveCart(cart);
        }, 200);
    }
}

// Update item quantity
function updateItemQuantity(productId, change) {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        saveCart(cart);
    }
}

// Render cart items
function renderCartItems() {
    const cartContent = document.getElementById('cartContent');
    const cartFooter = document.getElementById('cartFooter');
    const cartCount = document.getElementById('cartCount');
    
    if (!cartContent) return;
    
    const cart = getCart();
    
    // Update count
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    // Show empty state or items
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <svg class="cart-empty__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                <h3 class="cart-empty__title">Tu carrito está vacío</h3>
                <p class="cart-empty__text">Agrega productos para comenzar tu compra</p>
            </div>
        `;
        if (cartFooter) {
            cartFooter.style.display = 'none';
        }
    } else {
        cartContent.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => `
                    <article class="cart-item" data-id="${item.id}">
                        <div class="cart-item__image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item__info">
                            <h4 class="cart-item__title">${item.name}</h4>
                            <p class="cart-item__price">${formatPrice(item.price)}</p>
                            <div class="cart-item__quantity">
                                <button class="cart-item__qty-btn" data-action="decrease" data-id="${item.id}" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
                                <span class="cart-item__qty-value">${item.quantity}</span>
                                <button class="cart-item__qty-btn" data-action="increase" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <button class="cart-item__remove" data-action="remove" data-id="${item.id}">×</button>
                    </article>
                `).join('')}
            </div>
        `;
        
        if (cartFooter) {
            cartFooter.style.display = 'block';
            const totalElement = document.getElementById('cartTotal');
            if (totalElement) {
                totalElement.textContent = formatPrice(calculateTotal());
            }
        }
        
        // Add event listeners to cart items
        attachCartItemListeners();
    }
}

// Attach event listeners to cart items
function attachCartItemListeners() {
    document.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const action = e.target.dataset.action;
            if (action === 'increase') {
                updateItemQuantity(id, 1);
            } else if (action === 'decrease') {
                updateItemQuantity(id, -1);
            }
        });
    });
    
    document.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            removeFromCart(id);
        });
    });
}

// Update entire cart UI
function updateCartUI() {
    renderCartItems();
    updateCartBadge();
}

// Open cart
function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) {
        cartSidebar.classList.add('cart-sidebar--open');
    }
    if (cartOverlay) {
        cartOverlay.classList.add('cart-overlay--visible');
    }
    document.body.style.overflow = 'hidden';
    updateCartUI();
}

// Close cart
function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) {
        cartSidebar.classList.remove('cart-sidebar--open');
    }
    if (cartOverlay) {
        cartOverlay.classList.remove('cart-overlay--visible');
    }
    document.body.style.overflow = '';
}

// Initialize cart functionality
function initCart() {
    // Update badge on load
    updateCartBadge();
    
    // Cart toggle button
    const cartToggle = document.getElementById('cartToggle');
    cartToggle?.addEventListener('click', openCart);
    
    // Cart close button
    const cartClose = document.getElementById('cartClose');
    cartClose?.addEventListener('click', closeCart);
    
    // Overlay click to close
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay?.addEventListener('click', closeCart);
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar?.classList.contains('cart-sidebar--open')) {
                closeCart();
            }
        }
    });
}

// Handle product card add to cart
function initProductCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        const minusBtn = card.querySelector('.product-card__qty-btn:first-child');
        const plusBtn = card.querySelector('.product-card__qty-btn:last-child');
        const qtyValue = card.querySelector('.product-card__qty-value');
        const addBtn = card.querySelector('.product-card__add');
        
        const product = {
            id: card.dataset.productId ? parseInt(card.dataset.productId) : Date.now(),
            name: card.querySelector('.product-card__title')?.textContent || 'Producto',
            price: parseInt(card.querySelector('.product-card__price')?.textContent.replace(/[$.]/g, '') || 0),
            image: card.querySelector('.product-card__image img')?.src || '',
            quantity: 1
        };
        
        minusBtn?.addEventListener('click', () => {
            const current = parseInt(qtyValue.textContent);
            if (current > 1) {
                qtyValue.textContent = current - 1;
            }
        });
        
        plusBtn?.addEventListener('click', () => {
            const current = parseInt(qtyValue.textContent);
            qtyValue.textContent = current + 1;
        });
        
            addBtn?.addEventListener('click', () => {
                product.quantity = parseInt(qtyValue.textContent) || 1;
                addToCart(product);
                
                // Animation feedback
                addBtn.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    addBtn.style.transform = 'scale(1)';
                }, 150);
                
                // Reset quantity
                qtyValue.textContent = 1;
            });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    initProductCards();
});