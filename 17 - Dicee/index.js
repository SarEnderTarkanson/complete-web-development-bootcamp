var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var randomDiceImage1 = `./images/dice${randomNumber1}.png`;
var randomDiceImage2 = `./images/dice${randomNumber2}.png`;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!"
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Won!"
} else{
    document.querySelector("h1").innerHTML = "It's a draw."
}


