function validateForm() {
    const teamName = document.getElementById('team-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const projectName = document.getElementById('project-name').value;

    // Regular expressions for validation
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (teamName.trim() === "") {
        alert("Please enter Team Name");
        return false;
    }

    if (!phone.match(phoneRegex)) {
        alert("Please enter a valid phone number (10 digits)");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (projectName.trim() === "") {
        alert("Please enter Project Name");
        return false;
    }

    return true;
}
document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Form data
    const formData = new FormData(this);

    // Replace "{{baseUrl}}" with your actual base URL
    const baseUrl = 'https://backend.getlinked.ai/hackathon/registration'; // Replace with your actual base URL

    // Send a POST request to the specified URL
    fetch("https://backend.getlinked.ai/hackathon/registration", {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the response data here if needed
        console.log(data);
        alert('Registration successful!');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Registration failed. Please try again later.');
    });
});