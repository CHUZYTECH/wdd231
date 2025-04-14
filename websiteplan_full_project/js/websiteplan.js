document.addEventListener("DOMContentLoaded", function () {
    // ===== MENU TOGGLE FUNCTIONALITY =====
    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('navMenu');
    
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      menuButton.textContent = navMenu.classList.contains('hidden') ? '☰' : '✖';
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        // Set current year
        document.getElementById("currentyear").textContent = new Date().getFullYear();
        
        // Set last modified date
        document.getElementById("lastModification").textContent = "Last Modification: " + document.lastModified;
    });
    
   
    // ===== FORM HANDLING =====
    const contactForm = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            
            // Get form values
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            // Validate form
            if (name === "" || email === "" || message === "") {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.style.color = "red";
                return;
            }

            // Simulate form submission success
            formMessage.textContent = "Thank you for reaching out, " + name + "! We'll get back to you soon.";
            formMessage.style.color = "green";

            // Clear form fields
            contactForm.reset();
        });
    }

    // ===== TESTIMONIAL MANAGEMENT =====
    const testimonialForm = document.querySelector("#testimonial-form");
    const testimonialList = document.querySelector("#testimonial-list");

    if (testimonialForm && testimonialList) {
        testimonialForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const userName = document.querySelector("#user-name").value;
            const userMessage = document.querySelector("#user-testimonial").value;

            if (userName === "" || userMessage === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Create a new testimonial element
            const testimonialItem = document.createElement("div");
            testimonialItem.classList.add("testimonial-item");
            testimonialItem.innerHTML = `
                <p><strong>${userName}:</strong> ${userMessage}</p>
            `;

            // Append the testimonial to the list
            testimonialList.appendChild(testimonialItem);

            // Reset the form
            testimonialForm.reset();
        });
    }
});
