
let themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
    themeBtn.onclick = function () {
        document.body.classList.toggle("dark-mode");
    };
}

let logout = document.getElementById("logoutBtn");

if (logout) {
    logout.onclick = function () {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    };
}

let login = document.getElementById("loginForm");

if (login) {
    login.onsubmit = function (event) {
        event.preventDefault();
        localStorage.setItem("isLoggedIn", "yes");
        window.location.href = "dashboard.html";
    };
}
