document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            // Simulating a successful login
            alert("Login successful! Redirecting...");

            // Redirecting to another page (modify as needed)
            window.location.href = "shop.html"; 
        } else {
            alert("Please enter both email and password.");
        }
    });
});
