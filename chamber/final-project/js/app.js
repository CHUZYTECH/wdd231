
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const filterButtons = document.querySelectorAll("#category-filter button");

  let menuItems = [];

  // Fetch the JSON data
  async function fetchMenu() {
    try {
      const response = await fetch("data/menu.json");
      if (!response.ok) throw new Error("Failed to load menu data");
      menuItems = await response.json();
      displayMenuItems(menuItems);
    } catch (error) {
      menuContainer.innerHTML = `<p class="error">Sorry, we couldn't load the menu items. Please try again later.</p>`;
      console.error(error);
    }
  }

  // Render menu cards
  function displayMenuItems(items) {
    if (items.length === 0) {
      menuContainer.innerHTML = `<p>No items found in this category.</p>`;
      return;
    }

    menuContainer.innerHTML = items
      .map(
        ({ id, name, price, description, image }) => `
      <article class="menu-card" aria-label="${name}">
        <img src="${image}" alt="${name}" loading="lazy" />
        <div class="menu-info">
          <h3>${name}</h3>
          <p class="price">$${price.toFixed(2)}</p>
          <p class="desc">${description}</p>
        </div>
      </article>`
      )
      .join("");
  }

  // Filter menu items by category
  function filterMenu(category) {
    if (category === "All") {
      displayMenuItems(menuItems);
    } else {
      const filtered = menuItems.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      displayMenuItems(filtered);
    }
  }

  // Handle filter button click
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"));
      // Add active to clicked button
      btn.classList.add("active");

      // Filter menu by selected category
      const category = btn.dataset.category;
      filterMenu(category);
    });
  });

  // Initial load - show all
  fetchMenu();
});


// 

// Example menu data (replace with your actual data)
const menuItems = [
  { id: 1, name: "Nkwobi", price: 20, category: "Delicacy", description: "Spicy cow foot delicacy served in a rich palm oil sauce.", image: "images/nkwobi.png" },
  { id: 2, name: "Goat Meat Pepper Soup", price: 18, category: "Soup", description: "Hot and spicy pepper soup made with tender goat meat.", image: "images/goat_meat.png" },
  { id: 3, name: "Bush Meat Pepper Soup", price: 22, category: "Soup", description: "A delicacy made from seasoned wild game in pepper soup broth.", image: "images/bush_meat.png" },
  { id: 4, name: "Oha Soup with Fufu", price: 15, category: "Soup", description: "Traditional Eastern soup made with Oha leaves and assorted meats.", image: "images/oha.png" },
  { id: 5, name: "Egusi Soup with Pounded Yam", price: 16, category: "Soup", description: "Ground melon seed soup with vegetables and assorted meats.", image: "images/egusi.png" },
  { id: 6, name: "Ofada Rice and Ayamase Sauce", price: 17, category: "Main", description: "Unpolished Ofada rice served with spicy green pepper sauce and assorted meats.", image: "images/ofada.png" },
  { id: 7, name: "Jollof Rice with Fried Chicken", price: 14, category: "Main", description: "Classic Nigerian jollof rice served with crispy fried chicken.", image: "images/jellof.png" },
  { id: 8, name: "Fried Rice with Moi Moi", price: 15, category: "Main", description: "Fried rice served with bean pudding and salad.", image: "images/fried_rice.png" },
  { id: 9, name: "Pounded Yam and Afang Soup", price: 16, category: "Soup", description: "Pounded yam served with delicious Afang soup rich in vegetables.", image: "images/poundedyam.png" },
  { id: 10, name: "Efo Riro", price: 14, category: "Soup", description: "Spicy spinach stew with assorted meats.", image: "images/efo.png" },
  { id: 11, name: "Suya", price: 10, category: "Grill", description: "Spicy grilled beef skewers with onions and pepper.", image: "images/suya.png" },
  { id: 12, name: "Yam Porridge", price: 12, category: "Main", description: "Soft yam cubes cooked in a rich tomato and pepper sauce.", image: "images/porage_yam.png" },
  { id: 13, name: "Okra Soup with Eba", price: 13, category: "Soup", description: "Delicious okra soup served with garri (eba).", image: "images/okra.png" },
  { id: 14, name: "Isi Ewu", price: 22, category: "Delicacy", description: "Spiced goat head dish served hot with utazi leaves.", image: "images/isi_ewu.png" },
  { id: 15, name: "Catfish Pepper Soup", price: 19, category: "Fish", description: "Steamy pepper soup made with fresh catfish.", image: "images/catfish.png" },
  { id: 16, name: "Grilled Turkey", price: 17, category: "Grill", description: "Well-seasoned grilled turkey wings.", image: "images/grilled_turkey.png" },
  { id: 17, name: "Akara and Pap", price: 10, category: "Breakfast", description: "Bean cakes served with pap (ogi).", image: "images/akara.png" },
  { id: 18, name: "Amala and Gbegiri Soup", price: 15, category: "Soup", description: "Yam flour served with gbegiri and ewedu soup.", image: "images/amala.png" },
  { id: 19, name: "Nigerian Shawarma", price: 12, category: "Snack", description: "Flame-grilled chicken shawarma with veggies and creamy sauce.", image: "images/shawarma.png" },
  { id: 20, name: "Beans and Plantain", price: 13, category: "Main", description: "Steamed beans served with fried plantain.", image: "images/beans.png" },
  { id: 21, name: "Moi Moi", price: 9, category: "Side", description: "Steamed bean pudding rich in flavor and protein.", image: "images/moimoi.png" },
  { id: 22, name: "White Rice and Stew", price: 13, category: "Main", description: "Boiled white rice served with spicy tomato stew.", image: "images/white_rice.png" },
  { id: 23, name: "Grilled Plantain (Boli)", price: 8, category: "Snack", description: "Charcoal-roasted plantain served with groundnut or pepper sauce.", image: "images/boli.png" },
  { id: 24, name: "Ukwa (Breadfruit)", price: 14, category: "Delicacy", description: "Boiled African breadfruit seasoned with local spices.", image: "images/ukwa.png" },
  { id: 25, name: "Grilled Pork Meat", price: 16, category: "Grill", description: "Tender pork pieces grilled with spices.", image: "images/grilled_pork.png" },
  { id: 26, name: "Snail Sauce", price: 18, category: "Delicacy", description: "Spicy stir-fried snails in pepper sauce.", image: "images/snail.png" },
  { id: 27, name: "Boiled Yam and Egg Sauce", price: 12, category: "Breakfast", description: "Soft yam with rich tomato-egg sauce.", image: "images/boiled_yam.png" },
  { id: 28, name: "Ram Meat Pepper Soup", price: 21, category: "Meat", description: "Pepper soup made with seasoned ram meat.", image: "images/ram_meat.png" },
  { id: 29, name: "Titus Fish Stew", price: 14, category: "Fish", description: "Titus mackerel fish in tomato-based stew.", image: "images/titus.png" },
  { id: 30, name: "Eba and Ogbono Soup", price: 14, category: "Soup", description: "Garri with draw soup made from ground ogbono seeds.", image: "images/eba.png" },
  { id: 31, name: "Jollof Spaghetti", price: 18, category: "Main", description: "Spaghetti cooked in rich jollof sauce with vegetables and meats.", image: "images/spag.png" },
  { id: 32, name: "Ekpang Nkukwo", price: 22, category: "Main", description: "Cocoyam pottage wrapped in vegetables, a delicacy from the Efik tribe.", image: "images/ekpang.png" },
  { id: 33, name: "Fisherman Soup", price: 27, category: "Fish", description: "Spicy soup loaded with fresh fish, periwinkle, and seafood.", image: "images/fisherman.png" },
  { id: 34, name: "Owo Soup with Starch", price: 20, category: "Main", description: "Delta-style soup made with palm oil and potash, served with starch.", image: "images/owo.png" },
  { id: 35, name: "Ewa Agoyin and Bread", price: 15, category: "Main", description: "Mashed beans with spicy pepper sauce served with agege bread.", image: "images/ewa.png" },
  { id: 36, name: "Catfish Pepper Soup", price: 22, category: "Soup", description: "Hot and spicy catfish soup for cold days and good vibes.", image: "images/catfish2.png" },
  { id: 38, name: "Asun (Spicy Goat Meat)", price: 21, category: "Delicacy", description: "Peppery grilled goat meat served hot.", image: "images/asun.png" },
  { id: 39, name: "Isi Ewu (Goat Head)", price: 25, category: "Delicacy", description: "Spicy and seasoned goat head delicacy served with palm oil sauce.", image: "images/isi_ewu2.png" },
  { id: 40, name: "Kilishi", price: 10, category: "Delicacy", description: "Spicy dried beef jerky, a popular northern Nigerian snack.", image: "images/kilishi.png" },
  { id: 41, name: "Boli and Groundnut", price: 10, category: "Snack", description: "Roasted plantain served with peanuts.", image: "images/boli.png" },
  { id: 42, name: "Akara and Pap", price: 13, category: "Breakfast", description: "Fried bean cakes served with fermented corn pudding.", image: "images/akara.png" },
  { id: 43, name: "Tuwo Shinkafa with Miyan Kuka", price: 23, category: "Main", description: "Northern Nigerian rice meal with baobab leaf soup.", image: "images/tuwo.png" }
];

// Cached DOM elements
const menuContainer = document.getElementById("menu-container");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll("#category-filter button");

let currentCategory = "All";

// Render menu items function
function renderMenu(items) {
  menuContainer.innerHTML = ""; // Clear existing

  if (items.length === 0) {
    menuContainer.innerHTML = "<p>No menu items match your criteria.</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style = "border:1px solid #ccc; padding:1rem; margin-bottom:1rem; border-radius:8px; display:flex; gap:1rem;";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100px; height:100px; object-fit:cover; border-radius:8px;" />
      <div>
        <h3>${item.name}</h3>
        <p><strong>Category:</strong> ${item.category}</p>
        <p>${item.description}</p>
        <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
      </div>
    `;

    menuContainer.appendChild(card);
  });
}

// Filter and sort logic
function filterAndSortMenu() {
  const searchTerm = searchInput.value.toLowerCase();
  const sortValue = sortSelect.value;

  // Filter by category first
  let filtered = menuItems.filter(item => 
    (currentCategory === "All" || item.category === currentCategory)
  );

  // Filter by search term (in name or description)
  filtered = filtered.filter(item => 
    item.name.toLowerCase().includes(searchTerm) || 
    item.description.toLowerCase().includes(searchTerm)
  );

  // Sort filtered results
  switch (sortValue) {
    case "price-asc":
      filtered.sort((a,b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a,b) => b.price - a.price);
      break;
    case "name-asc":
      filtered.sort((a,b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filtered.sort((a,b) => b.name.localeCompare(a.name));
      break;
  }

  renderMenu(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterAndSortMenu);
sortSelect.addEventListener("change", filterAndSortMenu);
categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    // Add to clicked
    button.classList.add("active");
    // Update category and filter/sort
    currentCategory = button.dataset.category;
    filterAndSortMenu();
  });
});

// Initial render
renderMenu(menuItems);
