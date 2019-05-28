/*Task 2. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) 
and prints out the appropriate result. Watch out for division by zero! */

var num1 = 2;
var num2 = 0;
var operation = "/" ;

switch (operation) {

    case "+":
    console.log(num1+num2);
    break;

    case "-":
    console.log(num1-num2);
    break;

    case "*":
    console.log(num1*num2);
    break;

    case "/":
    if (num2 === 0) {
        console.log("Division by zero");
    } else {
    console.log(num1/num2);
    }
    break;

    default:
    console.log("Please input +, -, * or /");
    }


