// Code for Navigation
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("primaryNav").classList.toggle("show");
});

const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("primaryNav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("hide");

    // Toggle between hamburger (☰) and cancel (×)
    if (hamburger.textContent === "☰") {
      hamburger.textContent = "✖";
    } else {
      hamburger.textContent = "☰";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Fetch food items from JSON
  fetch("data/foods.json")
    .then((res) => res.json())
    .then((data) => {
      displayMenuItems(data);

      // Add filtering logic
      filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const category = btn.getAttribute("data-category");
          const filtered = category === "All" ? data : data.filter(item => item.category === category);
          displayMenuItems(filtered);
        });
      });
    })
    .catch((err) => console.error("Failed to load menu:", err));

  function displayMenuItems(items) {
    menuContainer.innerHTML = "";

    if (items.length === 0) {
      menuContainer.innerHTML = "<p>No meals found for this category.</p>";
      return;
    }

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="menu-price">₦${item.price}</div>
        </div>
      `;
      menuContainer.appendChild(card);
    });
  }
});


  // Code for Date Modification
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastUpdate").textContent = "Last Modified: " + document.lastModified;
