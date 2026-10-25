/* ==========================================
   LIBRERÍA ESCOLAR EL SABER
   Catálogo, filtros y lista de compras
========================================== */

"use strict";

const WHATSAPP_NUMBER = "573126020219";
const STORAGE_KEY = "elSaberListaComprasV2";

const products = [
  {
    id: 1,
    name: "Cuaderno universitario",
    category: "Cuadernos",
    price: 8500,
    description: "Ideal para apuntes, tareas y clases.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 2,
    name: "Cuaderno argollado",
    category: "Cuadernos",
    price: 12000,
    description: "Práctico, resistente y fácil de organizar.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 3,
    name: "Cuaderno de dibujo",
    category: "Cuadernos",
    price: 10000,
    description: "Hojas para bocetos, dibujos y creatividad.",
    image: "https://images.pexels.com/photos/3855552/pexels-photo-3855552.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Agenda escolar",
    category: "Cuadernos",
    price: 15000,
    description: "Organiza tus actividades, fechas y pendientes.",
    image: "https://images.pexels.com/photos/30101194/pexels-photo-30101194.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Diccionario español",
    category: "Libros",
    price: 28000,
    description: "Amplía tu vocabulario y mejora tu escritura.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 6,
    name: "Libro de matemáticas",
    category: "Libros",
    price: 32000,
    description: "Ejercicios y conceptos para practicar.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 7,
    name: "Atlas geográfico",
    category: "Libros",
    price: 35000,
    description: "Mapas e información para explorar el mundo.",
    image: "https://mediateca.educa.madrid.org/imagen.php?id=a4ly7oh4rzxxeai9&type=2&m=550",
  },
  {
    id: 8,
    name: "Libro de cuentos",
    category: "Libros",
    price: 18000,
    description: "Historias para disfrutar y desarrollar la lectura.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 9,
    name: "Kit de lápices de colores",
    category: "Papelería",
    price: 14000,
    description: "Colores variados para dibujos y trabajos escolares.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 10,
    name: "Marcadores de colores",
    category: "Papelería",
    price: 11000,
    description: "Marcadores para ilustrar y resaltar tus ideas.",
     image: "https://images.pexels.com/photos/14630293/pexels-photo-14630293.jpeg?cs=srgb&fm=jpg",
  },
  {
    id: 11,
    name: "Kit de reglas geométricas",
    category: "Papelería",
    price: 7500,
    description: "Regla, escuadras, transportador y herramientas de geometría.",
    image: "https://images.pexels.com/photos/5412435/pexels-photo-5412435.jpeg?auto=compress&dpr=1&w=800",
  },
  {
    id: 12,
    name: "Colores y resaltadores",
    category: "Papelería",
    price: 13500,
    description: "Una combinación de tonos para estudiar y crear.",
    image: "https://images.pexels.com/photos/5594285/pexels-photo-5594285.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 13,
    name: "Calculadora científica",
    category: "Tecnología",
    price: 38000,
    description: "Herramienta para operaciones y ejercicios matemáticos.",
    image: "https://images.pexels.com/photos/12174065/pexels-photo-12174065.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 14,
    name: "Memoria USB de 32 GB",
    category: "Tecnología",
    price: 22000,
    description: "Guarda y transporta tus archivos escolares.",
    image: "https://images.pexels.com/photos/10336136/pexels-photo-10336136.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 15,
    name: "Audífonos escolares",
    category: "Tecnología",
    price: 30000,
    description: "Para escuchar clases, audios y contenido educativo.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=650&q=80"
  },
  {
    id: 16,
    name: "Mouse inalámbrico",
    category: "Tecnología",
    price: 27000,
    description: "Accesorio práctico para tus actividades en el computador.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=650&q=80"
  }
];

/*
  NOTA:
  Los precios son valores de ejemplo para el proyecto escolar.
  Las imágenes son enlaces externos y requieren conexión a internet.
*/

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTitleCount = document.getElementById("cartTitleCount");
const uniqueCount = document.getElementById("uniqueCount");
const unitCount = document.getElementById("unitCount");
const cartTotal = document.getElementById("cartTotal");

const clearCartButton = document.getElementById("clearCart");
const whatsappOrderButton = document.getElementById("whatsappOrder");
const contactWhatsapp = document.getElementById("contactWhatsapp");

let cart = loadCart();

/* FORMATO DE PRECIOS COLOMBIANOS */

function formatPrice(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

/* CARGAR LISTA GUARDADA */

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item =>
        item &&
        Number.isInteger(item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        products.some(product => product.id === item.id)
      )
      .map(item => ({
        id: item.id,
        quantity: Math.min(item.quantity, 99)
      }));
  } catch (error) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("No se pudo guardar la lista en este navegador.");
  }
}

/* CATÁLOGO DE PRODUCTOS */

function renderProducts() {
  const searchTerm = searchInput.value
    .trim()
    .toLocaleLowerCase("es");

  const selectedCategory = categoryFilter.value;

  const filteredProducts = products.filter(product => {
    const matchesSearch = (
      product.name.toLocaleLowerCase("es").includes(searchTerm) ||
      product.description.toLocaleLowerCase("es").includes(searchTerm) ||
      product.category.toLocaleLowerCase("es").includes(searchTerm)
    );

    const matchesCategory =
      selectedCategory === "Todas" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          data-product-image
        >
        <span class="product-category">
          ${escapeHTML(product.category)}
        </span>
      </div>

      <div class="product-info">
        <h3>${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>

        <div class="product-bottom">
          <span class="product-price">
            ${formatPrice(product.price)}
          </span>

          <button
            type="button"
            class="add-button"
            data-add="${product.id}"
            aria-label="Agregar ${escapeHTML(product.name)} a la lista"
          >
            + Agregar
          </button>
        </div>
      </div>
    </article>
  `).join("");

  resultCount.textContent =
    `${filteredProducts.length} producto${filteredProducts.length === 1 ? "" : "s"} disponible${filteredProducts.length === 1 ? "" : "s"}`;

  emptyState.hidden = filteredProducts.length !== 0;
  productGrid.hidden = filteredProducts.length === 0;

  // Si una imagen externa falla, se conserva la tarjeta
  // y se muestra un fondo de respaldo en lugar de otra foto repetida.
  productGrid.querySelectorAll("[data-product-image]").forEach(img => {
    img.addEventListener("error", () => {
      img.hidden = true;
      img.parentElement.style.background =
        "linear-gradient(135deg, #e1f5e6, #fff0c9)";
      img.parentElement.setAttribute(
        "aria-label",
        "Imagen no disponible: " + img.alt
      );
    }, { once: true });
  });
}

/* EVITAR QUE LOS NOMBRES ROMPAN EL HTML */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

/* AGREGAR PRODUCTOS */

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    if (existingItem.quantity >= 99) {
      alert("Has alcanzado el máximo de 99 unidades por producto.");
      return;
    }

    existingItem.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
}

/* MODIFICAR CANTIDADES */

function changeQuantity(id, change) {
  const item = cart.find(entry => entry.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== id);
  } else if (item.quantity > 99) {
    item.quantity = 99;
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

/* MOSTRAR LISTA DE COMPRAS */

function renderCart() {
  const detailedCart = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);

    return {
      ...product,
      quantity: item.quantity,
      subtotal: product.price * item.quantity
    };
  }).filter(item => item.id);

  const totalUnits = detailedCart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = detailedCart.reduce(
    (sum, item) => sum + item.subtotal, 0
  );

  cartCount.textContent = totalUnits;
  cartTitleCount.textContent = `(${totalUnits})`;
  uniqueCount.textContent = detailedCart.length;
  unitCount.textContent = totalUnits;
  cartTotal.textContent = formatPrice(total);

  whatsappOrderButton.disabled = detailedCart.length === 0;

  if (detailedCart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <strong>Tu lista está esperando</strong>
        <p>Agrega productos del catálogo para empezar.</p>
        <a href="#catalogo" class="btn btn-dark">Ver productos</a>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = detailedCart.map(item => `
    <article class="cart-item">
      <img
        src="${item.image}"
        alt="${escapeHTML(item.name)}"
        loading="lazy"
        data-cart-image
      >

      <div class="cart-item-info">
        <h4>${escapeHTML(item.name)}</h4>
        <p>${formatPrice(item.price)} por unidad</p>

        <div class="quantity-control" aria-label="Cantidad de ${escapeHTML(item.name)}">
          <button type="button" data-change="${item.id}" data-delta="-1"
            aria-label="Disminuir cantidad">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-change="${item.id}" data-delta="1"
            aria-label="Aumentar cantidad">+</button>
        </div>
      </div>

      <div class="cart-item-end">
        <strong>${formatPrice(item.subtotal)}</strong>
        <button type="button" class="remove-button"
          data-remove="${item.id}">Eliminar</button>
      </div>
    </article>
  `).join("");

  cartItems.querySelectorAll("[data-cart-image]").forEach(img => {
    img.addEventListener("error", () => {
      img.hidden = true;
    }, { once: true });
  });
}

/* PREPARAR PEDIDO POR WHATSAPP */

function sendWhatsAppOrder() {
  const detailedCart = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);

    return product ? {
      ...product,
      quantity: item.quantity,
      subtotal: product.price * item.quantity
    } : null;
  }).filter(Boolean);

  if (detailedCart.length === 0) {
    alert("Agrega al menos un producto a tu lista antes de continuar.");
    return;
  }

  const total = detailedCart.reduce(
    (sum, item) => sum + item.subtotal, 0
  );

  const lines = [
    "¡Hola, Librería Escolar El Saber! 👋",
    "",
    "Quiero consultar este pedido:",
    "",
    ...detailedCart.map(item =>
      `• ${item.name}\n  Cantidad: ${item.quantity}\n  Subtotal: ${formatPrice(item.subtotal)}`
    ),
    "",
    `TOTAL ESTIMADO: ${formatPrice(total)}`,
    "",
    "¿Me pueden confirmar la disponibilidad y el precio final?",
    "Ubicación: Canalete, Córdoba, Colombia.",
    "",
    "Gracias."
  ];

  const message = lines.join("\n");
  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

/* EVENTOS DEL CATÁLOGO */

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");

  if (!button) return;

  addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-change]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.change),
      Number(quantityButton.dataset.delta)
    );
    return;
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

clearCartButton.addEventListener("click", () => {
  if (cart.length === 0) return;

  const confirmed = window.confirm(
    "¿Deseas vaciar toda tu lista de compras?"
  );

  if (!confirmed) return;

  cart = [];
  saveCart();
  renderCart();
});

whatsappOrderButton.addEventListener("click", sendWhatsAppOrder);

/* ENLACE DIRECTO DE CONTACTO */

contactWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${
  encodeURIComponent("Hola, Librería Escolar El Saber. Quiero consultar sus productos escolares.")
}`;

/* FILTROS DESDE LAS TARJETAS DE CATEGORÍAS */

document.querySelectorAll("[data-category-link]").forEach(link => {
  link.addEventListener("click", () => {
    categoryFilter.value = link.dataset.categoryLink;
    renderProducts();
  });
});

/* MENÚ PARA CELULARES */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

/* AÑO AUTOMÁTICO DEL PIE DE PÁGINA */

document.getElementById("currentYear").textContent =
  new Date().getFullYear();

/* INICIAR LA PÁGINA */

renderProducts();
renderCart();