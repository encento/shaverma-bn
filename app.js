
const CATEGORIES = [
  { id: "all", label: "Всё меню", short: "Всё" },
  { id: "shawarma", label: "Шаверма", short: "Шаверма" },
  { id: "grill", label: "Мангал", short: "Мангал" },
  { id: "hotdog", label: "Хот-доги", short: "Хот-доги" },
  { id: "other", label: "Прочее", short: "Прочее" },
  { id: "drinks", label: "Горячие напитки", short: "Напитки" }
];

const ADDONS = [
  { id: "potato", title: "Картофель", price: 20 },
  { id: "corn", title: "Кукуруза", price: 20 },
  { id: "jalapeno", title: "Халапеньо", price: 30 },
  { id: "mushrooms", title: "Грибы", price: 30 },
  { id: "olives", title: "Маслины", price: 30 }
];

const PRODUCTS = [
  {
    id: "classic-lavash",
    title: "Классика в лаваше",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 320,
    emoji: "🌯",
    description: "Классическая шаверма в тонком лаваше.",
    addons: true,
    available: true
  },
  {
    id: "classic-double",
    title: "Классика двойная",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 370,
    emoji: "🌯",
    description: "Классическая шаверма с двойной порцией начинки.",
    addons: true,
    available: true
  },
  {
    id: "classic-bread",
    title: "Классика в хлебе",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 400,
    emoji: "🥙",
    description: "Классическая начинка в хлебе.",
    addons: true,
    available: true
  },
  {
    id: "julienne-lavash",
    title: "Жюльен в лаваше",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 380,
    emoji: "🍄",
    description: "Шаверма в лаваше в стиле жюльена.",
    addons: true,
    available: true
  },
  {
    id: "mozzarella-lavash",
    title: "Моцарелла в лаваше",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 380,
    emoji: "🧀",
    description: "Шаверма в лаваше с моцареллой.",
    addons: true,
    available: true
  },
  {
    id: "fajitas-lavash",
    title: "Фахитос в лаваше",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 400,
    emoji: "🌶️",
    description: "Фахитос, завёрнутый в тонкий лаваш.",
    addons: true,
    available: true
  },
  {
    id: "fajitas-bread",
    title: "Фахитос в хлебе",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 420,
    emoji: "🥙",
    description: "Фахитос в хлебе.",
    addons: true,
    available: true
  },
  {
    id: "plate",
    title: "На тарелке",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 400,
    emoji: "🍽️",
    description: "Начинка шавермы без лаваша — на тарелке.",
    addons: true,
    available: true
  },
  {
    id: "mini-lavash",
    title: "Мини в лаваше",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 200,
    emoji: "🌯",
    description: "Небольшая шаверма в лаваше.",
    addons: true,
    available: true
  },
  {
    id: "classic-pita",
    title: "Классика в пите",
    category: "shawarma",
    categoryName: "Шаверма",
    price: 300,
    emoji: "🥙",
    description: "Классическая шаверма в пите.",
    addons: true,
    available: true
  },

  {
    id: "chicken-half",
    title: "Курица — половина",
    category: "grill",
    categoryName: "Мангал",
    price: 500,
    emoji: "🍗",
    description: "Половина курицы с мангала.",
    addons: false,
    available: true
  },
  {
    id: "chicken-whole",
    title: "Курица — целая",
    category: "grill",
    categoryName: "Мангал",
    price: 900,
    emoji: "🔥",
    description: "Целая курица с мангала.",
    addons: false,
    available: true
  },
  {
    id: "wings-five",
    title: "Крылышки, 5 шт.",
    category: "grill",
    categoryName: "Мангал",
    price: 300,
    emoji: "🍗",
    description: "Пять куриных крылышек с мангала.",
    addons: false,
    available: true
  },
  {
    id: "grill-mushrooms",
    title: "Грибы, 5 шт.",
    category: "grill",
    categoryName: "Мангал",
    price: 300,
    emoji: "🍄",
    description: "Пять грибов, приготовленных на мангале.",
    addons: false,
    available: true
  },

  {
    id: "hotdog",
    title: "Хот-дог",
    category: "hotdog",
    categoryName: "Хот-доги",
    price: 200,
    emoji: "🌭",
    description: "Классический хот-дог.",
    addons: true,
    available: true
  },
  {
    id: "hotdog-double",
    title: "Хот-дог двойной",
    category: "hotdog",
    categoryName: "Хот-доги",
    price: 250,
    emoji: "🌭",
    description: "Хот-дог с двойной порцией.",
    addons: true,
    available: true
  },

  {
    id: "fries",
    title: "Картофель фри",
    category: "other",
    categoryName: "Прочее",
    price: 120,
    emoji: "🍟",
    description: "Порция картофеля фри.",
    addons: false,
    available: true
  },
  {
    id: "sauce-50",
    title: "Соус, 50 мл",
    category: "other",
    categoryName: "Прочее",
    price: 50,
    emoji: "🥣",
    description: "Небольшая порция соуса.",
    addons: false,
    available: true
  },
  {
    id: "sauce-125",
    title: "Соус, 125 мл",
    category: "other",
    categoryName: "Прочее",
    price: 100,
    emoji: "🥣",
    description: "Большая порция соуса.",
    addons: false,
    available: true
  },

  {
    id: "tea",
    title: "Чай в ассортименте",
    category: "drinks",
    categoryName: "Горячие напитки",
    price: 50,
    emoji: "🍵",
    description: "Горячий чай на выбор.",
    addons: false,
    available: true
  },
  {
    id: "cappuccino",
    title: "Капучино",
    category: "drinks",
    categoryName: "Горячие напитки",
    price: 90,
    emoji: "☕",
    description: "Кофе с молочной пеной.",
    addons: false,
    available: true
  },
  {
    id: "americano",
    title: "Американо",
    category: "drinks",
    categoryName: "Горячие напитки",
    price: 70,
    emoji: "☕",
    description: "Классический американо.",
    addons: false,
    available: true
  },
  {
    id: "espresso",
    title: "Эспрессо",
    category: "drinks",
    categoryName: "Горячие напитки",
    price: 70,
    emoji: "☕",
    description: "Классический эспрессо.",
    addons: false,
    available: true
  }
];

const STORAGE = {
  cart: "shavermaBN.cart.v2",
  lastOrder: "shavermaBN.lastOrder.v2"
};

let activeCategory = "all";
let activeProduct = null;
let selectedTime = null;
let cart = readJson(STORAGE.cart, []);

const $ = (selector) => document.querySelector(selector);

const categoriesElement = $("#categories");
const productGrid = $("#productGrid");
const productTemplate = $("#productTemplate");
const productDialog = $("#productDialog");
const cartDialog = $("#cartDialog");
const orderDialog = $("#orderDialog");

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(value) {
  return `${Number(value).toLocaleString("ru-RU")} ₽`;
}

function pluralize(value, forms) {
  const number = Math.abs(value) % 100;
  const digit = number % 10;
  if (number > 10 && number < 20) return forms[2];
  if (digit > 1 && digit < 5) return forms[1];
  if (digit === 1) return forms[0];
  return forms[2];
}

function renderCategories() {
  categoriesElement.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.className = `category-chip${category.id === activeCategory ? " active" : ""}`;
    button.type = "button";
    button.textContent = category.short;
    button.addEventListener("click", () => {
      activeCategory = category.id;
      renderCategories();
      renderProducts();
      window.scrollTo({
        top: document.querySelector(".categories-wrap").offsetTop - 4,
        behavior: "smooth"
      });
    });
    categoriesElement.append(button);
  });
}

function getVisibleProducts() {
  return activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);
}

function renderProducts() {
  const products = getVisibleProducts();
  const category = CATEGORIES.find((item) => item.id === activeCategory);

  $("#sectionTitle").textContent = category?.label || "Всё меню";
  $("#productCount").textContent =
    `${products.length} ${pluralize(products.length, ["позиция", "позиции", "позиций"])}`;

  productGrid.innerHTML = "";

  products.forEach((product) => {
    const fragment = productTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".product-card");
    const button = fragment.querySelector(".product-card-button");

    fragment.querySelector(".product-category-mark").textContent = product.categoryName;
    fragment.querySelector(".product-emoji").textContent = product.emoji;
    fragment.querySelector(".product-category").textContent = product.categoryName;
    fragment.querySelector(".product-title").textContent = product.title;
    fragment.querySelector(".product-description").textContent = product.description;
    fragment.querySelector(".product-price").textContent = formatPrice(product.price);

    if (!product.available) {
      card.classList.add("unavailable");
      fragment.querySelector(".availability-badge").textContent =
        product.availableText || "Нет в наличии";
      button.disabled = true;
    } else {
      button.addEventListener("click", () => openProduct(product));
    }

    productGrid.append(fragment);
  });
}

function openProduct(product) {
  activeProduct = product;

  $("#dialogEmoji").textContent = product.emoji;
  $("#dialogCategory").textContent = product.categoryName;
  $("#dialogTitle").textContent = product.title;
  $("#dialogDescription").textContent = product.description;
  $("#dialogPrice").textContent = formatPrice(product.price);

  const addonsBlock = $("#addonsBlock");
  const addonsList = $("#addonsList");
  addonsList.innerHTML = "";

  if (product.addons) {
    addonsBlock.classList.remove("hidden");

    ADDONS.forEach((addon) => {
      const label = document.createElement("label");
      label.className = "addon-row";
      label.innerHTML = `
        <span class="addon-copy">
          <strong>${addon.title}</strong>
          <small>+ ${formatPrice(addon.price)}</small>
        </span>
        <input
          type="checkbox"
          name="addon"
          value="${addon.id}"
          aria-label="${addon.title}"
        >
      `;
      label.querySelector("input").addEventListener("change", updateDialogPrice);
      addonsList.append(label);
    });
  } else {
    addonsBlock.classList.add("hidden");
  }

  updateDialogPrice();
  productDialog.showModal();
}

function getSelectedAddonIds() {
  return [...document.querySelectorAll('input[name="addon"]:checked')]
    .map((input) => input.value)
    .sort();
}

function getSelectedAddons() {
  const selectedIds = getSelectedAddonIds();
  return selectedIds
    .map((id) => ADDONS.find((addon) => addon.id === id))
    .filter(Boolean);
}

function updateDialogPrice() {
  if (!activeProduct) return;

  const addonTotal = getSelectedAddons()
    .reduce((sum, addon) => sum + addon.price, 0);

  $("#dialogPrice").textContent = formatPrice(activeProduct.price + addonTotal);
}

function cartItemKey(productId, addonIds) {
  return `${productId}::${addonIds.join(",")}`;
}

$("#productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!activeProduct) return;

  const addons = getSelectedAddons();
  const addonIds = addons.map((addon) => addon.id).sort();
  const key = cartItemKey(activeProduct.id, addonIds);

  const existing = cart.find((item) => item.key === key);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      key,
      productId: activeProduct.id,
      title: activeProduct.title,
      basePrice: activeProduct.price,
      addons,
      unitPrice:
        activeProduct.price + addons.reduce((sum, addon) => sum + addon.price, 0),
      quantity: 1
    });
  }

  persistCart();
  productDialog.close();
});

function persistCart() {
  saveJson(STORAGE.cart, cart);
  renderCartBar();
}

function getCartQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

function renderCartBar() {
  const quantity = getCartQuantity();
  const cartBar = $("#cartBar");

  if (!quantity) {
    cartBar.classList.add("hidden");
    return;
  }

  cartBar.classList.remove("hidden");
  $("#cartBarCount").textContent =
    `${quantity} ${pluralize(quantity, ["товар", "товара", "товаров"])}`;
  $("#cartBarTotal").textContent = formatPrice(getCartTotal());
}

function renderCart() {
  const cartList = $("#cartList");
  cartList.innerHTML = "";

  if (!cart.length) {
    cartList.innerHTML = `<div class="cart-empty">Корзина пока пуста.</div>`;
    $("#placeOrderButton").disabled = true;
    $("#pickupSection").classList.add("hidden");
  } else {
    $("#placeOrderButton").disabled = false;
    $("#pickupSection").classList.remove("hidden");
  }

  cart.forEach((item) => {
    const element = document.createElement("article");
    element.className = "cart-item";

    const addonsText = item.addons.length
      ? `Допы: ${item.addons.map((addon) => addon.title.toLowerCase()).join(", ")}`
      : "Без допов";

    element.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p class="cart-item-details">${addonsText}</p>
      </div>
      <div class="cart-item-side">
        <strong>${formatPrice(item.unitPrice * item.quantity)}</strong>
        <div class="quantity-control">
          <button type="button" data-action="minus" aria-label="Уменьшить">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="plus" aria-label="Увеличить">+</button>
        </div>
      </div>
    `;

    element.querySelector('[data-action="minus"]').addEventListener("click", () => {
      changeQuantity(item.key, -1);
    });

    element.querySelector('[data-action="plus"]').addEventListener("click", () => {
      changeQuantity(item.key, 1);
    });

    cartList.append(element);
  });

  $("#cartTotal").textContent = formatPrice(getCartTotal());
  renderTimeSlots();
}

function changeQuantity(key, delta) {
  const item = cart.find((cartItem) => cartItem.key === key);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.key !== key);
  }

  persistCart();
  renderCart();

  if (!cart.length) {
    selectedTime = null;
  }
}

function getTimeSlots() {
  const now = new Date();
  const first = new Date(now.getTime() + 25 * 60 * 1000);

  first.setMinutes(Math.ceil(first.getMinutes() / 15) * 15, 0, 0);

  return Array.from({ length: 8 }, (_, index) => {
    const slot = new Date(first.getTime() + index * 15 * 60 * 1000);
    return slot.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit"
    });
  });
}

function renderTimeSlots() {
  const slots = getTimeSlots();
  const grid = $("#timeGrid");
  grid.innerHTML = "";

  if (!selectedTime || !slots.includes(selectedTime)) {
    selectedTime = slots[0];
  }

  slots.forEach((slot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `time-button${slot === selectedTime ? " active" : ""}`;
    button.textContent = slot;

    button.addEventListener("click", () => {
      selectedTime = slot;
      renderTimeSlots();
    });

    grid.append(button);
  });
}

function generateDemoOrderNumber() {
  return String(Math.floor(100 + Math.random() * 900));
}

function showOrder(order) {
  $("#orderNumber").textContent = order.number;
  $("#orderTime").textContent = `Приготовим к ${order.time}`;
  $("#orderStatusText").textContent =
    order.status === "processed"
      ? "Заказ обработан — можно забирать"
      : "Заказ принят";

  orderDialog.showModal();
}

$("#placeOrderButton").addEventListener("click", () => {
  if (!cart.length || !selectedTime) return;

  const order = {
    number: generateDemoOrderNumber(),
    token: crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    time: selectedTime,
    status: "accepted",
    items: cart,
    total: getCartTotal(),
    createdAt: new Date().toISOString()
  };

  saveJson(STORAGE.lastOrder, order);

  cart = [];
  selectedTime = null;
  persistCart();
  cartDialog.close();
  showOrder(order);
});

$("#lastOrderButton").addEventListener("click", () => {
  const lastOrder = readJson(STORAGE.lastOrder, null);

  if (!lastOrder) {
    window.alert("В этом браузере пока нет сохранённого заказа.");
    return;
  }

  showOrder(lastOrder);
});

$("#cartBar").addEventListener("click", () => {
  renderCart();
  cartDialog.showModal();
});

$("#closeProductDialog").addEventListener("click", () => productDialog.close());
$("#closeCartDialog").addEventListener("click", () => cartDialog.close());
$("#closeOrderButton").addEventListener("click", () => orderDialog.close());
$("#closeOrderX").addEventListener("click", () => orderDialog.close());

[productDialog, cartDialog, orderDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

renderCategories();
renderProducts();
renderCartBar();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service Worker не зарегистрирован:", error);
    });
  });
}
