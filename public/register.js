// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Convert form data to URL-encoded format
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const email = document.getElementById('email').value;

    const data = {username, password, email}

    try {
        // Send a POST request to the registration endpoint
        const response = await fetch('/register', {  // Corrected URL path
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Registration successful, redirect to login page
            alert('Registration successful! Please log in.');
            window.location.href = 'login.html'; // Correct redirection to login page
        } else {
            // Handle failed registration
            const errorText = await response.text();
            alert('Registration failed: ' + errorText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    }
});
