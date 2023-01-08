function getInfo() {
    let info = document.getElementById("info").value;
    let surnameInput = document.getElementById("surname");
    let nameInput = document.getElementById("name");
    let patronymicInput = document.getElementById("patronymic");
    if (info) {
      let cleanInfo = info
        .trim()
        .toLowerCase()
        .split(" ")
        .filter((item) => item !== "");
      const surname = formatInfo(cleanInfo[0]);
      const name = formatInfo(cleanInfo[1]);
      const patronymic = formatInfo(cleanInfo[2]);
      surnameInput.value = surname;
      nameInput.value = name;
      patronymicInput.value = patronymic;
    }
  }
  function formatInfo(info) {
    return info[0].toUpperCase() + info.slice(1);
  }

  document
    .getElementById("button")
    .addEventListener("click", () => getInfo());