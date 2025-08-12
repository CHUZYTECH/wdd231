document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menuContainer");

  // Fetch menu data from JSON
  fetch("data/index.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load menu data");
      return response.json();
    })
    .then(menuItems => {
      renderMenuPreview(menuItems);
    })
    .catch(error => {
      console.error("Error loading menu:", error);
      menuContainer.innerHTML = "<p>Unable to load menu at this time.</p>";
    });

  // Render menu preview cards
  function renderMenuPreview(menuItems) {
    menuContainer.innerHTML = "";
    menuItems.forEach(item => {
      const card = document.createElement("article");
      card.className = "menu-card";
      card.setAttribute("tabindex", "0");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="menu-card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">$${item.price.toFixed(2)}</p>
        </div>
      `;
      menuContainer.appendChild(card);
    });
  }
});
