var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;

console.log(number1);
console.log(number2);
var player1text = document.querySelector("#player1dice");
var player2text = document.querySelector("#player2dice");
var player1img = document.querySelector(".img1");
var player2img = document.querySelector(".img2");
var heading = document.querySelector("h1");

if (number1 > number2) {
  heading.innerText = "🚩 Player 1 Wins!";
}
if (number2 > number1) {
  heading.innerText = "Player 2 Wins! 🚩";
}

if (number1 == number2) {
  heading.innerText = "It's a TIE!";
}

if (number1 == 1) {
  player1img.src = "./images/dice1.png";
}
if (number1 == 2) {
  player1img.src = "./images/dice2.png";
}
if (number1 == 3) {
  player1img.src = "./images/dice3.png";
}
if (number1 == 4) {
  player1img.src = "./images/dice4.png";
}
if (number1 == 5) {
  player1img.src = "./images/dice5.png";
}
if (number1 == 6) {
  player1img.src = "./images/dice6.png";
}

if (number2 == 1) {
  player2img.src = "./images/dice1.png";
}
if (number2 == 2) {
  player2img.src = "./images/dice2.png";
}
if (number2 == 3) {
  player2img.src = "./images/dice3.png";
}
if (number2 == 4) {
  player2img.src = "./images/dice4.png";
}
if (number2 == 5) {
  player2img.src = "./images/dice5.png";
}
if (number2 == 6) {
  player2img.src = "./images/dice6.png";
}
player1text.innerHTML = number1;
player2text.innerHTML = number2;
