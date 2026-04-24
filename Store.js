let allProducts = [];
let swiperInstance = null;

const API_BASE = "https://delight-backend--araindaniyalo2.replit.app";

const searchInput = document.getElementById("searchInput");
const searchPanel = document.getElementById("searchPanel");
const recentList = document.getElementById("recentSearches");
const clearBtn = document.getElementById("clearHistoryBtn");
const itemContainer = document.getElementById("itemContainer");
const skeletonContainer = document.getElementById("skeletonContainer");
const entryLoader = document.getElementById("entryLoader");
const loaderStoreName = document.getElementById("loaderStoreName");

let recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");

// Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Show/Hide Skeleton
function showSkeleton() {
  if (skeletonContainer) skeletonContainer.style.display = "flex";
  if (itemContainer) itemContainer.style.display = "none";
}

function hideSkeleton() {
  if (skeletonContainer) skeletonContainer.style.display = "none";
  if (itemContainer) itemContainer.style.display = "flex";
}

// Hide entry loader
function hideEntryLoader() {
  if (entryLoader) entryLoader.style.display = "none";
}

// Get ad name from any possible field
function getAdName(ad) {
  const possibleFields = ['name', 'title', 'text', 'label', 'caption', 'heading', 'description', 'adName', 'adTitle'];
  for (let field of possibleFields) {
    if (ad[field] && typeof ad[field] === 'string') {
      return ad[field].trim();
    }
  }
  for (let key in ad) {
    if (typeof ad[key] === 'string' && ad[key].length < 100) {
      return ad[key].trim();
    }
  }
  return "";
}

// Increment view count
async function incrementView(productId) {
  try {
    await fetch(`${API_BASE}/products/${productId}/view`, { method: "POST" });
  } catch (err) {
    console.error("View count error:", err);
  }
}

// Load seller + products
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("itemContainer");
  const sellerNameEl = document.getElementById("sellerName");
  const sellerLogoEl = document.getElementById("sellerLogo");
  const swiperWrapper = document.getElementById("swiperWrapper");
  const adSlider = document.getElementById("adSlider");

  showSkeleton();
  container.innerHTML = "";

  const urlParams = new URLSearchParams(window.location.search);
  const sellerPhone = urlParams.get("phone");

  if (!sellerPhone) {
    hideSkeleton();
    container.innerHTML = "<p style='text-align:center;color:#777;'>⚠️ Seller not found!</p>";
    return;
  }

  try {
    // Load seller info
    const storeRes = await fetch(`${API_BASE}/all-stores`);
    const allStores = await storeRes.json();
    const store = allStores.find(s => s.phone === sellerPhone);

    let storeName = "DELIGHT.PK";
    if (store) {
      storeName = store.name || "DELIGHT.PK";
      sellerNameEl.textContent = storeName;
      sellerLogoEl.src = store.logo || "lo.png";
      if (loaderStoreName) loaderStoreName.textContent = storeName;
    } else {
      sellerNameEl.textContent = "Unknown Seller";
      sellerLogoEl.src = "lo.png";
      if (loaderStoreName) loaderStoreName.textContent = "Unknown Seller";
    }

    // Load Slider Ads with 8 specific filters
    try {
      const adsRes = await fetch(`${API_BASE}/admin/ads`);
      const ads = await adsRes.json();
      
      const adFilters = [
        storeName,
        "Delight.pk1",
        "Delight.pk2",
        "Delight.pk3",
        "Delight.pk4",
        "Delight.pk5",
        "Delight.pk6",
        "Delight.pk7"
      ];

      let matchedAds = [];
      
      adFilters.forEach((filterText) => {
        const matchedAd = ads.find(ad => {
          const adName = getAdName(ad).toLowerCase();
          return adName === filterText.toLowerCase();
        });
        
        if (matchedAd) {
          matchedAds.push(matchedAd);
        }
      });

      if (matchedAds.length > 0) {
        swiperWrapper.innerHTML = matchedAds
          .map(ad => `<div class="swiper-slide"><img src="${ad.image}" alt="${getAdName(ad) || 'Ad'}" loading="lazy"></div>`)
          .join("");
        
        if (swiperInstance) swiperInstance.destroy(true, true);
        
        swiperInstance = new Swiper(".mySwiper", {
          loop: matchedAds.length > 1,
          autoplay: { 
            delay: 3000, 
            disableOnInteraction: false 
          },
          pagination: { 
            el: ".swiper-pagination", 
            clickable: true,
            dynamicBullets: matchedAds.length > 5
          },
          lazy: {
            loadPrevNext: true,
          }
        });
        
        adSlider.style.display = "block";
      } else {
        adSlider.style.display = "none";
      }
    } catch (err) {
      console.error("Failed to load ads:", err);
      adSlider.style.display = "none";
    }

    // Load products
    const res = await fetch(`${API_BASE}/products`);
    let data = await res.json();

    allProducts = data.filter(item => item.sellerPhone === sellerPhone);
    allProducts = shuffleArray(allProducts);

    hideSkeleton();

    if (!allProducts.length) {
      container.innerHTML =
        "<p style='text-align:center;color:#777;'>No items found for this store.</p>";
      hideEntryLoader();
      return;
    }

    renderProducts(allProducts);
    renderRecentSearches();
    hideEntryLoader();

  } catch (err) {
    console.error("⚠️ Error fetching store products:", err);
    hideSkeleton();
    hideEntryLoader();
    container.innerHTML = "<p style='text-align:center;color:#777;'>⚠️ Error loading products!</p>";
  }
});

// Render products
function renderProducts(list) {
  itemContainer.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    const basePrice = parseInt(String(item.price).replace(/[^\d]/g, "")) || 0;
    const discount = parseInt(String(item.discount).replace(/[^\d]/g, "")) || 0;
    const finalPrice = basePrice - discount;
    const views = item.views || 0;

    card.innerHTML = `
      <img src="${item.images?.[0] || 'default.jpg'}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p class="price-wrapper">
        ${discount > 0 
          ? `<span class="new-price">Rs. <strong>${finalPrice}</strong></span><br>
             <span class="old-price" style="text-decoration: line-through; color: gray;">Rs. ${basePrice}</span>`
          : `<span class="new-price">Rs. <strong>${basePrice}</strong></span>`
        }
      </p>
      <p style="margin:2px 8px 6px;font-size:11px;color:#888; display:none;">
        <i class="fas fa-eye" style="color:#bbb;"></i> ${views} views
      </p>
    `;

    card.addEventListener("click", () => {
      incrementView(item.id);
      const updatedItem = { ...item, finalPrice, basePrice };
      localStorage.setItem("selectedItem", JSON.stringify(updatedItem));
      window.location.href = "Stores itemDetails.html";
    });

    itemContainer.appendChild(card);
  });
}

// Recent Searches
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

// Search
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
  
  document.getElementById("adSlider").style.display = "none";
}

function filterProducts(term) {
  const matched = allProducts.filter(p =>
    p.title.toLowerCase().includes(term)
  );

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

// Clear button
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("recentSearches");
  recentSearches = [];
  renderRecentSearches();
  
  searchInput.value = "";
  document.getElementById("adSlider").style.display = "block";
  renderProducts(allProducts);
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    document.getElementById("adSlider").style.display = "block";
    renderProducts(allProducts);
  }
});
