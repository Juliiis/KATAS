//There is a large pile of socks that must be paired 
//by color. Given an array of integers representing 
//the color of each sock, determine how many pairs of 
//socks with matching colors there are.

function sockMerchant(n, ar) {
    const socks = [];
    let pairs = 0;
  
  for(let n = 0; n < ar.length; n++){
    let color = ar[n]
    if(socks[color]){
      pairs++;
      socks[color] = 0
    }
    else socks[color] = 1
  }
    return pairs
  }
  
  socks = [10, 20, 30, 20, 10, 50]