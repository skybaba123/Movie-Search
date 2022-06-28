"strict";

const movieContainer = document.querySelector(".movie-container");
const search = document.querySelector(".search-input");

//api url
const apiUrl = "https://www.omdbapi.com/?apikey=45f6b855";
const api = () => {
  fetch(`${apiUrl}&s=${search.value}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const data = result.Search;
      console.log(data);

      data.map((movie) => {
        const html = `<div class="movie">
      <img
        src=${movie.Poster}
        alt=""
        class="movie-poster"
      />
      <h1>${movie.Title}</h1>
      <p>${movie.Year}</p>
    </div>`;
        movieContainer.insertAdjacentHTML("afterbegin", html);
      });
    });
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    movieContainer.innerHTML = "";
    api();
  }
});

// const newSearch = (searchs)=>{
//  search.value = searchs
// }
