// Handle sign-in form submission
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    // Get values
    const user = document.getElementById('signin-username').value;
    const pass = document.getElementById('signin-password').value;

    // Simple "fake" check (For demonstration only)
    if(user === "nah" && pass === "nah") {
        // Success: Switch screens
        document.getElementById('signin-section').style.display = 'none';
        document.getElementById('homepage-container').style.display = 'block';
    } else {
        // Error: Show alert
        alert("Invalid Username or Password");
    }
});