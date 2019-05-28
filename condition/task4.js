/*  Task 4. Write a conditional statement to find the sign of product of three numbers. 
Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is -    */

var a = 3;
var b = -7;
var c = 2;

if (a>0 && b>0 && c>0) {
    console.log("The sign is +");
} else if (a<0 && b<0 && c>0) {
    console.log("The sign is +");
} else if (a>0 && b<0 && c<0) {
    console.log("The sign is +");
} else if (a<0 && b>0 && c<0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}
