// Write the function that counts the occurrences of each digit
// and returns the total as an object.
// And empty array must return an empty object.

function count(arr){

    return arr.reduce((p, c) => (p[c] = ++p[c] || 1,p), {});

}

console.log(count([1,1,1,2,2,3])); // {1:3, 2:2, 3:1}
console.log(count([1,2,3,4,5])); // {1:1, 2:1, 3:1, 4:1, 5:1}
console.log(count([])); // {}