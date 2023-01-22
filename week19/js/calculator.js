let num1 = 1;
let num2 = 3;
const resultInput = document.getElementById("result");
const error = document.getElementById ('error')
class Calculator{
  static plus (){
    return +num1 + +num2;
  }
  static minus(){
    return num1 - num2
  }
  static multiply(){
    return num1 * num2;
  }
  static divide(){
    return num1 / num2;
  }
}

function getNumbers() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
}
function plus() {
  getNumbers();
  let result = Calculator.plus(num1, num2);
  finalResult(result);
  console.log (result)
}
function minus() {
  getNumbers();
  let result = Calculator.minus (num1, num2)
  finalResult(result);
}
function multiply() {
  getNumbers();
  let result = Calculator.multiply (num1, num2)
  finalResult(result);
}
function divide() {
  getNumbers();
  let result = Calculator.divide (num1, num2)
  finalResult(result);
  divideError(num2)
}
function finalResult(result) {
  resultInput.value = result;
}

function divideError(num2){
  if (num2 == 0){
    error.innerHTML+="На 0 делить нельзя!"
  }
  else {
    error.innerHTML=""
  }
}

