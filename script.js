/**
 * CareerCraft - Client Side Logic
 */

// Handle service selection from buttons to update form dropdown
function selectService(serviceName) {
    const serviceDropdown = document.getElementById('service');
    serviceDropdown.value = serviceName;
}

// Form Submission Handling
document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect Form Data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        branch: document.getElementById('branch').value,
        year: document.getElementById('year').value,
        target: document.getElementById('target').value,
        service: document.getElementById('service').value,
        details: document.getElementById('details').value
    };

    // Construct Mailto Link
    const subject = encodeURIComponent(`New CareerCraft Order: ${formData.service}`);
    const body = encodeURIComponent(
        `Order Details:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Branch: ${formData.branch}\n` +
        `Year: ${formData.year}\n` +
        `Target: ${formData.target}\n` +
        `Service: ${formData.service}\n` +
        `Notes: ${formData.details}`
    );

    // Open email client
    window.location.href = `mailto:contact@careercraft.com?subject=${subject}&body=${body}`;

    // Show Success UI
    document.getElementById('resumeForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
});

// Reset Form to allow new submissions
function resetForm() {
    document.getElementById('resumeForm').reset();
    document.getElementById('resumeForm').classList.remove('hidden');
    document.getElementById('successMessage').classList.add('hidden');
}

// Simple Sticky Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});
