/*    Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    12345 -> 54321 */
    

    
function reverseNumbers(num) {

    var reverse = num.toString();
    var rev = '';

    for (var j = reverse.length - 1; j >= 0; j--) {
        rev += reverse[j];
    }
    return parseInt(rev);
}
console.log(reverseNumbers(12345));


var num = 12345;
console.log(num.toString());


////////////////////////
//drugi nacin:


function reverseANumber (randomNumber) {
       
    randomNumberToString = randomNumber + "";
    randomNumber = randomNumberToString.split("").reverse().join("");
    typeofNumber = parseInt(randomNumber);
    return typeofNumber
    
        }
    var result = reverseANumber(12345)
        console.log(result);
