var i;
for (i = 1; i <= 20; i++) {
    console.log(i);
}

// zbir elemenata nekg niza

var a = [6, 7, 12]; // 6 + 7 + 12
// console.log(a[0] + a[1] + a[2]);  - peske pristup koji bismo mogli da koristimo samo na malim nizovima

var a = [6, 9, 12, 8, 342, 90, 34, 12, 8392];
var sum = 0;
var i;
// 0 + 6 = 6 --> sum
// 6 + 9 = 15 --> sum;

for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
}
console.log(sum);

//Task 1

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd")
    }
}

//Task 2

var sum = 0;
for (var i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

//Task 3

var array = [5, 78, 54, 17, 19];
var sum = 0;
var product = 1;
var i = 0;

for (i; i < array.length; i++) {
    sum += array[i];
    product *= array[i];
}

console.log("sum is " + sum + ", product is " + product);

//Task 4

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var s;
var s1 = '';

for (s = 0; s < x.length; s++) {
    s1 = s1 + x[s];
}
console.log(s1);

//Task 6

var i = 1;
var sum = 0;

for (i; i < 20; i++) {
    var square = i * i;
    sum = sum + square;
}

console.log(sum);

//Task 7

var x = [80, 77, 88, 95, 68];
var prosek;

for (var i = 0; i < x.length; i++) {
    prosek = x[i] / x.length;
    console.log(prosek);


}