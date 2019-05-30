var $buttonCreate = document.querySelector(".button-create");
var $invalidInput = document.querySelector(".invalidInput");

var $title = document.querySelector(".title");
var $length = document.querySelector(".length");
var $genre = document.querySelector("#movie-genre");
var $movieList = document.querySelector(".gadjam-te");
var $allLengthMovies = document.querySelector(".all-length");


var movies = [];

function collectMovieData() {
    return {
        title: $title.value,
        length: parseInt($length.value),
        genre: $genre.value,
    };
}

function createMovie(title, genre, length) {

    return new Movie(title, genre, length);
}

function validateMovieForm(movieFormData) {
    if (movieFormData.title === "" || movieFormData.length === "" || movieFormData.genre === "-") {
        return false;
    }
    return true;
}

function showError() {
    $invalidInput.innerHTML = "Error, please check your input";
}


function addMovie(someMovie) {
    movies.push(someMovie);
}

function displayMovies(movie) {

    var $newMovieItem = document.createElement("p");
    $newMovieItem.textContent = movie.getData();

    $movieList.appendChild($newMovieItem);


}

function totalLengthMovies(list) {

    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i].length;
    }
    $allLengthMovies.textContent = sum;
};


function resetFields() {
    $title.value = "";
    $length.value = "";
    $genre.value = "-";
    $invalidInput.innerHTML = "";
}

$buttonCreate.addEventListener("click", function () {
    var formData = collectMovieData();
    if (validateMovieForm(formData) === false) {
        showError();
        return;
    };

    var movie = createMovie(formData.title, formData.genre, formData.length);

    addMovie(movie);
    displayMovies(movie);
    totalLengthMovies(movies);
    resetFields();

});

