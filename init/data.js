const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677608/photo-1552733407-5d5c46c3bb3b_tg0fqc.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.8091, 34.005] },
    category: "Beach"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677655/photo-1501785888041-af3ef285b470_uygpbp.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
    category: "Iconic cities"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677788/photo-1571896349842-33c89424de2d_hgj4mt.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677814/photo-1566073771259-6a8506099945_igqshb.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: "Amazing view"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677840/photo-1520250497591-112f2f40a3f4_hpjnzt.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
    category: "Amazing view"
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677865/photo-1571003123894-1f0594d2b5d9_c0rcwi.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8515, 21.1619] },
    category: "Beach"
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677920/photo-1464822759023-fed622ff2c3b_bwpegg.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
    category: "Boating"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766677986/photo-1622396481328-9b1b78cdd9fd_q6mtey.jpg",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: "Luxury"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678014/photo-1502784444187-359ac186c5bb_nhgxfx.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.2286, 46.0961] },
    category: "Snow"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678040/photo-1493246507139-91e8fad9978e_wbimsc.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: { type: "Point", coordinates: [34.8333, -2.3333] },
    category: "Amazing view"
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678179/photo-1504280390367-361c6d9f38f4_vp6u5y.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: { type: "Point", coordinates: [4.8952, 52.3702] },
    category: "Iconic cities"
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678204/photo-1618140052121-39fc6db33972_xufouo.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: { type: "Point", coordinates: [178.065, -17.7134] },
    category: "Luxury"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678298/photo-1602088113235-229c19758e9f_d1ogju.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-1.75, 51.8333] },
    category: "Rooms"
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678338/photo-1533619239233-6280475a633a_wva460.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.0589, 42.3601] },
    category: "Iconic cities"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678390/photo-1602391833977-358a52198938_vvs1y0.jpg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
    category: "Pools"
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766678488/photo-1521401830884-6c03c1c87ebb_y7nr7o.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] },
    category: "Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766683667/premium_photo-1670963964797-942df1804579_tkqn2k.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
    category: "Trending"
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766683710/photo-1470165301023-58dab8118cc9_thmbdg.jpg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: { type: "Point", coordinates: [98.3923, 7.8804] },
    category: "Pools"
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684499/photo-1585543805890-6051f7829f98_awfrta.jpg",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: { type: "Point", coordinates: [-4.2026, 57.4778] },
    category: "Luxury"
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684525/photo-1518684079-3c830dcef090_bcehvt.jpg",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "Luxury"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684550/photo-1586375300773-8384e3e4916f_j3djvh.jpg",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: { type: "Point", coordinates: [-110.3626, 46.8797] },
    category: "Mountains"
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684574/photo-1602343168117-bb8ffe3e2e9f_owytg3.jpg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: { type: "Point", coordinates: [25.3667, 37.4467] },
    category: "Beach"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684598/photo-1488462237308-ecaa28b729d7_wicy3b.jpg",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0907, 9.7489] },
    category: "Amazing view"
  },
  {
    title: "Historic Cottage in Charleston",
    description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684625/photo-1587381420270-3e1a5b9e6904_v4puir.jpg",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: { type: "Point", coordinates: [-79.9311, 32.7765] },
    category: "Rooms"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684661/photo-1480796927426-f609979314bd_i4svh0.jpg",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6503, 35.6762] },
    category: "Iconic cities"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684688/photo-1578645510447-e20b4311e3ce_fxvf8g.jpg",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: { type: "Point", coordinates: [-71.5724, 43.1939] },
    category: "Boating"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684708/photo-1439066615861-d1af74d74000_j9pjzc.jpg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: { type: "Point", coordinates: [73.5361, 1.9772] },
    category: "Luxury"
  },
  {
    title: "Ski Chalet in Aspen",
    description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684736/photo-1476514525535-07fb3b4ae5f1_lpgujp.jpg",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: "Snow"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1766684764/photo-1499793983690-e29da59ef1c2_nmmozx.jpg",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: { type: "Point", coordinates: [-84.0907, 9.7489] },
    category: "Beach"
  },
];

module.exports = { data: sampleListings };