/* Task 4. Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var string = "";

for (var i = 0; i < x.length; i++) {
    var y = x[i];
    string = string + y;

}
console.log(string);
console.log(x.length);