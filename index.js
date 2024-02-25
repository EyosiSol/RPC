//function to get generate computer's choice//
function getComputerChoice(){
        let random = Math.floor(Math.random()*(3));
        const options = ["rock","paper","scissors"];
        return options[random];
}

//function to play one Round of the game//
function playRound(computerChoice,playerChoice){
    if( computerChoice === playerChoice){
        return "Draw";
    } else if ( playerChoice === 'rock' && computerChoice === 'scissors'){
        return "Player";
    }else if ( playerChoice === 'rock' && computerChoice === 'paper'){
        return "Computer"
    }else if ( playerChoice === 'paper' && computerChoice === 'rock'){
        return "Player"
    }else if ( playerChoice === 'paper' && computerChoice === 'scissors'){
        return "Computer"
    }else if ( playerChoice === 'scissors' && computerChoice === 'paper'){
        return "Player";
    }else if ( playerChoice === 'scissors' && computerChoice === 'rock'){
        return "Computer";
    }
}

// function to play five rounds
function playGame(){
    let computerWins =0;
    let playerWins = 0;
   for (let i = 1 ; i <=5; i++){
    let input = prompt("Enter Rock,paper or scissors:");
    let playerChoice = input.toLowerCase();
    let computerChoice = getComputerChoice();
    let roundWinner = playRound(computerChoice,playerChoice);
    
    if (roundWinner === 'Draw'){
        computerWins +=1;
        playerWins +=1;
        console.log(`round ${i} : is Draw :  ${playerChoice} is the same as ${computerChoice}`);
        
    }else if (roundWinner === 'Player'){
        playerWins +=1;
        console.log(`round ${i} : is won by the Player: ${playerChoice} beats ${computerChoice}`);
    }else if (roundWinner === 'Computer'){
        computerWins +=1;
        console.log(`round ${i} : is won by the Computer: ${computerChoice} beats ${playerChoice}`);
    }
   }
   if(computerWins > playerWins){
     console.log(`Computer Won ${computerWins}  to ${playerWins}`);
     console.log(`Reload the page to play again`);
   }
   else if(computerWins < playerWins){
    console.log(`Player Won ${playerWins} to ${computerWins}`)
    console.log(`Reload the page to play again`);
   }else{
    console.log('Game Ends in Draw Reload the page to play again')
   }
       
}

playGame();
