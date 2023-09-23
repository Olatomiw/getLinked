function validateForm() {
    const teamName = document.getElementById('team_name').value;
    const phone = document.getElementById('phone_number').value;
    const email = document.getElementById('email').value;
    const projectName = document.getElementById('project_name').value;

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
    const data = Object.fromEntries(formData);

    // Create a JSON object
    const jsonData = {
        email: data.email,
        phone_number: data.phone_number,
        team_name: data.team_name,
        group_size: parseInt(data.group_size), // Parse as an integer if needed
        project_topic: data.project_topic,
        category: parseInt(data.category), // Parse as an integer if needed
        privacy_policy_accepted: data.privacy_policy_accepted === 'on', // Convert to boolean
    };

    // Specify the API URL
    const apiUrl = 'https://backend.getlinked.ai/hackathon/registration';

    // Send a POST request to the specified URL
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData), // Send the JSON data
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