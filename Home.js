document.addEventListener("DOMContentLoaded", async () => {
  // --- Elements ---
  const container = document.getElementById("itemContainer");
  const flashSaleContainer = document.getElementById("flashSaleContainer");
  const flashSaleBox = document.getElementById("flashSaleBox");
  const searchInput = document.getElementById("searchInput");
  const searchPanel = document.getElementById("searchPanel");
  const recentSearchesList = document.getElementById("recentSearches");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const searchBtn = document.querySelector(".btn");
  const loading = document.getElementById("loading");
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  let backendItems = [];

  // --- Shuffle helper ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // --- Render Products ---
  function renderItems(itemsToRender, hideExtras = false) {
    if (document.getElementById("adSlider")) document.getElementById("adSlider").style.display = hideExtras ? "none" : "block";
    if (flashSaleBox) flashSaleBox.style.display = hideExtras ? "none" : "block";

    container.innerHTML = "";

    if (!itemsToRender.length) {
      container.innerHTML = `
        <div class="not-found" style="margin:135px 0 0 50px;">
          <img src="Delight icons/not-found.png" alt="No Results">
          <h3 style="color:#fe7004; font-size:20px; font-weight:600; margin-bottom:8px;">Oops! Item Not Found</h3>
          <p style="color:#333; font-size:15px;">Try searching with a different keyword.</p>
        </div>`;
      return;
    }

    itemsToRender.forEach(item => {
      const basePrice = parseInt(item.price?.toString().replace(/[^\d]/g, "")) || 0;
      const discount = parseInt(item.discount?.toString().replace(/[^\d]/g, "")) || 0;
      const finalPrice = basePrice - discount;

      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
        <img src="${item.images?.[0] || item.image || 'https://via.placeholder.com/150'}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="price-wrapper">
          <span class="new-price">Rs. <strong>${finalPrice}</strong></span>
          ${discount > 0 ? `<span class="old-price">Rs. ${basePrice}</span>` : ""}
        </p>
      `;

      card.addEventListener("click", () => {
        localStorage.setItem("selectedItem", JSON.stringify({ ...item, finalPrice, originalPrice: basePrice }));
        window.location.href = "itemDetails.html";
      });

      container.appendChild(card);
    });
  }

  // --- Load All Products ---
  async function loadBackendProducts() {
    if (loading) loading.style.display = "block";
    try {
      const res = await fetch("https://5238f098-6b7a-4815-b792-a10ea88e4c13-00-54fclrw8sb5.pike.replit.dev/products");
      const data = await res.json();
      backendItems = shuffleArray(data);
      renderItems(backendItems);
    } catch (err) {
      console.error("Backend not reachable:", err);
      container.innerHTML = "<p style='text-align:center;'>Backend not connected</p>";
    } finally {
      if (loading) loading.style.display = "none";
    }
  }

  // --- Load Flash Sale ---
  async function loadFlashSale() {
    if (!flashSaleContainer) return;
    try {
      const res = await fetch("https://5238f098-6b7a-4815-b792-a10ea88e4c13-00-54fclrw8sb5.pike.replit.dev/products");
      let products = await res.json();

      products = products.map(p => {
        const price = parseInt(p.price?.toString().replace(/[^\d]/g, "")) || 0;
        const discount = parseInt(p.discount?.toString().replace(/[^\d]/g, "")) || 0;
        const discountPercentage = price > 0 ? Math.round((discount / price) * 100) : 0;
        return { ...p, discountPercentage, finalPrice: price - discount };
      });

      products = products.filter(p => p.discountPercentage >= 30);
      products = shuffleArray(products);
      flashSaleContainer.innerHTML = "";

      if (!products.length) {
        flashSaleContainer.innerHTML = `<p style="text-align:center; margin:20px 0; color:#fe7004; font-weight:600;">No 40%+ discount products available</p>`;
        return;
      }

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "flash-sale-card";
        card.innerHTML = `
          ${product.discountPercentage > 0 ? `<div class="discount-badge">SAVE ${product.discountPercentage}%</div>` : ""}
          <img src="${product.images?.[0] || product.image || 'https://via.placeholder.com/150'}" alt="${product.title}">
          <div class="price-block">
            <span class="final-price" style="color:#fe7004; font-weight:bold;">Rs. ${product.finalPrice}</span>
            ${product.price ? `<span class="old-price">Rs. ${product.price}</span>` : ""}
          </div>
          <div class="stock-badge">Limited Stock</div>
        `;
        card.addEventListener("click", () => {
          localStorage.setItem("selectedItem", JSON.stringify(product));
          window.location.href = "itemDetails.html";
        });
        flashSaleContainer.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading flash sale:", err);
      flashSaleContainer.innerHTML = "<p style='text-align:center;'>Backend not connected</p>";
    }
  }

  // --- Load Ads Slider ---
  async function loadSliderImages() {
    try {
      const res = await fetch("https://5238f098-6b7a-4815-b792-a10ea88e4c13-00-54fclrw8sb5.pike.replit.dev/admin/ads");
      const ads = await res.json();
      if (!ads.length) return;

      swiperWrapper.innerHTML = ads
        .map(ad => `<div class="swiper-slide"><img src="${ad.image}" alt="Ad"></div>`)
        .join("");

      if (window.swiper) window.swiper.update();
    } catch (err) {
      console.error("Failed to load ads:", err);
    }
  }

  // --- Search Functionality ---
  function renderRecentSearches() {
    const recent = JSON.parse(localStorage.getItem("recentSearches") || "[]");
    recentSearchesList.innerHTML = recent.length
      ? recent.map(t => `<li onclick="fillAndSearch('${t}')">${t}</li>`).join("")
      : "<li>No recent searches</li>";
  }

  function toggleSearchPanel(show) {
    if (!searchPanel) return;
    if (show) {
      searchPanel.classList.add("active");
      renderRecentSearches();
    } else searchPanel.classList.remove("active");
  }

  window.fillAndSearch = function(item) {
    searchInput.value = item;
    searchItems();
  };

  window.searchItems = function() {
    const text = searchInput.value.trim().toLowerCase();
    const filtered = backendItems.filter(item => item.title.toLowerCase().includes(text));
    renderItems(filtered, true);

    if (text) {
      let recent = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      if (!recent.includes(text)) {
        recent.unshift(text);
        if (recent.length > 10) recent.pop();
        localStorage.setItem("recentSearches", JSON.stringify(recent));
      }
    }

    toggleSearchPanel(false);
  };

  if (searchBtn) searchBtn.addEventListener("click", searchItems);
  if (searchInput) searchInput.addEventListener("keyup", e => { if(e.key==="Enter") searchItems(); });
  if (searchInput) {
    searchInput.addEventListener("focus", () => toggleSearchPanel(true));
    document.addEventListener("click", e => {
      if (!searchInput.contains(e.target) && !searchPanel.contains(e.target)) toggleSearchPanel(false);
    });
  }
  if (clearHistoryBtn) clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem("recentSearches");
    renderRecentSearches();
  });

// --- Tab-bar Underline Smooth Animation ---
window.setActiveTab = function(element, url) {
  const tabs = document.querySelectorAll('.tab');
  const underline = document.querySelector('.underline');

  tabs.forEach(tab => tab.classList.remove('active'));
  element.classList.add('active');

  const index = Array.from(tabs).indexOf(element);
  // Smooth move using translateX
  underline.style.width = `${100 / tabs.length}%`;
  underline.style.transform = `translateX(${index * 100}%)`;

  // Redirect after small delay
  setTimeout(() => {
    if (window.location.pathname.split('/').pop() !== url) {
      window.location.href = url;
    }
  }, 150);
}

// Initialize underline on page load
window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const underline = document.querySelector('.underline');
  const currentPage = window.location.pathname.split('/').pop();

  tabs.forEach((tab, index) => {
    const tabHref = tab.getAttribute('onclick')?.match(/'(.+?)'/)?.[1];
    if (tabHref === currentPage) {
      tab.classList.add('active');
      underline.style.width = `${100 / tabs.length}%`;
      underline.style.transform = `translateX(${index * 100}%)`;
    }
  });
});

  // --- Initial Load ---
  await loadBackendProducts();
  await loadFlashSale();
  await loadSliderImages();
});