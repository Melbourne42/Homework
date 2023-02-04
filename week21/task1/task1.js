let container = document.querySelector(".container");
function searchGif() {
    let gifName = document.getElementById("search_gif").value;
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=cvWfHIAnHUcTDUnkFgETxx8OU8dvsRBW&q=" +
        gifName +
        "&limit=5&offset=0&rating=g&lang=en"
    )
      .then((response) => response.json())
      .then((gif) => {
        let date = gif.data
        const oldGifContainer = container.querySelector('.container0')
        let container0 = document.createElement("div")
        container0.classList.add("container0")
        for (let d of date){
          let pic = document.createElement("img");
          pic.src = d.images.fixed_width.url;
          container0.append (pic)
        }
        if(oldGifContainer){
          container.replaceChild(container0, oldGifContainer )
        }else{
        container.append(container0)}
      });
  }
  document
    .getElementById("button")
    .addEventListener("click", () => searchGif());