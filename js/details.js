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


function createDetailsResultsHtml(movie) {
    detailResultsContainer.innerHTML = `
  <section class="container">
  <div class="titles" id="title">${movie.title}</div>
  <img src="${imageUrl}/${movie.backdrop_path}" class="img">

<div class="genre">Genre: ${movie.genre}</div>


  <div class="release__date">Release date: ${movie.release_date.substring(0, 4)}</div>
 

  <div class="time">Runtime: ${movie.runtime}</div>
  <div class="overview">Overview: ${movie.overview}</div>
  
  </section>
  `;
}


