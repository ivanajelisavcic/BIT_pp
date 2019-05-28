/*Task 7. Write a program that computes average marks of the following students. 
Then use this average to determine the corresponding grade. Tabela je u loops practical.*/

var students = [
    ["David", 80],
    ["Marko", 77],
    ["Dany", 88],
    ["John", 95],
    ["Thomas", 68]
];

var sumOfMarks = 0;

for (var i = 0; i < students.length; i++) {
    sumOfMarks += students[i][1];
}
var avg = sumOfMarks/students.length;

console.info("Average grade: " + avg);

if (avg<60) {
    console.log("Grade: F");
} else if (avg<70) {
    console.log("Grade: D");
} else if (avg<80) {
    console.log("Grade: C");
} else if (avg<90) {
    console.log("Grade: B");
} else if (avg<100) {
    console.log("Grade: A");
}
 