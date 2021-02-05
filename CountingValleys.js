// HackerRank
// An avid hiker keeps meticulous records of their hikes.
// During the last hike that took exactly steps, 
// for every step it was noted if it was an uphill, "U",
// or a downhill, "D" step. 
// Hikes always start and end at sea level, 
// and each step up or down represents a 1 unit change in altitude.
// Given the sequence of up and down steps during a hike, 
// find and print the number of valleys walked through.

function countingValleys(steps, path) {
    let valley = 0;
    let altitude = 0;
    for(let i=0; i <= steps; i++){
      const currentStep = path[i]
      if (currentStep === "D") {
        altitude--;
      } else if (currentStep === "U") {
        altitude++;
        if (altitude === 0){
          valley++;
        }
      }
    }
    return valley;
  }