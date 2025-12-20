// Final itemDetails.js — robust & backend-friendly
document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Get selected item
  const item = JSON.parse(localStorage.getItem("selectedItem"));
  if (!item) {
    document.querySelector(".item-details").innerHTML = "<p>No item selected.</p>";
    return;
  }

  // State
  let currentIndex = 0;
  let startX = 0;
  let selectedColor = "";
  let selectedSize = "";

  // Elements
  const slider = document.getElementById("imageSlider");
  const dotsContainer = document.getElementById("dotsContainer");
  const titleEl = document.getElementById("title");
  const priceEl = document.getElementById("price");
  const descEl = document.getElementById("description");
  const supplierContainer = document.getElementById("supplier-container"); // matches your HTML
  const container = document.getElementById("itemContainer");
  const cartCountEl = document.getElementById("cartCount");

  // Helper: price data
  function getPriceData(product) {
    const profit = typeof globalProfit !== "undefined" ? globalProfit : 0;
    const discountValue = typeof globalDiscount !== "undefined" ? globalDiscount : 0;
    const basePrice = parseInt(product.price?.toString().replace(/[^\d]/g, "")) || 0;
    const originalPrice = product.originalPrice || basePrice + profit;
    const finalPrice = product.finalPrice || originalPrice - discountValue;
    const discount = product.discountPercentage
      || (originalPrice && finalPrice && originalPrice !== finalPrice
          ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
          : 0);
    return { originalPrice, finalPrice, discount };
  }

  // Render title, price, description
  if (!item.id) item.id = item.title.replace(/\s+/g, "_") + "_" + (item.finalPrice || item.price);
  titleEl.textContent = item.title || "";
  const { originalPrice, finalPrice, discount } = getPriceData(item);
  priceEl.innerHTML = `
    <div class="price-wrapper">
      <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span>
      ${originalPrice !== finalPrice ? `<span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>` : ""}
      ${discount ? `<span style="font-size:12px;color:#ef6c00;">(${discount}% OFF)</span>` : ""}
    </div>
  `;
  
  // 🔹 Function: description ko paragraph + bullets me convert kare
function formatDescription(desc) {
  if (!desc) return "";

  // normalize newlines and trim
  desc = desc.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();

  // helper to clean each bullet/line
  const clean = s => s
    .replace(/^[\s\-\*\u2022•]+/, "")   // remove leading -, *, •
    .replace(/^\d+\.\s*/, "")           // remove "1. " numbering
    .replace(/\s{2,}/g, " ")            // collapse multiple spaces
    .trim();

  // CASE A: if explicit bullet characters present anywhere (• or • unicode)
  if (desc.includes("•") || desc.includes("\u2022")) {
    // split on bullet chars, also on repeated bullet markers
    const parts = desc.split(/•|\u2022/)
      .map(p => clean(p))
      .filter(Boolean);
    if (!parts.length) return "";
    // If first part looks like an intro sentence (short + contains no colon) keep as paragraph
    if (parts.length > 1 && parts[0].length < 60 && !parts[0].includes(":")) {
      const intro = parts.shift();
      return `<p>${intro}</p><ul>${parts.map(p => `<li>${p}</li>`).join("")}</ul>`;
    }
    return `<ul>${parts.map(p => `<li>${p}</li>`).join("")}</ul>`;
  }

  // CASE B: otherwise split by new lines
  const lines = desc.split("\n").map(l => clean(l)).filter(Boolean);
  if (!lines.length) return "";
  if (lines.length === 1) return `<p>${lines[0]}</p>`;

  // treat first line as paragraph if it doesn't contain ":" and looks like a sentence
  const first = lines[0];
  const rest = lines.slice(1);
  if (rest.length && first.length < 200 && !first.includes(":")) {
    return `<p>${first}</p><ul>${rest.map(l => `<li>${l}</li>`).join("")}</ul>`;
  }

  // fallback: all lines as bullets
  return `<ul>${lines.map(l => `<li>${l}</li>`).join("")}</ul>`;
}

// 🔹 Set description initially
descEl.innerHTML = formatDescription(item.description);

  // Media slider (images + videos)
  const mediaList = [...(item.images || []), ...(item.videos || [])];
  function renderMedia() {
    slider.innerHTML = "";
    dotsContainer.innerHTML = "";
    if (mediaList.length === 0) {
      const img = document.createElement("img");
      img.src = "noimg.png"; // fallback
      slider.appendChild(img);
      return;
    }
    mediaList.forEach((media, index) => {
      let el;
      if (typeof media === "string" && media.toLowerCase().endsWith(".mp4")) {
        el = document.createElement("video");
        el.src = media;
        el.controls = true;
        el.style.borderRadius = "10px";
      } else {
        el = document.createElement("img");
        el.src = media;
      }
      el.classList.add("slide");
      if (index === 0) el.classList.add("active");
      slider.appendChild(el);

      const dot = document.createElement("span");
      dot.className = "dot" + (index === 0 ? " active" : "");
      dot.addEventListener("click", () => showSlide(index));
      dotsContainer.appendChild(dot);
    });
  }
  function showSlide(index) {
    const slides = slider.querySelectorAll(".slide");
    const dots = dotsContainer.querySelectorAll(".dot");
    if (!slides.length) return;
    index = (index + slides.length) % slides.length;
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }
  // Mobile swipe
  slider.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  slider.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 50) showSlide(currentIndex - 1);
    else if (diff < -50) showSlide(currentIndex + 1);
  });
  renderMedia();
  // ✅ Add Daraz-style counter (1/11)
const counter = document.createElement("div");
counter.classList.add("image-counter");
slider.appendChild(counter);

function updateCounter() {
  counter.textContent = `${currentIndex + 1} / ${mediaList.length}`;
}

// Update counter initially & on slide change
updateCounter();

// Modify showSlide function to also update counter
const originalShowSlide = showSlide;
showSlide = function(index) {
  originalShowSlide(index);
  updateCounter();
};

  // Variant container (insert before first .section)
  const variantContainer = document.createElement("div");
  variantContainer.classList.add("variant-container");
  const firstSection = document.querySelector(".section");
  if (firstSection) document.querySelector(".item-details").insertBefore(variantContainer, firstSection);
  else document.querySelector(".item-details").appendChild(variantContainer);

  // Colors (support array or comma string; normalize trimming)
  const colors = Array.isArray(item.color)
    ? item.color
    : (item.color || item.colors ? (item.color || item.colors).toString().split(",").map(c => c.trim()).filter(Boolean) : []);
  if (colors.length) {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color-options");
    const label = document.createElement("h5"); label.textContent = "Select Color:";
    colorDiv.appendChild(label);
    colors.forEach(color => {
      const btn = document.createElement("button");
      btn.textContent = color;
      btn.classList.add("color-btn");
      btn.addEventListener("click", () => {
        colorDiv.querySelectorAll(".color-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedColor = color;
      });
      colorDiv.appendChild(btn);
    });
    variantContainer.appendChild(colorDiv);
  }

  // Sizes (support array or comma string)
  const sizes = Array.isArray(item.size)
    ? item.size
    : (item.size || item.sizes ? (item.size || item.sizes).toString().split(",").map(s => s.trim()).filter(Boolean) : []);
  if (sizes.length) {
    const sizeDiv = document.createElement("div");
    sizeDiv.classList.add("size-options");
    const label = document.createElement("h5"); label.textContent = "Select Size:";
    sizeDiv.appendChild(label);
    sizes.forEach(size => {
      const btn = document.createElement("button");
      btn.textContent = size;
      btn.classList.add("size-btn");
      btn.addEventListener("click", () => {
        sizeDiv.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedSize = size;
      });
      sizeDiv.appendChild(btn);
    });
    variantContainer.appendChild(sizeDiv);
  }

  // Supplier (seller) info — robust matching with flexible phone formats
  async function loadSupplierInfo(sellerPhone) {
    if (!sellerPhone) {
      supplierContainer.innerHTML = `<p style="text-align:center;color:#999;">Seller info not available</p>`;
      return;
    }
    let sellerName = "Unknown Seller";
    let sellerLogo = "lo.png";
    try {
    const res = await fetch("https://delight-backend--araindaniyalo2.replit.app/all-stores");
    const stores = await res.json();

    // Normalizers to compare: try exact, then remove non-digits and compare endings
    const norm = p => p?.toString().replace(/\D/g, "");
    const sp = norm(sellerPhone);

    let seller = stores.find(s => s.phone === sellerPhone);
    if (!seller) {
      seller = stores.find(s => norm(s.phone) === sp);
    }
    if (!seller) {
      // try matching by last 9-10 digits (handle variations +92, 0, 92)
      seller = stores.find(s => {
        const sNorm = norm(s.phone);
        if (!sNorm || !sp) return false;
        return sNorm.endsWith(sp) || sp.endsWith(sNorm);
      });
    }

    if (seller) {
      sellerName = seller.name || sellerName;
      sellerLogo = seller.logo || sellerLogo;

      // ✅ Save delivery charges
      if (seller.delivery) {
        item.delivery = seller.delivery;
        localStorage.setItem("selectedItem", JSON.stringify(item));
      }

    } else {
      console.warn("Seller not found for phone:", sellerPhone);
    }

} catch (err) {
    console.warn("Supplier info not loaded:", err);
}
    supplierContainer.innerHTML = `
      <div class="supplier-info" style="
        background:#fff;border:1px solid #ff9800;border-radius:10px;
        padding:10px;display:flex;align-items:center;justify-content:space-between;margin:10px 0;
      ">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${sellerLogo}" alt="${sellerName}" class="supplier-logo" style="width:45px;height:45px;border-radius:50%;object-fit:cover;">
          <span class="supplier-name" style="font-weight:600;">${sellerName}</span>
        </div>
        <div>
          <button id="viewSupplierBtn" class="view-supplier-btn" style="background:linear-gradient(to right,#c45500,#ff7d29e4);color:#fff;border:none;padding:6px 10px;border-radius:6px;">View Shop</button>
        </div>
      </div>
    `;
    const btn = supplierContainer.querySelector("#viewSupplierBtn");
    if (btn) btn.addEventListener("click", () => {
      window.location.href = `Store.html?phone=${encodeURIComponent(item.sellerPhone)}`;
    });
  }

  // Setup WhatsApp chat button to seller
  function setupWhatsAppButton() {
    const chatAnchor = document.querySelector(".whatsapp-btn a");
    if (!chatAnchor) return;
    if (item.sellerPhone) {
      // transform leading 0 => 92 for wa.me but keep fallback checks
      const digits = item.sellerPhone.toString().replace(/\D/g, "");
      let waPhone = digits;
      if (digits.length === 10 && digits.startsWith("3")) {
        // e.g. 313xxxx -> assume local '03...' was omitted; unlikely but safe
        waPhone = "92" + digits;
      } else if (digits.length === 11 && digits.startsWith("0")) {
        // 0313...
        waPhone = "92" + digits.slice(1);
      } else if (digits.length === 12 && digits.startsWith("92")) {
        waPhone = digits;
      } else if (digits.length === 13 && digits.startsWith("091")) {
        // improbable, fallback to digits
        waPhone = digits;
      }
      chatAnchor.href = `https://wa.me/${waPhone}`;
    } else {
      chatAnchor.href = "https://wa.me/923133196595"; // default admin
    }
  }

// ✅ Similar items: combine local `items` (itemData.js) + backend `/all-products`
async function loadSimilarItems(currentItem) {
  const container = document.getElementById("itemContainer");
  container.innerHTML = "Loading similar items...";
  
  let backendItems = [];
  let localItems = window.items || [];
  try {
    const res = await fetch("https://delight-backend--araindaniyalo2.replit.app/products");
    if (res.ok) backendItems = await res.json();
  } catch (err) {
    console.warn("Backend products not loaded:", err);
  }

  // Merge backend + local items (avoid duplicates by title)
  const merged = [...localItems];
  backendItems.forEach(b => {
    const exists = merged.find(m => (m.title || "").toLowerCase() === (b.title || "").toLowerCase());
    if (!exists) merged.push(b);
  });

  // Filter related items by first keyword of current item title
  const seed = (currentItem.title || "").split(" ")[0]?.toLowerCase() || "";
  let related = merged.filter(i => {
    if (!i.title) return false;
    if (i.title === currentItem.title) return false;
    const t = i.title.toLowerCase();
    return t.includes(seed);
  });

  // Fallback if none found
  if (!related.length) related = merged.slice(0, 10);

  // Shuffle randomly and limit to 10
  related = related.sort(() => 0.5 - Math.random()).slice(0, 10);

  // Render related products
  container.innerHTML = "";
  // ✅ Home.js style price calc for similar items
related.forEach(i => {
  // 1) Calculate base & discount from fields
  const basePrice = parseInt(i.price?.toString().replace(/[^\d]/g, "")) || 0;
  const discount = parseInt(i.discount?.toString().replace(/[^\d]/g, "")) || 0;
  const finalPrice = basePrice - discount;

  // 2) Image fallback
  const imgSrc = i.images?.[0] || i.image || "noimg.png";

  // 3) Create card
  const card = document.createElement("div");
  card.className = "item-card";
  card.innerHTML = `
    <img src="${imgSrc}" alt="${i.title}">
    <h3>${i.title}</h3>
    <p class="price-wrapper">
      <span class="new-price">
        <span class="rs">Rs.</span><strong>${finalPrice}</strong>
      </span>
      ${discount > 0 ? `
        <span class="old-price">
          <span class="rs">Rs.</span>${basePrice}
        </span>` : ""}
    </p>
  `;

  // 4) Click handler
  card.addEventListener("click", () => {
    localStorage.setItem("selectedItem", JSON.stringify({
      ...i,
      finalPrice,
      originalPrice: basePrice
    }));
    window.location.href = "itemDetails.html";
  });

  // 5) Append
  container.appendChild(card);
});
}
  // Cart count
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = cart.reduce((sum, it) => sum + (it.quantity || 0), 0);
    cartCountEl.textContent = total;
    cartCountEl.style.display = total > 0 ? "inline" : "none";
  }
  updateCartCount();

  // Add to cart (used by button)
  window.addToCart = function(event) {
    if (!item) return;
    if (!item.id) item.id = item.title.replace(/\s+/g, "_") + "_" + (item.finalPrice || item.price);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const { finalPrice: fp } = getPriceData(item);
    const existing = cart.find(p => p.id === item.id);
    if (existing) existing.quantity += 1;
    else cart.push({
      id: item.id,
      title: item.title,
      price: fp,
      image: item.images ? item.images[0] : item.image,
      quantity: 1,
      description: item.description || "",
      sellerPhone: item.sellerPhone || "",
      delivery: item.delivery || 0 ,
      selectedColor,
      selectedSize
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    animateFlyToCart(event);
  };

  // Go to order page
window.goToOrderPage = function() {
  const { finalPrice: fp, originalPrice: op, discount } = getPriceData(item);
  localStorage.setItem("orderProduct", JSON.stringify({
    title: item.title,
    image: item.images ? item.images[0] : item.image,
    selectedColor,
    selectedSize,
    originalPrice: op,
    finalPrice: fp,
    discountPercentage: discount,
    profit: item.profit || null,
    description: item.description || "",
    sellerPhone: item.sellerPhone || "",  
    delivery: item.delivery || 0,
    productId: item.id || item.productId || Date.now()
  }));
  window.location.href = "order.html";
};

  // Fly to cart animation
  function animateFlyToCart(e) {
    try {
      const imgSrc = item.images ? item.images[0] : item.image || "noimg.png";
      const flyImg = document.createElement("img");
      flyImg.src = imgSrc;
      flyImg.className = "fly-image";
      flyImg.style.position = "fixed";
      flyImg.style.zIndex = 9999;
      document.body.appendChild(flyImg);
      const start = e.target.getBoundingClientRect();
      flyImg.style.left = start.left + "px";
      flyImg.style.top = start.top + "px";
      const cartIcon = document.querySelector(".cart-bag img").getBoundingClientRect();
      setTimeout(() => {
        flyImg.style.transition = "transform .65s ease, opacity .65s";
        flyImg.style.transform = `translate(${cartIcon.left - start.left}px, ${cartIcon.top - start.top}px) scale(0.1)`;
        flyImg.style.opacity = "0";
      }, 50);
      setTimeout(() => flyImg.remove(), 800);
    } catch (err) {
      console.warn("Fly animation failed:", err);
    }
  }

  // Section toggle
  window.toggleSection = function(element) {
    const section = element.parentElement;
    section.classList.toggle("open");
  };

  // Initialize seller, chat, similar items
  loadSupplierInfo(item.sellerPhone);
  setupWhatsAppButton();
  loadSimilarItems(item);
}); // DOMContentLoaded end