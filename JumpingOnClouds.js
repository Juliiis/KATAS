// HackerRank
// There is a large pile of socks that must be paired 
// by color. Given an array of integers representing 
// the color of each sock, determine how many pairs of 
// socks with matching colors there are.

function jumpingOnClouds(c) {
    let count = 0;
    for(let i=0; i < c.length - 1; i++){
      if(c[i+2] === 0){
        i++;
      }
      count++;
    }
    return count;
  }
  console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))