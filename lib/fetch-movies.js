const { createApp, onMounted} = Vue;

  createApp({
      data() {
        return {
          movies: [],
          spinnerClass: ""
        }
      },
      methods: {
        fetchMovies() {
          fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
          .then(response => response.json())
          .then((data) => {
            this.movies = data.Search
            this.spinnerClass = "d-none";
          })
        }
    },
    created() {
      this.fetchMovies();
    }
  }).mount('#results')

// 1. render movies with `.insertAdjacentHTML`(comment out one of the examples to test)
// fetchMovies = () => {
//   const results = document.querySelector("#results")

//   if (results) {
    // fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
    //   .then(response => response.json())
    //   .then((data) => {
    //     data.Search.forEach((result) => {
//           const movieTag = `<li class="list-inline-item">
//             <img src="${result.Poster}" alt="">
//             <p>${result.Title}</p>
//           </li>`
//           results.insertAdjacentHTML("beforeend", movieTag)
//         })
//       })
//   }
// }


// // 2. fetch movies with createElement(comment out one of the examples to test)
// fetchMovies = () => {
//   const results = document.querySelector("#results")

//   if (results) {
//     fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//     .then(response => response.json())
//     .then((data) => {
//       data.Search.forEach((result) => {
//         const li = document.createElement("li")
//         li.className = "list-inline-item"

//         const img = document.createElement("img")
//         img.src = result.Poster

//         const p = document.createElement("p")
//         p.textContent = result.Title

//         li.appendChild(img) // can also use .insertAdjacentHTML ?
//         li.appendChild(p)
//         results.appendChild(li)
//       })
//     })
//   }
// }

// fetchMovies();
