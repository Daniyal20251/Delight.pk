document.addEventListener("DOMContentLoaded", async () => {
  // --- Elements ---
  const container = document.getElementById("itemContainer");
  const skeletonContainer = document.getElementById("skeletonContainer");
  const flashSaleContainer = document.getElementById("flashSaleContainer");
  const flashSaleBox = document.getElementById("flashSaleBox");
  const searchInput = document.getElementById("searchInput");
  const searchPanel = document.getElementById("searchPanel");
  const recentSearchesList = document.getElementById("recentSearches");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const searchBtn = document.querySelector(".btn");
  const swiperWrapper = document.getElementById("swiperWrapper");
  const adSlider = document.getElementById("adSlider");
  const adsSkeleton = document.getElementById("adsSkeleton");

  let backendItems = [];
  let swiperInstance = null;

  // --- Shuffle helper ---
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // --- Show/Hide Skeletons ---
  function showProductsSkeleton() {
    if (skeletonContainer) skeletonContainer.style.display = "flex";
    if (container) container.style.display = "none";
  }

  function hideProductsSkeleton() {
    if (skeletonContainer) skeletonContainer.style.display = "none";
    if (container) container.style.display = "flex";
  }

  function showAdsSkeleton() {
    if (adsSkeleton) adsSkeleton.style.display = "block";
    if (adSlider) adSlider.style.display = "none";
  }

  function hideAdsSkeleton() {
    if (adsSkeleton) adsSkeleton.style.display = "none";
  }

  // --- Increment View Count ---
  async function incrementView(productId) {
    try {
      await fetch(`https://delight-backend--araindaniyalo2.replit.app/products/${productId}/view`, { method: "POST" });
    } catch (err) {
      console.error("View count error:", err);
    }
  }

  // --- Render Products ---
  function renderItems(itemsToRender, hideExtras = false) {
    if (adSlider) adSlider.style.display = hideExtras ? "none" : "block";
    if (flashSaleBox) flashSaleBox.style.display = hideExtras ? "none" : "block";
    if (skeletonContainer) skeletonContainer.style.display = "none";

    container.innerHTML = "";
    container.style.display = "flex";

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
      const views = item.views || 0;

      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
        <img src="${item.images?.[0] || item.image || 'https://via.placeholder.com/150'}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="price-wrapper">
          <span class="new-price">Rs. <strong>${finalPrice}</strong></span>
          ${discount > 0 ? `<span class="old-price">Rs. ${basePrice}</span>` : ""}
        </p>
        <p style="margin:2px 8px 6px;font-size:11px;color:#888; display:none;">
          <i class="fas fa-eye" style="color:#bbb;"></i> ${views} views
        </p>
      `;

      card.addEventListener("click", () => {
        incrementView(item.id);
        localStorage.setItem("selectedItem", JSON.stringify({ ...item, finalPrice, originalPrice: basePrice }));
        window.location.href = "itemDetails.html";
      });

      container.appendChild(card);
    });
  }

  // --- Get ad name from any possible field ---
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

  // --- Load Ads Slider with 8 Fixed Filters ---
  async function loadSliderImages() {
    showAdsSkeleton();
    
    try {
      const res = await fetch("https://delight-backend--araindaniyalo2.replit.app/admin/ads");
      const ads = await res.json();
      
      console.log("Backend ads response:", ads);
      console.log("First ad object:", ads[0]);
      console.log("First ad name:", getAdName(ads[0]));

      const adFilters = [
        "Delight.pk",
        "Delight.pk1",
        "Delight.pk2",
        "Delight.pk3",
        "Delight.pk4",
        "Delight.pk5",
        "Delight.pk6",
        "Delight.pk7",
      ];

      let matchedAds = [];
      
      adFilters.forEach((filterText, index) => {
        const matchedAd = ads.find(ad => {
          const adName = getAdName(ad).toLowerCase();
          if (index === 0) console.log(`Checking ad: "${adName}" against filter: "${filterText.toLowerCase()}"`);
          
          return adName === filterText.toLowerCase();
        });
        
        if (matchedAd) {
          console.log(`✅ Matched: ${filterText} ->`, matchedAd);
          matchedAds.push({ ...matchedAd, id: `ad${index + 1}` });
        } else {
          console.log(`❌ No match for: ${filterText}`);
        }
      });

      console.log("Total matched ads:", matchedAds.length);

      if (matchedAds.length > 0) {
        swiperWrapper.innerHTML = "";
        
        matchedAds.forEach(ad => {
          const slide = document.createElement("div");
          slide.className = "swiper-slide";
          slide.id = ad.id;
          slide.innerHTML = `<img src="${ad.image}" alt="${getAdName(ad) || 'Ad'}" loading="lazy">`;
          swiperWrapper.appendChild(slide);
        });

        hideAdsSkeleton();
        adSlider.style.display = "block";

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
      } else {
        hideAdsSkeleton();
        adSlider.style.display = "none";
      }
    } catch (err) {
      console.error("Failed to load ads:", err);
      hideAdsSkeleton();
      adSlider.style.display = "none";
    }
  }

  // --- Load All Products ---
  async function loadBackendProducts() {
    showProductsSkeleton();
    try {
      const res = await fetch("https://delight-backend--araindaniyalo2.replit.app/products");
      const data = await res.json();
      backendItems = shuffleArray(data);
      renderItems(backendItems);
    } catch (err) {
      console.error("Backend not reachable:", err);
      hideProductsSkeleton();
      container.innerHTML = "<p style='text-align:center;'>Backend not connected</p>";
    }
  }

  // --- Load Flash Sale ---
  async function loadFlashSale() {
    if (!flashSaleContainer) return;
    try {
      const res = await fetch("https://delight-backend--araindaniyalo2.replit.app/products");
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
    underline.style.width = `${100 / tabs.length}%`;
    underline.style.transform = `translateX(${index * 100}%)`;

    setTimeout(() => {
      if (window.location.pathname.split('/').pop() !== url) {
        window.location.href = url;
      }
    }, 150);
  }

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

  // --- Professional Loading Sequence ---
  await loadSliderImages();
  await loadFlashSale();
  if (flashSaleBox) flashSaleBox.style.display = "block";
  await loadBackendProducts();
});
