document.addEventListener("DOMContentLoaded", function(event){
  let name=localStorage.getItem ('name');
  if (name!=null){
    document.getElementById("author").value = name;
  }
  let pic = localStorage.getItem ('pic')
  if (pic!=null){
    document.getElementById("pic").value = pic;
    document.getElementById ('img').setAttribute('src', pic)
  }
})
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
    let author = document.getElementById("author").value;
    if(localStorage.getItem('name') === null){
      localStorage.setItem('name', author)
    }
  }
  function addPic(){
    let pic = document.getElementById("pic").value
    if (localStorage.getItem ('pic') === null){
      localStorage.setItem ('pic', pic)
    }
    document.getElementById ('img').setAttribute('src', pic)
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
    
    document.getElementById ("add-pic").addEventListener ("click", () => addPic())