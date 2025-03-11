const API_URL = "http://localhost:2222"; // URL FastAPI

// Проверяем токен при загрузке страницы
document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
        redirectToLogin();
        return;
    }

    try {
        const response = await fetch(`${API_URL}/users/me/`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` },
        });

        if (!response.ok) throw new Error("Недействительный токен");

        // Если токен рабочий — оставляем пользователя на сайте
        console.log("✅ Токен подтверждён, доступ разрешён.");
    } catch (error) {
        console.warn("❌ Ошибка: " + error.message);
        logout(); // Очищаем токен и отправляем на авторизацию
    }
});

// Функция перенаправления на страницу авторизации
function redirectToLogin() {
    if (window.location.pathname !== "pages/auth.html") {
        window.location.href = "pages/auth.html";
    }
}

// Функция выхода (очищает токен и отправляет на авторизацию)
function logout() {
    localStorage.removeItem("access_token");
    redirectToLogin();
}
