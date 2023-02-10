import Mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"

// const fetchMovies = (url) => {
//   fetch(url)
//   .then(response => response.json())
//   .then((data) => {
  //     return { "movies": data.Search}
  //   })
  // }

  // SIMPLE VERSION - EXACT SAME EXAMPLE AS BEFORE

  // 2 sections of movies
const results = document.querySelector("#container")
const template = `
  <h1 class="text-center">{{title}}</h1>
  <ul>
    {{#movies}}
      <li class="list-inline-item">
        <img src={{Poster}} alt="">
        <p>{{Title}}</p>
      </li>
    {{/movies}}
  </ul>`;

fetch("http://www.omdbapi.com/?s=love&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    const movieData = { "movies": data.Search, "title": "Movies about Love" }
    const output = Mustache.render(template, movieData);
    results.insertAdjacentHTML('beforeend', output)
  })

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    const movieData = { "movies": data.Search, "title": "Harry Potter Movies"}
    const output = Mustache.render(template, movieData);
    results.insertAdjacentHTML('beforeend', output)
  })
// COMPLEX VERSION - a more complex usage to leverage the power of templating engines

// 1. Deal with movies that have no posters -> render default image
// 2. Don't render if the movie type is a series


// VERSION 1

// fetch("http://www.omdbapi.com/?s=coding&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     const view = {
//       "movies": data.Search,
//       "poster": function() {
//         if (this.Poster === "N/A") {
//           return "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=350"
//         } else {
//           return this.Poster
//         }
//       },
//       "shouldRender": function() {
//         return this.Type === "movie"
//       }
//     }

//     const output = Mustache.render('{{#movies}}{{#shouldRender}}<li class="list-inline-item"><img src="{{poster}}" alt=""></img><p class="text-center">{{Title}} - {{Type}}</p></li>{{/shouldRender}}{{/movies}}', view);
//     results.innerHTML = output;
//   })


// // VERSION 2
// fetch("http://www.omdbapi.com/?s=coding&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     const view = {
//       "movies": data.Search,
//       "poster": function() {
//         if (this.Poster === "N/A") {
//           return "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=350"
//         } else {
//           return this.Poster
//         }
//       },
//       "shouldRender": function() {
//         return this.Type === "movie"
//       },
//       "movieTag": function() {g
//         return function(text, render) {
//           return `<li class="list-inline-item"><img src="${render(text)}" alt=""></img><p class="text-center">${this.Title} - ${this.Type}</p></li>`
//         }
//       }
//     }

//     const output = Mustache.render("{{#movies}}{{#shouldRender}}{{#movieTag}}{{poster}}{{/movieTag}}{{/shouldRender}}{{/movies}}", view);
//     results.innerHTML = output;
//   })


// 知识点
// view can contain values and functions

// {{ }} -> tag delimiter(by default escapes HTML)
// {{{ }}} or {{& }} -> unescape HTML
// falsey & null values will not be rendered
// can use javascript dot notation `person.name`

// {{# }}{{/ }} -> section delimiter
// used rendering a list or a conditionally rendered component
// use . to refer to the item of the list

// functions -> "key": function() { // do something }
