const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
const span = document.querySelector(".span");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return options[random];
}

let computerChoice = getComputerChoice();

let round = 5;

while(round != 0 ){
  let clicked = "";
  rockbtn.addEventListener('click',function(){
    clicked = this.value;
    span.textContent = clicked;
  })
}


  //function to play one Round of the game//

  function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
      return "Draw";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      return "Player";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
      return "Computer";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      return "Player";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
      return "Computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      return "Player";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
      return "Computer";
    }
  }

