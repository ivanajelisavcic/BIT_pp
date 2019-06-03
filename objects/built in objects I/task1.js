/*   Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

'ff', 16, 8 -> 377     */

function convertBase(number, initialBase, changeBase) {
        if ((initialBase && changeBase) < 2 || (initialBase && changeBase) > 36) { //radix is between 2 and 36
            return 'Base between 2 and 36';
        }
    
        var num = parseInt(number + '', initialBase);
        return num.toString(changeBase);
    }
    
     console.log(convertBase('ff', 16, 8));
   // console.log(convertBase(1000, 2, 8));

