/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only
 one of those).

Note: This is actually an interview question that has been claimed to weed out a significant percentage 
of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.  */

for (var i = 0; i <= 100; i++) {
    if (i%2 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0 && i%3!=0){
        console.log("Buzz");
    }
} console.log(i);