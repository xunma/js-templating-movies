// 1. render movies with inner HTML
// const container = document.querySelector("#movies-container")

// if (container) {
//   let movies = ""
//   fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//     .then(response => response.json())
//     .then((data) => {
//       data.Search.forEach((result) => {
//         const movie = `
//           <li class="list-inline-item">
//             <img src="${result.Poster}" alt="${result.Title}">
//             <p>${result.Title}</p>
//           </li>`
//         movies += movie
//       })

//       container.innerHTML = `
//         <div class="container">
//           <h1>Harry Potter Movies 🪄</h1>
//           <div>${movies}</div>
//         </div>`
//     })
// }

// 2. fetch movies with createElement
const container = document.querySelector("#movies-container")

if (container) {
  container.classList.add("container")

  const h1 = document.createElement("h1")
  h1.textContent = "Harry Potter Movies"
  container.appendChild(h1)

  fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const li = document.createElement("li")
        li.className = "list-inline-item"

        const img = document.createElement("img")
        img.src = result.Poster

        const p = document.createElement("p")
        p.textContent = result.Title

        li.appendChild(img)
        li.appendChild(p)

        container.appendChild(li)
      })
    })
}
