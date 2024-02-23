//function to get generate computer's choice//
function getComputerChoice(){
        let random = Math.floor(Math.random()*(3));
        const options = ["rock","paper","scissors"];
        return options[random];
}

//variables for getComptuerChoice//


//function to play one Round of the game//
function playRound(computerChoice,playerChoice){
    if( computerChoice === playerChoice){
        // return (`you drew ${computerChoice} and ${playerChoice} are the same`) ;
        return "Draw";
    } else if ( playerChoice === 'rock' && computerChoice === 'scissors'){
        // return (`you won ${playerChoice} beat ${computerChoice}`);
        return "Player";
    }else if ( playerChoice === 'rock' && computerChoice === 'paper'){
        // return(`you lose ${computerChoice} beats ${playerChoice}`);
        return "Computer"
    }else if ( playerChoice === 'paper' && computerChoice === 'rock'){
        // return (`you won ${playerChoice} beat ${computerChoice}`);
        return "Player"
    }else if ( playerChoice === 'paper' && computerChoice === 'scissors'){
        // return (`you lose ${computerChoice} beats ${playerChoice}`);
        return "Computer"
    }else if ( playerChoice === 'scissors' && computerChoice === 'paper'){
        // return (`you won ${playerChoice} beat ${computerChoice}`);
        return "Player";
    }else if ( playerChoice === 'scissors' && computerChoice === 'rock'){
        // return (`you lose ${computerChoice} beats ${playerChoice}`);
        return "Computer";
    }
}
//variables that are necessary for playROund function//
let input = prompt("Enter Rock,paper or scissors:");
let computerChoice = getComputerChoice();
let playerChoice = input.toLowerCase();


// function to play five rounds
function playGame(){
    let computerWins = 0;
    let playerWins = 0;
    let roundWinner = playRound(computerChoice,playerChoice);
    for(let i=0;i<5;i++){

       if( roundWinner === "Draw"){
                computerWins += 1;
                playerWins += 1;
                console.log(`round ${i} Computer:${computerWins} and Player:${playerWins} ${roundWinner} ` );
                let computerChoice = getComputerChoice;
                console.log(computerChoice)
                let input = prompt("Enter Rock,paper or scissors:");
                let playerChoice = input.toLowerCase();              
                roundWinner = playRound(computerChoice,playerChoice);
         } 
        else if (roundWinner === "Player"){
                playerWins += 1;
                console.log(`round ${i} Computer:${computerWins} and Player:${playerWins} ${roundWinner}` );
                let computerChoice = getComputerChoice;
                console.log(computerChoice)
                let input = prompt("Enter Rock,paper or scissors:" );
                let playerChoice = input.toLowerCase();
                roundWinner = playRound(computerChoice,playerChoice);
        }
        else if (roundWinner === "Computer"){
                computerWins += 1;
                console.log(`round ${i} Computer:${computerWins} and Player:${playerWins} ${roundWinner}  ` );
                let computerChoice = getComputerChoice;
                console.log(computerChoice)
                let input = prompt("Enter Rock,paper or scissors:" );
                let playerChoice = input.toLowerCase();
                roundWinner = playRound(computerChoice,playerChoice);
            }
        }
    if( computerWins > playerWins){
        return `GAME OVER Computer wins Computer: ${computerWins} and Player: ${playerWins} out of 5 rounds`;
    }else if (playerWins > computerWins){
        return `GAME OVER Player wins Player: ${playerWins} and  Computer: ${computerWins} out of 5 rounds`;
    }
}

console.log(playGame())