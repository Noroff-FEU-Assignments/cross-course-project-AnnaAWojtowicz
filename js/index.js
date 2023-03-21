const resultsContainer = document.querySelector(".results");


async function getResults(tmdbUrl) {
    try {
        const response = await fetch(tmdbUrl);
        const responseBody = await response.json();
        return responseBody.results; // <-- I am not sure if return should be inside or outside try
    }
    catch (error) {
        console.log("This does not work", error);
        resultsContainer.innerHTML = "An error has occured! Please try again later. Bye.";
    }
}

async function getPopularMovie() {
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

async function getJapanese() {
    const japanese = await getResults(getJapaneseUrl);
    return japanese;
}

async function test2() {
    const test = await getJapanese();
    console.log(test);
}

test2();

function createGetPopularHtml(movies) {
    for (let i = 0; i < movies.length; i++) {
        resultsContainer.innerHTML += `
    <section class="container">
    <a href="/details.html?id=${movies[i].id}" class="title"><div class="titles" id="title">${movies[i].title}</div>
    <img src="${imageUrl}/${movies[i].backdrop_path}" class="img">
    <div class="release__date">Release date: ${movies[i].release_date.substring(0, 4)}</div>
    <div class="score">Score: ${movies[i].vote_average}</div></a>
    </section>
    `;
    }
}

