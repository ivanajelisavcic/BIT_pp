/*Write a program that accepts a string as input and swaps the case of each character. 
For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/

function replaceCase(str) {
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];

    for (var x = 0; x < str.length; x++) {
        if (UPPER.indexOf(str[x]) !== -1) {
            result.push(str[x].toLowerCase());
        } else if (LOWER.indexOf(str[x]) !== -1) {
            result.push(str[x].toUpperCase());
        } else {
            result.push(str[x]);
        }
    }

    return result.join('');
}

console.log(replaceCase('The Quick Brown Fox'));