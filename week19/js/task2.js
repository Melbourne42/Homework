class Cat {
    constructor(catName, name, contact, breed, food, gender) {
      this.catName = catName;
      this.name = name;
      this.contact = contact;
      this.breed = breed;
      this.food = food;
      this.gender = gender;
    }
  }
  function getInfo() {
    let catName1 = document.getElementById("catName").value;
    let name1 = document.getElementById("name").value;
    let contact1 = document.getElementById("contact").value;
    let breed0 = document.getElementById("breed");
    let breed1 = breed0.options[breed0.selectedIndex].text;
    let food1 = document.getElementsByClassName("food");
    let feed = [];
    for (let i = 0; i < food1.length; i++) {
      if (food1[i].checked) {
        feed.push(food1[i].value);
      }
    }
    let gender = document.getElementsByClassName("gender");
    let sex;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        sex = gender[i].value;
      }
    }
    let myCat = new Cat(catName1, name1, contact1, breed1, feed, sex);
    console.log(myCat);
  }
  document
    .getElementById("button")
    .addEventListener("click", () => getInfo());