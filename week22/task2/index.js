const moment = require('moment');
const Chart = require('chart.js');
const choreographer = require ('choreographer-js');
const multiple = require('multiple.js')({
    selector: '.item',
    background: 'linear-gradient(#c5c5e4, #8B4256)'
  });
;

let speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

let speedData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [{
    label: "Weekly Activity",
    data: [0, 59, 75, 20, 20, 55, 40],
  }]
};

let chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

let lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

let densityCanvas = document.getElementById("densityChart");
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var densityData = {
    label: "Tasks",
  data: [34, 32, 25, 25, 13, 25, 12]
};
let tasksData = {
        label: "In progress",
        data: [12, 30, 15, 7, 15, 18, 6],
        backgroundColor: "rgba(146, 80, 212, 1)",
}
let barChart = new Chart(densityCanvas, {
  type: 'bar',
  label: "Task",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [densityData, tasksData]
  }
});

let nowMoment = moment();
moment.locale('ru');
let displayMoment = document.getElementById('todaysDate');
displayMoment.innerHTML = nowMoment.format('MMMM Do YYYY, h:mm:ss a');