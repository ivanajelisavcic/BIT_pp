/* Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”  */

function alphabeticalOrder(string) {

    return string.toLowerCase().split("").sort().join("");
}

console.log(alphabeticalOrder("Webmaster"));