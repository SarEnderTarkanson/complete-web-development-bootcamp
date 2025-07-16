var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColors[nextSequence()];

var gamePattern = []

gamePattern.push(randomChosenColour)

function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 3 + 1;
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
}
