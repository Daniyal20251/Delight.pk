document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("itemContainer");
  const loading = document.getElementById("loading");
  const title = document.getElementById("categoryTitle");

  // 🔹 Get category name from URL
  const params = new URLSearchParams(window.location.search);
  const categoryName = params.get("category") || "Category";

  // ✅ Extract only Subcategory (last part after "-")
  const subCategory =
    categoryName.includes("-")
      ? categoryName.split("-").pop().trim()
      : categoryName.trim();

  title.textContent = subCategory;

  // 🔹 Fetch products
  try {
    const res = await fetch("https://delight-backend--araindaniyalo2.replit.app/products");
    const data = await res.json();

    // 🔹 Filter by category or subcategory
    const filteredItems = data.filter(item =>
      item.category?.toLowerCase().includes(categoryName.toLowerCase())
    );

    if (filteredItems.length === 0) {
      container.innerHTML = `
        <div class="not-found" style="margin:135px 0 0 70px;">
          <img src="Delight icons/not-found.png" alt="No Results" style="width:180px; opacity:0.8;">
          <h3>Oops! No Items Found</h3>
          <p>Try another category.</p>
        </div>`;
      if (loading) loading.style.display = "none";
      return;
    }

    renderItems(filteredItems);
  } catch (err) {
    console.error("⚠️ Error fetching products:", err);
    container.innerHTML = "<p style='text-align:center;'>Unable to load products.</p>";
  } finally {
    if (loading) loading.style.display = "none";
  }

  // ✅ Render Items with discount logic
  function renderItems(items) {
    container.innerHTML = "";

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "item-card";

      // 🔸 Convert price & discount
      const basePrice = parseInt(item.price?.toString().replace(/[^\d]/g, "")) || 0;
      const discount = parseInt(item.discount?.toString().replace(/[^\d]/g, "")) || 0;

      // 🔹 Final discounted price
      const finalPrice = Math.max(basePrice - discount, 0);

      card.innerHTML = `
        <img src="${item.image || item.images?.[0] || 'default.jpg'}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p class="price-wrapper">
          <span class="new-price">Rs. <strong>${finalPrice}</strong></span><br>
          ${discount > 0
            ? `<span class="old-price">Rs. ${basePrice}</span>`
            : ""}
        </p>`;

      card.addEventListener("click", () => {
        localStorage.setItem("selectedItem", JSON.stringify(item));
        window.location.href = "itemDetails.html";
      });

      container.appendChild(card);
    });
  }
});