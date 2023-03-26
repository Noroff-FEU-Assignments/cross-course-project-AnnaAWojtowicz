const resultsContainerTodaysFilm = document.getElementById("pic-todays-film");
const resultsContainerNewMovies = document.getElementById("newMovies");
const resultsContainerDrama = document.getElementById("drama");
const resultsContainerDoc = document.getElementById("doc");
const resultsContainerJap = document.getElementById("jap");
let favoriteButtons = [];


async function getResults(tmdbUrl) {
    try {
        const response = await fetch(tmdbUrl);
        const responseBody = await response.json();
        return responseBody.results; // <-- I am not sure if return should be inside or outside try
    }
    catch (error) {
        console.log("This does not work", error);
        alert("An error has occured! Please try again later. Bye.");
    }
}






async function getTodaysFilm() {
    const poplarMovies = await getResults(getPopularUrl);
    return poplarMovies[0];
}


async function getNowPlaying() {
    const nowPlaying = await getResults(getNowPlayingUrl);
    return nowPlaying;
}

async function getDrama() {
    const drama = await getResults(getDramaUrl);
    return drama;
}

async function getDoc() {
    const doc = await getResults(getDocUrl);
    return doc;
}

async function getJap() {
    const japanese = await getResults(getJapaneseUrl);
    return japanese;
}



function createTodaysFilmHtml(movie) {

    resultsContainerTodaysFilm.style.backgroundImage =
        `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movie.backdrop_path})`;
    // resultsContainerTodaysFilm.innerHTML += `
    // <div class="film-window">
    //       <h1 class="todays-film__h1 todays-film__logged-in>Today's Film: ${movie.title}</h1>
    //      <img src="${imageUrl}/${movie.backdrop_path}" class="film__carousel__general all-pic-carousel pic-carousel">
    //       <section class="icons-in-the-film">
    //         <div class="material-symbols-rounded info"><a href="/details.html?id=${movie.id}">info</a></div>
    //         <div class="material-symbols-rounded shoping-basket"><a href="#">shopping_basket</a></div>
    //         <div class="material-symbols-rounded favorite"><a href="#">favorite</a></div>
    //       </section>
    // </div>
    // `;

}

function createGetNowPlayingHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].backdrop_path === null) {
            continue;
        }
        resultsContainerNewMovies.innerHTML += `
            <div class="film-window">
                <h2 class="h1-in-the-film">${movies[i].title}</h2>
                <div class="film__carousel__general all-pic-carousel" id="now${i}"></div>
                <section class="icons-in-the-film icons-in-index">
                    <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
                    <div class="material-symbols-rounded shoping-basket" id="basket${movies[i].id}" onClick="basketButtonClicked(${movies[i].id})">
                        <a href="javascript:void(0)">shopping_basket</a>
                    </div>
                    <div class="material-symbols-rounded favorite" id="fav${movies[i].id}" onClick="favButtonClicked(${movies[i].id})">
                        <a href="javascript:void(0)">favorite</a>
                    </div>
                </section>
            </div>`;
        let uniqueId = document.getElementById(`now${i}`);
        uniqueId.style.backgroundImage =
            `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movies[i].backdrop_path})`;
    }
}


function favButtonClicked(button){
    console.log("fav button clicked", button);
}

function createGetDramaHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].backdrop_path === null) {
            continue;
        }
        resultsContainerDrama.innerHTML += `
        <div class="film-window">
            <h1 class="h1-in-the-film">${movies[i].title}</h1>
            <div class="film__carousel__general all-pic-carousel" id="drama${i}"></div>
            <section class="icons-in-the-film icons-in-index">
                <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
                <div class="material-symbols-rounded shoping-basket" id="basket${movies[i].id}" onClick="basketButtonClicked(${movies[i].id})">
                    <a href="javascript:void(0)">shopping_basket</a>
                </div>
                <div class="material-symbols-rounded favorite" id="fav${movies[i].id}" onClick="favButtonClicked(${movies[i].id})">
                    <a href="javascript:void(0)">favorite</a>
                </div>
            </section>
        </div>`;
        let uniqueId = document.getElementById(`drama${i}`);
        uniqueId.style.backgroundImage =
            `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movies[i].backdrop_path})`;
    }
}

function createGetDocHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].backdrop_path === null) {
            continue;
        }
        resultsContainerDoc.innerHTML += `
    <div class="film-window">
          <h1 class="h1-in-the-film">${movies[i].title}</h1>
          <div class="film__carousel__general all-pic-carousel" id="doc${i}"></div>
          <section class="icons-in-the-film icons-in-index">
            <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
            <div class="material-symbols-rounded shoping-basket" id="basket${movies[i].id}" onClick="basketButtonClicked(${movies[i].id})">
                <a href="javascript:void(0)">shopping_basket</a>
            </div>
            <div class="material-symbols-rounded favorite" id="fav${movies[i].id}" onClick="favButtonClicked(${movies[i].id})">
                <a href="javascript:void(0)">favorite</a>
            </div>
          </section>
    </div>
    `;
        let uniqueId = document.getElementById(`doc${i}`);
        uniqueId.style.backgroundImage =
            `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movies[i].backdrop_path})`;
    }
}

function createGetJapHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].backdrop_path === null) {
            continue;
        }
        resultsContainerJap.innerHTML += `
    <div class="film-window">
          <h1 class="h1-in-the-film">${movies[i].title}</h1>
          <div class="film__carousel__general all-pic-carousel" id="jap${i}"></div>
          <section class="icons-in-the-film icons-in-index">
            <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
            <div class="material-symbols-rounded shoping-basket" id="basket${movies[i].id}" onClick="basketButtonClicked(${movies[i].id})">
                <a href="javascript:void(0)">shopping_basket</a>
            </div>
            <div class="material-symbols-rounded favorite" id="fav${movies[i].id}" onClick="favButtonClicked(${movies[i].id})">
                <a href="javascript:void(0)">favorite</a>
            </div>
          </section>
    </div>
    `;
        let uniqueId = document.getElementById(`jap${i}`);
        uniqueId.style.backgroundImage =
            `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movies[i].backdrop_path})`;
    }
}

/*
Kilder
https://www.w3schools.com/jsref/event_onclick.asp
https://stackoverflow.com/questions/9643311/pass-a-string-parameter-in-an-onclick-function
*/
function favButtonClicked(buttonId){
    const button = document.getElementById(`fav${buttonId}`);
    if(button.style.color === "white"){
        //Sett original farve
        button.style.color = "black";
        button.style.background = "white";
    } else {
        //Favoritt valg
        button.style.color = "white";
        button.style.background = favoriteActiveColor;
    }
}

function basketButtonClicked(buttonId){
    const button = document.getElementById(`basket${buttonId}`);
    if(button.style.color === "white"){
        //Sett original farve
        button.style.color = "black";
        button.style.background = "white";
    } else {
        //Favoritt valg
        button.style.color = "white";
        button.style.background = addedToBasketColor;
    }
}

async function run() {
    const moviesTodaysFilm = await getTodaysFilm();
    createTodaysFilmHtml(moviesTodaysFilm);
    const moviesNowPlaying = await getNowPlaying();
    createGetNowPlayingHtml(moviesNowPlaying);
    const moviesGetDrama = await getDrama();
    createGetDramaHtml(moviesGetDrama);
    const moviesGetDoc = await getDoc();
    createGetDocHtml(moviesGetDoc);
    const moviesGetJap = await getJap();
    createGetJapHtml(moviesGetJap);
}

run();