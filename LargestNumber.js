// CodinGame
// The problem requires find the largest integer number in an array.

function largestnumber(number) {
    var numbermayor = 0;
  
    for(let i = 0; i <= number.length; i++) {
      if (number[i] > numbermayor) {
        numbermayor = number[i];
      }
    }
  
    return numbermayor;
  }
  
  var mayor = largestnumber([1, 85, -20, 55, 7])
  console.log(mayor)