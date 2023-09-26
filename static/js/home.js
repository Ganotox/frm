document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const overlay = document.querySelector(".overlay");
    const loginModal = document.querySelector(".login-modal");
    const closeButton = document.querySelector(".close-button");
    const authButton = document.querySelector(".auth-button");
    const registerButton = document.querySelector(".register-button");
    const errorPopup = document.querySelector(".error-popup");

    loginButton.addEventListener("click", function () {
        overlay.style.display = "block";
        loginModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
        loginModal.style.display = "none";
    });

    authButton.addEventListener("click", function () {
        // Logic to switch to authentication form
    });

    registerButton.addEventListener("click", function () {
    // Redirect to the registration page
    window.location.href = "/register/"; // Здесь укажите реальный URL-путь к странице регистрации
    });

    // Handle error display logic
    // You may need AJAX requests for actual login and registration
});