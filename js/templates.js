
let box = document.getElementById("templatesGrid");

if (box) {
    box.innerHTML = `
        <div>
            <h3>قالب ساده</h3>
            <button onclick="selectTemplate(1)">انتخاب</button>
        </div>

        <div>
            <h3>قالب حرفه ای</h3>
            <button onclick="selectTemplate(2)">انتخاب</button>
        </div>

        <div>
            <h3>قالب خلاقانه</h3>
            <button onclick="selectTemplate(3)">انتخاب</button>
        </div>
    `;
}

function selectTemplate(number) {
    localStorage.setItem("template", number);
    alert("قالب انتخاب شد");
}
