/* Task 1. Write a program that takes as input a city name and outputs the country where the city is. 
You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries
and 15 cities. Note that each country must have a different number of cities. 
Input different from the listed cities should output a message"Please choose a different city". */

var city = "Segovia";

switch (city) {

    case "Prato":
    case "Florence":
    case "Bologna":
    case "Naples":
    case "Parma":
    console.log("Italy");
    break;

    case "Malaga":
    case "Toledo":
    case "Sevilla":
    case "Segovia":
    console.log("Spain");
    break;

    case "Faro":
    case "Sintra":
    case "Porto":
    console.log("Portugal");
    break;

    case "Salzburg":
    case "Innsbruck":
    console.log("Austria");
    break;

    case "Lima":
    case "Cusco":
    console.log("Peru");

    default:
    console.log("Please choose a different city");

}
