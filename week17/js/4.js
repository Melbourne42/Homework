const min = document.getElementById("min");
const max = document.getElementById("max");
const average = document.getElementById("average");
const sum = document.getElementById("sum");
const multi = document.getElementById("multi");
const gen = document.getElementById("gen");

function getRandomNumbers(min, max) {
  let numbers = [];
  while (numbers.length < 10) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(number);
  }
  gen.value = numbers;
  getMin(numbers);
  getMax(numbers);
  getSum(numbers);
  getMulti(numbers);
}
function getMin(numbers) {
  min.value = Math.min(...numbers);
}
function getMax(numbers) {
  max.value = Math.max(...numbers);
}
function getSum(numbers) {
  let sumInfo = numbers.reduce((a, b) => a + b, 0);
  sum.value = sumInfo;
  getAverage(numbers, sumInfo);
}
function getAverage(numbers, sum) {
  let averageInfo = sum / numbers.length;
  average.value = averageInfo;
}
function getMulti(numbers) {
  let multiInfo = numbers.reduce((a, b) => a * b);
  multi.value = multiInfo;
}
document
  .getElementById("button")
  .addEventListener("click", () => getRandomNumbers(-10, 10));