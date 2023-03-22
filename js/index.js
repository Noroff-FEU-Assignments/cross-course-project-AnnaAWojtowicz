const resultsContainerTodaysFilm = document.getElementById("pic-todays-film");
const resultsContainerNewMovies = document.getElementById("newMovies");
const resultsContainerDrama = document.getElementById("drama");
const resultsContainerDoc = document.getElementById("doc");
const resultsContainerJap = document.getElementById("jap");


console.log(resultsContainerNewMovies);

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

// async function test2() {
//     const test = await getJapanese();
//     console.log(test);
// }

// test2();

// function createGetPopularHtml(movies) {
//     for (let i = 0; i < movies.length; i++) {
//         resultsContainer.innerHTML += `
//     <section class="container">
//     <a href="/details.html?id=${movies[i].id}" class="title"><div class="titles" id="title">${movies[i].title}</div>
//     <img src="${imageUrl}/${movies[i].backdrop_path}" class="img">
//     <div class="release__date">Release date: ${movies[i].release_date.substring(0, 4)}</div>
//     <div class="score">Score: ${movies[i].vote_average}</div></a>
//     </section>
//     `;
//     }
// }

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
        resultsContainerNewMovies.innerHTML += `
            <div class="film-window">
                <h1 class="h1-in-the-film">${movies[i].title}</h1>
                <div class="film__carousel__general all-pic-carousel" id="now${i}"></div>
                <section class="icons-in-the-film">
                    <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
                    <div class="material-symbols-rounded shoping-basket"><a href="#">shopping_basket</a></div>
                    <div class="material-symbols-rounded favorite"><a href="#">favorite</a></div>
                </section>
            </div>`;
        let uniqueId = document.getElementById(`now${i}`);
        uniqueId.style.backgroundImage =
            `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movies[i].backdrop_path})`;
    }
}




function createGetDramaHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        resultsContainerDrama.innerHTML += `
    <div class="film-window">
          <h1 class="h1-in-the-film">${movies[i].title}</h1>
         <img src="${imageUrl}/${movies[i].backdrop_path}" class="film__carousel__general all-pic-carousel pic-carousel">
          <section class="icons-in-the-film">
            <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
            <div class="material-symbols-rounded shoping-basket"><a href="#">shopping_basket</a></div>
            <div class="material-symbols-rounded favorite"><a href="#">favorite</a></div>
          </section>
    </div>
    `;
    }
}

function createGetDocHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        resultsContainerDoc.innerHTML += `
    <div class="film-window">
          <h1 class="h1-in-the-film">${movies[i].title}</h1>
         <img src="${imageUrl}/${movies[i].backdrop_path}" class="film__carousel__general all-pic-carousel pic-carousel">
          <section class="icons-in-the-film">
            <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
            <div class="material-symbols-rounded shoping-basket"><a href="#">shopping_basket</a></div>
            <div class="material-symbols-rounded favorite"><a href="#">favorite</a></div>
          </section>
    </div>
    `;
    }
}

function createGetJapHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        resultsContainerJap.innerHTML += `
    <div class="film-window">
          <h1 class="h1-in-the-film">${movies[i].title}</h1>
         <img src="${imageUrl}/${movies[i].backdrop_path}" class="film__carousel__general all-pic-carousel pic-carousel">
          <section class="icons-in-the-film">
            <div class="material-symbols-rounded info"><a href="/details.html?id=${movies[i].id}">info</a></div>
            <div class="material-symbols-rounded shoping-basket"><a href="#">shopping_basket</a></div>
            <div class="material-symbols-rounded favorite"><a href="#">favorite</a></div>
          </section>
    </div>
    `;
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