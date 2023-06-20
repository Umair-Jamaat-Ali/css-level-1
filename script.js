var num = 20;
function sun() {
    console.log(num);
    num = 23;
}
sun();

// Problem 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print 
//"Fizz" instead of the number, and for multiples of five, print "Buzz". 
//For numbers that are multiples of both three and five, print "FizzBuzz". 
//The program should output the results to the console.

var userInput = +prompt("Please entre any number between 1-100.");

if (userInput % 3 === 0) {
    console.log("Fizz");
}
 if (userInput % 5 === 0) {
    console.log("Buzz");
}
 if (userInput % 3 === 0 && userInput % 5 === 0) {
    console.log("FizzBuzz");
}

//// Problem 2: Reverse a String
//Write a function that takes a string as input and returns the reverse of that string. 
//For example, if the input is "Hello", the function should return "olleH". 
//The function should work with strings of any length and should return the reversed string.

var userInputString = prompt("Please write any worrd.");

var reverse = userInputString.split("").reverse().join();
console.log(reverse);