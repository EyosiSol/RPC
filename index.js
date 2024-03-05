const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultsDiv = document.querySelector(".results");
const reloadbtn = document.getElementById('reload');



const choices = ["rock", "paper", "scissors"];
let round = 0; // Track current round
let playerScore = 0;
let computerScore = 0;

function appendToResults(message) {
  let p = document.createElement('p');
  p.innerHTML = message;
  p.setAttribute('style','margin: 2px ; font-size:20px');
  resultsDiv.appendChild(p);
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function updateScore(winner) {
  if (winner === "You Win!") {
    playerScore++;
  } else if (winner === "You Lose!") {
    computerScore++;
  }
}

function endGame() {

  appendToResults("</br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Game Over!**");
  let finalResult = playerScore > computerScore ? "You Win Overall!" : playerScore < computerScore ? "Computer Wins Overall!" : "Its a Tie";
  appendToResults(`<br> Your Score: ${playerScore} | Computer Score: ${computerScore}`);
  appendToResults(`</br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  **${finalResult}**`);
  // appendToResults(`**Your Score: ${playerScore} | Computer Score: ${computerScore}**`);

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function playGame(choice) {
  if(round === 4){
    round++;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const roundWinner = playRound(choice, computerChoice);
    let space = "     ";
    appendToResults(`Round ${round}:  

       Computer chose ${computerChoice} ${roundWinner}`);
    // Simulate computer choice
    updateScore(roundWinner);
    // appendToResults(`**Your Score: ${playerScore} | Computer Score: ${computerScore}**`);
    endGame()
  }
  else if (round < 4) {
    round++;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const roundWinner = playRound(choice, computerChoice);
    appendToResults(`Round ${round}:  Computer chose ${computerChoice}: &nbsp; ${roundWinner}`);
    // Simulate computer choice
    updateScore(roundWinner);
  }
  // } else {
  //   // Show overall score before disabling buttons
  //   appendToResults(`**Your Score: ${playerScore} | Computer Score: ${computerScore}**`);
  //   endGame();
  // }
}

rockBtn.addEventListener("click", function() {
  playGame("rock");
});

paperBtn.addEventListener("click", function() {
  playGame("paper");
});

scissorsBtn.addEventListener("click", function() {
  playGame("scissors");
});

reloadbtn.addEventListener('click',function(){
  window.location.reload();
})



  //function to play one Round of the game//

  // function playRound(computerChoice, playerChoice) {
  //   if (computerChoice === playerChoice) {
  //     return "Draw";
  //   } else if (playerChoice === "rock" && computerChoice === "scissors") {
  //     return "Player";
  //   } else if (playerChoice === "rock" && computerChoice === "paper") {
  //     return "Computer";
  //   } else if (playerChoice === "paper" && computerChoice === "rock") {
  //     return "Player";
  //   } else if (playerChoice === "paper" && computerChoice === "scissors") {
  //     return "Computer";
  //   } else if (playerChoice === "scissors" && computerChoice === "paper") {
  //     return "Player";
  //   } else if (playerChoice === "scissors" && computerChoice === "rock") {
  //     return "Computer";
  //   }
  

