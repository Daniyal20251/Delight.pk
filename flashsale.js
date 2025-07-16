// ✅ Flash Item Data
const flashItems = {
  buy: {
  title: "Portable Electric Hot Plate - 1 Pc Stainless Steel Cooktop for Quick Meals",
  price: "Rs.1620",
  image: "1752659102262.jpg",
  images: [
    "1752659102262.jpg",
    "1752659106375.jpg",
    "1752659102678.jpg",
    "1752659109037.jpg",
    "1752659111238.jpg",
    "1752659114463.jpg",
    "1752659115627.jpg",
    "1752659115224.jpg",
    "1752659101834.mp4"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP51100000339AFTS</strong></li>
  <li><strong>Product Description</strong>: Discover the convenience of our Portable Electric Hot Plate. Perfect for any kitchen, this sleek stainless steel cooktop allows you to prepare meals quickly and efficiently. Measuring 21x21x7.5 cm, it’s the ideal appliance for small spaces or on-the-go cooking. Enjoy hassle-free cooking with easy portability wherever you need it!</li>
  <li>*Product Details*:Material: Stainless Steel</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Portable</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Electric Hot Plate</li>
  <li>Length: 21 Cm</li>
  <li>Width: 21 Cm</li>
  <li>Height: 7.5 Cm</li>
  <li>Set Of Set Of 1</li>
  <li>Pack Of Pack Of 1</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
  free: {
  title: "Plastic Glass - For Everyday Use & Travel",
  price: "Rs.0",
  image: "1752658907544.jpg",
  images: [
    "1752658907544.jpg",
    "1752658906898.jpg",
    "1752658906717.jpg",
    "1752658906898.jpg",
    "1752658905092.jpg",
    "1752658905536.jpg",
    "1752658905877.jpg",
    "1752658904655.mp4"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP51100000388AFTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: For Travel</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Glass</li>
  <li>Length: 6 Cm</li>
  <li>Width: 6 Cm</li>
  <li>Height: 3 Cm</li>
  <li>Set Of 1</li>
  <li>Pack Of 1</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
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