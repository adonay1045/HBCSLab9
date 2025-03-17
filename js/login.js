document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            // Store login state
            localStorage.setItem("loggedIn", "true");

            // Force redirect to shop.html
            window.location.href = "/shop.html"; 
        } else {
            alert("Please enter both email and password.");
        }
    });
});
