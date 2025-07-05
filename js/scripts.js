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

// course.js (Handles course filtering & credit calculation)
const courses = [
    { name: "WDD 231", type: "WDD", credits: 3, completed: false },
    { name: "CSE 110", type: "CSE", credits: 3, completed: false },
    { name: "WDD 131", type: "WDD", credits: 3, completed: false },
    { name: "CSE 111", type: "CSE", credits: 3, completed: true },
    { name: "CSE 210", type: "CSE", credits: 3, completed: true },
    { name: "WDD 130", type: "WDD", credits: 3, completed: true }
];

function displayCourses(filteredCourses) {
    const container = document.getElementById("courses-container");
    container.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card ${course.completed ? "completed" : ""}`;

        card.innerHTML = `
            <div class="course-content">
                ${course.completed ? "<span class='status'>✔</span>" : ""}
                <div class="course-details">
                    <h3>${course.name}</h3>
                    <p><strong>Credits:</strong> ${course.credits}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("total-credits").textContent = totalCredits;
}

function filterCourses(type) {
    if (type === "all") {
        displayCourses(courses);
    } else {
        displayCourses(courses.filter(course => course.type === type));
    }
}

// Initial Load
displayCourses(courses);

// Code for Date Modification
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastUpdate").textContent = "Last Modified: " + document.lastModified;
