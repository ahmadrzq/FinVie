const btnUp = document.querySelector(".btn-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});

btnUp.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

// Get DATA from API
const apiKey = '';
const endpointUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

async function getTopRatedMovies() {
  try {
    const response = await fetch(endpointUrl);
    const data = await response.json();
    console.log(data.results[0]);
  } catch (error) {
    console.error(error);
  }
}

getTopRatedMovies();

