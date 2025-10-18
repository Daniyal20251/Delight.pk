document.addEventListener("DOMContentLoaded", () => {
  // ✅ Containers
  const container = document.getElementById("itemContainer");
  const adSlider = document.getElementById('adSlider'); 
  const flashSaleBox = document.getElementById('flashSaleBox'); 
  const searchInput = document.getElementById("searchInput");
  const searchPanel = document.getElementById('searchPanel');
  const recentSearchesList = document.getElementById('recentSearches');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const searchBtn = document.querySelector(".btn");

  // ✅ Profit & Discount
  const profit = typeof globalProfit !== 'undefined' ? globalProfit : 0;
  const discount = typeof globalDiscount !== 'undefined' ? globalDiscount : 0;

  // ✅ Merge items from JS files
  const allItems = [
    ...(typeof items !== "undefined" ? items : []),
    ...(typeof items2 !== "undefined" ? items2 : [])
  ];

  // ✅ Shuffle helper
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let displayedItems = shuffleArray([...allItems]);

  // ✅ Recent searches
  let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

  // ✅ Render items
  function renderItems(itemsToRender, isSearch = false) {
    if (adSlider) adSlider.style.display = isSearch && itemsToRender.length < allItems.length ? 'none' : 'block';
    if (flashSaleBox) flashSaleBox.style.display = isSearch && itemsToRender.length < allItems.length ? 'none' : 'block';

    container.innerHTML = '';
    if (itemsToRender.length === 0) {
      container.innerHTML = `
      <div class="not-found">
        <img src="no-results.png"
             alt="No Results"
             onerror="this.onerror=null;this.src='https://img.icons8.com/ios/200/search--v1.png';">
        <h3>Oops! Item Not Found</h3>
        <p>Try searching with a different keyword.</p>
      </div>`;
      return;
    }

    itemsToRender.forEach(item => {
      const card = document.createElement("div");
      card.className = "item-card";

      const basePrice = parseInt(item.price?.replace(/[^\d]/g, "")) || 0;

      let itemProfit = 0, itemDiscount = 0, deliveryCharges = 0;

      if (typeof items !== "undefined" && items.includes(item)) {
        itemProfit = typeof globalProfit !== "undefined" ? globalProfit : 0;
        itemDiscount = typeof globalDiscount !== "undefined" ? globalDiscount : 0;
      } else if (typeof items2 !== "undefined" && items2.includes(item)) {
        itemProfit = typeof globalProfit2 !== "undefined" ? globalProfit2 : 0;
        itemDiscount = typeof globalDiscount2 !== "undefined" ? globalDiscount2 : 0;
      }

      const originalPrice = basePrice + itemProfit;
      const finalPrice = originalPrice - itemDiscount;

      card.innerHTML = `
        <img src="${item.image || item.images?.[0]}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="price-wrapper">
          <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span><br>
          <span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>
        </p>`;

      card.addEventListener('click', () => {
        const updatedItem = { ...item, originalPrice, finalPrice };
        localStorage.setItem("selectedItem", JSON.stringify(updatedItem));

        if (typeof items !== "undefined" && items.includes(item)) {
          window.location.href = "itemDetails.html";
        } else if (typeof items2 !== "undefined" && items2.includes(item)) {
          window.location.href = "itemDetails2.html";
        } else {
          window.location.href = "itemDetails.html"; // backend items default
        }
      });

      container.appendChild(card);
    });
  }

  // ✅ Load backend items (from Termux)
  function loadBackendProducts() {
     fetch("https://admit-infinite-continuous-training.trycloudflare.com/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Backend items loaded:", data);
        displayedItems = shuffleArray([...allItems, ...data]);
        renderItems(displayedItems);
      })
      .catch(err => {
        console.warn("⚠️ Backend not reachable, showing local items only.");
        renderItems(displayedItems);
      });
  }

  // ✅ Initial load
  loadBackendProducts();

  // ✅ Search
  window.searchItems = function() {
    const searchText = searchInput.value.trim().toLowerCase();
    const filtered = displayedItems.filter(item => {
      const title = item.title.toLowerCase().replace(/\s+/g, '');
      const search = searchText.replace(/\s+/g, '');
      return title.includes(search);
    });

    renderItems(filtered, true);

    if (searchText) {
      if (!recentSearches.includes(searchText)) {
        recentSearches.unshift(searchText);
        if (recentSearches.length > 10) recentSearches.pop();
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      }
    }

    toggleSearchPanel(false);
  };

  // ✅ Button click & Enter key
  if (searchBtn) searchBtn.addEventListener("click", searchItems);
  if (searchInput) {
    searchInput.addEventListener("keyup", e => { if (e.key === "Enter") searchItems(); });
  }

  // ✅ Recent search system
  function renderRecentSearches() {
    recentSearchesList.innerHTML = '';
    if (recentSearches.length === 0) {
      recentSearchesList.innerHTML = '<li>No recent searches</li>';
      return;
    }
    recentSearches.forEach(term => {
      const li = document.createElement('li');
      li.textContent = term;
      li.onclick = () => {
        searchInput.value = term;
        searchItems();
        toggleSearchPanel(false);
      };
      recentSearchesList.appendChild(li);
    });
  }

  function toggleSearchPanel(show) {
    if (show) {
      searchPanel.classList.add('active');
      renderRecentSearches();
    } else {
      searchPanel.classList.remove('active');
    }
  }

  searchInput.addEventListener('focus', () => toggleSearchPanel(true));
  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !searchPanel.contains(e.target)) toggleSearchPanel(false);
  });

  clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('recentSearches');
    recentSearches = [];
    renderRecentSearches();
  });

  // ✅ Suggestion click helper
  window.fillAndSearch = function(item) {
    searchInput.value = item;
    searchItems();
  };
});

// ✅ Tab switching function
function setActiveTab(tab, page) {
  const tabs = document.querySelectorAll('.tab-bar .tab');
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  const underline = document.querySelector('.tab-bar .underline');
  const index = Array.from(tabs).indexOf(tab);
  underline.style.transform = `translateX(${index * 100}%)`;

  setTimeout(() => {
    if (window.location.pathname.split('/').pop() !== page) {
      window.location.href = page;
    }
  }, 200);
}