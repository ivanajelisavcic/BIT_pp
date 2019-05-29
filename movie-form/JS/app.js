
var $title = document.querySelector(".title");
var $length = document.querySelector(".length");
var $buttonCreate = document.querySelector(".button-create");

var $genre = document.querySelector("#movie-genre");


var $movieList = document.querySelector(".gadjamTe");

var movies = [];

$buttonCreate.addEventListener("click", function () {
    var title = $title.value;
    var length = $length.value;
    var genre = $genre.value;


    var movie = new Movie(title, genre, length);
    movies.push(movie);

    $newMovieItem = document.createElement("p");
    $newMovieItem.textContent = movie.getData();

    $movieList.appendChild($newMovieItem);

});

