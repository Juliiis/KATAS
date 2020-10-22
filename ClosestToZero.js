// Implement closestToZero() to return the integer in the array numbers that is closest to zero.
// If there are two integers equally close to zero, consider the positive element to be closer to zero
// (example: if numbers contains -5 and 5, return 5).
// If numbers is null or empty, return 0.

function closestToZero(numbers){

    if(numbers === undefined || numbers.length == 0){
        return 0;
    }

    var indexClosesToZero = 0;
    
    for (let i = 0; i < numbers.length; i++){
        if (Math.abs(numbers[i]) <= Math.abs(numbers[indexClosesToZero])){
            indexClosesToZero = i;
        }
    }
    return numbers[indexClosesToZero];
}

var test1 = closestToZero([-9, 8, 2, -5, 7]);
console.log(test1); // Should be 2

var test2 = closestToZero([-3, -2, -1, 1, 2, 3]);
console.log(test2); // Should be 1