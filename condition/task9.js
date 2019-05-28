/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 
or if their sum is 50.
Sample Input: 5,54		Sample Input: 6,50			Sample Input: 40,10
Output : -				Output : true				Output : true   */

var num1 = 5;
var num2 = 54;
var sum = num1 + num2;

if (num1 === 50 || num2 === 50 || sum === 50) {
  console.log("true");
} else {
  console.log("false");
}
