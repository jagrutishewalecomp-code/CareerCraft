// Function to sync service card selection with form dropdown
function selectService(serviceName) {
    const serviceDropdown = document.getElementById('service');
    serviceDropdown.value = serviceName;
    
    // Smooth scroll to the form
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission with Feedback UI
document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button');
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    // Simulate small delay for professional feel
    setTimeout(() => {
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const email = document.getElementById('email').value;

        // mailto link construction
        const subject = `New Order: ${service} for ${name}`;
        const body = `Hi CareerCraft,\n\nI want to order the ${service} plan.\n\nName: ${name}\nEmail: ${email}\n\nPlease contact me for the next steps.`;
        
        window.location.href = `mailto:contact@careercraft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Show success state
        document.getElementById('resumeForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }, 800);
});

function resetForm() {
    document.getElementById('resumeForm').reset();
    document.getElementById('resumeForm').classList.remove('hidden');
    document.getElementById('successMessage').classList.add('hidden');
    const submitBtn = document.querySelector('#resumeForm button');
    submitBtn.innerText = "Submit Application";
    submitBtn.disabled = false;
}
