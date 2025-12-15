let id = 1;

export default function generateGroceriesData() {
  const categories = [
    {
      name: "Fruits",
      items: [
        { name: "Red Apple",            desc: "Crisp and juicy, perfect for snacking" },
        { name: "Ripe Banana",          desc: "Naturally sweet and creamy" },
        { name: "Valencia Orange",      desc: "Sweet and seedless citrus favorite" },
        { name: "Alphonso Mango",       desc: "King of mangoes, rich and aromatic" },
        { name: "Green Grapes",         desc: "Crunchy, sweet and seedless" },
        { name: "Fresh Strawberry",     desc: "Bright red, juicy and fragrant" },
        { name: "Golden Pineapple",     desc: "Sweet and tangy tropical delight" },
        { name: "Dragon Fruit",         desc: "Mildly sweet with striking appearance" },
        { name: "Kiwi Gold",            desc: "Sweet and tropical with golden flesh" },
        { name: "Hass Avocado",         desc: "Creamy texture, rich in healthy fats" },
        { name: "Pomegranate",          desc: "Juicy ruby seeds packed with antioxidants" },
        { name: "Seedless Watermelon",  desc: "Refreshing and perfectly sweet" },
        { name: "Blueberry",            desc: "Small but bursting with flavor" },
        { name: "Thai Guava",           desc: "Crisp, sweet and slightly floral" },
        { name: "Sweet Lime",           desc: "Milder and sweeter than regular lime" }
      ],
      qty: [8, 45]
    },
    {
      name: "Vegetables",
      items: [
        { name: "Fresh Carrot",         desc: "Crunchy and naturally sweet" },
        { name: "Baby Potato",          desc: "Tender skin, perfect for roasting" },
        { name: "Roma Tomato",          desc: "Firm and ideal for cooking" },
        { name: "Red Onion",            desc: "Mild flavor, great raw or cooked" },
        { name: "Broccoli Crown",       desc: "Fresh, vibrant and nutrient-rich" },
        { name: "Baby Spinach",         desc: "Tender leaves, ready to eat" },
        { name: "Bell Pepper Mix",      desc: "Colorful trio of red, yellow and green" },
        { name: "Cauliflower",          desc: "Fresh, firm and versatile" },
        { name: "Green Beans",          desc: "Crisp and tender French beans" },
        { name: "Cucumber",             desc: "Cool, refreshing and hydrating" }
      ],
      qty: [10, 50]
    },
    {
      name: "Dairy",
      items: [
        { name: "Full Cream Milk",      desc: "Rich and creamy pasteurized milk" },
        { name: "Cheddar Cheese",       desc: "Sharp and smooth aged cheddar" },
        { name: "Salted Butter",        desc: "Perfectly salted, spreads easily" },
        { name: "Greek Yogurt",         desc: "Thick, creamy and high in protein" },
        { name: "Fresh Paneer",         desc: "Soft, fresh and homemade style" },
        { name: "Curd",                 desc: "Probiotic-rich homemade curd" },
        { name: "Mozzarella",           desc: "Soft, milky and great for melting" },
        { name: "Cream Cheese",         desc: "Smooth and tangy spread" }
      ],
      qty: [5, 20]
    },
    {
      name: "Bakery",
      items: [
        { name: "Whole Wheat Bread",    desc: "Freshly baked, soft and healthy" },
        { name: "Garlic Croissant",     desc: "Buttery with aromatic garlic" },
        { name: "Blueberry Muffin",     desc: "Moist and packed with real berries" },
        { name: "Chocolate Donut",      desc: "Soft ring donut with chocolate glaze" },
        { name: "Burger Bun",           desc: "Soft, sesame-topped classic" },
        { name: "Pav Bread",            desc: "Soft and fluffy Mumbai-style pav" }
      ],
      qty: [4, 18]
    },
    {
      name: "Meat & Seafood",
      items: [
        { name: "Chicken Breast",       desc: "Boneless, skinless and lean cut" },
        { name: "Salmon Fillet",        desc: "Rich in omega-3, fresh Atlantic" },
        { name: "Ground Beef",          desc: "Lean mince, perfect for burgers" },
        { name: "Fresh Prawns",         desc: "Medium size, cleaned and deveined" },
        { name: "Lamb Chops",           desc: "Tender and flavorful premium cut" }
      ],
      qty: [2, 12]
    },
    {
      name: "Beverages",
      items: [
        { name: "Orange Juice",         desc: "100% pure, not from concentrate" },
        { name: "Coca-Cola",            desc: "Classic original taste" },
        { name: "Sparkling Water",      desc: "Lightly bubbled, zero calories" },
        { name: "Almond Milk",          desc: "Unsweetened plant-based milk" },
        { name: "Green Tea",            desc: "Antioxidant-rich classic brew" }
      ],
      qty: [15, 80]
    },
    {
      name: "Snacks",
      items: [
        { name: "Classic Potato Chips", desc: "Thin, crispy and lightly salted" },
        { name: "Roasted Almonds",      desc: "Lightly salted premium nuts" },
        { name: "Dark Chocolate",       desc: "70% cocoa, rich and smooth" },
        { name: "Oreo Cookies",         desc: "Classic cream-filled sandwich" },
        { name: "Butter Popcorn",       desc: "Movie-style buttery goodness" }
      ],
      qty: [20, 70]
    },
    {
      name: "Frozen",
      items: [
        { name: "French Fries",         desc: "Crispy golden classic fries" },
        { name: "Mixed Vegetables",     desc: "Carrot, peas, corn and beans" },
        { name: "Vanilla Ice Cream",    desc: "Creamy and rich classic flavor" },
        { name: "Aloo Paratha",         desc: "Ready-to-cook stuffed flatbread" },
        { name: "Green Peas",           desc: "Sweet and tender frozen peas" }
      ],
      qty: [8, 35]
    },
    {
      name: "Household",
      items: [
        { name: "Toilet Paper",         desc: "Soft, strong 3-ply rolls" },
        { name: "Dishwash Liquid",      desc: "Lemon fresh, cuts grease fast" },
        { name: "Laundry Detergent",    desc: "Top-load formula with fresh scent" },
        { name: "Garbage Bags",         desc: "Large, tear-resistant black bags" },
        { name: "Floor Cleaner",        desc: "Lavender fragrance, streak-free" }
      ],
      qty: [6, 25]
    }
  ];

  return categories.map(cat => ({
    id: id++,
    name: cat.name,
    expanded: false,
    items: cat.items.map(item => {
      const [min, max] = cat.qty;
      const quantity = Math.floor(Math.random() * (max - min + 1)) + min;

      return {
        id: id++,
        name: item.name,
        description: item.desc,
        quantity,
        price: Number((Math.random() * 12 + 0.99).toFixed(2)),
        status: quantity < 20 ? "Low Stock" : quantity > 60 ? "High Stock" : "In Stock",
        popularity: ["Best Seller", "Regular", "New"][Math.floor(Math.random() * 3)]
      };
    })
  }));
}