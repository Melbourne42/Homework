  let error = false;
function checkInputs() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const phoneNumber = document.getElementById("number").value;
if (username === "") {
    document.getElementById("error1").innerHTML = "Заполните поле!";
    error = true;
  }
  else{
    document.getElementById("error1").innerHTML = "";
    error = false
  }
  if (email === "") {
    document.getElementById("error2").innerHTML = "Заполните поле!";
    error = true;
  }
  else{
    document.getElementById("error2").innerHTML = "";
    error = false
  }
  if (phoneNumber === "") {
    document.getElementById("error5").innerHTML = "Заполните поле!";
    error = true;
  }
  else{
    document.getElementById("error5").innerHTML = "";
    error = false
  }
  if (password1 === "") {
    document.getElementById("error3").innerHTML = "Заполните поле!";
    error = true;
  }else if(password1.length <= 4) {
    document.getElementById("error3").innerHTML =
      "В пароле должно быть больше 4 символов";
    error = true;
  }else if(password1 !== password2){
    document.getElementById("error4").innerHTML = "Пароли не совпадают!";
    error = true;
  }
  else{
    document.getElementById("error3").innerHTML = "";
    error = false
  }
  if (password2 === "") {
    document.getElementById("error4").innerHTML = "Заполните поле!";
    error = true;
  }else if(password1 !== password2){
    document.getElementById("error4").innerHTML = "Пароли не совпадают!";
    error = true;
  }
  else{
    document.getElementById("error4").innerHTML = "";
    error = false
  }
  if (!error) {
    document.getElementById("welcome").innerHTML = `Добро пожаловать, ${username}!`;
  }
}