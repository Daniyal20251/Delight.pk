// ✅ Flash Item Data
const flashItems = {
  buy: {
  title: "Tree Design Wall Art - Pack Of 3",
  price: "Rs.575",
  image: "1752739862752.jpg",
  images: [
    "1752739862752.jpg",
    "1752739863053.jpg",
    "1752739863366.jpg",
    "1752739864233.jpg",
    "1752739865592.jpg"
  ],
  colors: ["22×10.5 inches"],
  description: `
<ul>
  <li><strong>Product Code: DP1261200115MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Tree Design Wall Art - Pack Of 3</li>
  <li>Wooden Wall clock</li>
  <li>Size:22×10.5 inches</li>
</ul>
`
},
  free: {
  title: "Wooden Keys And Mobile Holder",
  price: "Rs.0",
  image: "1752738944000.jpg",
  images: [
    "1752738944000.jpg",
    "1752738943404.jpg",
    "1752738944438.jpg",
    "1752738945006.jpg",
    "1752738945521.jpg"
  ],
  colors: ["9.8×5 inches"],
  description: `
<ul>
  <li><strong>Product Code: DP1261200066MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Wooden Keys And Mobile Holder</li>
  <li>Size: 9.8×5 inches</li>
</ul>
`
},
};

// ✅ Inject Flash Cards
const flashCardContainer = document.getElementById("flashCardContainer");
flashCardContainer.innerHTML += `
  <div class="flash-card buy-card" onclick="openDetails('buy')">
    <span class="label buy-label">BUY</span>
    <img src="${flashItems.buy.image}" alt="Buy Product">
    <p>${flashItems.buy.price}</p>
  </div>

  <div class="flash-arrow">➡️</div>

  <div class="flash-card free-card" onclick="openDetails('free')">
    <span class="label free-label">FREE</span>
    <img src="${flashItems.free.image}" alt="Free Product">
    <p>${flashItems.free.price}</p>
  </div>
`;

// ✅ Save selected product & open details
function openDetails(type) {
  localStorage.setItem("selectedFlashItem", JSON.stringify(flashItems[type]));
  window.location.href = "Details.html";
}

// ✅ Flash Sale Timer (24  hours)
const timerEl = document.getElementById("flashTimer");
const flashBox = document.querySelector(".flash-sale-box");

let endTime = localStorage.getItem("flashEndTime");

if (!endTime) {
  // 24 hours = 24 * 60 * 60 * 1000 = 86400000 milliseconds
  endTime = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem("flashEndTime", endTime);
} else {
  endTime = Number(endTime);
}

const countdown = setInterval(() => {
  const now = Date.now();
  const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));

  const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  timerEl.textContent = `Ends in: ${hrs}:${mins}:${secs}`;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerEl.textContent = "Flash Sale Ended";
    flashBox.style.display = "none";
  }
}, 1000);