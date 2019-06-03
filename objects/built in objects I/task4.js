/*  Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
    "Republic Of Serbia" -> "Rbceilpu Of Sabeir" */
    
    function alphabetizeWords(givenWords) {
        var n = [];
        n = givenWords.split(' ');
        n[0] = n[0].split("").sort().join("");
        n[1] = n[1].split("").sort().join("");
        n[2] = n[2].split("").sort().join("");

        var rearranging = n[0] + " " + n[1] + " " + n[2]; 
    return rearranging
    
    }
    console.log(alphabetizeWords("Republic Of Serbia"));
