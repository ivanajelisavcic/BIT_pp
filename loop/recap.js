var a = [3, 6, 7, 'abc', true, 6, 89, 100];

var firstIndex = 0;
var firstElement = a[firstIndex];

var lastIndex = a.length - 1;
var lastElement = a[lastIndex];

if (a.length % 2 != 0) {
    var middleIndex = (a.length - 1) / 2;
    var middleElement = a[middleIndex];
    console.log(middleElement);
} else {
    var middleIndexLeft = a.length / 2 - 1;
    var middleElementLeft = a[middleIndexLeft];
    var middleIndexRight = a.length / 2;
    var middleElementRight = a[middleIndexRight];

    console.log(middleElementLeft, middleElementRight);
}

// swaping values for x and y

var x = 10;
var y = 5;
var tmp;

tmp = x;
x = y;
y = tmp;

console.log(x, y);

// swaping first and last element of the array

var a = [6, 8, 10, -5, 23];
var tmp;

tmp = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = tmp;

console.log(a);

// strongness of coffee

var coffee = 'espresso';
var strongness;

switch (coffee) {
    case 'espresso':
        strongness = 4;
        break;
    case 'turkish coffee':
    case 'caffee latte':
        strongness = 2;
        break;
    default:
        strongness = undefined;
        break;
}

console.log(coffee, strongness);