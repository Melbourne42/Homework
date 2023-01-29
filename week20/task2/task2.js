document.addEventListener("DOMContentLoaded", function (event) {
  getInfo();
});
function getInfo() {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=cTlskqDHn4Ln8fkmIjYjbsyjTqfZ5cGlGLnZGTGv"
  )
    .then((response) => response.json())
    .then((info) => {
      console.log(info);
      document.querySelector(".title").innerText = info.title;
      document.querySelector(".date").innerText = info.date;
      document.querySelector(".hdurl").src = info.hdurl;
      document.querySelector(".explanation").innerText = info.explanation;
    });
}