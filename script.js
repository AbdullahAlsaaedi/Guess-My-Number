// var x = document.getElementsByClassName("btn").value;
let score = document.querySelector(".score-number");

let randomNumber = 1 + Math.trunc(Math.random() * 20);
let highscore = "";
let lost = false;

const displayMessage = function (msg) {
  document.querySelector(".guess-result").textContent = msg;
};
const displayScore = function (msg) {
  document.querySelector(".score-number").textContent = msg;
};
const DisplayHighScore = function (msg) {
  document.querySelector(".highscore-number").textContent = msg;
};

console.log("random is " + randomNumber);
function getValue() {
  let inputValue = Number(document.getElementById("input").value);
  console.log(inputValue);

  if (!lost) {
    if (!inputValue || inputValue < 1 || inputValue > 20) {
      displayMessage("Please pick a number between 1 and 20!");
    } else if (inputValue !== randomNumber) {
      displayMessage(inputValue > randomNumber ? "High" : "Low");
      displayScore(Number(score.textContent) - 1);
    } else {
      displayMessage("Correct Number!");

      document.querySelector(".guess-number").textContent = inputValue;
      document.querySelector(".guess-number").style.paddingRight = "8rem";
      document.querySelector(".guess-number").style.paddingLeft = "8rem";

      document.body.style.backgroundColor = "#7CFC00";
      if (score.textContent > highscore) {
        highscore = score.textContent;
        DisplayHighScore(score.textContent);
      }
    }
  }
  if (Number(score.textContent) < 1) {
    lost = true;
    displayMessage("You Lost the game!");
  }
}

function reset() {
  document.body.style.backgroundColor = "#222222";
  displayScore("20");
  displayMessage("Start quessing...");

  document.querySelector(".guess-number").textContent = "?";
  document.querySelector(".guess-number").style.paddingRight = "5rem";
  document.querySelector(".guess-number").style.paddingLeft = "5rem";
  randomNumber = 1 + Math.trunc(Math.random() * 20);
  console.log("random is " + randomNumber);
  document.getElementById("input").value = "";
}
