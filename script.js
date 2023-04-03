const btnUp = document.querySelector(".btn-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});

btnUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// Get DATA from API
const apiKey = "";
const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

async function getNowPlaying() {
  try {
    const response = await fetch(nowPlaying);
    const movies = await response.json();

    let data = "";
    const movie = movies.results[0];
    console.log(movie);

    data =
      data +
      `
      <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" />
    `;

    document.querySelector("#hero").innerHTML = data;
  } catch (error) {
    console.error(error);
  }
}

async function getTopRatedMovies() {
  try {
    const response = await fetch(topRatedMovies);
    const movies = await response.json();

    let data = "";
    for (let i = 0; i < movies.results.length; i++) {
      const movie = movies.results[i];

      data =
        data +
        `
        <div class="card">
            <div class="card-item">
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Image Movie" />
              <h3>${movie.title}</h3>
              <p>${movie.overview}</p>
            </div>
          </div>
      `;
    }
    document.querySelector(".card-wrapper").innerHTML = data;
  } catch (error) {
    console.error(error);
  }
}

getNowPlaying();
getTopRatedMovies();
