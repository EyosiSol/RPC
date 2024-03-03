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
    let val = this.value;
    const span = document.querySelector(".span");
    span.textContent = val;
    if(val === computerChoice){
        span.textContent += `Draw, ${val} equals ${computerChoice}`
    }
    else if(val === 'rock'){
        if(computerChoice === 'paper'){
            span.textContent += `computer wins`
        }
        else if( computerChoice === 'scissors'){
            span.textContent += "player wins"
        }
    }
    else if(val === 'paper'){
        if(computerChoice === 'scissors'){
            span.textContent += `computer wins`
        }
        else if( computerChoice === 'rock'){
            span.textContent += "player wins"
        }
    }else if(val === 'scissors'){
        if(computerChoice === 'rock'){
            span.textContent += `computer wins`
        }
        else if( computerChoice === 'paper'){
            span.textContent += "player wins"
        }
    }
  });
});
