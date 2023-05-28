function checkSpam() {
    const str = document.getElementById("textarea").value;
    let str2 = str.toLowerCase();
    if (str) {
        if (str2.includes("viagra")) {
            const str3 = str.replace(/viagra/i, "***");
            showMessage(str3);
        } else if (str2.includes("xxx")) {
            const str3 = str.replace(/xxx/i, "***");
            showMessage(str3);
        } else {
            showMessage(str);
        }
    }
}
function showMessage(str3) {
    const ul = document.querySelector("ul.result");
    const li = document.createElement("li");
    li.innerText = str3;
    ul.append(li);
}
document
    .getElementById("button")
    .addEventListener("click", () => checkSpam());