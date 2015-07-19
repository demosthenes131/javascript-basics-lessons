function dieRoll(lower, upper) {
  if (isNaN(lower) || isNaN(upper)) {
    throw new Error('Both arguments must be numbers');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

var startingNumber = prompt("Give me a starting number.");
var endNumber = prompt("Give me an ending number.");
var getRandomNumber = dieRoll(parseInt(startingNumber), parseInt(endNumber));
document.write("<p>" + getRandomNumber + " is a number between " 
    + startingNumber + " and " + endNumber + ".</p>");