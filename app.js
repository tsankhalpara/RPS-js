const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.getElementsByClassName("score-board");
const result_div = document.getElementsByClassName("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"]
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
};

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if ((userChoice === "r" && computerChoice === "r") ||
  (userChoice === "p" && computerChoice === "p") ||
  (userChoice === "s" && computerChoice === "s")){
    console.log("Draw");
    console.log("Computer: " + computerChoice);
    console.log("User: " + userChoice);
  }
  else if ((userChoice === "r" && computerChoice === "s") ||
  (userChoice === "s" && computerChoice === "p") ||
  (userChoice === "p" && computerChoice === "r")) {
    console.log("User win");
    console.log("Computer: " + computerChoice);
    console.log("User: " + userChoice);
  }
  else if ((userChoice === "r" && computerChoice === "p") ||
  (userChoice === "p" && computerChoice === "s") ||
  (userChoice === "s" && computerChoice === "r")) {
    console.log("computer wins");
    console.log("Computer: " + computerChoice);
    console.log("User: " + userChoice);
  }
};

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
};

main();
