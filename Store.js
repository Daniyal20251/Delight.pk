let allProducts = []; 
const searchInput = document.getElementById("searchInput");
const searchPanel = document.getElementById("searchPanel");
const recentList = document.getElementById("recentSearches");
const clearBtn = document.getElementById("clearHistoryBtn");
const itemContainer = document.getElementById("itemContainer");
let recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");

// ✅ Load seller + products
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("itemContainer");
  const loading = document.getElementById("loading");
  const sellerNameEl = document.getElementById("sellerName");
  const sellerLogoEl = document.getElementById("sellerLogo");

  loading.style.display = "block";
  container.innerHTML = "";

  const urlParams = new URLSearchParams(window.location.search);
  const sellerPhone = urlParams.get("phone");

  if (!sellerPhone) {
    loading.textContent = "⚠️ Seller not found!";
    return;
  }

  try {
    const storeRes = await fetch("https://5238f098-6b7a-4815-b792-a10ea88e4c13-00-54fclrw8sb5.pike.replit.dev/all-stores");
    const allStores = await storeRes.json();
    const store = allStores.find(s => s.phone === sellerPhone);

    if (store) {
      sellerNameEl.textContent = store.name || "DELIGHT.PK";
      sellerLogoEl.src = store.logo || "lo.png";
    } else {
      sellerNameEl.textContent = "Unknown Seller";
      sellerLogoEl.src = "lo.png";
    }

    const res = await fetch("https://5238f098-6b7a-4815-b792-a10ea88e4c13-00-54fclrw8sb5.pike.replit.dev/products");
    let data = await res.json();
    allProducts = data.filter(item => item.sellerPhone === sellerPhone);

    loading.style.display = "none";
    if (!allProducts.length) {
      container.innerHTML = "<p style='text-align:center;color:#777;'>No items found for this store.</p>";
      return;
    }

    renderProducts(allProducts);
    renderRecentSearches();

  } catch (err) {
    console.error("⚠️ Error fetching store products:", err);
    loading.textContent = "⚠️ Error loading products!";
  }
});

// ✅ Render products (each with its own discount)
function renderProducts(list) {
  itemContainer.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    const basePrice = parseInt(item.price?.replace(/[^\d]/g, "")) || 0;
    const discount = parseInt(item.discount?.toString().replace(/[^\d]/g, "")) || 0;
    const finalPrice = basePrice - discount;

    card.innerHTML = `
      <img src="${item.images?.[0] || 'default.jpg'}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p class="price-wrapper">
        ${discount > 0 
          ? `<span class="new-price">Rs. <strong>${finalPrice}</strong></span><br>
             <span class="old-price" style="text-decoration: line-through; color: gray;">Rs. ${basePrice}</span>`
          : `<span class="new-price">Rs. <strong>${basePrice}</strong></span>`
        }
      </p>
    `;

    card.addEventListener("click", () => {
      const updatedItem = { ...item, finalPrice, basePrice };
      localStorage.setItem("selectedItem", JSON.stringify(updatedItem));
      window.location.href = "itemDetails.html";
    });

    itemContainer.appendChild(card);
  });
}

// ✅ Search Engine
function renderRecentSearches() {
  recentList.innerHTML = "";
  if (recentSearches.length === 0) {
    recentList.innerHTML = "<li style='color:#999;'>No recent searches</li>";
    return;
  }
  recentSearches.forEach(term => {
    const li = document.createElement("li");
    li.textContent = term;
    li.onclick = () => fillAndSearch(term);
    recentList.appendChild(li);
  });
}

searchInput.addEventListener("focus", () => {
  renderRecentSearches();
  searchPanel.classList.add("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-panel") && !e.target.closest("#searchInput")) {
    searchPanel.classList.remove("active");
  }
});

function searchItems() {
  const term = searchInput.value.trim().toLowerCase();
  if (!term) return;

  if (!recentSearches.includes(term)) {
    recentSearches.unshift(term);
    if (recentSearches.length > 6) recentSearches.pop();
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }

  renderRecentSearches();
  filterProducts(term);
  searchPanel.classList.remove("active");
}

function filterProducts(term) {
  const matched = allProducts.filter(p => p.title.toLowerCase().includes(term));
  if (matched.length === 0) {
    itemContainer.innerHTML = `
      <div class="not-found" style="margin:140px 0 0 40px;">
        <img src="Delight icons/not-found.png" alt="No Results">
        <h3 style="color:#fe7004;">Oops! Item Not Found.</h3>
        <p>Try searching with a different keyword.</p>
      </div>`;
    return;
  }
  renderProducts(matched);
}

function fillAndSearch(term) {
  searchInput.value = term;
  searchItems();
}

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("recentSearches");
  recentSearches = [];
  renderRecentSearches();
});