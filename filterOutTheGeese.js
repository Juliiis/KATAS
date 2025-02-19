// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, 
// that takes an array of strings as an argument 
// and returns a filtered array containing the same elements 
// but with the 'geese' removed.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    
    var newArray = birds.filter(bird => {
      return !geese.includes(bird)
    })
    return newArray;
  
  };

  console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    
  console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);

  console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);