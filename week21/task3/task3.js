postButton.onclick = function (e) {
    e.preventDefault();
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: new FormData(formElem),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
      });
  };