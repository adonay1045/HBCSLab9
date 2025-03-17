document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    // Redirect logged-in users directly to shop.html
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "shop.html";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            // Simulate successful login by storing a flag
            localStorage.setItem("loggedIn", "true");

            // Redirect user to the shop page
            window.location.href = "shop.html";
        } else {
            alert("Please enter both email and password.");
        }
    });
});
