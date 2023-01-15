document.addEventListener("DOMContentLoaded", function (event) {
    let message = localStorage.getItem("message");
    if (message != null) {
      document.getElementById("result").innerHTML = message;
    }
  });
  function sendText() {
    let textarea = document.getElementById("text").value;
    const ul = document.querySelector("ul.result");
    const li = document.createElement("li");
    if (textarea !== "") {
      li.innerText = textarea;
      ul.append(li);
      localStorage.setItem("message", ul.innerHTML);
    }
  }
  document
    .getElementById("button")
    .addEventListener("click", () => sendText());