const results = JSON.parse(localStorage.getItem("searchResults")) || [];
const container = document.getElementById("resultsContainer");

// ✅ Price function (safe fallback)
function getPriceData(product) {
  const profit = typeof globalProfit !== 'undefined' ? globalProfit : 0;
  const discount = typeof globalDiscount !== 'undefined' ? globalDiscount : 0;

  const basePrice = parseInt(product.price?.replace(/[^\d]/g, "")) || 0;

  const originalPrice = parseInt(product.originalPrice) || (basePrice + profit);
  const finalPrice = parseInt(product.finalPrice) || (originalPrice - discount);

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

// ✅ Render results
if (results.length > 0) {
  results.forEach(item => {
    const card = createItemCard(item);
    container.appendChild(card);
  });
} else {
  container.innerHTML = "<p style='text-align:center;'>No items found.</p>";
}