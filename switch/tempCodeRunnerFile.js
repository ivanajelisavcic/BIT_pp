var number1 = 4;
var number2 = 5;
var operacija = '/';

switch (operacija) {
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;
    case "*":
        console.log(number1 * number2);
        break;
    case "/":
        console.log(number1 / number2);
        break;

    default:
        console.log('Wathc for 0!')
}