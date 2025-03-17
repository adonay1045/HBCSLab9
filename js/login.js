document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    // Check if the user is already logged in and redirect to shop.html
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "shop.html";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            // Store login status
            localStorage.setItem("loggedIn", "true");

            // 🚀 Force redirect to shop.html
            window.location.replace("shop.html");
        } else {
            alert("Please enter both email and password.");
        }
    });
});
