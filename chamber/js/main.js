const container = document.getElementById('discover-grid');
const visitMessage = document.getElementById('visit-message');

// Fetch the JSON data from /data/discover.json
fetch('data/discover.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Loop through the data and create cards
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <figure>
          <img src="${item.image}" alt="${item.name}">
        </figure>
        <div class="card-content">
          <h2>${item.name}</h2>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <a href="${item.website}" target="_blank">
            <button>Learn More</button>
          </a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading discover.json:", error);
    container.innerHTML = "<p>Failed to load data.</p>";
  });

// LocalStorage visit message logic
const lastVisit = localStorage.getItem('last-visit');
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (diffDays === 1) {
    visitMessage.textContent = `You last visited 1 day ago.`;
  } else {
    visitMessage.textContent = `You last visited ${diffDays} days ago.`;
  }
}

localStorage.setItem('last-visit', now);


// Set the current year dynamically in the element with id="year"
document.getElementById("year").textContent = new Date().getFullYear();

// Display the last modified date of the document in the element with id="lastUpdate"
document.getElementById("lastUpdate").textContent =
  "Last updated: " + document.lastModified;
