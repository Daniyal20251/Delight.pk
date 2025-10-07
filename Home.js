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

  // ✅ Merge items
  const allItems = [
    ...(typeof items !== "undefined" ? items : []),
    ...(typeof items2 !== "undefined" ? items2 : [])
  ];

  // ✅ Shuffle function
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

  // ✅ Render items function with correct redirect
  function renderItems(itemsToRender, isSearch = false) {
    if (adSlider) adSlider.style.display = isSearch && itemsToRender.length < allItems.length ? 'none' : 'block';
    if (flashSaleBox) flashSaleBox.style.display = isSearch && itemsToRender.length < allItems.length ? 'none' : 'block';

    container.innerHTML = '';
    if (itemsToRender.length === 0) {
      container.innerHTML = `
    <div class="not-found">
      <!-- Online icon (agar local image na ho to ye chalega) -->
      <img src="no-results.png"
           alt="No Results"
           onerror="this.onerror=null;this.src='https://img.icons8.com/ios/200/search--v1.png';">
      <h3>Opps! Item Not Found</h3>
      <p>Try searching with a different keyword.</p>
    </div>
  `;
      return;
    }

    itemsToRender.forEach(item => {
      const card = document.createElement("div");
      card.className = "item-card";

      const basePrice = parseInt(item.price?.replace(/[^\d]/g, "")) || 0;

// Check kis file se item aaya hai
let itemProfit = 0;
let itemDiscount = 0;
let deliveryCharges = 0;

if (typeof items !== "undefined" && items.includes(item)) {
  // itemData.js ka item
  itemProfit = typeof globalProfit !== "undefined" ? globalProfit : 0;
  itemDiscount = typeof globalDiscount !== "undefined" ? globalDiscount : 0;
  deliveryCharges = typeof DELIVERY_CHARGES !== "undefined" ? DELIVERY_CHARGES : 0;
} 
else if (typeof items2 !== "undefined" && items2.includes(item)) {
  // itemData2.js ka item
  itemProfit = typeof globalProfit2 !== "undefined" ? globalProfit2 : 0;
  itemDiscount = typeof globalDiscount2 !== "undefined" ? globalDiscount2 : 0;
  deliveryCharges = typeof DELIVERY_CHARGES2 !== "undefined" ? DELIVERY_CHARGES2 : 0;
}

const originalPrice = basePrice + itemProfit;
const finalPrice = originalPrice - itemDiscount;

      card.innerHTML = `
        <img src="${item.image || item.images?.[0]}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="price-wrapper">
          <span class="new-price"><span class="rs">Rs.</span><strong>${finalPrice}</strong></span><br>
          <span class="old-price"><span class="rs">Rs.</span>${originalPrice}</span>
        </p>
      `;

      card.addEventListener('click', () => {
        const updatedItem = { ...item, originalPrice, finalPrice };
        localStorage.setItem("selectedItem", JSON.stringify(updatedItem));

        if (typeof items !== "undefined" && items.includes(item)) {
          window.location.href = "itemDetails.html"; // itemData.js
        } else {
          window.location.href = "itemDetails2.html"; // itemData2.js
        }
      });

      container.appendChild(card);
    });
  }

  // ✅ Initial display
  renderItems(displayedItems);

  // ✅ Search function
  window.searchItems = function() {
    const searchText = searchInput.value.trim().toLowerCase();
    const filtered = allItems.filter(item => {
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

  // ✅ Search button click
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchItems();
    });
  }

  // ✅ Enter key search
  if (searchInput) {
    searchInput.addEventListener("keyup", function (e) {
      if (e.key === "Enter") searchItems();
    });
  }

  // ✅ Recent searches panel
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

  document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchPanel.contains(event.target)) {
      toggleSearchPanel(false);
    }
  });

  clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('recentSearches');
    recentSearches = [];
    renderRecentSearches();
  });

  // ✅ Function for suggestion clicks
  window.fillAndSearch = function(item) {
    searchInput.value = item;
    searchItems();
  };
});

function setActiveTab(tab, page) {
  const tabs = document.querySelectorAll('.tab-bar .tab');
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  const underline = document.querySelector('.tab-bar .underline');
  const index = Array.from(tabs).indexOf(tab);
  underline.style.transform = `translateX(${index * 100}%)`;

  // Page navigation (smooth feel)
  setTimeout(() => {
    if (window.location.pathname.split('/').pop() !== page) {
      window.location.href = page;
    }
  }, 200);
}