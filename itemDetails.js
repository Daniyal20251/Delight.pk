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
const slider = document.getElementById("imageSlider");
const dotsContainer = document.getElementById("dotsContainer");
const colorContainer = document.getElementById("colorOptionsContainer");

// ✅ Function to get final price, old price, and discount
function getPriceData(product) {
  const originalPrice = parseInt(product.originalPrice) || 0;
  const finalPrice = parseInt(product.finalPrice) || parseInt(product.price?.replace(/[^\d]/g, "")) || 0;
  const discount = product.discountPercentage 
      || (originalPrice && finalPrice && originalPrice !== finalPrice ? Math.round((originalPrice - finalPrice)/originalPrice*100) : 0);
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

  const images = item.images || [item.image];
  images.forEach((media, index) => {
    let mediaElement;
    if (media.endsWith(".mp4")) {
      mediaElement = document.createElement("video");
      mediaElement.src = media;
      mediaElement.controls = true;
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
    else if (moveX < -50 && currentIndex < images.length - 1) currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slider.offsetWidth}px)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  });

  if (item.colors && item.colors.length > 0) {
    item.colors.forEach(color => {
      const btn = document.createElement("button");
      btn.textContent = color;
      btn.classList.add("color-btn");
      btn.addEventListener("click", () => {
        document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedColor = color;
      });
      colorContainer.appendChild(btn);
    });
  }
} else {
  document.querySelector(".item-details").innerHTML = "<p>No item selected.</p>";
}

// 🔀 Similar Items Section
const container = document.getElementById("itemContainer");
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ✅ Similar items first
const currentTitle = item?.title?.toLowerCase() || "";
const similarItems = items.filter(i => i.title.toLowerCase().includes(currentTitle.split(" ")[0]));
const otherItems = items.filter(i => !similarItems.includes(i));
const shuffledOtherItems = shuffleArray(otherItems);
const finalItems = [...similarItems, ...shuffledOtherItems];

finalItems.forEach(i => {
  const card = document.createElement("div");
  card.className = "item-card";

  const { originalPrice, finalPrice, discount } = getPriceData(i);

  card.innerHTML = `
    <img src="${i.image}" alt="${i.title}">
    <h3>${i.title}</h3>
    <p class="price-wrapper">
      <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span>
      ${originalPrice && originalPrice !== finalPrice ? `<span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>` : ""}
      ${discount ? `<span style="font-size:12px;color:#ef6c00;">(${discount}% OFF)</span>` : ""}
    </p>
  `;

  card.addEventListener('click', () => {
    localStorage.setItem("selectedItem", JSON.stringify(i));
    window.location.href = "itemDetails.html";
  });

  container.appendChild(card);
});

// Cart count
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countElement = document.getElementById("cartCount");
  countElement.textContent = total;
  countElement.style.display = total > 0 ? "inline" : "none";
}
updateCartCount();

// Add to Cart & Buy Now Functions
function addToCart(event) {
  if (!item) return;
  if (!item.id) item.id = item.title.replace(/\s+/g, "_") + "_" + (item.finalPrice || item.price);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === item.id);
  const { finalPrice } = getPriceData(item);
  if (existing) existing.quantity += 1;
  else cart.push({ id: item.id, title: item.title, price: finalPrice, image: item.images ? item.images[0] : item.image, quantity: 1, description: item.description || "" });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  animateFlyToCart(event);
}

function goToOrderPage() {
  const { finalPrice, originalPrice, discount } = getPriceData(item);
  localStorage.setItem("orderProduct", JSON.stringify({
    title: item.title,
    image: item.images ? item.images[0] : item.image,
    selectedColor,
    originalPrice,
    finalPrice,
    discountPercentage: discount,
    profit: item.profit || null,
    description: item.description || ""
  }));
  window.location.href = "order2.html";
}

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