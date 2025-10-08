const storeHeading = "Dynamix"; 
const globalProfit2 = 500;    // profit
const globalDiscount2 = 150;  // discount
const DELIVERY_CHARGES2 = 250;

const items2= [
   {
  title: "7 In 1 Gadgets Cleaning Kit",
  price: "Rs.1150",
  image: "IMG-20251006-WA0107.jpg",
  images: [
    "IMG-20251006-WA0107.jpg",
    "IMG-20251006-WA0108.jpg",
    "IMG-20251006-WA0111.jpg",
    "IMG-20251006-WA0110.jpg",
    "IMG-20251006-WA0109.jpg",
    "IMG-20251006-WA0112.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li>*Product Description*: Soft Brush Does Not Hurt The Keyboard</li>
  <li>*Product Details*:Material: Abs Plastic</li>
  <li>Product Features: Multifunctional Cleaning Set: Flocking Sponge Can Clean The Dust In The Wireless Charging Box Of The Headset. The High-Density Brush Can Clean The Dirt On The Sound Outlet Of The Headset. The Nib Can Clean Stubborn Dust Flocking Sponges, High-Density Brushes, Pen Tips And Keycap Pullers.</li>
  <li>Package Includes: 1 x Brush, 1 x Nib</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
  <li></li>
  <li>Product Code: DP49200109AFTRD</li>
</ul>
`
},
{
  title: "Fast Charging Keychain Power Bank",
  price: "Rs.1289",
  image: "IMG-20251007-WA0083.jpg",
  images: [
    "IMG-20251007-WA0083.jpg",
    "IMG-20251007-WA0082.jpg",
    "IMG-20251007-WA0084.jpg",
    "IMG-20251007-WA0085.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li>*Product Description*: *Product Details*:Material: ABS Plastic Charging Ports: 1 USB C Product Feature: Fast Charging Color: Black Package Includes: 1 x Power Bank Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions. Product Code: DP94300000547PMGTIM</li>
</ul>
`
},
{
  title: "3 Pcs Cotton Salonica Printed Double Bedsheet",
  price: "Rs.2499",
  image: "IMG-20251007-WA0087.jpg",
  images: [
    "IMG-20251007-WA0087.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li>*Product Details*:Fabric: Cotton Salonica Pattern: Printed Bed Size: Double Bed Number Of Pieces: 3 Pcs Package Includes: 1 x Bedsheet, 2 x Pillow Covers Bedsheet Length: 92 Inches Bedsheet Width: 89 Inches Pillow Length: 29 Inches Pillow Width: 19 Inches Color: Pink Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects. Product Code: DP11249216062ADTE</li>
</ul>
`
},
{
  title: "Men's PU Leather Wallet",
  price: "Rs.1289",
  image: "IMG-20251007-WA0088.jpg",
  images: [
    "IMG-20251007-WA0088.jpg",
    "IMG-20251007-WA0041.jpg",
    "IMG-20251007-WA0044.jpg",
    "IMG-20251007-WA0040.jpg",
    "IMG-20251007-WA0042.jpg",
    "IMG-20251007-WA0043.jpg",
    "IMG-20251007-WA0045.jpg",
    "IMG-20251007-WA0046.jpg",
    "VID-20251007-WA0047.mp4"
  ],
  colors: [],
  
  description: `
<ul>
  <li>*Product Details*:
  Material: PU Leather Pattern: Plain Gender:Men's Product Feature: Bi-Fold Wallet, Pocket Friendly Size, Easy To Carry, Stylish And Slim Number Of Pieces: 1 Pc Color: Multicolor Note: There might be slight color differences as a result of varying lighting and monitor effects. Product Code: DP1772200007FFSE</li>
</ul>
`
},
{
  title: "Massager Gun",
  price: "Rs.4099",
  image: "IMG-20251008-WA0042.jpg",
  images: [
    "IMG-20251008-WA0042.jpg",
    "IMG-20251008-WA0044.jpg",
    "IMG-20251008-WA0043.jpg",
    "IMG-20251008-WA0041.jpg",
    "IMG-20251008-WA0040.jpg",
    "IMG-20251008-WA0039.jpg",
    "IMG-20251008-WA0038.jpg",
    "IMG-20251008-WA0037.jpg",
    "IMG-20251008-WA0036.jpg",
    "IMG-20251008-WA0035.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic Color: Black</li>
  <li>Package Includes: 1 x Massager Gun</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects. </li>
  <li><strong>Product Code: DP94300000296PMGTIM</strong></li>
</ul>
`
},
{
  title: "2 Pcs Men's Fleece Printed Sweatshirt Track Suit",
  price: "Rs.2350",
  image: "IMG-20251008-WA0055.jpg",
  images: [
    "IMG-20251008-WA0055.jpg",
    "IMG-20251008-WA0057.jpg",
    "IMG-20251008-WA0056.jpg",
    "IMG-20251008-WA0058.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1650200513FNFS</strong></li>
  <li><strong>Product Description</strong>: Stay cozy and stylish with our Ultra-Comfort Hoodie, crafted with the perfect blend of warmth, softness, and durability. Made from high-quality cotton blend fabric, this hoodie is designed to keep you comfortably snug in any weather, making it an ideal choice for casual outings, workout sessions, or simply lounging at home.</li>
  <li>Specifications:</li>
  <li>• Material: Crafted from a premium blend of 80% cotton</li>
  <li>*Product Details*:</li>
  <li>Gender: Men's</li>
  <li>Fabric: Fleece</li>
  <li>Pattern: Printed Neck</li>
  <li>Type: Round Neck</li>
  <li>Sizes: Small, Medium, Large, X-Large Number Of Pieces: 2 Pcs</li>
  <li>Package Includes: 1 x Sweatshirt Track Suit Shirt</li>
  <li>Length: 28 Inches Shirt</li>
  <li>Chest: 24 Inches Shirt</li>
  <li>Shoulder: 12 Inches Arm</li>
  <li>Length: 10 Inches Trouser</li>
  <li>Length: 38 Inches Trouser</li>
  <li>Waist: 32 Inches Shorts</li>
  <li>Length: 15 Inches Trouser</li>
  <li>Hip: 10 Inches</li>
  <li>Color: Black</li>
  <li>Stay cozy and stylish with our Ultra-Comfort Hoodie, crafted with the perfect blend of warmth, softness, and durability. Made from high-quality cotton blend fabric, this hoodie is designed to keep you comfortably snug in any weather, making it an ideal choice for casual outings, workout sessions, or simply lounging at home. Specifications:</li>
  <li>• Material: Crafted from a premium blend of 80% cotton and 20% polyester for ultimate comfort and durability.</li>
  <li>• Fit: Modern and relaxed fit for a trendy look and easy movement.</li>
  <li>• Design: Featuring a classic hoodie design with a kangaroo pocket to keep your hands warm and store small essentials.</li>
  <li>• Warmth: Midweight fabric provides just the right amount of warmth, making it suitable for layering in colder seasons. Available Sizes: Small, Medium, Large, XL Care: Hand wash cold, gentle cycle; tumble dry low; do not bleach; iron on low heat if needed; do not dry clean; do not dry in sunlight Precautions: Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
];