document.addEventListener("DOMContentLoaded", function () {
    console.log("login.js is running");

    const loginForm = document.getElementById("login-form");
    if (!loginForm) {
        console.error("login-form not found");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            console.log("Login successful, redirecting...");

            // Store login state
            localStorage.setItem("loggedIn", "true");

            // Debug the redirect
            console.log("Redirecting to /shop.html");
            window.location.href = "/shop.html"; 
        } else {
            alert("Please enter both email and password.");
        }
    });
});
