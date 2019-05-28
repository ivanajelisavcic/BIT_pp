/*Task 6. Write a program that outputs the sum of squares of the first 5 numbers. */

var numbers = [0, 1, 2, 3, 4];
var sum = 0;

for (var i=0; i<numbers.length; i++) {
    var square = numbers[i] * numbers [i];
    sum = sum + square;
}
console.log(sum);