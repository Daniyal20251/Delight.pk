function getItemFromURL() {
  const params = new URLSearchParams(window.location.search);
  const data = params.get("data");
  if (data) {
    try {
      return JSON.parse(decodeURIComponent(data));
    } catch (e) {
      console.error("Invalid product data");
    }
  }
  return null;
}

const item = getItemFromURL() || JSON.parse(localStorage.getItem("selectedItem"));
let currentIndex = 0;
let startX = 0;
let selectedColor = "";
let selectedSize = "";

const slider = document.getElementById("imageSlider");
const dotsContainer = document.getElementById("dotsContainer");

// ✅ Centralized price function
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

if (item) {
  if (!item.id) item.id = item.title.replace(/\s+/g, "_") + "_" + (item.finalPrice || item.price);

  document.getElementById("title").textContent = item.title;

  const { originalPrice, finalPrice, discount } = getPriceData(item);

  document.getElementById("price").innerHTML = `
    <div class="price-wrapper">
      <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span>
      ${originalPrice && originalPrice !== finalPrice ? `<span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>` : ""}
      ${discount ? `<span style="font-size:12px;color:#ef6c00;">(${discount}% OFF)</span>` : ""}
    </div>
    ${item.profit ? `<div style="color:green; font-size:13px;">Profit: Rs. ${item.profit}</div>` : ""}
  `;

  document.getElementById("description").innerHTML = item.description || "";

  // ✅ Merge images + videos
  const mediaList = [...(item.images || []), ...(item.videos || [])];
  mediaList.forEach((media, index) => {
    let mediaElement;
    if (media.toLowerCase().endsWith(".mp4")) {
      mediaElement = document.createElement("video");
      mediaElement.src = media;
      mediaElement.controls = true;
      mediaElement.style.borderRadius = "10px";
    } else {
      mediaElement = document.createElement("img");
      mediaElement.src = media;
    }
    slider.appendChild(mediaElement);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");
  slider.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; });
  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const moveX = endX - startX;
    if (moveX > 50 && currentIndex > 0) currentIndex--;
    else if (moveX < -50 && currentIndex < mediaList.length - 1) currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slider.offsetWidth}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  });

  // ✅ Make container for color & size
  const variantContainer = document.createElement("div");
  variantContainer.classList.add("variant-container");
  document.querySelector(".item-details").insertBefore(variantContainer, document.querySelector(".section"));

  // ✅ Color Options
  const colors = item.color ? item.color.split(",").map(c => c.trim()).filter(Boolean) : [];
  if (colors.length > 0) {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color-options");
    const label = document.createElement("h5");
    label.textContent = "Select Color:";
    colorDiv.appendChild(label);

    colors.forEach(color => {
      const btn = document.createElement("button");
      btn.textContent = color;
      btn.classList.add("color-btn");
      btn.addEventListener("click", () => {
        document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedColor = color;
      });
      colorDiv.appendChild(btn);
    });
    variantContainer.appendChild(colorDiv);
  }

  // ✅ Size Options
  const sizes = item.size ? item.size.split(",").map(s => s.trim()).filter(Boolean) : [];
  if (sizes.length > 0) {
    const sizeDiv = document.createElement("div");
    sizeDiv.classList.add("size-options");
    const label = document.createElement("h5");
    label.textContent = "Select Size:";
    sizeDiv.appendChild(label);

    sizes.forEach(size => {
      const btn = document.createElement("button");
      btn.textContent = size;
      btn.classList.add("size-btn");
      btn.addEventListener("click", () => {
        document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedSize = size;
      });
      sizeDiv.appendChild(btn);
    });
    variantContainer.appendChild(sizeDiv);
  }
} else {
  document.querySelector(".item-details").innerHTML = "<p>No item selected.</p>";
}

// 🔀 Similar Items
const container = document.getElementById("itemContainer");
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const currentTitle = item?.title?.toLowerCase() || "";
const similarItems = items.filter(i => i.title.toLowerCase().includes(currentTitle.split(" ")[0]));
const otherItems = items.filter(i => !similarItems.includes(i));
const shuffledOtherItems = shuffleArray(otherItems);
const finalItems = [...similarItems, ...shuffledOtherItems];

finalItems.forEach(i => {
  const card = document.createElement("div");
  card.className = "item-card";
  const { originalPrice, finalPrice } = getPriceData(i);

  card.innerHTML = `
    <img src="${i.image}" alt="${i.title}">
    <h3>${i.title}</h3>
    <p class="price-wrapper">
      <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span><br>
      <span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>
    </p>
  `;

  card.addEventListener("click", () => {
    const updatedItem = { ...i, originalPrice, finalPrice };
    localStorage.setItem("selectedItem", JSON.stringify(updatedItem));
    window.location.href = "itemDetails.html";
  });

  container.appendChild(card);
});

// 🛒 Cart Count
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById("cartCount");
  countElement.textContent = total;
  countElement.style.display = total > 0 ? "inline" : "none";
}
updateCartCount();

// 🛒 Add to Cart
function addToCart(event) {
  if (!item) return;
  if (!item.id) item.id = item.title.replace(/\s+/g, "_") + "_" + (item.finalPrice || item.price);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === item.id);
  const { finalPrice } = getPriceData(item);
  if (existing) existing.quantity += 1;
  else cart.push({
    id: item.id,
    title: item.title,
    price: finalPrice,
    image: item.images ? item.images[0] : item.image,
    quantity: 1,
    description: item.description || "",
    selectedColor,
    selectedSize
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  animateFlyToCart(event);
}

// 🛒 Buy Now
function goToOrderPage() {
  const { finalPrice, originalPrice, discount } = getPriceData(item);
  localStorage.setItem("orderProduct", JSON.stringify({
    title: item.title,
    image: item.images ? item.images[0] : item.image,
    selectedColor,
    selectedSize,
    originalPrice,
    finalPrice,
    discountPercentage: discount,
    profit: item.profit || null,
    description: item.description || ""
  }));
  window.location.href = "order2.html";
}

// ✈️ Fly to cart animation
function animateFlyToCart(e) {
  const imgSrc = item.images ? item.images[0] : item.image;
  const flyImg = document.createElement("img");
  flyImg.src = imgSrc;
  flyImg.className = "fly-image";
  document.body.appendChild(flyImg);
  const start = e.target.getBoundingClientRect();
  flyImg.style.left = start.left + "px";
  flyImg.style.top = start.top + "px";
  const cartIcon = document.querySelector(".cart-bag img").getBoundingClientRect();
  setTimeout(() => {
    flyImg.style.transform = `translate(${cartIcon.left - start.left}px, ${cartIcon.top - start.top}px) scale(0.1)`;
    flyImg.style.opacity = "0";
  }, 50);
  setTimeout(() => flyImg.remove(), 800);
}

// Dropdown toggle
function toggleSection(element) {
  const section = element.parentElement;
  section.classList.toggle("open");
}