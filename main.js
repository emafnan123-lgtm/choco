/* ==========================================================================
   LA VIOLETTE & CO. | MAIN JAVASCRIPT
   Menu Filtering, Interactive Cart, Custom Cake Builder, Garden Reservations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMenuRenderer();
  initCartSystem();
  initCakeStudio();
  initTableReservation();
  initSmoothScroll();
});

/* ==========================================================================
   MENU DATABASE (PRICED IN PAKISTANI RUPEES - PKR / ₨)
   ========================================================================== */
const MENU_ITEMS = [
  // Pastries & Croissants
  {
    id: 'pastry-1',
    category: 'pastries',
    title: 'French Butter Croissant',
    categoryName: 'Artisanal Pastry',
    description: 'Baked fresh with 100% Normandy cultured French butter, featuring honeycomb crumb and golden flakiness.',
    price: 580,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pastry-2',
    category: 'pastries',
    title: 'Belgian Pain au Chocolat',
    categoryName: 'Artisanal Pastry',
    description: 'Double batons of 70% Valrhona dark Belgian chocolate encased in caramelized crisp puff pastry.',
    price: 690,
    badge: 'Chef Choice',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pastry-3',
    category: 'pastries',
    title: 'Wild Blueberry & Lavender Brioche',
    categoryName: 'Signature Pâtisserie',
    description: 'Tender brioche swirled with organic French lavender crème and bursting wild blueberry compote.',
    price: 750,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'pastry-4',
    category: 'pastries',
    title: 'Twice-Baked Almond Frangipane',
    categoryName: 'Artisanal Pastry',
    description: 'Soaked in Madagascar bourbon vanilla syrup, filled with rich almond frangipane and toasted flakes.',
    price: 820,
    badge: 'Must Try',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80'
  },

  // Cakes & Tarts
  {
    id: 'cake-1',
    category: 'cakes',
    title: 'Velvet Violet Blackberry Gateau',
    categoryName: 'Bespoke Cake Slice',
    description: 'Moist dark cacao sponge layered with violet-infused blackberry reduction and smooth cream cheese mousse.',
    price: 890,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-2',
    category: 'cakes',
    title: 'Espresso Mocha Tiramisu Entremet',
    categoryName: 'Gourmet Dessert',
    description: 'Savoiardi soaked in house-roasted dark espresso, layered with whipped mascarpone cream and Valrhona cocoa.',
    price: 820,
    badge: 'Coffee Infused',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-3',
    category: 'cakes',
    title: 'Salted Caramel Dark Chocolate Tart',
    categoryName: 'Artisanal Tart',
    description: 'Crisp cocoa sable pastry crust filled with buttery fleur de sel caramel and 64% dark chocolate ganache.',
    price: 780,
    badge: 'Decadent',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'cake-4',
    category: 'cakes',
    title: 'Lotus Biscoff Burnt Cheesecake',
    categoryName: 'San Sebastián Cheesecake',
    description: 'Ultra-creamy Spanish burnt cheesecake caramelized to perfection with melted Lotus Biscoff drizzle.',
    price: 850,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80'
  },

  // Sweets & Pâtisserie
  {
    id: 'sweet-1',
    category: 'sweets',
    title: 'Royal Parisian Macaron Box (6 Pcs)',
    categoryName: 'French Pâtisserie',
    description: 'Assorted delicate macarons: Lavender Earl Grey, Dark Espresso Bean, Salted Caramel, Rose & Pistachio.',
    price: 1650,
    badge: 'Luxury Box',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sweet-2',
    category: 'sweets',
    title: 'Madagascan Vanilla Mille-Feuille',
    categoryName: 'Classic Pâtisserie',
    description: 'Three crisp layers of caramelized puff pastry filled with luscious Madagascan vanilla bean mousseline.',
    price: 790,
    badge: 'Authentic',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'sweet-3',
    category: 'sweets',
    title: 'Choux Craquelin Trio',
    categoryName: 'Gourmet Choux',
    description: 'Crispy crunchy choux buns filled with roasted hazelnut praline, dark mocha cream, and salted caramel.',
    price: 720,
    badge: 'Trio Pack',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80'
  },

  // Artisan Coffee & Beverages
  {
    id: 'coffee-1',
    category: 'coffee',
    title: 'Signature Lavender Velvet Latte',
    categoryName: 'Specialty Coffee',
    description: 'Espresso pulled from single-origin Colombian beans, infused with pure French lavender and micro-foamed oat milk.',
    price: 750,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'coffee-2',
    category: 'coffee',
    title: 'Spanish Sweet Cortado',
    categoryName: 'Espresso Bar',
    description: 'Equal parts velvety double espresso and warm steamed milk with a rich ribbon of condensed caramel cream.',
    price: 620,
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'coffee-3',
    category: 'coffee',
    title: 'Dark Truffle Hot Chocolate',
    categoryName: 'Artisan Brew',
    description: 'Melted Belgian 70% dark chocolate steamed with creamy whole milk and topped with cocoa dusting & marshmallows.',
    price: 780,
    badge: 'Cozy Pick',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'coffee-4',
    category: 'beverages',
    title: 'Nitro Vanilla Sweet Cream Cold Brew',
    categoryName: 'Cold Brews',
    description: 'Steeped for 20 hours for ultra-low acidity, infused with food-grade nitrogen and topped with vanilla sweet foam.',
    price: 720,
    badge: 'Chilled',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'coffee-5',
    category: 'beverages',
    title: 'Violet Hibiscus & Berry Sparkler',
    categoryName: 'Botanical Refresher',
    description: 'Refreshing brew of wild hibiscus blossoms, butterfly pea violet tint, crushed berries, and sparkling water.',
    price: 650,
    badge: 'Garden Fresh',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80'
  }
];

/* ==========================================================================
   NAVIGATION & HEADER
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = toggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

/* ==========================================================================
   MENU RENDERER & CATEGORY FILTERING
   ========================================================================== */
function initMenuRenderer() {
  const grid = document.getElementById('menuItemsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  function render(category = 'all') {
    grid.innerHTML = '';
    const items = category === 'all' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(i => i.category === category);

    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'menu-item-card';
      card.innerHTML = `
        <div class="item-img-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="item-badges">
            <span class="badge-pill ${item.badge === 'Signature' ? 'signature' : ''}">${item.badge}</span>
          </div>
        </div>
        <div class="item-card-body">
          <span class="item-category-tag">${item.categoryName}</span>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-description">${item.description}</p>
          <div class="item-card-footer">
            <div class="item-price">
              <span class="currency-pkr">₨</span>${item.price.toLocaleString()}
            </div>
            <button class="add-cart-btn" onclick="addToCart('${item.id}')">
              <i class="fas fa-plus"></i> Add
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.getAttribute('data-filter'));
    });
  });

  // Initial render
  render('all');
}

/* ==========================================================================
   SHOPPING CART SYSTEM
   ========================================================================== */
let cart = [];

function initCartSystem() {
  const cartBtn = document.getElementById('cartIconBtn');
  const closeBtn = document.getElementById('cartCloseBtn');
  const overlay = document.getElementById('cartDrawerOverlay');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (cartBtn && overlay) {
    cartBtn.addEventListener('click', () => overlay.classList.add('open'));
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your cart is currently empty! Pick some delicious treats.', 'warning');
        return;
      }
      openOrderModal();
    });
  }
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  showToast(`Added ${item.title} to your order!`, 'success');
}

function updateCartQty(itemId, delta) {
  const index = cart.findIndex(i => i.id === itemId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadgeCount');
  const itemsContainer = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalAmount');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badge) badge.textContent = totalQty;

  if (subtotalEl) {
    subtotalEl.innerHTML = `<span style="font-size: 1rem; color: var(--caramel-400);">₨</span> ${totalPrice.toLocaleString()}`;
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <i class="fas fa-cookie-bite"></i>
        <p>Your basket is waiting for fresh pastries & artisanal coffee!</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = '';
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
      <div class="cart-item-info">
        <span class="cart-item-title">${item.title}</span>
        <div class="cart-item-price">₨ ${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <div class="cart-qty-ctrls">
        <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)"><i class="fas fa-minus"></i></button>
        <span style="font-size: 0.85rem; font-weight: 700; min-width: 18px; text-align: center;">${item.qty}</span>
        <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)"><i class="fas fa-plus"></i></button>
      </div>
      <button class="cart-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove"><i class="fas fa-trash-alt"></i></button>
    `;
    itemsContainer.appendChild(row);
  });
}

function openOrderModal() {
  const modal = document.getElementById('orderModal');
  if (!modal) return;

  const totalVal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalDisplay = modal.querySelector('#orderModalTotal');
  if (totalDisplay) {
    totalDisplay.textContent = `₨ ${totalVal.toLocaleString()}`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   CUSTOM CELEBRATION CAKE STUDIO & PRICE CALCULATOR
   ========================================================================== */
function initCakeStudio() {
  const sizeRadios = document.querySelectorAll('input[name="cakeSize"]');
  const flavorSelect = document.getElementById('cakeFlavorSelect');
  const finishRadios = document.querySelectorAll('input[name="cakeFinish"]');
  const inscriptionInput = document.getElementById('cakeInscriptionInput');
  const addonBoxes = document.querySelectorAll('.cake-addon-check');
  const orderCakeBtn = document.getElementById('orderCustomCakeBtn');

  function calculateCake() {
    const selectedSize = document.querySelector('input[name="cakeSize"]:checked');
    const sizeBase = selectedSize ? parseFloat(selectedSize.value) : 4200;
    const sizeWeight = selectedSize ? selectedSize.getAttribute('data-weight') : '2.5 lbs';

    const flavorName = flavorSelect ? flavorSelect.options[flavorSelect.selectedIndex].text : 'Belgian Chocolate';

    const selectedFinish = document.querySelector('input[name="cakeFinish"]:checked');
    const finishCost = selectedFinish ? parseFloat(selectedFinish.value) : 0;
    const finishName = selectedFinish ? selectedFinish.getAttribute('data-name') : 'Swiss Meringue';

    let addonsSum = 0;
    const activeAddons = [];
    addonBoxes.forEach(b => {
      if (b.checked) {
        addonsSum += parseFloat(b.value);
        activeAddons.push(b.getAttribute('data-name'));
      }
    });

    const totalCakeCost = sizeBase + finishCost + addonsSum;

    // Update UI elements
    const specWeight = document.getElementById('cakeSummaryWeight');
    const specFlavor = document.getElementById('cakeSummaryFlavor');
    const specFinish = document.getElementById('cakeSummaryFinish');
    const specTotal = document.getElementById('cakeSummaryTotalPrice');

    if (specWeight) specWeight.textContent = sizeWeight;
    if (specFlavor) specFlavor.textContent = flavorName;
    if (specFinish) specFinish.textContent = finishName;
    if (specTotal) specTotal.textContent = `₨ ${totalCakeCost.toLocaleString()}`;

    return {
      sizeWeight,
      flavorName,
      finishName,
      inscription: inscriptionInput ? inscriptionInput.value.trim() : '',
      activeAddons,
      totalCost: totalCakeCost
    };
  }

  // Event Listeners
  sizeRadios.forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('.size-pill-card').forEach(c => c.classList.remove('active'));
      r.closest('.size-pill-card').classList.add('active');
      calculateCake();
    });
  });

  if (flavorSelect) flavorSelect.addEventListener('change', calculateCake);

  finishRadios.forEach(r => {
    r.addEventListener('change', () => {
      document.querySelectorAll('.finish-card').forEach(c => c.classList.remove('active'));
      r.closest('.finish-card').classList.add('active');
      calculateCake();
    });
  });

  if (inscriptionInput) inscriptionInput.addEventListener('input', calculateCake);
  addonBoxes.forEach(b => b.addEventListener('change', calculateCake));

  if (orderCakeBtn) {
    orderCakeBtn.addEventListener('click', () => {
      const cakeData = calculateCake();
      const customItem = {
        id: 'custom-cake-' + Date.now(),
        category: 'cakes',
        title: `Custom ${cakeData.sizeWeight} Cake (${cakeData.flavorName})`,
        categoryName: 'Custom Pâtisserie',
        description: `Finish: ${cakeData.finishName}${cakeData.inscription ? ` | Message: "${cakeData.inscription}"` : ''}`,
        price: cakeData.totalCost,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
        qty: 1
      };

      cart.push(customItem);
      updateCartUI();
      document.getElementById('cartDrawerOverlay')?.classList.add('open');
      showToast('Custom Celebration Cake added to your basket!', 'success');
    });
  }

  calculateCake();
}

/* ==========================================================================
   OUTDOOR GARDEN TABLE RESERVATIONS
   ========================================================================== */
function initTableReservation() {
  const form = document.getElementById('tableReservationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const zone = document.getElementById('resZone').value;
    const notes = document.getElementById('resNotes').value.trim();

    if (!name || !phone) {
      showToast('Please provide your name and contact phone.', 'warning');
      return;
    }

    const bookingId = 'VB-RES-' + Math.floor(1000 + Math.random() * 9000);

    // Show confirmation modal
    showReservationConfirmation({
      id: bookingId,
      name,
      phone,
      guests,
      date,
      time,
      zone,
      notes
    });
  });

  // Handle Order Modal Submit
  const orderForm = document.getElementById('checkoutOrderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const custName = document.getElementById('orderCustName').value.trim();
      const custPhone = document.getElementById('orderCustPhone').value.trim();
      const orderType = document.getElementById('orderType').value;
      const orderAddress = document.getElementById('orderAddress').value.trim();

      const totalVal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      const itemsList = cart.map(i => `• ${i.qty}x ${i.title} (₨ ${(i.price * i.qty).toLocaleString()})`).join('\n');

      const waMessage = encodeURIComponent(
        `*NEW BAKERY & COFFEE ORDER*\n` +
        `---------------------------\n` +
        `*Customer:* ${custName}\n` +
        `*Phone:* ${custPhone}\n` +
        `*Type:* ${orderType}\n` +
        (orderType === 'Delivery' ? `*Address:* ${orderAddress}\n` : '') +
        `---------------------------\n` +
        `*Order Items:*\n${itemsList}\n` +
        `---------------------------\n` +
        `*Total:* ₨ ${totalVal.toLocaleString()}\n\n` +
        `Please confirm my bakery order!`
      );

      // Open WhatsApp link
      window.open(`https://wa.me/923001234567?text=${waMessage}`, '_blank');

      closeAllModals();
      cart = [];
      updateCartUI();
      document.getElementById('cartDrawerOverlay')?.classList.remove('open');
      showToast('Order submitted! Redirecting to WhatsApp concierge...', 'success');
    });
  }
}

function showReservationConfirmation(res) {
  closeAllModals();
  const modal = document.getElementById('reservationConfirmModal');
  if (!modal) return;

  modal.querySelector('#confirmResId').textContent = res.id;
  modal.querySelector('#confirmResName').textContent = res.name;
  modal.querySelector('#confirmResGuests').textContent = `${res.guests} Guests`;
  modal.querySelector('#confirmResDateTime').textContent = `${res.date || 'Today'} at ${res.time}`;
  modal.querySelector('#confirmResZone').textContent = res.zone;

  const waBtn = modal.querySelector('#resWhatsAppBtn');
  if (waBtn) {
    const textMsg = encodeURIComponent(
      `Hello La Violette! I would like to confirm my garden table reservation:\n*Booking ID:* ${res.id}\n*Name:* ${res.name}\n*Guests:* ${res.guests}\n*Date & Time:* ${res.date} at ${res.time}\n*Seating Area:* ${res.zone}`
    );
    waBtn.href = `https://wa.me/923001234567?text=${textMsg}`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  showToast('Table reservation request placed!', 'success');
}

/* ==========================================================================
   GLOBAL UTILITIES & TOAST
   ========================================================================== */
function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

function initSmoothScroll() {
  document.querySelectorAll('.modal-close-icon, .modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconClass = type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-circle' : 'fa-coffee';
  const iconColor = type === 'success' ? 'var(--caramel-400)' : type === 'warning' ? '#f59e0b' : 'var(--purple-400)';

  toast.innerHTML = `
    <i class="fas ${iconClass}" style="color: ${iconColor}; font-size: 1.15rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
