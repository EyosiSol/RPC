const buttonValues = {}; // Create an empty object

const buttons = document.querySelectorAll(".btn"); // Select all buttons with class "btn"

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return options[random];
}

let computerChoice = getComputerChoice();

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttonValues[this.id] = this.value; // Update object with button value (if buttons have IDs)
    const span = document.querySelector(".span");

    function playGame() {
      let computerWins = 0;
      let playerWins = 0;
      for (let i = 1; i <= 5; i++) {
        let input = this.value;
        let playerChoice = input.toLowerCase();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(computerChoice, playerChoice);
        if (roundWinner === "Draw") {
          computerWins += 1;
          playerWins += 1;
          span.textContent = 
            `round ${i} : is Draw : ${playerChoice} is the same as ${computerChoice}`
          
        } else if (roundWinner === "Player") {
          playerWins += 1;
          span.textContent = 
            `round ${i} : is won by the Player: ${playerChoice} beats ${computerChoice}`
    
        } else if (roundWinner === "Computer") {
          computerWins += 1;
          span.textContent = 
            `round ${i} : is won by the Computer: ${computerChoice} beats ${playerChoice}`
          
        }
      }
      if (computerWins > playerWins) {
        console.log(`Computer Won ${computerWins} to ${playerWins}`);
        console.log(`Reload the page to play again`);
      } else if (computerWins < playerWins) {
        console.log(`Player Won ${playerWins} to ${computerWins}`);
        console.log(`Reload the page to play again`);
      } else {
        console.log("Game Ends in Draw Reload the page to play again");
      }
    }
  });
});

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

function playGame() {
  let computerWins = 0;
  let playerWins = 0;
  for (let i = 1; i <= 5; i++) {
    let input = this.value;
    let playerChoice = input.toLowerCase();
    let computerChoice = getComputerChoice();
    let roundWinner = playRound(computerChoice, playerChoice);
    if (roundWinner === "Draw") {
      computerWins += 1;
      playerWins += 1;
      span.textContent(
        `round ${i} : is Draw : ${playerChoice} is the same as ${computerChoice}`
      );
    } else if (roundWinner === "Player") {
      playerWins += 1;
      console.log(
        `round ${i} : is won by the Player: ${playerChoice} beats ${computerChoice}`
      );
    } else if (roundWinner === "Computer") {
      computerWins += 1;
      console.log(
        `round ${i} : is won by the Computer: ${computerChoice} beats ${playerChoice}`
      );
    }
  }
  if (computerWins > playerWins) {
    console.log(`Computer Won ${computerWins} to ${playerWins}`);
    console.log(`Reload the page to play again`);
  } else if (computerWins < playerWins) {
    console.log(`Player Won ${playerWins} to ${computerWins}`);
    console.log(`Reload the page to play again`);
  } else {
    console.log("Game Ends in Draw Reload the page to play again");
  }
}
