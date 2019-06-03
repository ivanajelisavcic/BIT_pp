/*Write a function to convert a string to its abbreviated form. 

    "John Snow" -> 	"John S."   */

function abbreviatedForm(string) {
  var abbForm = string.slice(0, 6) + ".";

  return abbForm;
}

console.log(abbreviatedForm("John Snow"));



/* prvo resenje je lose zato sto moze da se primeni samo na konkretnom primeru.
Sledece resenje je univerzalno: */

function abbreviatedForm(givenString) {
var splitName = givenString.split(" ");
return splitName[0] + " " + splitName[1].slice(0,1) + "."


}

console.log(abbreviatedForm("Alan Ford"));
