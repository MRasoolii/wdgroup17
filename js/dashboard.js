
let name = localStorage.getItem("name");

let dashboardName = document.getElementById("dashboardName");
let profileStatus = document.getElementById("profileStatus");
let templateStatus = document.getElementById("templateStatus");

if (dashboardName) {
    dashboardName.innerHTML = name || "کاربر عزیز";
}

if (profileStatus) {
    if (name) {
        profileStatus.innerHTML = "تکمیل شده";
    } else {
        profileStatus.innerHTML = "تکمیل نشده";
    }
}

if (templateStatus) {
    if (localStorage.getItem("template")) {
        templateStatus.innerHTML = "قالب انتخاب شده";
    } else {
        templateStatus.innerHTML = "قالب انتخاب نشده";
    }
}
