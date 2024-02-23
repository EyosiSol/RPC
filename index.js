// input from user//
let input = prompt("Enter Rock,paper or scissors: ");

//function to get generate computer's choice//
function getComputerChoice(){
        return options[x];
}
//variables for getComptuerChoice//
let x = Math.floor(Math.random()*(3));
const options = ["rock","paper","scissors"];

//function to play one Round of the game//
function playRound(computerChoice,playerChoice){
    if( computerChoice === playerChoice){
        return (`you drew ${computerChoice} and ${playerChoice} are the same`);
    } else if ( playerChoice === 'rock' && computerChoice === 'scissors'){
        return (`you won ${playerChoice} beat ${computerChoice}`);
    }else if ( playerChoice === 'rock' && computerChoice === 'paper'){
        return(`you lose ${computerChoice} beats ${playerChoice}`);
    }else if ( playerChoice === 'paper' && computerChoice === 'rock'){
        return (`you won ${playerChoice} beat ${computerChoice}`);
    }else if ( playerChoice === 'paper' && computerChoice === 'scissors'){
        return (`you lose ${computerChoice} beats ${playerChoice}`);
    }else if ( playerChoice === 'scissors' && computerChoice === 'paper'){
        return (`you won ${playerChoice} beat ${computerChoice}`);
    }else if ( playerChoice === 'scissors' && computerChoice === 'rock'){
        return (`you lose ${computerChoice} beats ${playerChoice}`);
    }
}
//variables that are necessary for playROund function//

let playerChoice = input.toLowerCase();
let computerChoice = getComputerChoice();

console.log(playRound(computerChoice,playerChoice));