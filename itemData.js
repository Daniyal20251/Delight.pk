// ✅ Global values for all cards
const globalProfit = 100;    // profit
const globalDiscount = 40;  // discount
const DELIVERY_CHARGES = 170;

const items = [
 {
 title: "Bluetooth Portable Earbuds, AB865",
  price: "Rs.1510",
  image: "1754502610799.jpg",
  images: [
    "1754502610799.jpg",
    "1754502611093.jpg",
    "1754502611242.jpg"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP57800038GALAXY</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Model: AirPods Pro</li>
  <li>Fit Design: In-Ear Only</li>
  <li>Features: Built-In Microphone, Rechargeable</li>
  <li>Color: White</li>
  <li>Wireless Technology Bluetooth, 5.0</li>
  <li>Automatically on, Automatically connected</li>
  <li>Easy setup</li>
  <li>Quick access to Siri by saying Hey Siri</li>
  <li>Double-tap to play or skip forward</li>
  <li>Charges quickly in the case</li>
  <li>Rich, high-quality audio and voice</li>
  <li>24 Hour Battery Life</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`,
},
{
  title: "2 Pcs Men's Dri Fit Printed Track Suit tshirt",
  price: "Rs.960",
  image: "1754395089331.jpg",
  images: [
    "1754395089331.jpg",
    "1754395089692.jpg",
    "1754395090175.jpg"
  ],
  colors: ["Small", "Medium", "Large", "X-Large", "2X-Large"],
  description: `
<ul>
  <li><strong>Product Code: DP34920012SATR</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Dri Fit</li>
  <li>Pattern: Printed</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Small, Medium, Large, X-Large, 2X-Large</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Package Includes: 1 x Track Suit</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Black Arabic Aura Watch",
  price: "Rs.1389",
  image: "1754394569129.jpg",
  images: [
    "1754394569129.jpg",
    "1754394569497.jpg",
    "1754394569923.jpg",
    "1754394570600.jpg",
    "1754394571530.jpg",
    "1754394572282.jpg",
    "1754394568685.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1472200054NETSWS</strong></li>
  <li><strong>Product Description</strong>: Experience the perfect blend of sophistication and functionality with this Men's Carbon Fiber Luxury Watch. Designed for those with a taste for style, this timepiece features quartz movement and a stunning black finish, making it a must-have accessory. Whether for work or leisure, it’s the ideal watch to elevate your look.</li>
  <li>*Product Details*:Material: Carbon Fiber</li>
  <li>Gender: Men's</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Luxury Watch</li>
  <li>Note: There might be slight color differences as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
title: "Rechargeable Table Lamp",
  price: "Rs.1449",
  image: "1754504330808.jpg",
  images: [
    "1754504330808.jpg",
    "1754504331178.jpg",
    "1754504331544.jpg",
    "1754504331946.jpg",
    "1754504332434.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP1518200291BGSE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: USB</li>
  <li>Product Feature: Rechargeable</li>
  <li>Light Color: Golden, Red, Green, Blue, White</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Table Lamp</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
  {
  title: "Versatile Mobile Phone - 1 Pcs, 120 Watts Power",
  price: "Rs.4480",
  image: "1752140891907.jpg",
  images: [
    "1752140891907.jpg",
    "1752140892480.jpg",
    "1752140892717.jpg",
    "1752140893025.jpg"
  ],
  colors: ["Blue", "Green", "White", "Golden", "Purple"],
  description: `
<ul>
  <li><strong>Product Code: DP61600000006MMMEADAS</strong></li>
  <li><strong>Product Description</strong>: Discover the future of communication with our Mobile Phone, boasting a powerful 120 Watts and a sleek, user-friendly design. This essential device comes in multiple vibrant colors and is perfect for anyone looking for a reliable mobile experience. With a battery capacity of 2000 and an impressive standby time of 36 hours, stay connected on the go!</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Color: Blue, Green, White, Golden, Purple</li>
  <li>Package Includes: 1 x Mobile Phone</li>
  <li>Battery Capacity: 2000 mAh</li>
  <li>Standby Time: 36 Hours</li>
  <li>Voltage: 20 A</li>
  <li>Watts: 120 Watt</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>`},
{
  title: "Mini Nokia 106 Mobile",
  price: "Rs.2810",
  image: "1752141321761.jpg",
  images: [
    "1752141321761.jpg",
    "1752141321118.jpg",
    "1752141321385.jpg",
    "1752141321984.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP59700050MRMMA</strong></li>
  <li><strong>Product Description</strong>: Mobile Phones For Everyday Use</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Product Features: Frequency: 2G band 900/1800, Sim Status: Dual sim, Battery Time :Li-Ion 800 mAh Removable, Stand-by Up To 619 h, Talk Time Up To 14 h 24 Min, Color: Black</li>
  <li>Non PTA, No Warranty</li>
  <li>Package Includes: 1 x Charger, Battery, Mobile</li>
  <li>Product Dimensions (Inches, cm, m): 119 x 49.2 x 14.4 mm (4.69 x 1.94 x 0.57 Inches), Weight (pounds, Oz, Grams): 70.00 gram</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "i16 Earbuds",
  price: "Rs.840",
  image: "1752141705128.jpg",
  images: [
    "1752141705128.jpg",
    "1752141705789.jpg",
    "1752141706454.jpg",
    "1752141706693.jpg",
    "1752141707122.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP63300000012GSHE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: Bluetooth</li>
  <li>Bluetooth Version: Bluetooth 4</li>
  <li>Product Feature: Long Battery Life, Water Resistant, Clear Voice, Compatible With All Android Devices, Compatible With iPhone Devices</li>
  <li>Package Includes: 1 x Earbuds</li>
  <li>16 Model Number</li>
  <li>Battery Capacity: 600 mAh</li>
  <li>Call Time: 3 Hours</li>
  <li>Standby Time: 100 Hours</li>
  <li>Voltage: 5 Volts</li>
  <li>Weight: .2 Kgs</li>
  <li>Length: 12 Cm</li>
  <li>Width: 6 Cm</li>
  <li>Height: 4 Cm</li>
  <li>Pack Of 1</li>
  <li>Color: White</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>`},
{
  title: "Air 31 Wireless Earbuds",
  price: "Rs.900",
  image: "1752142079559.jpg",
  images: [
    "1752142079559.jpg",
    "1752142079842.jpg",
    "1752142080920.jpg"
  ],
  colors: ["Black", "Green", "White", "Blue", "Pink"],
  description: `
<ul>
  <li><strong>Product Code: DP63320014GSHE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Plastic, Silicone, TP</li>
  <li>Package Includes: 1 x Earbuds</li>
  <li>Color: Blue, Green, White, Blue, Pink</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`},
{
  title:"Wireless Stereo Headphones earbuds",
  price: "Rs.1040",
  image: "1752145733704.jpg",
  images: [
    "1752145733704.jpg",
    "1752145733959.jpg",
    "1752145730052.jpg",
    "1752145731089.jpg",
    "1752145732084.jpg"
  ],
  colors: ["Black", "Blue", "White", "Green", "Red"],
  description: `
<ul>
  <li><strong>Product Code: DP70420004MTAS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Waterproof (Yes/No): No</li>
  <li>Color:Black ,Blue ,White ,Green ,Red</li>
  <li>Operation Distance: 10m;</li>
  <li>Support : Bluetooth, Aux in, TF Card, FM radio</li>
  <li>Charging Time of Device: 1.5Hrs</li>
  <li>Bluetooth Version: 4.2-5.0</li>
  <li>Frequency: 2.4 GHz 2.4835 GHz</li>
  <li>Battery Timing: 4-5Hrs</li>
  <li>USB charging cable: AC input 110-240 V DC</li>
  <li>Package Includes: 1 x Bluetooth Headphone, 1 x USB Cable</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`},
{
  title: "Stylish White Bluetooth 5 Earbuds with Long Battery Life",
  price: "Rs.1250",
  image: "1752146219248.jpg",
  images: [
    "1752146219248.jpg",
    "1752146226811.jpg",
    "1752146227739.jpg",
    "1752146228481.jpg"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP57800000116GALAXY</strong></li>
  <li><strong>Product Description</strong>: Experience the ultimate in wireless audio with our sleek and stylish white Bluetooth 5 earbuds. Designed for comfort and convenience, these earbuds offer long battery life and seamless connectivity across devices. Perfect for music lovers and on-the-go lifestyles, enjoy crystal clear sound and a modern design that fits your lifestyle.</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Connectivity Tech: Bluetooth</li>
  <li>Bluetooth Version: Bluetooth 5</li>
  <li>Product Feature: Long Battery Life, Sleek And Stylish Design</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Earbuds, 1 x Charging Case</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`},
{
  title: "Beautiful Mix Digit Wood Wall Clock",
  price: "Rs.470",
  image: "1752146607310.jpg",
  images: [
    "1752146607310.jpg",
    "1752146608118.jpg",
    "1752146612902.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP24800165HDHDC</strong></li>
  <li><strong>Product Description</strong>: Attractive Wall Clock Designs For Homes And Office</li>
  <li>*Product Details*:Material: Chipboard Laminated Sheet</li>
  <li>Product Type: Wall Clock</li>
  <li>Size: 24 x 24 Inches</li>
  <li>Thickness: 3mm</li>
  <li>Finish Type: Laminated</li>
  <li>Display: 12-Hour Display</li>
  <li>Package Includes: 1 x Wall Clock</li>
  <li>Product Details: Laser Cut, Complete Clock With Double Tape To Hang. Make Your Home Beautiful. This Product Enhances Any Home With On-trend Style And Beautiful Eye-catching Modern Design</li>
  <li>Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.</li>
</ul>
`},
{
  title: "Butterfly Laminated Wall Clock With Backlight",
  price: "Rs.620",
  image: "1752146826716.jpg",
  images: [
    "1752146826716.jpg",
    "1752146828215.jpg",
    "1752146829165.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP24800188HDHDC</strong></li>
  <li><strong>Product Description</strong>: Attractive Wall Clock Designs For Homes And Office With Light</li>
  <li>*Product Details*:Material: Chipboard Laminated Sheet</li>
  <li>Product Type: Wall Clock With Light</li>
  <li>Size: 24 x 24 Inches</li>
  <li>Thickness: 3mm</li>
  <li>Finish Type: Laminated</li>
  <li>Display: 12-Hour Display</li>
  <li>Package Includes: 1 x Wall Clock</li>
  <li>Product Details: Laser Cut, Complete Clock With Double Tape To Hang. Make Your Home Beautiful. This Product Enhances Any Home With On-trend Style And Beautiful Eye-catching Modern Design</li>
  <li>Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.</li>
</ul>
`},
{
  title: "Multicolor Smart Watch with Long Battery Life",
  price: "Rs.1799",
  image: "1752147190560.jpg",
  images: [
    "1752147190560.jpg",
    "1752147191389.jpg",
    "1752147188841.jpg",
    "1752147190560.jpg",
    "1752147190885.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP1172200277SE</strong></li>
  <li><strong>Product Description</strong>: Discover the ultimate convenience with our Smart Watch featuring a vibrant multicolor design and long-lasting battery life. This innovative device blends functionality and style, making it perfect for tracking your daily activities and staying connected. Elevate your wrist game with a versatile accessory that fits seamlessly into your lifestyle.</li>
  <li>*Product Details*:Material: Metal, Silicone</li>
  <li>Product Feature: Long Battery Life</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Smart Watch</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`},
{
  title: "Stylish Smart Watch - 1 Pcs - Available in Black, Red & White",
  price: "Rs.1410",
  image: "1752147533184.jpg",
  images: [
    "1752147533184.jpg",
    "1752147535236.jpg",
    "1752147536426.jpg",
    "1752147534151.jpg",
    "1752147537146.jpg"
  ],
  colors: ["Black", "Red", "White"],
  description: `
<ul>
  <li><strong>Product Code: DP1518200222BGSE</strong></li>
  <li><strong>Product Description</strong>: Discover the perfect companion for your daily activities with this stylish Smart Watch. Designed from durable ABS plastic, it features a sleek interface and comes in three vibrant colors: Black, Red, and White. Enhance your lifestyle and stay connected effortlessly with this versatile timepiece, ideal for any occasion. Package includes 1 x Smart Watch, the ultimate accessory for tech-savvy individ</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Black, Red, White</li>
  <li>Package Includes: 1 x Smart Watch</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Ultra 2 - Smart Watch Four Strips & P474 Headphones",
  price: "Rs.3120",
  image: "1752147809896.jpg",
  images: [
    "1752147809896.jpg",
    "1752147809090.jpg",
    "1752147809675.jpg",
    "1752147807270.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP684200119AZASZE</strong></li>
  <li><strong>Product Description</strong>: Discover the ultimate Smart Watch designed for health enthusiasts! Featuring Bluetooth 5.3, customizable watch faces, and a long-lasting battery, this sleek device is compatible with all Android and iPhone devices. Enjoy heart rate monitoring, GPS tracking, and voice control for effortless daily tasks. Elevate your fitness journey today with this stylish and durable smartwatch!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: Wireless</li>
  <li>Bluetooth Version: Bluetooth 5.3</li>
  <li>Product Feature: Health And Fitness Tracking, Long Battery Life, Long-Lasting Battery With Fast Charge, Durable Protection Against Water And Dust, Seamless Connectivity Across Devices, Sleek And Stylish Design, Compatible With All Android Devices, Compatible With iPhone Devices, Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces, Voice Control Features For Tasks Like Setting Reminders, Sending Messages, Or Controlling Smart Home Devices., 7 In 1</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Smart Watch, 1 x Charger, 1 x Box, 1 x Manual</li>
  <li>1 Model Number</li>
  <li>Battery Capacity: 1000 mAh</li>
  <li>Standby Time: 100 Hours</li>
  <li>Voltage: 5 Volts</li>
  <li>Watts: 2 Watt</li>
  <li>Weight: 65 Gram</li>
  <li>Length: 3 Inches</li>
  <li>Width: 2 Inches</li>
  <li>Height: 0.5 Inches</li>
  <li>Display: Large, high-definition screen for easy navigation and viewing. 10-in-1 Package: Includes multiple interchangeable straps, a protective case, and wireless earphones. Fitness Tracking: Equipped with a heart rate monitor, blood oxygen sensor, sleep tracker, and step counter. Connectivity: Seamless integration with Android and iOS devices for calls, messages, and social media notifications. Additional Features: Remote camera control, music playback, and GPS tracking. Durability: Water-resistant design with a protective case for everyday wear. Battery Life: Long-lasting battery that supports days of usage on a single charge.</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "MDF Wall Clock & Wall Hanging",
  price: "Rs.570",
  image: "1752148116538.jpg",
  images: [
    "1752148116538.jpg",
    "1752148117564.jpg",
    "1752148118350.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP24800253HDHDC</strong></li>
  <li><strong>Product Description</strong>: Attractive Wall Clock Designs For Homes And Office</li>
  <li>*Product Details*:Material: MDF</li>
  <li>Product Type: Wall Clock</li>
  <li>Shape: Leaf & Ahad</li>
  <li>Size: 25 x 25 Inches</li>
  <li>Thickness: 3mm</li>
  <li>Package Includes: 1 x Wall Clock, 1 x Wall Hanging</li>
  <li>Product Details: Laser Cut, Analogue, Complete Clock With Double Tape To Hang. Make Your Home Beautiful. This Product Enhances Any Home With On-trend Style And Beautiful Eye-catching Modern Design</li>
  <li>Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.</li>
</ul>
`
},
{
  title: "Multipurpose Laptop Bag - 1 P",
  price: "Rs.600",
  image: "1752215289675.jpg",
  images: [
    "1752215289675.jpg",
    "1752215290160.jpg",
    "1752215290524.jpg",
    "1752215290957.jpg"
  ],
  colors: ["Black", "Blue", "Grey"],
  description: `
<ul>
  <li><strong>Product Code: DP60400000208NRSP</strong></li>
  <li><strong>Product Description</strong>: Discover the ultimate convenience with our Multipurpose Laptop Bag, designed for versatility and style. This durable black polyester bag easily accommodates your laptop and essential accessories, making it perfect for work, school, or travel. Secure your tech in one sleek package with this handy 1 Pc solution that combines practicality with a modern design.</li>
  <li>*Product Details*:Material: Polyester</li>
  <li>Pattern: Plain</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Multipurpose</li>
  <li>Color: Black ,Blue ,Grey</li>
  <li>Package Includes: 1 x Laptop Bag</li>
  <li>Length: 15 Inches</li>
  <li>Width: 11 Inches</li>
  <li>Height: 17 Inches</li>
  <li>Versatile and Stylish Carrying Solution</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Candle Boat Toy, Pack Of 5 toys",
  price: "Rs.599",
  image: "1752216037394.jpg",
  images: [
    "1752216037394.jpg",
    "1752216037964.jpg",
    "1752216037715.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP55900087GALXY</strong></li>
  <li><strong>Product Description</strong>: Candle Boat Toy</li>
  <li>*Product Details*:Material: Alloy</li>
  <li>Product Type: Candle Boat Toy</li>
  <li>Details: Boat Is Powered By A Candle Flame To Generate Steam Which Moves The Boat Rapidly In Water</li>
  <li>Dimensions: 14 x 3.5 x 3.5 Inches</li>
  <li>Package Includes: 5 x Candle Boat Toys</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Walking Plush Rabbit With Music toys",
  price: "Rs.790",
  image: "1752216311707.jpg",
  images: [
    "1752216311707.jpg",
    "1752216037394.jpg",
    "1752216312067.jpg",
    "1752216312416.jpg",
    "1752216312772.jpg"
  ],
  colors: ["Brown", "White", "Pink"],
  description: `
<ul>
  <li><strong>Product Code: DP69100000236AIBSFD</strong></li>
  <li><strong>Product Description</strong>: Delight your little ones with this charming 1 pc plush stuff toy, perfect for ages 1-10! Crafted from soft, high-quality plush material in inviting shades of brown, white, and pink, it provides the ultimate cuddly companion. Ideal for imaginative playtime or as a comforting bedtime buddy, this plush toy is sure to bring smiles and warmth to any child's heart.</li>
  <li>*Product Details*:Material: Plush</li>
  <li>Preferred Ages: 1-10 Years</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Brown, White, Pink</li>
  <li>Package Includes: 1 x Stuff Toy</li>
  <li>Note: Adult supervision is recommended as this toy may contain small parts that could pose a choking hazard.</li>
</ul>
`
},
{
  title: "Multicolor Video Amplifying Screen - 1 Pc Gaming Accessory mobile screen ",
  price: "Rs.399",
  image: "1752216581499.jpg",
  images: [
    "1752216581499.jpg",
    "1752216581120.mp4"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP696200003MFCY</strong></li>
  <li><strong>Product Description</strong>: Enhance your gaming experience with this vibrant Multicolor Video Amplifying Screen! Designed for optimal performance, this innovative accessory brings your games to life with stunning visuals. Perfect for avid gamers, it ensures immersive gameplay and hours of entertainment. Upgrade your setup today with this essential gaming companion!</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Product Feature: Gaming</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Video Amplifying Screen</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Premium Black ABS Plastic Tripod Stand - 1 Pcs Mobile Accessory",
  price: "Rs.417",
  image: "1752219168276.jpg",
  images: [
    "1752219168276.jpg",
    "1752219168535.jpg",
    "1752219168786.jpg",
    "1752219169016.jpg",
    "1752219169423.jpg",
    "1752219167941.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1155200108SEHB</strong></li>
  <li><strong>Product Description</strong>: Elevate your photography and videography with our Premium Black ABS Plastic Tripod Stand. Crafted for stability and durability, this tripod is perfect for capturing stunning shots in any setting. Lightweight and portable, it’s easy to carry on all your adventures. The package includes one versatile tripod stand designed to support a variety of camera types. Achieve the perfect angle every time!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Tripod Stand</li>
  <li>Pack Of Pack Of 1</li>
  <li>? Universal Mobile & Tablet Stand</li>
  <li>? Adjustable & Foldable</li>
  <li>? Strong & Durable</li>
  <li>? Perfect for iPhone, iPad, Xiaomi & More!</li>
  <li>? Hands-Free Convenience</li>
  <li>? Must-Have Desk Accessory! ?</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Kisonli M-1 Bluetooth Speaker With Mobile Holder",
  price: "Rs.2100",
  image: "1752219418648.jpg",
  images: [
    "1752219418648.jpg",
    "1752219418128.jpg",
    "1752219417924.jpg",
    "1752219417717.jpg",
    "1752219417323.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1685200059SCMT</strong></li>
  <li><strong>Product Description</strong>: Experience superior sound with the Mini LED Wireless Speaker featuring advanced noise cancellation and a long-lasting battery. With seamless connectivity to multiple devices, and a sleek, stylish design, it's perfect for music lovers on the go. Enjoy high-quality audio, waterproof durability, and the convenience of an Aux input. Ideal for any environment!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: Bluetooth</li>
  <li>Bluetooth Version: Bluetooth 5.1</li>
  <li>Product Feature: Long-Lasting Battery With Fast Charge, Connect To Multiple Devices Simultaneously, Dust & Water Proof, MINI, Compatible With iPhone Devices, Compatible With All Android Devices, Sleek And Stylish Design, Advanced Noise Cancellation For Any Environment, Mp3 Function Stereo, Super Bass, Support Audio Devices, Clear Voice, Long Battery Life, Audio Jack, Aux Input</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x LED Wireless Speaker</li>
  <li>Battery Capacity: 500 mAh</li>
  <li>Standby Time: 110 Hours</li>
  <li>Weight: 0.500 Gram</li>
  <li>? Product Description:</li>
  <li>Kisonli M-1 Bluetooth Speaker ek modern aur stylish design ke saath aata hai jisme built-in 360° foldable mobile holder hota hai. Ye product un logon ke liye perfect hai jo entertainment aur comfort dono chahte hain. Is speaker ka powerful sound aur RGB light effects aapke music experience ko next level par le jaate hain. Chhoti size aur folding design ke wajah se ye portable hai aur aap ise kahin bhi carry kar saktay hain – chahe outdoor ho ya room setup.</li>
  <li>? Highlights / Key Features:</li>
  <li>•	2-in-1: Mobile Stand + Bluetooth Speaker</li>
  <li>•	Stylish RGB lights for mood lighting</li>
  <li>•	360° rotatable aur foldable mobile holder</li>
  <li>•	Perfect for desk, study table, gaming, aur outdoor parties</li>
  <li>•	High quality audio with bass boost</li>
  <li>•	Wireless connection with wide compatibility</li>
  <li>•	Compact design, easily portable</li>
  <li>•	Rechargeable battery with long play time</li>
  <li>________________________________________</li>
  <li>? What’s in the Box:</li>
  <li>•	1 x Kisonli M-1 Bluetooth Speaker</li>
  <li>•	1 x USB Charging Cable</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "3 Pcs Cotton Printed Double Bedsheet",
  price: "Rs.1300",
  image: "1752219827219.jpg",
  images: [
    "1752219827219.jpg",
    "1752219827764.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP37900983CHNBS</strong></li>
  <li><strong>Product Description</strong>: Export Quality Bedsheet</li>
  <li>*Product Details*:Fabric: Cotton</li>
  <li>Double Bed Size</li>
  <li>Package Include: 1 x Sheet (90 x 97 Inches), 2 x Pillow Covers (19 x 29 Inches)</li>
  <li>Note: There might be 1-3 cm errors of dimension data due to pure manual measurement</li>
  <li>There might be slightly color difference due to different light and monitor effect.</li>
</ul>
`
},
{
  title: "Multicolor Patchwork Cotton Double Bedsheet Set - 3 Pcs",
  price: "Rs.999",
  image: "1752220047075.jpg",
  images: [
    "1752220047075.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP17200000275AUTBFS</strong></li>
  <li><strong>Product Description</strong>: Transform your bedroom with this vibrant multicolor patchwork double bedsheet set, consisting of 1 bedsheet and 2 pillow covers. Made from soft and breathable cotton, it offers comfort and style. Elevate your sleep experience with this beautifully crafted bedding set that is perfect for any decor.</li>
  <li>*Product Details*:Fabric: Cotton</li>
  <li>Pattern: Patchwork</li>
  <li>Bed Size: Double Bed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Bedsheet, 2 x Pillow Covers</li>
  <li>Bedsheet Length: 92 Inches</li>
  <li>Bedsheet Width: 92 Inches</li>
  <li>Pillow Length: 28 Inches</li>
  <li>Pillow Width: 18 Inches</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "3 Pcs Cotton Salonica Printed Double Bedsheet",
  price: "Rs.1350",
  image: "1752220521875.jpg",
  images: [
    "1752220521875.jpg",
    "1752220524574.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP61500002288GDBG</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Cotton Salonica</li>
  <li>Pattern: Printed</li>
  <li>Bed Size: Double Bed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Package Includes: 1 x Bedsheet, 2 x Pillow Covers</li>
  <li>Bedsheet Length: 90 Inches</li>
  <li>Bedsheet Width: 90 Inches</li>
  <li>Pillow Length: 29 Inches</li>
  <li>Pillow Width: 19 Inches</li>
  <li>Color: Purple</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "3 Pcs Cotton Sotton Patchwork Double Bedsheet",
  price: "Rs.900",
  image: "1752220744085.jpg",
  images: [
    "1752220744085.jpg",
    "1752220745026.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP7800003121NRHE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Cotton Sotton</li>
  <li>Pattern: Patchwork</li>
  <li>Bed Size: Double Bed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Package Includes: 1 x Bedsheet, 2 x Pillow Covers</li>
  <li>Bedsheet Length: 94 Inches</li>
  <li>Bedsheet Width: 94 Inches</li>
  <li>Pillow Length: 29 Inches</li>
  <li>Pillow Width: 19 Inches</li>
  <li>Color: Blue</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Air 39 Wireless Earbuds",
  price: "Rs.888",
  image: "1752221063739.jpg",
  images: [
    "1752221063739.jpg",
    "1752221063573.jpg",
    "1752221063930.jpg",
    "1752221064352.jpg",
    "1752221064571.jpg",
    "1752221063303.mp4"
  ],
  colors: ["White", "Green", "Blue", "Pink", "Black"],
  description: `
<ul>
  <li><strong>Product Code: DP53600018CLTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Volume Control: yes</li>
  <li>Microphone: Yes</li>
  <li>Bluetooth Version: 5.3</li>
  <li>Bluetooth Range: 1m</li>
  <li>Charging Time: 1 Hrs.</li>
  <li>Call Time: 6 Hours</li>
  <li>Playtime: Up To 6 Hours Normal Volume</li>
  <li>Battery Capacity Of Earbuds: 35 mAh</li>
  <li>Standby Time:</li>
  <li>Battery Capacity Of Charging Box: 400mAh</li>
  <li>Voltage: 5v</li>
  <li>Color: White, Green, Blue, Pink, Black</li>
  <li>Package Includes: 1 x Earbuds</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Motorcycle USB Fast Charger with Compass – Waterproof & High-Speed Charging",
  price: "Rs.730",
  image: "1752221242002.jpg",
  images: [
    "1752221242002.jpg",
    "1752221240791.jpg",
    "1752221240286.jpg",
    "1752221240027.jpg",
    "1752221239793.jpg",
    "1752221239311.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1155200169SEHB</strong></li>
  <li><strong>Product Description</strong>: Upgrade your ride with this Black 1 Pc Motorbike On/Off Grip Button. Made from high-quality ABS material, this button ensures durability and easy installation, providing a reliable solution for your motorcycle needs. Its sleek design offers great visibility and compatibility with various motorbike models, making it an essential addition for a seamless riding experience.</li>
  <li>*Product Details*:Material: ABS</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Motorbike On</li>
  <li>Specifications:</li>
  <li>Material: ABS Plastic</li>
  <li>Voltage Input: 36V–105V</li>
  <li>Current Output: 3.1A</li>
  <li>Functions: Fast Charging, Compass, Waterproof, Dustproof</li>
  <li>Compatibility: Motorcycles, Electric Bikes, Scooters, ATVs</li>
  <li>Package Includes:</li>
  <li>1× Motorcycle USB Charger</li>
  <li>Note: There might be slight differences in color and finishing as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "D20 Ultra Bluetooth Smart Bracelet",
  price: "Rs.920",
  image: "1752223190775.jpg",
  images: [
    "1752223190775.jpg",
    "1752223191710.jpg",
    "1752223191211.jpg",
    "1752223191015.jpg"
  ],
  colors: ["Multicolor", "Orange"],
  description: `
<ul>
  <li><strong>Product Code: DP4420205RL</strong></li>
  <li><strong>Product Description</strong>: Stay on top of your health and fitness goals with this multicolor Smart Watch. Designed with durable ABS plastic, it's dust, water, and sweat proof, making it perfect for any workout. Packed with features to track your fitness journey, this stylish accessory is a must-have for anyone looking to enhance their fitness lifestyle.</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Product Feature: Health And Fitness Tracking, Dust, Water & Sweat Proof</li>
  <li>Color: Multicolor ,Orange</li>
  <li>Package Includes: 1 x Smart Watch</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Kid's Black LCD Writing Tablet for Boys - 1 Pc",
  price: "Rs.399",
  image: "1752223917879.jpg",
  images: [
    "1752223917879.jpg",
    "1752223918310.jpg",
    "1752223918690.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1372200020AQGLTS</strong></li>
  <li><strong>Product Description</strong>: Unleash creativity with this Black Plastic LCD Writing Tablet, specially designed for boys aged 1-10 years. Perfect for doodling, learning, and endless fun, this single-piece writing tablet is lightweight, easy to use, and provides a mess-free way to express ideas. Ideal for home or on-the-go, it makes learning and playing more engaging and interactive for your young ones!</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Gender: Boy's</li>
  <li>Preferred Ages: 1-10 Years</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Lcd Writing Tablet</li>
  <li>Pack Of 1</li>
  <li>? ALWAYS ON AND READY TO USE:Our doodle pad features pressure sensitivity that lets you draw thick and thin lines based on the pressure on your pen, just like using a pen and paper, e-writing slate is a perfect drawing tablet for kids, designers, and deaf-mute people. Naturally writing or drawing experience, without any delay. The writing pen can stick into the holder by a gentle push.</li>
  <li>Note: Adult supervision is recommended as this toy may contain small parts that could pose a choking hazard.</li>
</ul>
`
},
{
  title: "3 Pcs Cotton Salonica Printed Double Bedsheet",
  price: "Rs.1300",
  image: "1752224813952.jpg",
  images: [
    "1752224813952.jpg",
    "1752224817774.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP81700000301AMCYSE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Cotton Salonica</li>
  <li>Pattern: Printed</li>
  <li>Bed Size: Double Bed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Package Includes: 1 x Bedsheet, 2 x Pillow Covers</li>
  <li>Bedsheet Length: 92 Inches</li>
  <li>Bedsheet Width: 98 Inches</li>
  <li>Pillow Length: 29 Inches</li>
  <li>Pillow Width: 19 Inches</li>
  <li>Color: Red</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "7 In 1 Ultra Smart Watch With Rubber Straps",
  price: "Rs.1990",
  image: "1752225010848.jpg",
  images: [
    "1752225010848.jpg",
    "1752225011947.jpg",
    "1752225013707.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP875200001AISR</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Metal, Silicone</li>
  <li>Color: Multicolor</li>
  <li>Product Feature: 7 In 1, Water Resistant, Seamless Connectivity Across Devices, Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces</li>
  <li>Package Includes: 1 x Smart Watch</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Wireless Airpods Pro 2-Earbuds",
  price: "Rs.990",
  image: "1752227124786.jpg",
  images: [
    "1752227124786.jpg",
    "1752227124515.jpg",
    "1752227125194.jpg",
    "1752227125427.jpg",
    "1752227125615.jpg",
    "1752227123143.mp4"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP1155200113SEHB</strong></li>
  <li><strong>Product Description</strong>: Experience the freedom of wireless audio with these durable Airpods. Designed to withstand dust and water, they offer a long-lasting battery with fast charging capabilities. Perfect for on-the-go listening, connect effortlessly to your devices and enjoy unmatched sound quality in a sleek white color.</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Bluetooth Version: Bluetooth 5</li>
  <li>Product Feature: Dust & Water Proof, Long-Lasting Battery With Fast Charge</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Airpods</li>
  <li>Call Time: 7 Hours</li>
  <li>Standby Time: 48 Hours</li>
  <li>Voltage: 5 Volts</li>
  <li>1. Experience superior sound, comfort, and convenience with up to 24hr battery life.”</li>
  <li>2. “Upgrade your audio with active noise cancellation, water resistance, and seamless connectivity.”</li>
  <li>3. “Enjoy unbeatable sound, comfort, and convenience with our premium wireless earbuds.”</li>
  <li>4. “Take your audio to the next level with advanced sound, long battery life, and sleek design.”</li>
  <li>5. “Immerse yourself in pure sound with our wireless earbuds featuring ANC and 24hr battery life.”</li>
  <li>Battery Timing: Upto 5-6 hours</li>
  <li>Support: Andriod & IOS</li>
  <li>First copy</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Big Size Wooden Side Table Lamp With Laser Cutting",
  price: "Rs.730",
  image: "1752225370816.jpg",
  images: [
    "1752225370816.jpg",
    "1752225371722.jpg",
    "1752225372872.jpg",
    "1752225373832.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1261200007MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:</li>
</ul>
`
},
{
  title: "Mini LED Night Light",
  price: "Rs.250",
  image: "1752227973080.jpg",
  images: [
    "1752227973080.jpg",
    "1752227973335.jpg",
    "1752227973967.jpg",
    "1752227974218.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP31000293 MRASM</strong></li>
  <li><strong>Product Description</strong>: LED Light</li>
  <li>*Product Details*:Material: Plastic Body</li>
  <li>Product Details: EU/US Plug-in, Dusk To Dawn Sensor, Wall Light, For Bedroom/Hallway/Stairs/Corridor</li>
  <li>Voltage: 110V-220V</li>
  <li>Package Includes: 1 x LED Light</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "New Design Wooden Lamp With Laser Cutting",
  price: "Rs.520",
  image: "1752228192309.jpg",
  images: [
    "1752228192309.jpg",
    "1752228192992.jpg",
    "1752228193297.jpg",
    "1752228193819.jpg",
    "1752228194377.jpg"
  ],
  colors: ["Dark Brown"],
  description: `
<ul>
  <li><strong>Product Code: DP1261200110MRTS</strong></li>
  <li><strong>Product Description</strong>: Illuminate your space with this striking large rechargeable table lamp, featuring a stylish dark brown finish and elegant golden elements. Perfect for adding warmth and sophistication to any room, this lamp is not just functional but a beautiful accessory to enhance your decor. Experience the blend of modern design and practicality with this exquisite lighting solution.</li>
  <li>*Product Details*:Material: MDF</li>
  <li>Size: Large</li>
  <li>Light Color: Golden</li>
  <li>Color: Dark Brown</li>
  <li>Package Includes: 1 x Table Lamp</li>
  <li>Length: 11.5 Inches</li>
  <li>Width: 4.5 Inches</li>
  <li>Wire Size: 42 Inches</li>
  <li>Weight: 300 Gram</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "3D Laser Cutting Wooden Lamp",
  price: "Rs.630",
  image: "1752228354423.jpg",
  images: [
    "1752228354423.jpg",
    "1752228352896.jpg",
    "1752228352283.jpg",
    "1752228355148.jpg",
    "1752228355626.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1261200188MRTS</strong></li>
  <li><strong>Product Description</strong>: Illuminate your space with this stunning Medium Table Lamp crafted from high-quality MDF. Designed in a sleek black and golden finish, this rechargeable lamp adds a contemporary touch to any room. With its perfect size and versatile color palette, it seamlessly fits into your decor while providing functional lighting. Make your ambiance cozy and stylish with this exquisite addition!</li>
  <li>*Product Details*:Material: MDF</li>
  <li>Size: Medium</li>
  <li>Light Color: Golden</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Table Lamp</li>
  <li>Length: 11.5 Inches</li>
  <li>Width: 4.5 Inches</li>
  <li>Wire Size: 42 Inches</li>
  <li>Weight: 300 Gram</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Adjustable Multicolor LED Table Lamp - Small and Portable",
  price: "Rs.1040",
  image: "1752228612908.jpg",
  images: [
    "1752228612908.jpg",
    "1752228613407.jpg",
    "1752228613831.jpg",
    "1752228615616.jpg",
    "1752228612386.mp4"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1172200039SE</strong></li>
  <li><strong>Product Description</strong>: Illuminate your space with our Adjustable Multicolor LED Table Lamp. This compact and stylish lamp features a rechargeable design and comes in a range of vibrant colors. Perfect for adding a unique touch to any room, it offers versatile lighting options while enhancing your decor. Experience functionality and flair with this essential light source!</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Product Feature: Adjustable</li>
  <li>Size: Small</li>
  <li>Light Color: White</li>
  <li>Package Includes: 1 x LED Table Lamp</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Falak Wooden Wall Clock",
  price: "Rs.420",
  image: "1752228952073.jpg",
  images: [
    "1752228952073.jpg",
    "1752228952405.jpg",
    "1752228953044.jpg",
    "1752228953396.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1261200075MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:</li>
</ul>
`
},
{
  title: "Islamic Wooden Wall Clock",
  price: "Rs.420",
  image: "1752229295540.jpg",
  images: [
    "1752229295540.jpg",
    "1752229296080.jpg",
    "1752229296371.jpg",
    "1752229296770.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1261200031MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:</li>
</ul>
`
},
{
  title: "Multicolor Quick Rising Electric Lighter - 1 Pc",
  price: "Rs.560",
  image: "1752310454293.jpg",
  images: [
    "1752310454293.jpg",
    "1752310454602.jpg",
    "1752310454944.jpg",
    "1752310455413.jpg",
    "1752310455773.jpg",
    "1752310456141.jpg",
    "1752310457178.jpg",
    "1752310458313.jpg",
    "1752310453539.mp4"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP51100000239AFTS</strong></li>
  <li><strong>Product Description</strong>: Ignite your moments with our Multicolor Electric Lighter featuring a quick rising flame for fast and efficient lighting. With a sleek metal design, this portable and rechargeable lighter is perfect for both indoor and outdoor use. Whether you're lighting candles or starting a campfire, this versatile tool ensures that you never struggle with ignition again.</li>
  <li>*Product Details*:Material: Metal</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Quick Rising</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Electric Lighter</li>
  <li>Length: 265 mm</li>
  <li>Width: 15 mm</li>
  <li>Set Of Set Of 1</li>
  <li>Pack Of Pack Of 1</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Portable Electric Hand Blender - 1 Pc Multifunctional Kitchen Tool",
  price: "Rs.420",
  image: "1752311046782.jpg",
  images: [
    "1752311046782.jpg",
    "1752311047083.jpg",
    "1752311047606.jpg",
    "1752311048259.jpg",
    "1752311048628.jpg",
    "1752311046435.mp4"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1701200055ALHAGS</strong></li>
  <li><strong>Product Description</strong>: Discover the convenience of our Portable Electric Hand Blender, designed for efficiency and versatility in your kitchen. This 1 Pc electric hand blender features a lightweight design, making it ideal for quick blending tasks, from smoothies to soups. Enjoy seamless, portable blending at home or on the go with just one button to operate. Upgrade your cooking experience today!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Package Includes: 1 x Electric Hand Blender</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Earbuds - Advanced Noise Cancellation, 1 Pcs, Long-Lasting Battery in Black",
  price: "Rs.880",
  image: "1752311834884.jpg",
  images: [
    "1752311834884.jpg",
    "1752311835540.jpg",
    "1752311835844.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP65200000108TDPS</strong></li>
  <li><strong>Product Description</strong>: Experience unparalleled sound quality with these Wireless Bluetooth Earbuds. Designed with Advanced Noise Cancellation, enjoy seamless connectivity across devices and a long-lasting battery with fast charge. Perfect for any environment, these earbuds combine comfort and performance, ensuring you stay connected wherever you go. Get ready to elevate your audio experience!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: Bluetooth</li>
  <li>Bluetooth Version: Bluetooth 4.2</li>
  <li>Product Feature: Long-Lasting Battery With Fast Charge, Seamless Connectivity Across Devices, Advanced Noise Cancellation For Any Environment</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Earbuds, 1 x Charger, 1 x Box</li>
  <li>31 Model Number</li>
  <li>Battery Capacity: 300 mAh</li>
  <li>Call Time: 100 Hours</li>
  <li>Standby Time: 100 Hours</li>
  <li>Voltage: 5 Volts</li>
  <li>Watts: 1.5 Watt</li>
  <li>Weight: 35 Gram</li>
  <li>Length: 3 Inches</li>
  <li>Width: 2 Inches</li>
  <li>Height: 3 Inches</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Portable Electric Hot Plate - 1 Pc Stainless Steel Cooktop for Quick Meals",
  price: "Rs.1620",
  image: "1752393921395.jpg",
  images: [
    "1752393921395.jpg",
    "1752393922151.jpg",
    "1752393922500.jpg",
    "1752393922893.jpg",
    "1752393923220.jpg",
    "1752393923850.jpg",
    "1752393924196.jpg",
    "1752393920945.mp4"
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
{
  title: "Insulated Water Bottle - 400ml, Keeps Water Cold - 1 Pc for Hydration on-the-Go",
  price: "Rs.540",
  image: "1752394375053.jpg",
  images: [
    "1752394375053.jpg",
    "1752394375389.jpg",
    "1752394375724.jpg",
    "1752394373726.mp4"
  ],
  colors: ["Green", "Pink", "White"],
  description: `
<ul>
  <li><strong>Product Code: DP1518200083BGSE</strong></li>
  <li><strong>Product Description</strong>: Stay refreshed with our 400ml insulated water bottle. Designed to keep your water cold, this stylish bottle is perfect for gym enthusiasts and outdoor adventurers. Available in an array of vibrant colors, it's not just practical but also a great accessory to carry wherever you go. Enjoy hydration with the perfect blend of functionality and style!</li>
  <li>*Product Details*:Material: Stainless Steel</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Insulated, Keeps Water Cold</li>
  <li>Color: Blue, Green, Pink, White</li>
  <li>Package Includes: 1 x Water Bottle</li>
  <li>Capacity: 400 Ml</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Plastic Glass - For Everyday Use & Travel",
  price: "Rs.230",
  image: "1752394591873.jpg",
  images: [
    "1752394591873.jpg",
    "1752394592389.jpg",
    "1752394592998.jpg",
    "1752394593513.jpg",
    "1752394594182.jpg",
    "1752394594638.jpg",
    "1752394595030.jpg",
    "1752394590660.mp4"
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
{
  title: "Microfiber Fan Duster",
  price: "Rs.730",
  image: "1752659328120.jpg",
  images: [
    "1752659328120.jpg",
    "1752659327255.jpg",
    "1752659320403.jpg",
    "1752659319275.jpg",
    "1752659317725.mp4"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP94300000166PMGTIM</strong></li>
  <li><strong>Product Description</strong>: Effective Ironing - High-temperature strong steam can easily iron clothes, curtains, sheets, pillowcases, etc., especially suitable for vertical ironing and all fiber types.</li>
  <li>*Product Details*:Material: Metal</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Microfiber Fan Duster</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "3 Pcs Crystal Cotton Printed Double Bedsheet",
  price: "Rs.1280",
  image: "1752659526295.jpg",
  images: [
    "1752659526295.jpg",
    "1752659522718.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP8820197MLTX</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Crystal Cotton</li>
  <li>Pattern: Printed</li>
  <li>Bed Size: Double Bed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Bedsheet Length: 90 Inches</li>
  <li>Bedsheet Width: 95 Inches</li>
  <li>Pillow Length: 19 Inches</li>
  <li>Pillow Width: 29 Inches</li>
  <li>Package Includes: 1 x Bedsheet, 2 x Pillow Covers</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "3 Pcs Cotton Sotton Patchwork Double Bedsheet",
  price: "Rs.940",
  image: "1752660823504.jpg",
  images: [
    "1752660823504.jpg",
    "1752660825305.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP135700004187UABG</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Cotton Sotton</li>
  <li>Pattern: Patchwork</li>
  <li>Bed Size: Double Bed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Package Includes: 1 x Bedsheet, 2 x Pillow Covers</li>
  <li>Bedsheet Length: 92 Inches</li>
  <li>Bedsheet Width: 89 Inches</li>
  <li>Pillow Length: 29 Inches</li>
  <li>Pillow Width: 19 Inches</li>
  <li>Color: Grey</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "2 Pcs Men's Dri Fit Printed Track Suit",
  price: "Rs.760",
  image: "1752735191770.jpg",
  images: [
    "1752735191770.jpg",
    "1752735191091.jpg",
    "1752735191424.jpg",
    "1752735191770.jpg"
  ],
  colors: ["Large", "Medium" , "X-Large"],
  description: `
<ul>
  <li><strong>Product Code: DP23700000118FYSE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Dri Fit</li>
  <li>Pattern: Printed</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Medium, Large, X-Large</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Package Includes: 1 x Track Suit</li>
  <li>Color: Black</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's EVA Casual Skechers",
  price: "Rs.1560",
  image: "1752737743031.jpg",
  images: [
    "1752737743031.jpg",
    "1752737742522.jpg",
    "1752737742158.jpg",
    "1752737743356.jpg",
    "1752737741723.jpg",
    "1752737741069.jpg",
    "1752737743922.jpg",
    "1752737744365.jpg"
  ],
  colors: ["Grey", "39", "40", "41", "42", "43", "44"],
  description: `
<ul>
  <li><strong>Product Code: DP499200028BKCLSS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: EVA</li>
  <li>Pattern: Textured</li>
  <li>Gender: Men's</li>
  <li>Product Feature: Casual</li>
  <li>Sizes: Grey,39, 40, 41, 42, 43, 44</li>
  <li>Size Chart: Size Chart Attached</li>
  <li>Package Includes: 1 x Skechers</li>
  <li>Color: Grey</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Wooden Keys And Mobile Holder",
  price: "Rs.260",
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
{
  title: "Tree Design Wall Art - Pack Of 3",
  price: "Rs.400",
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
{
  title: "Multicolor Girl's Crossbody Bag - 1 Pc Stylish and Functional",
  price: "Rs.890",
  image: "1754136411339.jpg",
  images: [
    "1754136411339.jpg",
    "1754136411573.jpg",
    "1754136411729.jpg",
    "1754136411868.jpg"
  ],
  colors: ["White", "Brown"],
  description: `
<ul>
  <li><strong>Product Code: DP1199200041ACBSSE</strong></li>
  <li><strong>Product Description</strong>: Elevate your girl's accessory game with this stylish multicolor crossbody bag. Perfect for everyday use, this versatile bag features a sleek plain design, ideal for carrying essentials with ease. Made from durable Rexine material, it's both functional and fashionable. A great choice for kids on the go!</li>
  <li>*Product Details*:Material: Rexine</li>
  <li>Pattern: Plain</li>
  <li>Gender: Girl's</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Multipurpose</li>
  <li>Package Includes: 1 x Crossbody Bag</li>
  <li>Length: 9 Inches</li>
  <li>Width: 5 Inches</li>
  <li>Height: 7 Inches</li>
  <li>Color:White, Brown</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "2 Pcs Men's Polyester Printed Track Suit",
  price: "Rs.810",
  image: "1754137290957.jpg",
  images: [
    "1754137290957.jpg",
    "1754137291272.jpg",
    "1754137291466.jpg",
    "1754137291660.jpg",
    "1754137291986.jpg"
  ],
  colors: ["Medium", "Large", "X-Large", "White"],
  description: `
<ul>
  <li><strong>Product Code: DP1176200035SHKLFS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Polyester</li>
  <li>Pattern: Printed</li>
  <li>Sizes: Medium, Large, X-Large</li>
  <li>Size Chart Attached</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Track Suit</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "3 Pcs Women's Unstitched Printed Suit",
  price: "Rs.2720",
  image: "1754137510224.jpg",
  images: [
    "1754137510224.jpg",
    "1754137510578.jpg",
    "1754137510856.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1599200624UNLECG</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Shirt Fabric: Lawn</li>
  <li>Pattern: Printed</li>
  <li>Shirt Front Pattern: Printed</li>
  <li>Neckline: Printed</li>
  <li>Sleeves Pattern: Printed</li>
  <li>Daman: Printed</li>
  <li>Shirt Back Pattern: Printed</li>
  <li>Trouser Fabric: Lawn</li>
  <li>Trouser Pattern: Printed</li>
  <li>Dupatta Fabric: Bamber</li>
  <li>Dupatta Pattern: Printed</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta</li>
  <li>Shirt Cutting: 3 Meter</li>
  <li>Trouser Cutting: 2.5 Meter</li>
  <li>Dupatta Cutting: 2.5 Meter</li>
  <li>Color: Pink</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's Micro Fabric Plain Track Suit - 2 Pcs Set (Shirt & Trouser) in Black",
  price: "Rs.1040",
  image: "1754137352056.jpg",
  images: [
    "1754137352056.jpg",
    "1754137352259.jpg",
    "1754137352428.jpg"
  ],
  colors: ["S", "M", "L", "XL", "Black"],
  description: `
<ul>
  <li><strong>Product Code: DP51500000026KSAA</strong></li>
  <li><strong>Product Description</strong>: Elevate your activewear collection with this Men's Track Suit featuring a comfortable micro fabric for a soft feel. The stylish plain pattern and round neck ensure a sleek look for workouts or casual outings. Ideal for various sizes, this 2 Pcs set includes both a shirt and trousers, perfect for all-day wear. Grab yours today and experience unmatched comfort!</li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Micro</li>
  <li>Pattern: Plain</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: S, M, L, XL</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Trouser, 1 x Shirt</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Kid's Combo Bundle, Pack Of 3",
  price: "Rs.920",
  image: "1754229299425.jpg",
  images: [
    "1754229299425.jpg",
    "1754229299594.jpg",
    "1754229299752.jpg",
    "1754229299911.jpg",
    "1754229300121.jpg",
    "1754229300368.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP55800000002KISS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Number Of Pieces: 3 Pcs</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Sank Magic Book Set, 1 x LCD Writing Tablet, 1 x Magic Water Book</li>
  <li>Note: Adult supervision is recommended as this toy may contain small parts that could pose a choking hazard.</li>
</ul>
`
},
{
  title: "Adjustable Rubber Hand Gripper",
  price: "Rs.480",
  image: "1754230084214.jpg",
  images: [
    "1754230084214.jpg",
    "1754230084950.jpg",
    "1754230085190.jpg",
    "1754230085406.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP49200132AFTRD</strong></li>
  <li><strong>Product Description</strong>: Perfect Exercise Device For Strengthening The Wrist, Fingers And Forearm Muscles</li>
  <li>*Product Details*:Material: Rubber</li>
  <li>Enhanced Strength And Circulation</li>
  <li>Therapeutic Benefit</li>
  <li>Customizable And User-Friendly</li>
  <li>Comprehensive Hand Workout</li>
  <li>Material: PP Plastics + Spring Steel</li>
  <li>Color: Black</li>
  <li>Comes With Adjustable Resistance Of 10-40Kg By Turning Screw Dial</li>
</ul>
`
},
{
  title: "Air 31 Earbuds With Pouch",
  price: "Rs.899",
  image: "1754395593405.jpg",
  images: [
    "1754395593405.jpg",
    "1754395596707.jpg",
    "1754395597150.jpg"
  ],
  colors: ["Black", "White"],
  description: `
<ul>
  <li><strong>Product Code: DP104520014KSSE</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Multicolor</li>
  <li>Wireless Type: Bluetooth EDR (both sides), Ultra Low Consumption</li>
  <li>Bluetooth Version: V5.3</li>
  <li>Bluetooth Mode: A2DP 1.3/HFP 1.6/HSP 1.2/AVRCP 1.6/D 11.3</li>
  <li>Frequency: 2.4 GHz</li>
  <li>Transmission Distance: About 15 – 25 m</li>
  <li>Package Dimensions	?13 x 9.5 x 3.5 cm; 150 g</li>
  <li>Package Includes: 1 x Air 31 Earbuds With Pouch</li>
  <li>Package Includes: 1 x Earbuds</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Earbuds Airpods Pro 3 - Best Quality",
  price: "Rs.1150",
  image: "1754503571095.jpg",
  images: [
    "1754503571095.jpg",
    "1754503614011.jpg",
    "1754503614233.jpg",
    "1754503614485.jpg"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP1364200067KATH</strong></li>
  <li><strong>Product Description</strong>: Experience superior sound quality with these Wireless Bluetooth 5.3 Airpods. Designed with advanced noise cancellation, they provide a clear audio experience in any environment. Enjoy up to 96 hours of call time and seamless connectivity. Perfect for music lovers and professionals alike, these earbuds are a must-have for your audio needs.</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: Wireless</li>
  <li>Bluetooth Version: Bluetooth 5.3</li>
  <li>Product Feature: Power On/Off, Answer, Redial, Hang Up, Play, Pause, Next Track, Long Battery Life, Noise-Cancelling Earbuds, Active Noise Cancellation, Advanced Noise Cancellation For Any Environment</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Airpods</li>
  <li>100000578 Model Number</li>
  <li>Battery Capacity: 2000 mAh</li>
  <li>Call Time: 96 Hours</li>
  <li>Standby Time: 86 Hours</li>
  <li>Voltage: 5 A</li>
  <li>Watts: 12 Watt</li>
  <li>Weight: 90 Gram</li>
  <li>Length: 4 Inches</li>
  <li>Width: 4 Inches</li>
  <li>Height: 2 Inches</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Video Amplifying Screen Black",
  price: "Rs.419",
  image: "1754505374720.jpg",
  images: [
    "1754505374720.jpg",
    "1754505374214.jpg",
    "1754505374853.jpg",
    "1754505376915.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1701200126ALHAGS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Video Amplifying Screen</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "5 Pcs Women's PU Leather Plain Hand Bag Set",
  price: "Rs.1980",
  image: "1754834068708.jpg",
  images: [
    "1754834068708.jpg",
    "1754834067738.mp4"
  ],
  colors: ["Off White"],
  description: `
<ul>
  <li><strong>Product Code: DP116920025GNCS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: PU Leather</li>
  <li>Pattern: Plain</li>
  <li>Number Of Pieces: 5 Pcs</li>
  <li>Gender: Women's</li>
  <li>Color: Off White</li>
  <li>Package Includes: 1 x Hand Bag, 1 x Pouch, 1 x Sunglasses Pouch, 1 x Mobile Pouch, 1 x Mini Pouch</li>
  <li>Length: 8 Inches</li>
  <li>Width: 11 Inches</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "T900 Ultra 2 Smart Watch",
  price: "Rs.1670",
  image: "1754834308256.jpg",
  images: [
    "1754834308256.jpg",
    "1754834309861.jpg",
    "1754834310297.jpg",
    "1754834310747.jpg",
    "1754834312311.jpg",
    "1754834312773.jpg",
    "1754834313238.jpg",
    "1754834313752.jpg",
    "1754834067738.mp4"
  ],
  colors: ["Orange", "Black"],
  description: `
<ul>
  <li><strong>Product Code: DP53600023CLTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Silicone</li>
  <li>Product Feature: Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces, Notifications, Comes With a Wireless Charger, User Manual</li>
  <li>Color: Orange, Black</li>
  <li>Package Includes: 1 x Smart Watch, 1 x Wireless Charger</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "D20 Smart Watch",
  price: "Rs.910",
  image: "1755079584542.jpg",
  images: [
    "1755079584542.jpg",
    "1755079584914.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP14700040AKENT</strong></li>
  <li><strong>Product Description</strong>: D20 Smart Watch</li>
  <li>*Product Details*:Material: Metal Body + Silicone Strap</li>
  <li>Model Number: D20</li>
  <li>Product Features: Bluetooth Applicable, Waterproof, Rechargeable, Fit Pro, Alarm Clock, Blood Oxygen, Heart Rate Monitoring, Sleep Management</li>
  <li>Package Includes: 1 x Watch</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Smart Watch",
  price: "Rs.1880",
  image: "1755369267701.jpg",
  images: [
    "1755369267701.jpg",
    "1755369267175.jpg",
    "1755369266509.jpg",
    "1755369266892.jpg",
    "1755369268016.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP536200013CLTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Aluminium</li>
  <li>Connectivity Tech: Bluetooth</li>
  <li>Bluetooth Version: Bluetooth 5.1</li>
  <li>Product Feature: Water Resistant, Long Battery Life, Health And Fitness Tracking, Seamless Connectivity Across Devices, Long-Lasting Battery With Fast Charge, Dust, Water & Sweat Proof, Sleek And Stylish Design, Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces, Notifications, Heart Rate Monitoring</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Manual, 1 x Charger, 1 x Smart Watch</li>
  <li>Battery Capacity: 450 mAh</li>
  <li>Standby Time: 72 Hours</li>
  <li>Voltage: 5 Volts</li>
  <li>Watts: 5 Watt</li>
  <li>Weight: 200 Gram</li>
  <li>Length: 12 Inches</li>
  <li>Width: 8 Inches</li>
  <li>Height: 3 Inches</li>
  <li>Pack Of 1</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Hand Gripper - 1 Pc for Strength Training and Grip Enhancement",
  price: "Rs.680",
  image: "1755688885267.jpg",
  images: [
    "1755688885267.jpg",
    "1755688885813.jpg",
    "1755688886533.jpg",
    "1755688887122.jpg",
    "1755688887452.jpg",
    "1755688888351.jpg",
    "1755688888696.jpg",
    "1755688889566.jpg"
  ],
  colors: ["16.5 cm x 11.5 cm", "Random"],
  description: `
<ul>
  <li><strong>Product Code: DP860200104DTCS</strong></li>
  <li><strong>Product Description</strong>: Enhance your grip strength with this adjustable hand gripper. Made from durable alloy, it offers a comfortable, non-slip grip for effective workouts. Perfect for strength training and rehabilitation, this single piece is lightweight and portable, making it an essential tool for fitness enthusiasts on the go.</li>
  <li>*Product Details*:Material: Alloy</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Adjustable</li>
  <li>Package Includes: 1 x Hand Gripper</li>
  <li>Hand Gripper Resistant Levels Recovery Physical Tools Hand Strengthener Home & Gym</li>
  <li>Material: Alloy, Steel, Plastic</li>
  <li>Product Details: High-Quality Material, Portable And Lightweight Design</li>
  <li>Size: 16.5 cm x 11.5 cm</li>
  <li>Package Includes: 1 x Hand Gripper</li>
  <li>Color: Random</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Adjustable Hand Grip Power Exerciser Forearm Wrist Strengthener Gripper 60-kg",
  price: "Rs.430",
  image: "1755690044733.jpg",
  images: [
    "1755690044733.jpg",
    "1755690045296.jpg",
    "1755690045623.jpg",
    "1755690045905.jpg",
    "1755690046302.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP59400000097OEKI</strong></li>
  <li><strong>Product Description</strong>: Elevate your strength training with our Durable Hand Gripper! Designed for portability and equipped with a Non-Slip Grip, this hand gripper helps improve grip strength and dexterity. It's perfect for fitness enthusiasts and everyday use. Enhance your workout routine today with this adjustable and lightweight training tool. Ideal for all fitness levels!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Package Includes: 1 x Hand Gripper</li>
  <li>Adjustable Hand Grip features 6 levels of resistance, its anatomical shape and spring position are ideal for any hand size, making hand and wrist exercise easy.</li>
  <li>Its force adjustment is between 10 kg and 60 kg.</li>
  <li>You can adjust the intensity of the exercise according to your strength and desired performance.</li>
  <li>Hand Grip works the musculature of the forearm and the hand which provides an increase in the strength of that region.</li>
  <li>Being small can be easily transported to any location and can be used in your free time.</li>
  <li>It should be done sparingly so that no injuries occur. Its spring is very strong and continuous use can injure beginner users.</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Portable 10000mah  Power Bank",
  price: "Rs.2920",
  image: "1755690737475.jpg",
  images: [
    "1755690737475.jpg",
    "1755690757845.jpg",
    "1755690758016.jpg",
    "1755690758473.jpg"
  ],
  colors: ["6 Inches x 3 Inches x 6 Inches", "White"],
  description: `
<ul>
  <li><strong>Product Code: DP68700069MTACC</strong></li>
  <li><strong>Product Description</strong>: Fast Charging Power Bank</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Product Features:  Micro Usb Dual Input. Charge Only In 2 Hours, Fast charging</li>
  <li>Battery type: Lithium-Ion Polymer Battery</li>
  <li>Capacity: 10000 mAh</li>
  <li>Output power: 5V/1A</li>
  <li>Size: 6 Inches x 3 Inches x 6 Inches</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Power Bank, 1 Box x 1 Micro Cable</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions</li>
</ul>
`
},
{
  title: "Men's Polyester Printed Track Suit - 2 Pcs",
  price: "Rs.760",
  image: "1755768825669.jpg",
  images: [
    "1755768825669.jpg",
    "1755768826105.jpg",
    "1755768826259.jpg"
  ],
  colors: ["Medium", "Large", "X-Large"],
  description: `
<ul>
  <li><strong>Product Code: DP23700000060FYSE</strong></li>
  <li><strong>Product Description</strong>: Elevate your workout wardrobe with this Men's Track Suit, crafted from high-quality polyester for comfort and durability. Featuring a stylish printed design and a classic round neck, this suit is perfect for both exercise and relaxation. Available in medium, large, and x-large sizes, it's an essential addition for men who prioritize style and performance. Get ready to make a statement in yellow!</li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Polyester</li>
  <li>Pattern: Printed</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Medium, Large, X-Large</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Package Includes: 1 x Track Suit</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's Cotton Graphic Sublimation Track Suit",
  price: "Rs.760",
  image: "1755769019628.jpg",
  images: [
    "1755769019628.jpg",
    "1755769019799.jpg",
    "1755769020482.jpg"
  ],
  colors: ["Medium", "Large", "X-Large"],
  description: `
<ul>
  <li><strong>Product Code: DP23700000088FYSE</strong></li>
  <li><strong>Product Description</strong>: Elevate your casual wardrobe with this Men's Cotton T-Shirt featuring a striking graphic sublimation design. Available in vibrant yellow and black, this round-neck tee ensures comfort and style for any occasion. Perfect for layering or wearing on its own, this essential piece is available in medium, large, and x-large sizes. Add a splash of creativity to your look!</li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Cotton</li>
  <li>Pattern: Graphic Sublimation</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Medium, Large, X-Large</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Package Includes: 1 x T, 1 x Trouser</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's Graphic Sublimation Cotton Track Suit",
  price: "Rs.760",
  image: "1755769087062.jpg",
  images: [
    "1755769087062.jpg",
    "1755769087232.jpg",
    "1755769087447.jpg"
  ],
  colors: ["Medium", "Large", "X-Large", "Yellow", "Black"],
  description: `
<ul>
  <li><strong>Product Code: DP23700000087FYSE</strong></li>
  <li><strong>Product Description</strong>: Elevate your casual wardrobe with our Men's Graphic Sublimation T-Shirt. Made from soft, breathable cotton, this round neck tee offers comfort and style, perfect for everyday wear. Available in vibrant yellow and striking black, it's designed to make a statement. Grab yours today and showcase your unique style with this eye-catching piece!</li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Cotton</li>
  <li>Pattern: Graphic Sublimation</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Medium, Large, X-Large</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Yellow, Black</li>
  <li>Package Includes: 1 x T-Shirt, 1 x Trouser</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's Printed Polyester Track Suit - 2 Pcs Set in Yellow",
  price: "Rs.980",
  image: "1755769137501.jpg",
  images: [
    "1755769137501.jpg",
    "1755769137841.jpg",
    "1755769138305.jpg",
    "1755769138550.jpg"
  ],
  colors: ["Medium", "Large", "X-Large", "Yellow"],
  description: `
<ul>
  <li><strong>Product Code: DP1176200138SHKLFS</strong></li>
  <li><strong>Product Description</strong>: Elevate your casual wardrobe with this Men's Printed Polyester Track Suit. This vibrant yellow set includes 1 sweatshirt and 1 pair of trousers, crafted from breathable polyester for supreme comfort. Ideal for workouts or lounging, it combines functionality with style. Available in multiple sizes, this trendy track suit is a must-have for the modern man.</li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Polyester</li>
  <li>Pattern: Printed</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Medium, Large, X-Large</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Color: Yellow</li>
  <li>Package Includes: 1 x Sweatshirt, 1 x Trousers</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "2 Pcs Unisex Dri Fit Printed Sweatshirt Track Suit",
  price: "Rs.1040",
  image: "1755769270528.jpg",
  images: [
    "1755769270528.jpg",
    "1755769270703.jpg",
    "1755769270810.jpg",
    "1755769270976.jpg"
  ],
  colors: ["Small", "Medium", "Large", "X-Large", "Brown"],
  description: `
<ul>
  <li><strong>Product Code: DP349200006SATR</strong></li>
  <li><strong>Product Description</strong>: Stylish NASA printed track suit featuring a comfortable fit, perfect for casual wear or lounging. Made from high-quality fabric for durability and comfort.</li>
  <li>*Product Details*:Gender: Men's, Women's</li>
  <li>Fabric: Dri Fit</li>
  <li>Pattern: Printed</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Small, Medium, Large, X-Large</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Color: Brown</li>
  <li>Package Includes: 1 x Sweatshirt Track Suit</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "2 Pcs Men's Polyester Printed Track Suit",
  price: "Rs.899",
  image: "1755769458252.jpg",
  images: [
    "1755769458252.jpg",
    "1755769458378.jpg",
    "1755769458500.jpg",
    "1755769458627.jpg"
  ],
  colors: ["Small", "Medium", "Large", "X-Large"],
  description: `
<ul>
  <li><strong>Product Code: DP34900000068SATR</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Gender: Men's</li>
  <li>Fabric: Polyester</li>
  <li>Pattern: Printed</li>
  <li>Neck Type: Round Neck</li>
  <li>Sizes: Small, Medium, Large, X-Large</li>
  <li>Number Of Pieces: 2 Pcs</li>
  <li>Package Includes: 1 x Track Suit</li>
  <li>Shirt Length: 28 Inches</li>
  <li>Shirt Chest: 32 Inches</li>
  <li>Shirt Shoulder: 11 Inches</li>
  <li>Arm Length: 9 Inches</li>
  <li>Trouser Length: 38 Inches</li>
  <li>Trouser Waist: 32 Inches</li>
  <li>Shorts Length: 32 Inches</li>
  <li>Trouser Hip: 32 Inches</li>
  <li>Color: Blue</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's Synthetic Leather Fancy Sandals",
  price: "Rs.599",
  image: "1755769676750.jpg",
  images: [
    "1755769676750.jpg",
    "1755769676902.jpg",
    "1755769677032.jpg",
    "1755769677032.jpg",
    "1755769677308.jpg",
    "1755769677461.jpg"
  ],
  colors: ["6", "7", "8", "9", "10", "11"],
  description: `
<ul>
  <li><strong>Product Code: DP1497200016PRSS</strong></li>
  <li><strong>Product Description</strong>: ? Premium Quality Material: Durable synthetic leather upper with smooth finish.  ? Comfort First: Soft cushioned footbed for long-lasting comfort.  ? Secure Fit: Wide cross straps with side button fastening for extra grip.  ? Versatile Use: Perfect for casual, semi-formal, and traditional wear.  ? Stylish & Modern Look: Sleek brown design suitable for every occasion.  ? Lightweight & Durable Sole:</li>
  <li>*Product Details*:Material: Synthetic Leather</li>
  <li>Pattern: Plain</li>
  <li>Gender: Men's</li>
  <li>Product Feature: Fancy, Formal, Casual, Hoop</li>
  <li>Available Sizes: 6, 7, 8, 9, 10, 11</li>
  <li>Size Chart: Size Chart Attached</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Sandals</li>
  <li>Color: Black</li>
  <li>? Premium Quality Material: Durable synthetic leather upper with smooth finish.</li>
  <li>? Comfort First: Soft cushioned footbed for long-lasting comfort.</li>
  <li>? Secure Fit: Wide cross straps with side button fastening for extra grip.</li>
  <li>? Versatile Use: Perfect for casual, semi-formal, and traditional wear.</li>
  <li>? Stylish & Modern Look: Sleek brown design suitable for every occasion.</li>
  <li>? Lightweight & Durable Sole: Ensures stability and long wear life.</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Men's Casual Synthetic Leather Sandals - Available in Multiple Sizes",
  price: "Rs.599",
  image: "1755769784187.jpg",
  images: [
    "1755769784187.jpg",
    "1755769783117.jpg",
    "1755769783469.jpg",
    "1755769784459.jpg",
    "1755769784645.jpg"
  ],
  colors:["6", "7", "8", "9", "10", "11"],
  description: `
<ul>
  <li><strong>Product Code: DP1497200002PRSS</strong></li>
  <li><strong>Product Description</strong>: Step out in style and comfort with our Men's Casual Sandals made from durable synthetic leather. Designed for the modern man, these stylish sandals are perfect for everyday wear and are available in a range of sizes to ensure a perfect fit. Enjoy easy-going days with a versatile footwear choice that complements any casual outfit.</li>
  <li>*Product Details*:Material: Synthetic Leather</li>
  <li>Pattern: Plain</li>
  <li>Gender: Men's</li>
  <li>Product Feature: Casual</li>
  <li>Available Sizes: 6, 7, 8, 9, 10, 11</li>
  <li>Size Chart: Size Chart Attached</li>
  <li>Color: Blue</li>
  <li>Package Includes: 1 x Sandals</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "White Bluetooth Earbuds with Long-Lasting Battery - 1 Pcs",
  price: "Rs.2290",
  image: "1755770011656.jpg",
  images: [
    "1755770011656.jpg",
    "1755770020775.jpg",
    "1755770024027.jpg",
    "1755770028196.jpg",
    "1755770029213.jpg"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP63300000033GSHE</strong></li>
  <li><strong>Product Description</strong>: Experience seamless sound quality with our White Bluetooth Earbuds. Designed for convenience and comfort, these earbuds feature a long-lasting battery with fast charging capabilities. Enjoy uninterrupted calls and music anytime, anywhere with advanced connectivity and a sleek design. Perfect for any lifestyle, these earbuds are the ideal companion for your audio needs!</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Connectivity Tech: Bluetooth</li>
  <li>Bluetooth Version: Bluetooth 5</li>
  <li>Product Feature: Long-Lasting Battery With Fast Charge</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Earbuds</li>
  <li>06 Model Number</li>
  <li>Battery Capacity: 300 mAh</li>
  <li>Call Time: 3 Hours</li>
  <li>Standby Time: 6 Hours</li>
  <li>Voltage: 5 Volts</li>
  <li>Watts: 5 Watt</li>
  <li>Weight: 300 Gram</li>
  <li>Length: 5 Inches</li>
  <li>Width: 3 Inches</li>
  <li>Height: 2 Inches</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "A9 pro Wireless Earbuds",
  price: "Rs.2290",
  image: "1755770011656.jpg",
  images: [
    "1755770011656.jpg",
    "1755770020775.jpg",
    "1755770024027.jpg",
    "1755770028196.jpg",
    "1755770029213.jpg"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP4420149RL</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Earbuds</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Compact Foldable Dry Iron - 1 Pc Stainless Steel for Effortless Ironing",
  price: "Rs.1770",
  image: "1755944727822.jpg",
  images: [
    "1755944727822.jpg",
    "1755944728344.jpg",
    "1755944728724.jpg",
    "1755944729256.jpg",
    "1755944729720.jpg",
    "1755944730014.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1172200231SE</strong></li>
  <li><strong>Product Description</strong>: Experience effortless ironing with our compact foldable dry iron. Made from durable stainless steel, this sleek black appliance ensures smooth and wrinkle-free clothes. Its foldable design makes it perfect for storage and travel, providing convenience wherever you go. Simplify your laundry routine with this essential tool for a polished look.</li>
  <li>*Product Details*:Material: Stainless Steel</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Product Feature: Foldable</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Dry Iron</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "5 Pcs Velvet Jacquard Embroidered Cushion Covers",
  price: "Rs.730",
  image: "1756024299919.jpg",
  images: [
    "1756024299919.jpg",
    "1756024303536.jpg",
    "1756024303922.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP703654HP</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Velvet Jacquard</li>
  <li>Pattern: Embroidered</li>
  <li>No. Of Pieces: 5 Pcs</li>
  <li>Length: 15 Inches</li>
  <li>Width: 15 Inches</li>
  <li>Package Includes: 5 x Cushion Covers</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "5 Pcs Velvet Jacquard Embroidered Cushion Covers",
  price: "Rs.730",
  image: "1756024409158.jpg",
  images: [
    "1756024409158.jpg",
    "1756024409656.jpg",
    "1756024410619.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP703665HP</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Velvet Jacquard</li>
  <li>Pattern: Embroidered</li>
  <li>No. Of Pieces: 5 Pcs</li>
  <li>Length: 15 Inches</li>
  <li>Width: 15 Inches</li>
  <li>Package Includes: 5 x Cushion Covers</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "5 Pcs Velvet Jacquard Embroidered Cushion Covers",
  price: "Rs.730",
  image: "1756024465689.jpg",
  images: [
    "1756024465689.jpg",
    "1756024466040.jpg",
    "1756024466290.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP703661HP</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Fabric: Velvet Jacquard</li>
  <li>Pattern: Embroidered</li>
  <li>No. Of Pieces: 5 Pcs</li>
  <li>Length: 15 Inches</li>
  <li>Width: 15 Inches</li>
  <li>Package Includes: 5 x Cushion Covers</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Mini Black Camera with Clear Vision - Lightweight Design",
  price: "Rs.1070",
  image: "1756024925316.jpg",
  images: [
    "1756024925316.jpg",
    "1756024925510.jpg",
    "1756024925055.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP94300000122PMGTIM</strong></li>
  <li><strong>Product Description</strong>: Discover the perfect portable solution with this Mini Black Camera. Featuring a sleek, lightweight design and clear vision capabilities, it's ideal for capturing stunning moments on the go. Whether you're aiming for flexibility or durability, this camera covers all bases, making it the perfect companion for travelers and adventurers alike.</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Product Feature: Mini, Clear Vision, Lightweight Design</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Camera</li>
  <li>Battery Capacity: 240 mAh</li>
  <li>Length: 4.4 cm</li>
  <li>Width: 2.3 cm</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Portable Tripod Stand",
  price: "Rs.1400",
  image: "1756473891137.jpg",
  images: [
    "1756473891137.jpg",
    "1756473892116.jpg",
    "1756473892368.jpg",
    "1756473892866.jpg",
    "1756473893213.jpg",
    "1756473891702.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP51120215AFTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Product Feature: Portable</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Portable Tripod Stand</li>
  <li>Voltage: 3.7 Volts</li>
  <li>Watts: 3 Watt</li>
  <li>Color Temperature: 6500K</li>
  <li>Brightness: 10 Level Brightness Adjustable</li>
  <li>Application: Photo YouTube Video Studio Photography</li>
  <li>Weight: 0.45 Kgs</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "LED Ring Light with Metal Tripod Stand & Mobile Holder - Multicolor Lighting - 3 Pcs",
  price: "Rs.1671",
  image: "1756474128482.jpg",
  images: [
    "1756474128482.jpg",
    "1756474129067.jpg",
    "1756474129496.jpg",
    "1756474130265.jpg",
    "1756474130869.jpg",
    "1756474131589.jpg",
    "1756474132191.jpg"
  ],
  colors: ["Black", "White"],
  description: `
<ul>
  <li><strong>Product Code: DP1155200130SEHB</strong></li>
  <li><strong>Product Description</strong>: Elevate your device experience with this sleek black mobile stand, designed to provide maximum support and comfort. Made from durable ABS plastic, it securely holds your smartphone while ensuring easy access and visibility. Perfect for any desk or bedside table, this versatile mobile stand is a must-have accessory for anyone who uses their device frequently.</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Mobile Stand</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
  <li><strong>Product Description</strong>: Illuminate your world with our LED Ring Light, featuring three dynamic color options and a sturdy metal tripod stand. Perfect for photography, video calls, and makeup application, this versatile setup includes a mobile holder for convenience. Elevate your lighting game with this essential accessory, designed to enhance your content and creativity with every use!</li>
  <li>*Product Details*:Material: Metal</li>
  <li>Product Feature: Three Colors Light</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x LED Ring Light, 1 x Metal Tripod Stand, 1 x Mobile Holder</li>
  <li>Voltage: 12 Volts</li>
  <li>Length: 26 Inches</li>
  <li>Height: 7 Feet</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "4 in 1 Selfie Stick Tripod with Light & Bluetooth Remote |Foldable & Extendable (70cm) Mobile Holder",
  price: "Rs.790",
  image: "1756474307429.jpg",
  images: [
    "1756474307429.jpg",
    "1756474307655.jpg",
    "1756474308133.jpg",
    "1756474308340.jpg",
    "1756474306652.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1155200076SEHB</strong></li>
  <li><strong>Product Description</strong>: Elevate your device experience with this sleek black mobile stand, designed to provide maximum support and comfort. Made from durable ABS plastic, it securely holds your smartphone while ensuring easy access and visibility. Perfect for any desk or bedside table, this versatile mobile stand is a must-have accessory for anyone who uses their device frequently.</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Mobile Stand</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "3D Leaf Wooden Wall Clock",
  price: "Rs.420",
  image: "1756474416870.jpg",
  images: [
    "1756474416870.jpg",
    "1756474417037.jpg",
    "1756474418099.jpg",
    "1756474418907.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1261200107MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:</li>
</ul>
`
},
{
  title: "3D Flower Wooden Wall Clock With Premium Light",
  price: "Rs.520",
  image: "1756474442563.jpg",
  images: [
    "1756474442563.jpg",
    "1756474445628.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1261200092MRTS</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:</li>
</ul>
`
},
{
  title: "Toothbrush & Brush Holder",
  price: "Rs.560",
  image: "1757784910294.jpg",
  images: [
    "1757784910294.jpg",
    "1757784910557.jpg",
    "1757784910687.jpg",
    "1757784910814.jpg",
    "1757784911028.jpg",
    "1757784911336.jpg"
  ],
  colors: ["White"],
  description: `
<ul>
  <li><strong>Product Code: DP94320048PMGTIM</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: White</li>
  <li>Package Includes: 1 x Toothbrush Holder</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "M10 Digital Display Case Earbuds, Black",
  price: "Rs.810",
  image: "1757785315961.jpg",
  images: [
    "1757785315961.jpg",
    "1757785318396.jpg",
    "1757785319180.jpg",
    "1757785321616.jpg",
    "1757785322095.jpg"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP49200379AFTRD</strong></li>
  <li><strong>Product Description</strong>: Earbuds That Help You In Hearing And Connecting With The World Around You</li>
  <li>*Product Details*:Material: ABS Plastic</li>
  <li>Model: M10</li>
  <li>Product Features: Transparency Mode For Hearing And Connecting With The World Around You, Three Sizes Of Soft, Tapered Silicone Tips For A Customizable Fit, Sweat And Water Resistant. Adaptive EQ Automatically Tunes Music To The Shape Of Your Ear, Quick Charging In The Case</li>
  <li>Wearing Type: In Ear</li>
  <li>Volume Control: Yes</li>
  <li>Microphone: Dual</li>
  <li>Bluetooth Version:  V5.1</li>
  <li>Bluetooth Range: 50M</li>
  <li>Charging Time: 1.5 Hrs</li>
  <li>Call Time: 4-5 Hours</li>
  <li>Playtime: 6 Hrs</li>
  <li>Battery Capacity Of Earbuds: 50 mAh</li>
  <li>Standby Time: 100 Hrs</li>
  <li>Battery Capacity Of Charging Box: 2000 mAh</li>
  <li>Weight/Size: 10g</li>
  <li>Voltage: 5V-1A</li>
  <li>Color: Black</li>
  <li>Package Includes: 1 x Earbuds, 1 x Charging Case, 1 x Manual, 1 x Box</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Long Lasting Fragrance Unisex Perfume - 2 Pcs Woody Scent (Replica)",
  price: "Rs.789",
  image: "1758357994002.jpg",
  images: [
    "1758357994002.jpg",
    "1758357994219.jpg",
    "1758357993599.mp4"
  ],
  colors: ["Black"],
  description: `
<ul>
  <li><strong>Product Code: DP67400000183CYCH</strong></li>
  <li><strong>Product Description</strong>: Experience the captivating essence of our Unisex Woody Perfume featuring a long-lasting fragrance that envelops you in its alluring scent. Perfect for any occasion, this liquid perfume comes in a stylish black package, offering 2 pieces of fresh, enduring aroma. Embrace the uniqueness and sophistication of this fragrance that suits anyone, anytime.</li>
  <li>*Product Details*:Fragrance: Woody</li>
  <li>Material: Liquid</li>
  <li>Product Feature: Long Lasting Fragrance</li>
  <li>Top Note: Bergamot</li>
  <li>Gender Type: Unisex</li>
  <li>Color: Black</li>
  <li>Package Includes: 2 x Perfume</li>
  <li>Quantity: 100 Ml</li>
  <li>More Information</li>
  <li>Fragrance Category	Fresh, Woody</li>
  <li>Care Instructions</li>
  <li>Proper storage of perfume is essential to maintain its quality and ensure a longer shelf life. Here are some tips on how to store perfume:</li>
  <li>Keep it in a Cool and Dark Place:</li>
  <li>Perfume is sensitive to light and temperature. Exposure to light and heat can alter its composition and fragrance. Store your perfume in a cool, dark place, away from direct sunlight.</li>
  <li>Avoid Extreme Temperatures:</li>
  <li>Extreme temperatures can also affect the chemical composition of the perfume. Avoid storing it in places where temperatures fluctuate dramatically, such as near windows or heaters.</li>
  <li>Keep the Bottle Sealed:</li>
  <li>Ensure that the bottle is tightly sealed when not in use. Exposure to air can cause the fragrance to deteriorate over time.</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Citrus Woody Perfume for Men - 1 Pcs Long Lasting Fragrance",
  price: "Rs.989",
  image: "1758358265078.jpg",
  images: [
    "1758358265078.jpg",
    "1758358266090.jpg",
    "1758358266724.jpg",
    "1758358267173.jpg",
    "1758358265528.jpg",
    "1758358264595.mp4"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP608200049SHBS</strong></li>
  <li><strong>Product Description</strong>: Discover your signature scent with our Citrus Woody Perfume, specifically designed for men. This long-lasting fragrance combines vibrant citrus notes with grounded woody undertones, delivering an intriguing aroma that lingers throughout the day. Perfectly packaged for easy use, it adds a refreshing touch to your everyday routine or special occasions.</li>
  <li>*Product Details*:Fragrance: Citrus, Woody</li>
  <li>Material: Liquid</li>
  <li>Product Feature: Long Lasting Fragrance</li>
  <li>Gender Type: Men</li>
  <li>Package Includes: 1 x Perfume</li>
  <li>Quantity: 50 Ml</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Long Lasting Unisex Oud Perfume - 24 Hrs Sweat Resistance - Ameer Al Oud",
  price: "Rs.1100",
  image: "1758558984991.jpg",
  images: [
    "1758558984991.jpg",
    "1758558986030.jpg",
    "1758558982876.mp4",
    "1758558984543.mp4"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP67400000232CYCH</strong></li>
  <li><strong>Product Description</strong>: Indulge in the captivating scent of our Oud Perfume, designed for both men and women. Enjoy a remarkable 24 hours of sweat resistance and long-lasting fragrance that keeps you feeling fresh. Perfect for every occasion, this liquid perfume comes in a sleek brown bottle. Elevate your scent game with this irresistible addition to your collection!</li>
  <li>*Product Details*:Fragrance: Oud</li>
  <li>Material: Liquid</li>
  <li>Product Feature: 24 Hrs Sweat Resistance, Long Lasting Fragrance</li>
  <li>Gender Type: Unisex</li>
  <li>Package Includes: 1 x Perfume</li>
  <li>Quantity: 100 Ml</li>
  <li>Color: Brown</li>
  <li>Ameer Al Oudh is a luxurious and captivating fragrance that embodies the essence of royalty and sophistication. Crafted with the finest ingredients, this perfume features an exquisite blend of rich oud, complemented by warm, woody notes and a hint of sweet, resinous amber. The deep, powerful aroma is balanced with a subtle touch of florals, creating a scent that is both bold and elegant. Ameer Al Oudh is designed for those who seek a fragrance that is timeless, memorable, and a true representation of opulence. Perfect for special occasions or evening wear, it leaves a lasting impression and evokes an aura of mystery and grandeur.</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Long Lasting Fragrance Perfume",
  price: "Rs.1040",
  image: "1758559108811.jpg",
  images: [
    "1758559108811.jpg",
    "1758559109788.jpg",
    "1758559110343.jpg",
    "1758559110848.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP67400000224CYCH</strong></li>
  <li><strong>Product Description</strong>: Murshad Absolutely Not perfume Qadi 804 EDP 100ML Fragrance Of Freedom And Courage</li>
  <li>*Product Details*:Material: Liquid</li>
  <li>Product Feature: Long Lasting Fragrance, Refreshing</li>
  <li>Gender Type: Unisex</li>
  <li>Package Includes: 1 x Perfume</li>
  <li>Quantity: 100 Ml</li>
  <li>Color: Black</li>
  <li>Murshad Absolutely Not perfume Qadi 804 EDP 100ML Fragrance Of Freedom And Courage</li>
  <li>Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "White Musk Perfume, 100Ml",
  price: "Rs.650",
  image: "1758559257941.jpg",
  images: [
    "1758559257941.jpg",
    "1758559253903.mp4"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP32400095MASGML</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Liquid</li>
  <li>Top Notes: Bergamot, Mandaria, Citrus accords</li>
  <li>Middle Notes: Elemi, Sandalwood</li>
  <li>Base Notes: Olibanum, Tonka bean, Vanilla</li>
  <li>Gender Type: Unisex</li>
  <li>Package Includes: 1 x Perfume</li>
  <li>Note: For external use only. Patch test before regular use, Discontinue if irritation occurs. Avoid contact with eyes.</li>
</ul>
`
},
{
  title: "Sultan Al Quloob Perfume 100ML.",
  price: "Rs.750",
  image: "1758559291884.jpg",
  images: [
    "1758559291884.jpg",
    "1758559292113.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP32400109MASGML</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Liquid</li>
  <li>A royal classic blending a heart of fresh florally enveloped in top notes of sparkling bergamot and luscious greens against a warm background of sensual amber, sandalwood and patchouli for that perfect hint of spice.</li>
  <li>Gender Type: Unisex</li>
  <li>Package Includes: 1 x Perfume</li>
  <li>Note: For external use only. Patch test before regular use, Discontinue if irritation occurs. Avoid contact with eyes.</li>
</ul>
`
},
{
  title: "Labubu Doll Plush Toy & Keychain",
  price: "Rs.1310",
  image: "1758559377952.jpg",
  images: [
    "1758559377952.jpg",
    "1758559378938.jpg",
    "1758559365234.mp4",
    "1758558984543.mp4"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP51100000410AFTS</strong></li>
  <li><strong>Product Description</strong>: Introducing our delightful multicolor silicone doll, designed exclusively for imaginative play! This 1 Pc doll is perfect for children who love engaging in creative adventures. Its soft, flexible silicone material ensures safety and durability, making it a wonderful addition to any child's toy collection. Unleash your little one's creativity with this fun and vibrant doll!</li>
  <li>*Product Details*:Material: Silicone</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Doll</li>
  <li>Bring home the charm of the trending Labubu Doll Plush Toy & Keychain – a perfect combination of cuteness, creativity, and comfort! ? This soft, high-quality stuffed plush toy features the beloved Labubu character from the popular anime series, designed to delight fans of all ages. Whether it’s for kids, teens, or collectors, this plush is a must-have!</li>
  <li>Note: Adult supervision is recommended as this toy may contain small parts that could pose a choking hazard.</li>
</ul>
`
},
{
  title: "Mobile Phone Holder Black",
  price: "Rs.280",
  image: "1758559608228.jpg",
  images: [
    "1758559608228.jpg",
    "1758559608439.jpg",
    "1758559608780.jpg",
    "1758559609285.jpg",
    "1758559609672.jpg",
    "1758559609909.jpg",
    "1758559607912.mp4"
  ],
  colors: ["Black", "Green", "Red", "White", "Blue"],
  description: `
<ul>
  <li><strong>Product Code: DP1045200032KSSE</strong></li>
  <li><strong>Product Description</strong>: Strong Suction Power - This phone case with suction cup offers a secure hold on any smooth surface, making it perfect for hands-free use while driving or watching videos. Its strong suction power ensures your phone stays in place, giving you peace of mind and convenience.</li>
  <li>*Product Details*:Material: Silicone</li>
  <li>Product Feature: Plain</li>
  <li>Color: Black, Green, Red, White, Blue</li>
  <li>Package Includes: 1 x Mobile Phone Holder</li>
  <li>Weight: 40 Gram</li>
  <li>Length: 3 Cm</li>
  <li>Width: 2 Cm</li>
  <li>Pack Of 1</li>
  <li>Strong Suction Power - This phone case with suction cup offers a secure hold on any smooth surface, making it perfect for hands-free use while driving or watching videos. Its strong suction power ensures your phone stays in place, giving you peace of mind and convenience.</li>
  <li>Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.</li>
</ul>
`
},
{
  title: "Men's Watch - Multiple Color Straps",
  price: "Rs.780",
  image: "1758965294258.jpg",
  images: [
    "1758965294258.jpg",
    "1758965294501.jpg",
    "1758965294869.jpg",
    "1758965295195.jpg",
    "1758965295728.jpg",
    "1758965293725.mp4"
  ],
  colors: ["Multicolor"],
  description: `
<ul>
  <li><strong>Product Code: DP1156200080TEWEHB</strong></li>
  <li><strong>Product Description</strong>: </li>
  <li>*Product Details*:Material: Stainless Steel</li>
  <li>Pattern: Chain Strap</li>
  <li>Gender: Men's</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Multicolor</li>
  <li>Package Includes: 1 x Chain Watch</li>
  <li>Note: There might be slight color differences as a result of varying lighting and monitor effects.</li>
</ul>
`
},
{
  title: "Bulb and Fan Electric Science Experiment Kit for Kids",
  price: "Rs.505",
  image: "1758967295799.jpg",
  images: [
    "1758967295799.jpg",
    "1758967295590.jpg",
    "1758967296156.jpg",
    "1758967296352.jpg"
  ],
  colors: [],
  description: `
<ul>
  <li><strong>Product Code: DP1010200097SADS</strong></li>
  <li><strong>Product Description</strong>: This electronic science project kit is a fun and educational DIY set for kids. Made of durable materials, it helps improve hands-on skills, reaction time, and coordination. Its compact size makes it easy to play with anywhere, while encouraging practical learning and an interest in physics. A great gift to inspire creativity and scientific thinking in children.</li>
  <li>*Product Details*:Educational Toy</li>
  <li>2nd generation chemical big kit</li>
  <li>Package Includes: 1 x Science Project Kit</li>
  <li>1 x Switch Button</li>
  <li>1 x Bulb</li>
  <li>1 x AA Battery</li>
  <li>1 x Battery Holder</li>
  <li>2 x Wires Black and Red</li>
  <li>2 x Pins</li>
  <li>1 x Bulb Holder</li>
  <li>1 x Fan</li>
  <li>1 x Motor</li>
  <li>2 x Clamps</li>
  <li>1 x Nail</li>
  <li>Note: Adult supervision is recommended as this toy may contain small parts that could pose a choking hazard.</li>
</ul>
`
},
{
  title: "Magnetic Drawing Board - 1 Pc Plastic LCD Writing Tablet for Kids",
  price: "Rs.1760",
  image: "1758967092855.jpg",
  images: [
    "1758967092855.jpg",
    "1758967093409.jpg",
    "1758967093630.jpg",
    "1758967094579.jpg",
    "1758967095187.jpg",
    "1758967092432.mp4"
  ],
  colors: ["Red", "Black"],
  description: `
<ul>
  <li><strong>Product Code: DP1126200031IPWE</strong></li>
  <li><strong>Product Description</strong>: Encourage creativity and imagination in your little ones with this Magnetic Drawing Board! Designed for children ages 1 to 10, this 1 Pcs plastic tablet allows hours of fun as kids explore their artistic abilities. Simply draw and erase with ease, providing a reusable canvas for endless creativity. Perfect for keeping children engaged and entertained anywhere.</li>
  <li>*Product Details*:Material: Plastic</li>
  <li>Preferred Ages: 1-10 Years</li>
  <li>Number Of Pieces: 1 Pc</li>
  <li>Color: Red, Black</li>
  <li>Package Includes: 1 x Magnetic Drawing Board</li>
  <li>Pack Of 1</li>
  <li>Note: Adult supervision is recommended as this toy may contain small parts that could pose a choking hazard.</li>
</ul>
`
},

];
