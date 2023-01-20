const container = document.querySelector("#movies-container")

// 1. render movies with inner HTML
if (container) {
  let movies = ""
  fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      data.Search.forEach((result) => {
        const movie = `
          <li class="list-inline-item">
            <img src="${result.Poster}" alt="${result.Title}">
            <p>${result.Title}</p>
          </li>`
        movies += movie
      })

      container.innerHTML = `
        <div class="container">
          <h1>Harry Potter Movies 🪄</h1>
          <div>${movies}</div>
        </div>`
    })
}

// 2. fetch movies with createElement
