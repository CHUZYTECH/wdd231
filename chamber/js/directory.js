const url = 'data/members.json';
const container = document.querySelector('.cards');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.members.forEach((member) => {
      const card = document.createElement('section');
      card.classList.add('member-card');

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership">${member.membership} Member</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('Error fetching member data:', error);
  });

  // Spotlight Logic
fetch("data/members.json") // Adjust the path if your file is in a folder like 'data'
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const spotlightContainer = document.getElementById("spotlight-container");

    if (!spotlightContainer) {
      console.error("Spotlight container not found in HTML");
      return;
    }

    // Filter only Gold and Silver members
    const spotlightMembers = data.members.filter(member =>
      member.membership === "Gold" || member.membership === "Silver"
    );

    // Randomly select up to 3 unique spotlight members
    const selectedMembers = [];
    const maxSpotlights = Math.min(3, spotlightMembers.length);

    while (selectedMembers.length < maxSpotlights) {
      const index = Math.floor(Math.random() * spotlightMembers.length);
      const selected = spotlightMembers.splice(index, 1)[0];
      selectedMembers.push(selected);
    }

    // Create and append cards
    selectedMembers.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} Logo" />
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      spotlightContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading member spotlight:", error);
  });
