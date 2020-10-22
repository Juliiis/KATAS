// Write a program that prints the numbers from 1 to 100. 
// If it’s a multiple of 3, it should print “Fizz”. 
// If it’s a multiple of 5, it should print “Buzz”. 
// If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.

function fizzBuzz(){
    for(i = 0; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        } else if(i % 3 == 0){
        console.log("Fizz");
        } else if(i % 5 == 0){
        console.log("Buzz");
        } else {
        console.log(i);
        };  
    };
}

console.log(fizzBuzz())