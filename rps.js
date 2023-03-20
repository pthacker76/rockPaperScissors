const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreDisplay = document.getElementById('score')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let userScore = 0
let computerScore = 0
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
    getResults()
    checkScore();
    scoreDisplay.innerText = "User: " + userScore + " Computer: " + computerScore;
}))
function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    return playerChoice;
}
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock";
    }
    else if (num === 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0){
        computerChoice = 'rock'
    }
    else if (randomNumber === 1){
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerText = computerChoice
}

function getResults (){
    if (computerChoice === userChoice){
        resultDisplay.innerText = "Tie";
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
        resultDisplay.innerText = "Computer Wins";
        computerScore ++
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
        resultDisplay.innerText= "Computer Wins";
        computerScore ++
    }
    else if (computerChoice === 'paper' && userChoice === 'rock'){
        resultDisplay.innerText = "Computer Wins";
        computerScore ++
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerText = "User Wins";
        userScore++;
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock'){
        resultDisplay.innerText = "User Wins";
        userScore++;    
    }
    else if (computerChoice === 'rock' && userChoice === 'paper'){
        resultDisplay.innerText = "User Wins";
        userScore++;    
    }
}
function checkScore(){
    if (userScore === 5){
        resultDisplay.innerText = "User wins game";
        userScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        resultDisplay.innerText = "Computer wins game";
        userScore = 0;
        computerScore = 0;

    }
}


