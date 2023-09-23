document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    const jsonData = {
        first_name: data.first_name,
        email: data.email,
        message: data.message
    }

    const apiUrl = 'https://backend.getlinked.ai/hackathon/contact-form';
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
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
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Form submission failed. Please try again later.');
        })
})