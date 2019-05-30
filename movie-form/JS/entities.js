
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


// class Program extends Movie {
//     constructor (date, programlength)
//    super (getData)



// class Genre {
//     constructor(name) {
//         this.name = name;
//     }
//     getData() {
//         var acronym = (this.genre.charAt(0) + this.genre.charAt(genre.length - 1)).toUpperCase();
//         return acronym;
//     }
// }


// class Movie extends Genre {
//     constructor(movieTitle, movieGenre, length) {
//         this.title = movieTitle;
//         this.length = length;
//         super(genre);
//     }





