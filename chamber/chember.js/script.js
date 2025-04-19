document.getElementById("membershipForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate phone number for 11 digits
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 11 digits.");
        return;
    }

    // Set timestamp
    document.getElementById("timestamp").value = new Date().toISOString();

    // Collect form data
    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        businessName: document.getElementById("businessName").value,
        membershipLevel: document.getElementById("membershipLevel").value,
        description: document.getElementById("description").value,
        timestamp: new Date().toISOString()
    };

    // Log the form data before storing it
    console.log(formData);

    // Use sessionStorage instead of localStorage
    sessionStorage.setItem('membershipData', JSON.stringify(formData));

    // Show success alert
    alert("Form submitted successfully!");

    // Redirect to thankyou.html
    window.location.href = 'thankyou.html';
});

// When the thank you page is loaded, populate data from sessionStorage
window.addEventListener('DOMContentLoaded', (event) => {
    const formData = JSON.parse(sessionStorage.getItem('membershipData'));

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
});
