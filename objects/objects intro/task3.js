/*  3. Write a function that creates an object that represent a computer program. Each
program is described by: description, programming language, git repository, boolean
status that says if the program is completed or not. Add a method that prints out
program’s repository, a method that checks if the program is written in JavaScript as
well as a method that checks if program is completed or not.   */


function computerProgram (description, language, gitRepo, status) {

return {
    description: description,
    programmingLanguage: language,
    gitRepository: gitRepo,
    isCompleted: status,
    printGitRepo: function () {
        return this.gitRepository;
    },
    isWrittenInJS: function () {
        if (this.programmingLanguage === "JavaScript" || this.programmingLanguage === "JS") {
            return "Yes, it's written in JS."
        } else {
            return "No, it's written in other language."
        }        
    },
    isCompleted: function () {
        if (status === true) {
                return "Program is completed."
    } else {
        return "Program is not completed."
}
    }

}
}

var gameKoala = computerProgram("Computer game for kids.", "JS", "https://github.com/Koala-Repository", true);

console.log(gameKoala.description);
console.log(gameKoala.printGitRepo());
console.log(gameKoala.isWrittenInJS());
console.log(gameKoala.isCompleted());
