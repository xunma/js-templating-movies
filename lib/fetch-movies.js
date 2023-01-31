import Mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"

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

const results = document.querySelector("#results")
fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    const view = {
      "movies": data.Search,
      "movieTag": function() {
        return `<li class="list-inline-item">
          <img src="${this.Poster}" alt="">
          <p>${this.Title}</p>
          </li>`
      }
    }

    const output = Mustache.render("{{#movies}}{{& movieTag}}{{/movies}}", view);
    results.innerHTML = output;
  })
