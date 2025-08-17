const container = document.getElementById("itemContainer");

// ✅ Get global profit & discount from flashsale.js
const profit = typeof globalProfit !== 'undefined' ? globalProfit : 0;
const discount = typeof globalDiscount !== 'undefined' ? globalDiscount : 0;

// 🔀 Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ✅ Shuffle items instead of reverse
const shuffledItems = shuffleArray([...items]);

shuffledItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "item-card";

  // Calculate prices
  const basePrice = parseInt(item.price?.replace(/[^\d]/g, "")) || 0;
  const originalPrice = basePrice + profit;
  const finalPrice = originalPrice - discount;

  // Create HTML
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p class="price-wrapper">
      <span class="new-price">
        <span class="rs">Rs.</span><strong>${finalPrice}</strong>
      </span><br>
      <span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>
    </p>
  `;

  // ✅ On card click
  card.addEventListener('click', () => {
    const updatedItem = { ...item, originalPrice, finalPrice };
    localStorage.setItem("selectedItem", JSON.stringify(updatedItem));
    window.location.href = "itemDetails.html";
  });

  container.appendChild(card);
});

// ✅ Search function (fixed to save prices also)
function searchItems() {
  const searchText = document.getElementById("searchInput").value.trim().toLowerCase();
  const filtered = items.filter(item => {
    const title = item.title.toLowerCase().replace(/\s+/g, '');
    const search = searchText.replace(/\s+/g, '');
    return title.includes(search);
  });

  if (filtered.length > 0) {
    // Attach prices before saving
    const withPrices = filtered.map(item => {
      const basePrice = parseInt(item.price?.replace(/[^\d]/g, "")) || 0;
      const originalPrice = basePrice + profit;
      const finalPrice = originalPrice - discount;
      return { ...item, originalPrice, finalPrice };
    });

    localStorage.setItem("searchResults", JSON.stringify(withPrices));
    window.location.href = "searchResults.html";
  } else {
    localStorage.removeItem("searchResults");
    window.location.href = "searchResults.html";
  }
}

// ✅ Swiper Script
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});