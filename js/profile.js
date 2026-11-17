
let form = document.getElementById("profileForm");

if (form) {
    form.onsubmit = function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let title = document.getElementById("title").value;
        let email = document.getElementById("email").value;
        let about = document.getElementById("about").value;
        let skills = document.getElementById("skills").value;

        localStorage.setItem("name", name);
        localStorage.setItem("title", title);
        localStorage.setItem("email", email);
        localStorage.setItem("about", about);
        localStorage.setItem("skills", skills);

        alert("اطلاعات ذخیره شد");
    };
}
