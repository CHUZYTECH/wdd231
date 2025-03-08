// navigation.js (Handles responsive menu)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav");
});

// date.js (Handles footer year & last modified date)
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastUpdate").textContent = "Last Update: " + document.lastModified;

// course.js (Handles course filtering & credit calculation)
const courses = [
    { name: "WDD 231 - Web Frontend Development", type: "WDD", credits: 3, completed: false },
    { name: "CSE 110 - Programming Principles", type: "CSE", credits: 3, completed: false },
    { name: "WDD 131 - Software Development", type: "WDD", credits: 3, completed: false },
    { name: "CSE 111 - Software Development", type: "CSE", credits: 3, completed: true },
    { name: "CSE 210 - Software Development", type: "CSE", credits: 3, completed: true },
    { name: "WDD 130 - Web Fundamentals", type: "WDD", credits: 3, completed: true }
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
