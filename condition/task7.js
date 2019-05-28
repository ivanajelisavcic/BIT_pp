/*  Task 7. Write a JavaScript program to get the difference between a given number and 13, 
if the number is greater than 13 return double the absolute difference.
Sample Input: 11					Sample Input: 32
Output : 2					    	Output : 38 */


var num = 32;
var givenNum = 13;
var result = num - givenNum;

if (num > givenNum) {
    result *= 2;
    console.log(result);
} else {
    console.log("Difference between given number and 13 is " + result + " .");
}