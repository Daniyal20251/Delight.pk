// Results.js

const results = JSON.parse(localStorage.getItem("searchResults")) || [];
const container = document.getElementById("resultsContainer");

// ✅ Price function (safe fallback)
function getPriceData(product) {
  const profit = typeof globalProfit !== 'undefined' ? globalProfit : 0;
  const discount = typeof globalDiscount !== 'undefined' ? globalDiscount : 0;

  const basePrice = parseInt(product.price?.replace(/[^\d]/g, "")) || 0;
  const originalPrice = Number.isFinite(parseInt(product.originalPrice))
    ? parseInt(product.originalPrice)
    : (basePrice + profit);
  const finalPrice = Number.isFinite(parseInt(product.finalPrice))
    ? parseInt(product.finalPrice)
    : (originalPrice - discount);

  return { originalPrice, finalPrice };
}

// ✅ Create card
function createItemCard(item) {
  const { originalPrice, finalPrice } = getPriceData(item);

  const card = document.createElement("div");
  card.className = "item-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p class="price-wrapper">
      <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span><br>
      <span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>
    </p>
  `;

  card.addEventListener('click', () => {
    const updatedItem = { ...item, originalPrice, finalPrice };
    localStorage.setItem("selectedItem", JSON.stringify(updatedItem));
    window.location.href = "itemDetails.html";
  });

  return card;
}

// ✅ Render results (Daraz-style empty state)
if (results.length > 0) {
  results.forEach(item => container.appendChild(createItemCard(item)));
} else {
  container.innerHTML = `
    <div class="not-found">
      <!-- Online icon (agar local image na ho to ye chalega) -->
      <img src="no-results.png"
           alt="No Results"
           onerror="this.onerror=null;this.src='https://img.icons8.com/ios/200/search--v1.png';">
      <h3>Sorry! Item Not Found</h3>
      <p>Try searching with a different keyword.</p>
    </div>
  `;
}