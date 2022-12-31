const numbers = [];
function checkNumbers(a, b) {
  return a - b;
}
function sumInput() {
  let value = document.querySelector(".input").value;
  numbers.push(+value);
  let sum = 0;
  for (let number of numbers) {
    sum += +number;
  }
  numbers.sort(checkNumbers);
  alert(sum);
  return sum;
}