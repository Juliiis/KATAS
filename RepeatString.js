//There is a string, "s", of lowercase English letters 
// that is repeated infinitely many times. 
// Given an integer, "n" ,
// find and print the number of letter a's 
//in the first "n" letters of the infinite string.

function repeatedString(s, n) {
    let count = 0;
    const str = s.split('')
    for(let i=0; i < n; i++){
      const currentChar = str[i % s.length]
      if (currentChar === "a"){
        count++;
      }
    }
     return count;
  }
  console.log(repeatedString("aba", 10))