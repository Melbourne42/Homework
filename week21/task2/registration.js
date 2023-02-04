  let errors = [];
function checkInputs(input) {
  let validity = input.validity
  if (validity.valueMissing){
    errors.push ('Поле ' + input.placeholder + ' не заполнено');
  }
  if (validity.patternMismatch){
    errors.push ('Неверный формат заполнения');
  }
  if (validity.tooShort){
    errors.push('Минимальное значение не может быть меньше чем 3');
  }
}
function checkAll(){
  errors = [];
  let inputs = document.querySelectorAll ("input")
  for (let input of inputs){
    checkInputs(input);
  }
  document.getElementById('errorsInfo').innerHTML = errors.join('.<br>')
  let user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password1: document.getElementById("password1").value,
    password2: document.getElementById("password2").value,
    phoneNumber: document.getElementById("number").value
  }
  fetch("https://httpbin.org/post",{
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
  })
  .then(response => response.json())
  .then (user => {
    console.log(user);
  })
  .catch(error => console.log(error))
}
document
    .getElementById("button")
    .addEventListener("click", () => checkAll());