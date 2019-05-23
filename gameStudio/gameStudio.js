function GameStudio(name, address) {  // 1. Create GameStudio construct function
    this.name = name;                 // 1a.
    this.address = address;           // 1b.
    this.employees = [];              // 1e.
    this.games = [];                  // 2e.

    this.hireEmployees = function (name, ageOfEmployee, currentPosition) {   // 1d. create method to push employees into array 1e.
        var newEmployee = new Employee(name, ageOfEmployee, currentPosition);
        this.employees.push(newEmployee);
    }

    this.listOfEmployees = function () {      // 1f. create method to get list of all employees as string
        var listOfEmployees = 'Employees:';

        for (var i = 0; i < this.employees.length; i++) {
            listOfEmployees += '\n\t' + this.employees[i].name;
        }
        return listOfEmployees;
    }

    this.makeGame = function (name, genre, age) {            // 2d. create method to push games into array 2e.
        var game = new Game(name, genre, age);
        this.games.push(game);
    }

    this.listOfGames = function () {          // 2f. create method to get list of all games as string
        var listOfGames = 'Games: ';

        for (var i = 0; i < this.games.length; i++) {
            listOfGames += '\n\t' + this.games[i].name;
        }

        return listOfGames;
    }
}

function Employee(fullName, age, currentPosition) {  // 1c. Create Employee construct function
    this.name = fullName;
    this.age = age + " years";
    this.position = currentPosition;
}

function Game(gameName, gameGenre, playerAge) {  // 2. Create Game construct function
    this.name = gameName;                        // 2a.
    this.genre = gameGenre;                      // 2b.
    this.forAge = playerAge;                     // 2c.
};

var ubi = new GameStudio('Ubisoft', 'Sarajevska 15');  // Created one Game Studio, instance of GameStudio construct function

ubi.hireEmployees("Emma Stone", 32, "developer");         //push employee into array with object's method .hireEmployee()
ubi.hireEmployees("Ryan Gosling", 33, "HR");         //push employee into array with object's method .hireEmployee()
ubi.hireEmployees("Tom Hardy", 31, "system administrator");          //push employee into array with object's method .hireEmployee()

ubi.makeGame("Two Dots", "puzzle", "7+");           //push game into array with object's method .addGame()
ubi.makeGame("Dumb Ways To Die", "action", "4+");           //push game into array with object's method .addGame()
ubi.makeGame("World Geography", "education", "12+");           //push game into array with object's method .addGame()

var allUbisoftEmployees = ubi.listOfEmployees();
var allUbisoftGames = ubi.listOfGames();

console.log(allUbisoftGames);
console.log(allUbisoftEmployees);


