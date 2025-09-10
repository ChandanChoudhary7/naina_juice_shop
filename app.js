// Juice Shop PWA - Main Application Logic

// Application Data
const appData = {
  categories: [
    {
      id: "fitness",
      name: "Fitness Juice",
      description: "Protein-rich and post-workout recovery juices",
      color: "#ff6b6b"
    },
    {
      id: "fresh",
      name: "Fresh Juice", 
      description: "Natural fruit juices made fresh daily",
      color: "#4ecdc4"
    },
    {
      id: "energy",
      name: "Energy Drinks",
      description: "Natural energy boosters and caffeine drinks",
      color: "#45b7d1"
    },
    {
      id: "sugar-free",
      name: "Sugar-Free",
      description: "Diabetic-friendly and low-calorie options",
      color: "#96ceb4"
    },
    {
      id: "kids",
      name: "Kids Special",
      description: "Mild flavors perfect for children",
      color: "#ffeaa7"
    },
    {
      id: "tasty",
      name: "Tasty Treats",
      description: "Indulgent and dessert-like juice combinations",
      color: "#fd79a8"
    }
  ],
  products: [
    {
      id: 1,
      name: "Protein Power Green",
      category: "fitness",
      price: 289,
      description: "Spinach, kale, banana, protein powder, almond milk",
      image: "🥬",
      benefits: "High protein, muscle recovery"
    },
    {
      id: 2,
      name: "Post-Workout Berry Blast",
      category: "fitness", 
      price: 319,
      description: "Mixed berries, whey protein, coconut water",
      image: "🫐",
      benefits: "Antioxidants, quick recovery"
    },
    {
      id: 3,
      name: "Fresh Orange Delight",
      category: "fresh",
      price: 159,
      description: "Pure fresh oranges, no added sugar",
      image: "🍊",
      benefits: "Vitamin C, natural sweetness"
    },
    {
      id: 4,
      name: "Tropical Mango Mix",
      category: "fresh",
      price: 189,
      description: "Fresh mango, pineapple, mint",
      image: "🥭",
      benefits: "Vitamin A, tropical flavor"
    },
    {
      id: 5,
      name: "Green Apple Paradise",
      category: "fresh",
      price: 169,
      description: "Crisp green apples, lime, fresh herbs",
      image: "🍏",
      benefits: "Fiber, refreshing taste"
    },
    {
      id: 6,
      name: "Natural Energy Boost",
      category: "energy",
      price: 229,
      description: "Green tea, ginseng, honey, lemon",
      image: "⚡",
      benefits: "Natural caffeine, sustained energy"
    },
    {
      id: 7,
      name: "Coffee Kick Cooler",
      category: "energy",
      price: 249,
      description: "Cold brew coffee, coconut milk, vanilla",
      image: "☕",
      benefits: "Caffeine boost, smooth taste"
    },
    {
      id: 8,
      name: "Stevia Sweet Orange",
      category: "sugar-free",
      price: 179,
      description: "Fresh oranges sweetened with stevia",
      image: "🍊",
      benefits: "Zero calories, diabetic-friendly"
    },
    {
      id: 9,
      name: "Cucumber Mint Detox",
      category: "sugar-free",
      price: 149,
      description: "Cucumber, mint, lime, no added sugar",
      image: "🥒",
      benefits: "Hydrating, detoxifying"
    },
    {
      id: 10,
      name: "Mild Banana Smoothie",
      category: "kids",
      price: 139,
      description: "Banana, milk, honey (mild sweetness)",
      image: "🍌",
      benefits: "Kid-friendly, nutritious"
    },
    {
      id: 11,
      name: "Sweet Apple Juice",
      category: "kids",
      price: 129,
      description: "Sweet red apples, gentle flavor",
      image: "🍎",
      benefits: "Natural vitamins, kid-approved"
    },
    {
      id: 12,
      name: "Chocolate Banana Shake",
      category: "tasty",
      price: 259,
      description: "Banana, cocoa, milk, whipped cream",
      image: "🍫",
      benefits: "Indulgent treat, satisfying"
    },
    {
      id: 13,
      name: "Strawberry Cheesecake",
      category: "tasty",
      price: 289,
      description: "Strawberry, cream cheese, graham crackers",
      image: "🍓",
      benefits: "Dessert-like, creamy texture"
    }
  ],
  deliveryOptions: [
    {
      id: "pickup",
      name: "Store Pickup",
      price: 0,
      time: "Ready in 15-20 minutes"
    },
    {
      id: "delivery",
      name: "Home Delivery", 
      price: 49,
      time: "30-45 minutes"
    }
  ],
  paymentMethods: [
    {
      id: "razorpay",
      name: "Razorpay",
      description: "UPI, Cards, Wallets"
    },
    {
      id: "paytm",
      name: "Paytm",
      description: "Wallet & UPI"
    },
    {
      id: "phonepe",
      name: "PhonePe",
      description: "UPI payments"
    }
  ]
};

// Application State
let appState = {
  currentSection: 'home',
  currentCategory: null,
  cart: [],
  deliveryOption: 'pickup',
  paymentMethod: 'razorpay'
};

// DOM Elements
const elements = {};

// Initialize DOM elements function
function initializeDOMElements() {
  elements.homeSection = document.getElementById('homeSection');
  elements.categorySection = document.getElementById('categorySection');
  elements.cartSection = document.getElementById('cartSection');
  elements.checkoutSection = document.getElementById('checkoutSection');
  elements.confirmationSection = document.getElementById('confirmationSection');
  elements.cartBtn = document.getElementById('cartBtn');
  elements.cartCount = document.getElementById('cartCount');
  elements.backToHome = document.getElementById('backToHome');
  elements.backFromCart = document.getElementById('backFromCart');
  elements.backFromCheckout = document.getElementById('backFromCheckout');
  elements.categoryTitle = document.getElementById('categoryTitle');
  elements.productsGrid = document.getElementById('productsGrid');
  elements.cartItems = document.getElementById('cartItems');
  elements.cartEmpty = document.getElementById('cartEmpty');
  elements.cartSummary = document.getElementById('cartSummary');
  elements.cartSubtotal = document.getElementById('cartSubtotal');
  elements.deliveryFee = document.getElementById('deliveryFee');
  elements.cartTotal = document.getElementById('cartTotal');
  elements.proceedToCheckout = document.getElementById('proceedToCheckout');
  elements.startShopping = document.getElementById('startShopping');
  elements.checkoutForm = document.getElementById('checkoutForm');
  elements.checkoutItems = document.getElementById('checkoutItems');
  elements.checkoutSubtotal = document.getElementById('checkoutSubtotal');
  elements.checkoutDeliveryFee = document.getElementById('checkoutDeliveryFee');
  elements.checkoutTotal = document.getElementById('checkoutTotal');
  elements.orderId = document.getElementById('orderId');
  elements.estimatedTime = document.getElementById('estimatedTime');
  elements.trackOrder = document.getElementById('trackOrder');
  elements.continueShoppingFromConfirm = document.getElementById('continueShoppingFromConfirm');
  elements.toast = document.getElementById('toast');
  elements.toastMessage = document.getElementById('toastMessage');
  elements.loadingOverlay = document.getElementById('loadingOverlay');
  
  // Ensure loading overlay is hidden on initialization
  if (elements.loadingOverlay) {
    elements.loadingOverlay.classList.add('hidden');
  }
}

// Utility Functions
function formatPrice(price) {
  return `₹${price}`;
}

function generateOrderId() {
  const timestamp = Date.now();
  return `#FJ${timestamp.toString().slice(-6)}`;
}

function showToast(message, type = 'success') {
  if (!elements.toastMessage || !elements.toast) return;
  
  elements.toastMessage.textContent = message;
  elements.toast.classList.remove('hidden');
  elements.toast.classList.add('show');
  
  setTimeout(() => {
    elements.toast.classList.remove('show');
    setTimeout(() => {
      elements.toast.classList.add('hidden');
    }, 300);
  }, 3000);
}

function showLoading() {
  if (elements.loadingOverlay) {
    elements.loadingOverlay.classList.remove('hidden');
  }
}

function hideLoading() {
  if (elements.loadingOverlay) {
    elements.loadingOverlay.classList.add('hidden');
  }
}

// Navigation Functions
function showSection(sectionName) {
  // Hide all sections
  const sections = ['homeSection', 'categorySection', 'cartSection', 'checkoutSection', 'confirmationSection'];
  sections.forEach(sectionKey => {
    if (elements[sectionKey]) {
      elements[sectionKey].classList.add('hidden');
    }
  });
  
  // Show requested section
  switch(sectionName) {
    case 'home':
      if (elements.homeSection) elements.homeSection.classList.remove('hidden');
      break;
    case 'category':
      if (elements.categorySection) elements.categorySection.classList.remove('hidden');
      break;
    case 'cart':
      if (elements.cartSection) elements.cartSection.classList.remove('hidden');
      updateCartDisplay();
      break;
    case 'checkout':
      if (elements.checkoutSection) elements.checkoutSection.classList.remove('hidden');
      updateCheckoutDisplay();
      break;
    case 'confirmation':
      if (elements.confirmationSection) elements.confirmationSection.classList.remove('hidden');
      break;
  }
  
  appState.currentSection = sectionName;
}

// Cart Functions
function addToCart(productId, quantity = 1) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = appState.cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    appState.cart.push({
      ...product,
      quantity
    });
  }
  
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  const itemIndex = appState.cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    const item = appState.cart[itemIndex];
    appState.cart.splice(itemIndex, 1);
    updateCartCount();
    showToast(`${item.name} removed from cart`);
  }
}

function updateCartQuantity(productId, quantity) {
  const item = appState.cart.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      updateCartCount();
    }
  }
}

function clearCart() {
  appState.cart = [];
  updateCartCount();
}

function updateCartCount() {
  const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (elements.cartCount) {
    elements.cartCount.textContent = totalItems;
  }
}

function getCartSubtotal() {
  return appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getDeliveryFee() {
  const deliveryOption = appData.deliveryOptions.find(opt => opt.id === appState.deliveryOption);
  return deliveryOption ? deliveryOption.price : 0;
}

function getCartTotal() {
  return getCartSubtotal() + getDeliveryFee();
}

// Display Functions
function renderProducts(categoryId) {
  const products = appData.products.filter(product => product.category === categoryId);
  const category = appData.categories.find(cat => cat.id === categoryId);
  
  if (elements.categoryTitle) {
    elements.categoryTitle.textContent = category.name;
  }
  
  if (!elements.productsGrid) return;
  elements.productsGrid.innerHTML = '';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image">${product.image}</div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-benefits">${product.benefits}</div>
        <div class="product-footer">
          <div class="product-price">${formatPrice(product.price)}</div>
          <button class="add-to-cart-btn" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>
    `;
    
    elements.productsGrid.appendChild(productCard);
  });
}

function updateCartDisplay() {
  if (!elements.cartItems || !elements.cartEmpty || !elements.cartSummary) return;
  
  if (appState.cart.length === 0) {
    elements.cartItems.innerHTML = '';
    elements.cartEmpty.classList.remove('hidden');
    elements.cartSummary.classList.add('hidden');
    return;
  }
  
  elements.cartEmpty.classList.add('hidden');
  elements.cartSummary.classList.remove('hidden');
  
  elements.cartItems.innerHTML = '';
  
  appState.cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-image">${item.image}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)} each</div>
      </div>
      <div class="cart-item-controls">
        <div class="quantity-controls">
          <button class="quantity-btn" data-action="decrease" data-product-id="${item.id}">−</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn" data-action="increase" data-product-id="${item.id}">+</button>
        </div>
        <button class="remove-btn" data-product-id="${item.id}">🗑️</button>
      </div>
    `;
    
    elements.cartItems.appendChild(cartItem);
  });
  
  // Update totals
  if (elements.cartSubtotal) elements.cartSubtotal.textContent = formatPrice(getCartSubtotal());
  if (elements.deliveryFee) elements.deliveryFee.textContent = formatPrice(getDeliveryFee());
  if (elements.cartTotal) elements.cartTotal.textContent = formatPrice(getCartTotal());
}

function updateCheckoutDisplay() {
  // Update order items
  if (!elements.checkoutItems) return;
  elements.checkoutItems.innerHTML = '';
  
  appState.cart.forEach(item => {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.innerHTML = `
      <div class="order-item-details">
        <div class="order-item-name">${item.name}</div>
        <div class="order-item-qty">Qty: ${item.quantity}</div>
      </div>
      <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
    `;
    
    elements.checkoutItems.appendChild(orderItem);
  });
  
  // Update totals
  if (elements.checkoutSubtotal) elements.checkoutSubtotal.textContent = formatPrice(getCartSubtotal());
  if (elements.checkoutDeliveryFee) elements.checkoutDeliveryFee.textContent = formatPrice(getDeliveryFee());
  if (elements.checkoutTotal) elements.checkoutTotal.textContent = formatPrice(getCartTotal());
}

// Event Listeners
function setupEventListeners() {
  // Category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const categoryId = card.getAttribute('data-category');
      appState.currentCategory = categoryId;
      renderProducts(categoryId);
      showSection('category');
    });
  });
  
  // Navigation buttons
  if (elements.cartBtn) {
    elements.cartBtn.addEventListener('click', () => showSection('cart'));
  }
  if (elements.backToHome) {
    elements.backToHome.addEventListener('click', () => showSection('home'));
  }
  if (elements.backFromCart) {
    elements.backFromCart.addEventListener('click', () => showSection('home'));
  }
  if (elements.backFromCheckout) {
    elements.backFromCheckout.addEventListener('click', () => showSection('cart'));
  }
  if (elements.startShopping) {
    elements.startShopping.addEventListener('click', () => showSection('home'));
  }
  if (elements.proceedToCheckout) {
    elements.proceedToCheckout.addEventListener('click', () => showSection('checkout'));
  }
  if (elements.continueShoppingFromConfirm) {
    elements.continueShoppingFromConfirm.addEventListener('click', () => {
      clearCart();
      showSection('home');
    });
  }
  
  // Product grid events (delegated)
  if (elements.productsGrid) {
    elements.productsGrid.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(e.target.getAttribute('data-product-id'));
        addToCart(productId);
      }
    });
  }
  
  // Cart events (delegated)
  if (elements.cartItems) {
    elements.cartItems.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-product-id'));
      
      if (e.target.classList.contains('quantity-btn')) {
        const action = e.target.getAttribute('data-action');
        const currentItem = appState.cart.find(item => item.id === productId);
        
        if (action === 'increase') {
          updateCartQuantity(productId, currentItem.quantity + 1);
        } else if (action === 'decrease') {
          updateCartQuantity(productId, currentItem.quantity - 1);
        }
        
        updateCartDisplay();
      }
      
      if (e.target.classList.contains('remove-btn')) {
        removeFromCart(productId);
        updateCartDisplay();
      }
    });
  }
  
  // Delivery option change
  document.querySelectorAll('input[name="delivery"]').forEach(input => {
    input.addEventListener('change', (e) => {
      appState.deliveryOption = e.target.value;
      updateCartDisplay();
      updateCheckoutDisplay();
    });
  });
  
  // Payment method change
  document.querySelectorAll('input[name="payment"]').forEach(input => {
    input.addEventListener('change', (e) => {
      appState.paymentMethod = e.target.value;
    });
  });
  
  // Checkout form submission
  if (elements.checkoutForm) {
    elements.checkoutForm.addEventListener('submit', handleCheckout);
  }
  
  // Order tracking (simulate)
  if (elements.trackOrder) {
    elements.trackOrder.addEventListener('click', () => {
      showToast('Order tracking will be sent via SMS and email');
    });
  }
}

// Checkout Handler
function handleCheckout(e) {
  e.preventDefault();
  
  // Validate form
  const customerName = document.getElementById('customerName')?.value;
  const customerPhone = document.getElementById('customerPhone')?.value;
  const customerEmail = document.getElementById('customerEmail')?.value;
  const customerAddress = document.getElementById('customerAddress')?.value;
  
  if (!customerName || !customerPhone || !customerEmail || !customerAddress) {
    showToast('Please fill in all required fields', 'error');
    return;
  }
  
  // Validate phone number
  if (!/^\d{10}$/.test(customerPhone.replace(/\D/g, ''))) {
    showToast('Please enter a valid 10-digit phone number', 'error');
    return;
  }
  
  // Validate email
  if (!/\S+@\S+\.\S+/.test(customerEmail)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading and simulate payment processing
  showLoading();
  
  // Simulate payment gateway redirect and processing
  setTimeout(() => {
    hideLoading();
    
    // Generate order details
    const orderId = generateOrderId();
    const deliveryOption = appData.deliveryOptions.find(opt => opt.id === appState.deliveryOption);
    
    if (elements.orderId) elements.orderId.textContent = orderId;
    if (elements.estimatedTime) elements.estimatedTime.textContent = deliveryOption.time;
    
    showSection('confirmation');
    showToast('Order placed successfully! Payment completed.');
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
    }, 1000);
    
  }, 2000);
}

// PWA Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const swCode = `
      const CACHE_NAME = 'freshjuice-v1';
      const urlsToCache = [
        '/',
        '/style.css',
        '/app.js'
      ];
      
      self.addEventListener('install', event => {
        event.waitUntil(
          caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
        );
      });
      
      self.addEventListener('fetch', event => {
        event.respondWith(
          caches.match(event.request)
            .then(response => {
              if (response) {
                return response;
              }
              return fetch(event.request);
            })
        );
      });
    `;
    
    const blob = new Blob([swCode], { type: 'application/javascript' });
    const swUrl = URL.createObjectURL(blob);
    
    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  }
}

// Install PWA prompt
function setupPWAInstall() {
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or prompt
    showToast('Add FreshJuice to your home screen for quick access!');
  });
  
  window.addEventListener('appinstalled', () => {
    showToast('FreshJuice has been installed successfully!');
  });
}

// Initialize App
function initializeApp() {
  // Initialize DOM elements first
  initializeDOMElements();
  
  // Ensure loading overlay is hidden
  hideLoading();
  
  // Setup event listeners
  setupEventListeners();
  
  // Update cart count
  updateCartCount();
  
  // Register service worker
  registerServiceWorker();
  
  // Setup PWA install
  setupPWAInstall();
  
  // Show home section by default
  showSection('home');
  
  console.log('FreshJuice PWA initialized successfully!');
}

// Load app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Handle back button navigation
window.addEventListener('popstate', (e) => {
  const section = e.state?.section || 'home';
  showSection(section);
});

// Export for potential use in other contexts
window.FreshJuiceApp = {
  appState,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  showSection,
  showToast
};
