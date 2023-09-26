document.addEventListener("DOMContentLoaded", function () {
    const password1 = document.getElementById("password1");
    const passwordStrength = document.getElementById("passwordStrength");
    const passwordLengthWarning = document.getElementById("passwordLengthWarning");

    password1.addEventListener("input", () => {
        const password = password1.value;
        let strength = 0;

        // Проверка на наличие большой буквы
        if (/[A-Z]/.test(password)) {
            strength++;
        }

        // Проверка на наличие специального символа (например, !, @, #)
        if (/[!@#]/.test(password)) {
            strength++;
        }

        // Проверка на наличие цифры
        if (/\d/.test(password)) {
            strength++;
        }

        // Проверка на длину пароля
        if (password.length >= 8) {
            strength++;
        }

        // Определение уровня сложности
        switch (strength) {
            case 0:
                passwordStrength.textContent = "Слабый пароль";
                passwordStrength.style.color = "#FF0000";
                passwordLengthWarning.style.display = "block";
                break;
            case 1:
                passwordStrength.textContent = "Средний пароль";
                passwordStrength.style.color = "#FFA500";
                passwordLengthWarning.style.display = "block";
                break;
            case 2:
            case 3:
            case 4:
                passwordStrength.textContent = "Сильный пароль";
                passwordStrength.style.color = "#008000";
                passwordLengthWarning.style.display = "none";
                break;
        }
    });

    function validatePassword() {
        const password = password1.value;
        const confirmPassword = document.getElementById("password2").value;

        if (password !== confirmPassword) {
            document.getElementById("passwordMismatch").style.display = "block";
            return false;
        }

        if (passwordStrength.textContent === "Слабый пароль" || passwordLengthWarning.style.display === "block") {
            alert("Пароль не соответствует правилам.");
            return false;
        }

        return true;
    }

    const form = document.querySelector("form");
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Здесь добавьте проверку на правильность введенных данных
        if (validatePassword()) {
    // Открываем новое окно с подтверждением
    const confirmationWindow = window.open("/confirmation/", "_blank");

    // Закрываем окно подтверждения через 20 секунд
    setTimeout(function () {
        confirmationWindow.close();
        window.location.href = "/";
    }, 20000);

    // Выводим сообщение об успешной регистрации на текущей странице
    successMessage.style.display = "block";
}
    });
});
