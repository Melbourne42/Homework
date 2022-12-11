let num1 = 1;
let num2 = 3;
const resultInput = document.getElementById("result");
function numbers() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
}
function plus() {
  numbers();
  let result = +num1 + +num2;
  final(result);
}
function minus() {
  numbers();
  let result = +num1 - num2;
  final(result);
}
function multiply() {
  numbers();
  let result = +num1 * num2;
  final(result);
}
function divide() {
  numbers();
  let result = +num1 / +num2;
  final(result);
}
function final(result) {
  resultInput.value = result;
}