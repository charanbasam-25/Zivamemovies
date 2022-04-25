const apiKey = "api_key=e3e0540e731b9c0baf37b8c5a7ed8513";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const searchUrl = baseUrl + "/search/movie?" + apiKey

const imgUrl = "https://image.tmdb.org/t/p/w500"

const mainEle = document.getElementById("main")
const formEle = document.getElementById("form")
const searchEle = document.getElementById("search")
const posterEle = document.getElementById("poster")


function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {

        showMovies(data.results)
    })

}


function showMovies(data) {

    mainEle.innerHtml = ""
    data.forEach(movie => {
        const {
            poster_path,
            title,
            vote_average,
            overview
        } = movie
        const movieEle = document.createElement("div");
        movieEle.classList.add("movie");
        movieEle.innerHTML = `
        <img src="${imgUrl+poster_path}" alt="${title}" />

            <div class="movie-info">
                <h1 class="title">${title}</h1>
                <span class="green">${vote_average}</span>

            </div>
            <div class="overview">
                ${overview}

            </div>
        
        `
        mainEle.appendChild(movieEle)
    })

}

formEle.addEventListener("submit", (event) => {

    event.preventDefault();
    posterEle.classList.add = "d-none"
    main.textContent=""
    console.log("submited")
    const searchValue = searchEle.value;
    if (searchValue) {
        getMovies(searchUrl + "&query=" + searchValue);
    } else {
        getMovies(apiUrl);
    }
})
