var day = 12;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('It\'s Weekday');
        break;
    case 6:
    case 7:
        console.log('It\'s Weekend');
        break;

    default:
        console.log('Input must be number between 1 and7!')
}

var mounth = 2;

switch (mounth) {
    case 1:
    case 2:
    case 3:
        console.log('Winter');
        break;

    case 4:
    case 5:
    case 6:
        console.log('Spring');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Summer');
        break;
    case 10:

    case 11:

    case 12:
        console.log('Autumn');
        break;


    default:
        console.log('Input must be a number between 1 and 12');
}

var grade = 'D';
var result;

//  grade === 'A'
switch (grade) {
    case 'A':
        result = 'Good Job';
        break;
    case 'B':
        result = 'Pretty Good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good';
        break;
    case 'F':
        result = 'Failed';
        break;

    default:
        console.log('Unknown grade')
}

console.log(result);


var city = 'Vienna';

switch (city) {
    case 'Belgrade':
    case 'Novi Sad':
    case 'Kragujevac':
    case 'Smederevo':
        console.log('Serbia');
        break;
    case 'Osijek':
    case 'Virovitica':
    case 'Zagreb':
        console.log('Croatia')
        break;
    case 'Verona':
    case 'Zero Branco':
    case 'Padova':
        console.log('Italy');
        break;
    case 'Can':
        console.log('France');
        break;
    case 'Vienna':
        console.log('Austria');
        break;
    default:
        console.log('Please choose a different city')
}

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
        console.log('Watch for 0!')
}