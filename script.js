// var x = document.getElementsByClassName("btn").value;
let score = document.querySelector(".score-number");

let randomNumber = 1 + Math.trunc(Math.random() * 20);
let highscore = "";

console.log("random is " + randomNumber);
function getValue() {
  let inputValue = document.getElementById("input").value;
  console.log(inputValue);

  if (inputValue < randomNumber) {
    document.querySelector(".guess-result").textContent = "Low";
    score.textContent = Number(score.textContent) - 1;
  } else if (inputValue > randomNumber) {
    document.querySelector(".guess-result").textContent = "High";
    score.textContent = Number(score.textContent) - 1;
  } else {
    document.querySelector(".guess-result").textContent = "Correct Number!";
    document.querySelector(".guess-number").textContent = inputValue;
    document.body.style.backgroundColor = "#7CFC00";
    if (score.textContent > highscore) {
      highscore = score.textContent;
      document.querySelector(".highscore-number").textContent = highscore;
    }
  }
}

function reset() {
  document.body.style.backgroundColor = "#222222";
  score.textContent = 20;
  document.querySelector(".guess-result").textContent = "Start quessing...";
  document.querySelector(".guess-number").textContent = "?";
  randomNumber = 1 + Math.trunc(Math.random() * 20);
  console.log("random is " + randomNumber);
  document.getElementById("input").value = "";
}
