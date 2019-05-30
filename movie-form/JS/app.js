var $buttonCreate = document.querySelector(".button-create");
var $error = document.querySelector("#error");
var $allLength = document.querySelector(".allmovieslength");
var $allLengthMovies = document.querySelector(".all-length");
var $movieList = document.querySelector(".gadjam-te");

var $title = document.querySelector(".title");
var $length = document.querySelector(".length");
var $genre = document.querySelector("#movie-genre");

var movies = [];

function totalLengthMovies() {

    var sum = 0;
    for (var i = 0; i < movies.length; i++) {
        sum += movies[i].length;
    }
    return sum;
};

$buttonCreate.addEventListener("click", function () {
    var title = $title.value;
    var length = parseInt($length.value);
    var genre = $genre.value;

    var movie = new Movie(title, genre, length);

    movies.push(movie);

    $newMovieItem = document.createElement("p");
    $newMovieItem.textContent = movie.getData();

    $movieList.appendChild($newMovieItem);

    // var sum = totalLengthMovies()         mozemo da smestimo f-ju prvou varijablu pa onfa da je dodelimo $allLengthMovies.textContent ili odmah da dodelimo f-ju direktno $allLengthMovies.textContent = totalLengthMovies()
    // $allLengthMovies.textContent = sum

    $allLengthMovies.textContent = totalLengthMovies()

});

