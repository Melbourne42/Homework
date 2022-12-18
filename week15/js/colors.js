function color() {
    if (document.getElementById("theme").value == "dark") {
      document.body.style.backgroundColor = "DimGrey";
    } else if (document.getElementById("theme").value == "light") {
      document.body.style.backgroundColor = "Bisque";
    } else if (document.getElementById("theme").value == "light") {
      document.body.style.backgroundColor = "Bisque";
    } else if (document.getElementById("theme").value == "blue") {
        document.body.style.backgroundColor = "LightSkyBlue";
  } else {
    document.body.style.backgroundColor = "White";
  }
}