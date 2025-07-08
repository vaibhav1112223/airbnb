const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154154-1d7d6d602fdf?auto=format&fit=crop&w=800&q=80"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501769214405-5e95b7c6b188?auto=format&fit=crop&w=800&q=80"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1508182311256-3b58b8d34a46?auto=format&fit=crop&w=800&q=80"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590093018443-bb3b1e127d5b?auto=format&fit=crop&w=800&q=80"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582703384181-9839e4e01b8d?auto=format&fit=crop&w=800&q=80"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Countryside Cottage in Ireland",
    description:
      "Escape to the rolling hills of Ireland in this traditional countryside cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617196035829-71282c5aeb2d?auto=format&fit=crop&w=800&q=80"
    },
    price: 1100,
    location: "Galway",
    country: "Ireland",
  },
  {
    title: "Desert Villa in Morocco",
    description:
      "Experience the exotic charm of Morocco in this luxurious desert villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80"
    },
    price: 2700,
    location: "Marrakech",
    country: "Morocco",
  },
  
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      filename: "beachfront_cottage",
      url: "https://source.unsplash.com/featured/?beach,house"
    },
    price: 1500,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain View Cabin",
    description: "A peaceful cabin surrounded by mountains and pine forests.",
    image: {
      filename: "mountain_cabin",
      url: "https://source.unsplash.com/featured/?mountain,cabin"
    },
    price: 2500,
    location: "Manali",
    country: "India"
  },
  {
    title: "City Center Apartment",
    description: "Modern apartment located in the heart of the city.",
    image: {
      filename: "city_apartment",
      url: "https://source.unsplash.com/featured/?city,apartment"
    },
    price: 3000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Desert Camp",
    description: "Stay under the stars in a luxury desert camp.",
    image: {
      filename: "desert_camp",
      url: "https://source.unsplash.com/featured/?desert,camp"
    },
    price: 2000,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Forest Treehouse",
    description: "Unique treehouse experience amidst lush forests.",
    image: {
      filename: "forest_treehouse",
      url: "https://source.unsplash.com/featured/?treehouse,forest"
    },
    price: 2200,
    location: "Meghalaya",
    country: "India"
  },
  {
    title: "Lakeside Cottage",
    description: "Beautiful cottage with serene lake views.",
    image: {
      filename: "lakeside_cottage",
      url: "https://source.unsplash.com/featured/?lake,cottage"
    },
    price: 1800,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Cozy chalet in the snowy hills, perfect for winter getaways.",
    image: {
      filename: "snow_chalet",
      url: "https://source.unsplash.com/featured/?snow,chalet"
    },
    price: 3500,
    location: "Gulmarg",
    country: "India"
  },
  {
    title: "Beach Shack",
    description: "Simple beach shack steps away from the ocean.",
    image: {
      filename: "beach_shack",
      url: "https://source.unsplash.com/featured/?beach,shack"
    },
    price: 1200,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Island Villa",
    description: "Private villa on a beautiful island.",
    image: {
      filename: "island_villa",
      url: "https://source.unsplash.com/featured/?island,villa"
    },
    price: 5000,
    location: "Andaman Islands",
    country: "India"
  },
  {
    title: "Himalayan Homestay",
    description: "Authentic homestay experience in the Himalayas.",
    image: {
      filename: "himalayan_homestay",
      url: "https://source.unsplash.com/featured/?himalayas,homestay"
    },
    price: 1500,
    location: "Leh",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    description: "Stunning penthouse with panoramic city views.",
    image: {
      filename: "luxury_penthouse",
      url: "https://source.unsplash.com/featured/?luxury,penthouse"
    },
    price: 10000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Jungle Retreat",
    description: "Stay amidst nature with modern amenities.",
    image: {
      filename: "jungle_retreat",
      url: "https://source.unsplash.com/featured/?jungle,retreat"
    },
    price: 2500,
    location: "Kanha National Park",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "Relax at a traditional countryside farmhouse.",
    image: {
      filename: "countryside_farmhouse",
      url: "https://source.unsplash.com/featured/?farmhouse,countryside"
    },
    price: 2000,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Cliffside Villa",
    description: "Villa perched on a cliff with breathtaking ocean views.",
    image: {
      filename: "cliffside_villa",
      url: "https://source.unsplash.com/featured/?cliff,villa"
    },
    price: 4500,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Eco-Friendly Cottage",
    description: "Sustainable living in an eco-friendly cottage.",
    image: {
      filename: "eco_cottage",
      url: "https://source.unsplash.com/featured/?eco,cottage"
    },
    price: 1800,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Heritage Haveli",
    description: "Experience royal heritage in a traditional haveli.",
    image: {
      filename: "heritage_haveli",
      url: "https://source.unsplash.com/featured/?heritage,haveli"
    },
    price: 4000,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Hilltop Bungalow",
    description: "Private bungalow with panoramic hill views.",
    image: {
      filename: "hilltop_bungalow",
      url: "https://source.unsplash.com/featured/?hill,bungalow"
    },
    price: 3000,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Backwater Houseboat",
    description: "Stay on a traditional houseboat cruising the backwaters.",
    image: {
      filename: "backwater_houseboat",
      url: "https://source.unsplash.com/featured/?houseboat,backwater"
    },
    price: 3500,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Riverfront Cabin",
    description: "Cozy cabin located beside a flowing river.",
    image: {
      filename: "riverfront_cabin",
      url: "https://source.unsplash.com/featured/?river,cabin"
    },
    price: 2000,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Vintage Studio",
    description: "Charming vintage-style studio apartment.",
    image: {
      filename: "vintage_studio",
      url: "https://source.unsplash.com/featured/?vintage,studio"
    },
    price: 2200,
    location: "Pune",
    country: "India"
  },
  {
    title: "Luxury Beach Villa",
    description: "Ultimate beachfront luxury with private pool.",
    image: {
      filename: "luxury_beach_villa",
      url: "https://source.unsplash.com/featured/?beach,villa"
    },
    price: 8000,
    location: "Goa",
    country: "India"
  }


];

module.exports = { data: sampleListings };
