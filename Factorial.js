// Implement a function named factorial that has one parameter: an integer, . 
//It must return the value of  (i.e.,  factorial).
// Example:
// input = 4
// output = 24 
// why? --> 4 x 3 x 2 x 1 = 24


function factorial(n){
    if(n === 0){
        return 1
    } else {
      return n * factorial(n - 1);
    }
}
console.log(5)