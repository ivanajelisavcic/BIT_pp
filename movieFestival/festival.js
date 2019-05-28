(function () {

    "use strict";

    //construct function Festival:
    function Festival(festivalName) {
        this.name = festivalName;
        this.listOfPrograms = [];                              // initially empty

        //numberOfMoviesInAllPrograms ?

    }
    Festival.prototype.addProgram = function (programDay) {                    //method for adding program in listOfPrograms in construct function Festival 
        // var festivalProgram = new Festival(programDay);
        this.listOfPrograms.push(festivalProgram);
    }

    Festival.prototype.listOfPrograms = function () {                    //  method to get list of all programs as string
        var listOfPrograms = 'Program:';

        for (var i = 0; i < this.listOfPrograms.length; i++) {
            listOfPrograms += '\n\t' + this.listOfPrograms[i].name;
        }
        return listOfPrograms;
    }
    Festival.prototype.getProgramData = function () {
        var programData = '';
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            programData += this.listOfPrograms[i].getData();
        }
        return programData;
    }

    Festival.prototype.getFestivalData = function () {
        var dataAboutFestival = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            dataAboutFestival += this.listOfPrograms[i].getProgramData();
        }
        var allFestivalDetails = this.name + " has " + this.totalNumberOfMovies + "movie titles" + '\n ' + dataAboutFestival;
        return allFestivalDetails;
    }

    //construct function Program:
    function Program(date) {
        this.date = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ".";
        this.listOfMovies = [];                               // initially empty
        this.totalNumberOfMovies = 0;

    }
    Program.prototype.addMovie = function (movie) {                    //method for adding movie in listOfMovies in construct function Program.listOfMovies property
        this.listOfMovies.push(movie);
        this.totalNumberOfMovies++;                      
    }

    Program.prototype.getMoviesData = function () {                      //function for getting movie data
        var movieData = '';
        for (var i = 0; i < this.listOfMovies.length; i++) {
            movieData += this.listOfMovies[i].getData();
        }
        return movieData;
        // + this.listOfMovies[i].genre.getData(this.listOfMovies[i].genre.name)
    }



    //construct function Movie:
    function Movie(movieTitle, movieGenre, length) {
        this.title = movieTitle;
        this.genre = movieGenre;                               // instance of construct function Genre
        this.length = length;

    }
            Movie.prototype.getData = function () {
                return "\t\t" + this.title + ", " + this.length + "min, " + this.genre.getData(this.genre.name) + " \n" 
            }

    //construct function Genre:
    function Genre(name) {
        this.name = name;

    }
            Genre.prototype.getData = function (name) {                                             
                var acronym = name.charAt(0) + name.charAt(name.length - 1);
                return acronym.toUpperCase();
            }


    // MovieFestival in Venice 2018:
    var veniceFilmFestival = new Festival("Venice Film Festival - La Biennale di Venezia"); // Created Festival, instance of Festival construct function
    var programDay1 = new Program(new Date("8/29/2018"));
    var programDay2 = new Program(new Date("8/31/2018"));

    // veniceFilmFestival.addProgram(programDay1);
    // veniceFilmFestival.addProgram(programDay2);

    var theMountin = new Movie("The Mountain", "drama", 106);
    var doubleVies = new Movie("Double Vies", "drama", 107);
    var firstMan = new Movie("First Man", "drama", 135);
    var voxLux = new Movie("Vox Lux", "drama", 110);
    var acusada = new Movie("Acusada", "thriller", 108);

    var theSistersBrothers = new Movie("The Sisters Brothers", "thriller", 120);
    var roma = new Movie("Roma", "thriller", 135);
    var draggedAcrossConcrete = new Movie("Dragged Across Concrete", "action", 159);
    var laQuietud = new Movie("La Quietud", "thriller", 117);
    var miOmbraMaestra = new Movie("Mi Ombra Maestra", "comedy", 100);

    programDay1.addMovie(theMountin);
    programDay1.addMovie(doubleVies);
    programDay1.addMovie(firstMan);
    programDay1.addMovie(voxLux);
    programDay1.addMovie(acusada);

    programDay2.addMovie(theSistersBrothers);
    programDay2.addMovie(roma);
    programDay2.addMovie(draggedAcrossConcrete);
    programDay2.addMovie(laQuietud);
    programDay2.addMovie(miOmbraMaestra);


    console.log(programDay1, programDay2);


})();


