/* Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000   */

function padAString (detLength, givenValue, direction) {

    if (typeof givenValue === "undefined") {
        return detLength; 
    }
        if (direction === "l") {
            return (detLength + givenValue).slice(-detLength.length); 
        } else {  
            return (givenValue + detLength).slice(0, detLength.length);
        }
    }
    
    
    
    console.log(padAString('0000', 123, 'l'));
    console.log(padAString('00000000', 123, 'r'));