# RPC
Rock Paper Scissors Project 

****What I am asked to Do***

- [ ] Things that must be included in the project
    
- [ ] game is against computer
    
- [ ] use getComputerChoice
    
    - [ ] it will generate randomly
        - [ ] from Rock. Paper, Sicors
        - [ ] using console
- [ ] function (playRound) that plays a single round of RPS that take PlayerSelection and ComputerSelection and returns the winner
    
- [ ] make it case insensitive
    
- [ ] must be returned
    
- [ ] write new function "playGame()". it contains the previous function inside.
    
    - [ ] plays five round
    - [ ] keeps score
    - [ ] reports winner and loser at the end
    - [ ] if u can use loop use loop else call it five times
- [ ] prompt() to get input from the user
    

&nbsp;

Note:

rock beats scissors and loses to paper

paper beats paper and loses to scissors

scissors beats paper and loses to rock

***THE PSEUDOCODE AND THINK PROCESS***

1.  Block 1 (getComputerChocie)

- - use List which consists of Rock, Paper and Scissors  
        \- that means each have 0,1,2 index number   
        \- generate a random number between 0,1,2   
        \- then use that generated number to locate the word from the List   
        \- return the result which is the result randomly from the list

2\. Block 2 ( variables for getComputerChoice)

- - storage for randomly generated number  
        \- list of the rock,paper and scissors (should be global variable)

3\. Block 3( playRound)

- - it takes two parameters the value of getComputerChoice and the playerSelection  
        \- play's a single round.  
        \- get the input from player and compare it with getComputerChoice  
        \- use nested if statments for each playerSelection check the getComputerChoice hence we will have 6 if statments and each return the following  
        \- either \`you lose ${computerChoice} beats ${playerSelection}~~ - ~~either \`you wind  $  {playerSelection} beats ${computerChoice}  
        \- either \` you drew ${playerSelection} is same with ${computerChoice

4\. Block 4 ( variables for playRound)

- - ==take input from user using prompt and put it into lowercase makes it case insensitive and assign it to a variable called playerSelection==  
        \- ==set the getComputerChoice and assign it's result to a certain variable with name computerChoice==

5.  Block 5(playGame())

- a function that lets me play the game for five rounds
- must show on what round what is happening and also show how many times each players has won
- uses for loop for i <5;
- if the player gets the answer then stop else keep the game going until the 5th round
- add some modification on the playRound that is for each win increase the total win of the players out/five
- if player win > computer then player won, if player 2 < computer then computer won,


