
class Movie {
    constructor(movieTitle, genre, length) {
        this.title = movieTitle;
        this.length = length;
        this.genre = genre;
    }

    getData() {
        var movieData = "\t" + "\t" + this.title + ", " + this.length + "min, " + this.genre;
        return movieData;
    }


}
