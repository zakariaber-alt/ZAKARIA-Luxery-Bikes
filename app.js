// Product Data
const products = [
    { id: 1, name: 'Kawasaki Ninja H2', category: 'sportbike', price: 29999, engine: '998cc', power: '310hp', image: 'https://content2.kawasaki.com/ContentStorage/KMC/ProductTrimGroup/31/bfeb7d71-e4e7-4bce-b350-093f28bde64f.jpg?w=750', special: 'Best Seller' },
    { id: 2, name: 'Harley-Davidson Iron 883', category: 'cruiser', price: 12499, engine: '883cc', power: '53hp', image: 'https://img.indianautosblog.com/2020/03/28/harley-daivdson-iron-883-left-side-3f84.jpg' },
    { id: 3, name: 'BMW R 1250 GS', category: 'adventure', price: 24800, engine: '1254cc', power: '136hp', image: 'https://images5.1000ps.net/images_bikekat/2019/7-BMW/9500-R_1250_GS/016.jpg', special: 'New' },
    { id: 4, name: 'Yamaha MT-09', category: 'naked', price: 9250, engine: '889cc', power: '114hp', image: 'https://image.internetcom.jp/upload/20180228/images/MT-09_SP_ABSTOP.jpg' },
    { id: 5, name: 'Ducati Panigale V4', category: 'sportbike', price: 23995, engine: '1103cc', power: '214hp', image: 'https://c.ndtvimg.com/2019-10/gom2tgls_2020-ducati-panigale-v4_625x300_25_October_19.jpg', special: 'Hot' },
    { id: 6, name: 'Honda Rebel 1100', category: 'cruiser', price: 8400, engine: '1084cc', power: '87hp', image: 'https://ultimatemotorcycling.com/wp-content/uploads/2022/11/2023-honda-rebel-1100t-dct-first-look-bagger-9.jpg' },
    { id: 7, name: 'KTM 1290 Super Adventure R', category: 'adventure', price: 19599, engine: '1301cc', power: '160hp', image: 'https://images5.1000ps.net/images_bikekat/2024/1-KTM/8756-1290_Super_Adventure_S/013-638412563823773020-ktm-1290-super-adventure-s.jpg' },
    { id: 8, name: 'Suzuki GSX-R1000', category: 'sportbike', price: 17999, engine: '999cc', power: '203hp', image: 'https://imgcdn.zigwheels.co.th/large/gallery/color/94/1772/suzuki-gsx-r1000-color-556731.jpg' },
    { id: 9, name: 'Honda Gold Wing', category: 'cruiser', price: 38500, engine: '1833cc', power: '126hp', image: 'https://cdn-0.totalmotorcycle.com/wp-content/uploads/2025/02/2025-Honda-Gold-Wing-DCT1.jpg', special: 'Luxury' },
    { id: 10, name: 'Aprilia RSV4', category: 'sportbike', price: 21599, engine: '1099cc', power: '217hp', image: 'https://images.piaggio.com/aprilia/vehicles/ap6192100ebp00/ap6192100ebp05/ap6192100ebp05-01.png' },
    { id: 11, name: 'Royal Enfield Classic 350', category: 'cruiser', price: 4400, engine: '349cc', power: '19.3hp', image: 'https://images5.1000ps.net/images_bikekat/2025/15-Royal_Enfield/10809-Classic_350/011-638768678419836054-royal-enfield-classic-350.jpg' },
    { id: 12, name: 'Kawasaki Versys 650', category: 'adventure', price: 8799, engine: '649cc', power: '68hp', image: 'https://tse2.mm.bing.net/th/id/OIP.SyCQa-NLFMpY9Ls0cmpKhAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 13, name: 'MV Agusta F4', category: 'sportbike', price: 19500, engine: '798cc', power: '212hp', image: 'https://storage.edidomus.it/dueruote/nuovo/850/lat-f41078rr312.jpg', special: 'Premium' },
    { id: 14, name: 'Indian Scout', category: 'cruiser', price: 13000, engine: '1200cc', power: '100hp', image: 'https://th.bing.com/th/id/R.6c42277629db97c7ba62dca8da25c9cc?rik=6sUWTI1ic%2bwQNQ&riu=http%3a%2f%2fwww.indianmotorcyclebenelux.com%2ffileadmin%2ftemplates%2fmodel_24%2fswap%2fintl%2fscout-1250%2fscout-classic-black.jpg&ehk=jfknw14fLDsUwSO5mIdw7Q68vCxIdmNz4fr8%2fQ9XGkY%3d&risl=&pid=ImgRaw&r=0' },
    { id: 15, name: 'Honda CRF1100L Africa Twin', category: 'adventure', price: 16500, engine: '1084cc', power: '101hp', image: 'https://images5.1000ps.net/images_bikekat/2024/2-Honda/9897-CRF1100L_Africa_Twin_Adventure_Sports_DCT/003-638320346430494059-honda-crf1100l-africa-twin-adventure-sports-dct.jpg' },
    { id: 16, name: 'Yamaha YZF-R7', category: 'sportbike', price: 8699, engine: '689cc', power: '72.2hp', image: 'https://motostatz.com/wp-content/uploads/2021/09/Yamaha-YZF-R7-Top-Speed.png' },
    { id: 17, name: 'Triumph Bonneville T120', category: 'naked', price: 12920, engine: '1200cc', power: '126hp', image: 'https://images5.1000ps.net/images_bikekat/2024/37-Triumph/8405-Bonneville_T120_Black/001-638246859435318145-triumph-bonneville-t120-black.jpg', special: 'Classic' },
    { id: 18, name: 'Kawasaki Z900', category: 'naked', price: 10199, engine: '948cc', power: '125hp', image: 'https://cdpcdn.dx1app.com/products/USA/KA/2025/MC/SPORT/Z900_SE_ABS/50/RAPHITE_GRAY_-_EBONY_-_METALLIC_GRAPHITE_GRAY/2000000003.jpg' },
];

let cart = [];
let currentFilter = 'all';

// Initialize Products
function initProducts() {
    renderProducts();
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const badgeHTML = product.special ? `<div class="product-badge">${product.special}</div>` : '';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x400?text=${product.name}'">
                ${badgeHTML}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category.toUpperCase()}</div>
                <div class="product-specs">
                    <div class="spec-item">⚙️ ${product.engine}</div>
                    <div class="spec-item">⚡ ${product.power}</div>
                </div>
                <div class="product-rating">⭐⭐⭐⭐⭐ (${Math.floor(Math.random() * 150) + 50} reviews)</div>
                <div class="product-price">
                    <span class="price">$${product.price.toLocaleString()}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}); event.stopPropagation();">Add</button>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openShowroom(product.id));
        grid.appendChild(card);
    });
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts();
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    document.getElementById('cart-count').textContent = cart.length;
    renderCart();
}

// Render Cart
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart">Your cart is empty. Start shopping!</div>';
        document.getElementById('checkout-btn').disabled = true;
        updateCartTotals();
        return;
    }

    document.getElementById('checkout-btn').disabled = false;
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">🏍️ ${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                <span style="min-width: 40px; text-align: center; font-weight: bold;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    updateCartTotals();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart Totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 500 : 0;
    const tax = (subtotal + shipping) * 0.12;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString()}`;
    document.getElementById('shipping').textContent = `$${shipping.toLocaleString()}`;
    document.getElementById('tax').textContent = `$${tax.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('total').textContent = `$${total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Toggle Cart
function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) return;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 500;
    const tax = (subtotal + shipping) * 0.12;
    const total = subtotal + shipping + tax;
    alert(`🎉 Success! Your order of $${total.toLocaleString('en-US', {minimumFractionDigits: 2})} has been placed.\n\nThank you for choosing ZAKI BIKE 212!\n\nYour bikes will be delivered within 7-10 business days.`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('cart-modal');
    if (e.target === modal) {
        toggleCart();
    }
});

let currentShowroomProduct = null;

// Open Showroom
function openShowroom(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentShowroomProduct = product;

    document.getElementById('showroom-name').textContent = product.name;
    document.getElementById('showroom-title').textContent = product.name;
    document.getElementById('showroom-category').textContent = product.category.toUpperCase();
    document.getElementById('showroom-image').src = product.image;
    document.getElementById('showroom-engine').textContent = product.engine;
    document.getElementById('showroom-power').textContent = product.power;
    document.getElementById('showroom-type').textContent = product.category;
    document.getElementById('showroom-price').textContent = `$${product.price.toLocaleString()}`;

    document.getElementById('showroom-modal').classList.add('active');
}

// Close Showroom
function closeShowroom() {
    document.getElementById('showroom-modal').classList.remove('active');
    currentShowroomProduct = null;
}

// Add to Cart from Showroom
function addToCartFromShowroom() {
    if (!currentShowroomProduct) return;
    addToCart(currentShowroomProduct.id);
    closeShowroom();
    alert(`✅ ${currentShowroomProduct.name} added to cart!`);
}

// Close showroom when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('showroom-modal');
    if (e.target === modal) {
        closeShowroom();
    }
});

// Initialize on page load
window.addEventListener('load', initProducts);
