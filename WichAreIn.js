// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order 
// of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

function inArray(array1,array2){

    var i =[];
    var j = [];
    var result = [];

    o: for (j = 0; j < array1.length; j++) {
        for (i = 0; i < array2.length; i++) {
            if (array2[i].includes(array1[j])) { //includes, true or false
                result.push(array1[j]);
                continue o;
            }
        }
    }
    return result.sort(); //sort to put in order
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
console.log((inArray(a1, a2), ["live", "strong"]))

a1 = ["live", "strong", "arp"]
console.log((inArray(a1, a2), ["arp", "live", "strong"]))

a1 = ["tarp", "mice", "bull"]
console.log((inArray(a1, a2), []))