//In this kata, you will write a function that receives an array of string and returns 
//a string that is either 'naughty' or 'nice'.
//Strings that start with the letters b, f, or k are naughty.
//Strings that start with the letters g, s, or n are nice.
//Other strings are neither naughty nor nice.
//If there is an equal amount of bad and good actions, return 'naughty'

function whatListAmIOn(actions){ 

    var naughty = 0
    var nice = 0 

    for(i=0; i < actions.length; i++) { 
     if(actions[i][0] === "b" || actions[i][0] === "f" || actions[i][0] === "k") {
         naughty++
        } 
     if(actions[i][0] === "g"|| actions[i][0] === "s" || actions[i][0] === "n") {
         nice++
        }
      }
     if(naughty > nice){
         return "naughty"
        }
     else if(naughty === nice){
         return "naughty"
        }
     else {
         return "nice"
        }
   }
   bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
   console.log(whatListAmIOn(bad_actions)) // -> 'naughty'
   good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
   console.log(whatListAmIOn(good_actions)) //-> 'nice'
   actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
   console.log(whatListAmIOn(actions)) //-> 'naughty'  