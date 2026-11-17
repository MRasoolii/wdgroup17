
let name = document.getElementById("previewName");
let title = document.getElementById("previewTitle");
let email = document.getElementById("previewEmail");
let about = document.getElementById("previewAbout");
let skills = document.getElementById("previewSkills");
let template = document.getElementById("previewTemplate");

if (name) name.innerHTML = localStorage.getItem("name") || "نام شما";
if (title) title.innerHTML = localStorage.getItem("title") || "عنوان شغلی";
if (email) email.innerHTML = localStorage.getItem("email") || "ایمیل";
if (about) about.innerHTML = localStorage.getItem("about") || "درباره من";
if (skills) skills.innerHTML = localStorage.getItem("skills") || "مهارت ها";
if (template) template.innerHTML = localStorage.getItem("template") || "قالب انتخاب نشده";
