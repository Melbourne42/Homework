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
}