// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("membershipForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const phone = document.getElementById("phone").value;
            const phonePattern = /^[0-9]{11}$/;
            if (!phonePattern.test(phone)) {
                alert("Phone number must be exactly 11 digits.");
                return;
            }

            const timestamp = new Date().toISOString();
            document.getElementById("timestamp").value = timestamp;

            const formData = {
                fullName: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: phone,
                businessName: document.getElementById("businessName").value,
                membershipLevel: document.getElementById("membershipLevel").value,
                description: document.getElementById("description").value,
                timestamp: timestamp
            };

            console.log("Form Data:", formData);

            sessionStorage.setItem("membershipData", JSON.stringify(formData));

            alert("Form submitted successfully!");
            window.location.href = "thankyou.html";
        });
    }

    // Handle thankyou.html display
    const displayName = document.getElementById("displayName");
    if (displayName) {
        const formData = JSON.parse(sessionStorage.getItem("membershipData"));
        if (formData) {
            document.getElementById("displayName").textContent = formData.fullName || 'N/A';
            document.getElementById("displayEmail").textContent = formData.email || 'N/A';
            document.getElementById("displayPhone").textContent = formData.phone || 'N/A';
            document.getElementById("displayBusiness").textContent = formData.businessName || 'N/A';
            document.getElementById("displayLevel").textContent = formData.membershipLevel || 'N/A';
            document.getElementById("displayDescription").textContent = formData.description || 'N/A';
            document.getElementById("displayTimestamp").textContent = new Date(formData.timestamp).toLocaleString();
        } else {
            document.querySelector(".thankyou-wrapper").innerHTML = "<p>No data found. Please fill out the form first.</p>";
        }
    }
});
