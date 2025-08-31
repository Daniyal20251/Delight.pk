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
// ✅ Allow Enter key to trigger search (safe if input exists)
(function () {
  const input = document.getElementById("searchInput");
  if (!input) return;
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") searchItems();
  });
})();
  const searchInput = document.getElementById('searchInput');
  const searchPanel = document.getElementById('searchPanel');
  const recentSearchesList = document.getElementById('recentSearches');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');

  let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

  // Render Recent Searches
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

  // Toggle Panel
  function toggleSearchPanel(show) {
    if (show) {
      searchPanel.classList.add('active');
      renderRecentSearches();
    } else {
      searchPanel.classList.remove('active');
    }
  }

  // Show panel on focus
  searchInput.addEventListener('focus', () => toggleSearchPanel(true));

  // Hide panel when clicking outside
  document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchPanel.contains(event.target)) {
      toggleSearchPanel(false);
    }
  });

  // Save and search function
  const oldSearchItems = window.searchItems;
  window.searchItems = function () {
    const term = searchInput.value.trim();
    if (term) {
      if (!recentSearches.includes(term)) {
        recentSearches.unshift(term);
        if (recentSearches.length > 10) recentSearches.pop();
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
      }
    }
    toggleSearchPanel(false);
    oldSearchItems();
  };

  // Clear history button
  clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('recentSearches');
    recentSearches = [];
    renderRecentSearches();
  });

  // Function for top suggestions
  function fillAndSearch(item) {
    searchInput.value = item;
    searchItems();
  }