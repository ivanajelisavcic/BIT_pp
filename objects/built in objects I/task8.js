/* Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"   */

function capitaizeFirstLetter(input) {
  var firstLetter = input.charAt(0).toUpperCase();
  var theRestOfTheString = input.slice(1);
  return firstLetter + theRestOfTheString;
}

console.log(capitaizeFirstLetter("js string exercises"));