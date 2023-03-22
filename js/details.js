const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const detailResultsContainer = document.querySelector(".details__results");


async function getFilmDetails(id) {
    let responseBody;
    try {
        const response = await fetch(getFilmDetailsUrl(id));
        responseBody = await response.json();
    }
    catch (error) {
        console.log("This does not work", error);
        detailResultsContainer.innerHTML = "An error has occured! Please try again later. Bye.";
    }
    return responseBody;
}

async function getFilmCredits(id) {
    let responseBody;
    try {
        const response = await fetch(getFilmCreditsUrl(id));
        responseBody = await response.json();
    }
    catch (error) {
        console.log("This does not work", error);
        detailResultsContainer.innerHTML = "An error has occured! Please try again later. Bye.";
    }
    return responseBody;
}

function getDirector(movieDetails) {
    const crew = movieDetails.crew;
    let resultSring = "";
    for (let i = 0; i < crew.length; i++) {
        if (crew[i].job === "Director") {
            resultSring = crew[i].name;
            break;
        }
    }
    return resultSring;
}



function getGenre(movieDetails) {
    const genres = movieDetails.genres;
    let resultString = "";
    for (let i = 0; i < genres.length; i++) {
        resultString += genres[i].name + " ";
    }
    return resultString;
}

function getProdCount(movieDetails) {
    const prodCount = movieDetails.production_countries;
    let resultString = "";
    for (let i = 0; i < prodCount.length; i++) {
        resultString += prodCount[i].name + " ";
    }
    return resultString;
}


function createDetailsResultsHtml(movie, credits) {
    detailResultsContainer.innerHTML = `
    <div class="title-pic-film-info-and-cta">
    <div class="title-pic">
        <h1 class="title__my-films">${movie.title}</h1>
    
    
        <div class="film-window">
        <img src="${imageUrl}/${movie.backdrop_path}" class="main-style__pic-my-films" />
            <section class="icons-in-the-film">
    
                <div class="material-symbols-rounded info"><a href="#">shopping_basket</a></div>
                <div class="material-symbols-rounded favorite"><a href="#">favorite</a></div>
    
            </section>
        </div>
    </div>

    <div class="film-info-and-cta">
        <div class="film-info">
            <h3>Genre: ${getGenre(movie)}</h3>
            <h3>Directed by: ${getDirector(credits)}</h3>
            <div class="country-year-min">
                <h3>${getProdCount(movie)}, ${movie.release_date.substring(0, 4)}</h3>
                <h3>${movie.runtime}min</h3>
            </div>
            <p>
            ${movie.overview}
            </p>
        </div>
        <div class="cta">
            <a href="../index2.html">go back</a>
        </div>
    </div>
    </div>
  `;
}

async function run(id) {
    let movie = await getFilmDetails(id);
    let credits = await getFilmCredits(id);
    createDetailsResultsHtml(movie, credits);

}

run(id);
