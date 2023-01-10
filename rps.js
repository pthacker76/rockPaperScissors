console.log("Howdy");

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    return playerChoice;
}
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num == 0){
        return "rock";
    }
    else if (num == 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
    
}
function playRound(p,c){
    
    console.log("your choice: "+ p + ", Computer: "+ c);
    if (p.toLowerCase() == c) {
        return 0;
    }
    else if (p.toLowerCase() == 'rock' && c == 'scissors' 
                || p.toLowerCase() == 'scissors' && c == 'paper' 
                || p.toLowerCase() == 'paper' && c == 'rock' ){
        console.log( "You win! " + p + " beats " + c);
        return 1;
    }
    else {
        console.log("You lose! " + c + " beats "+ p);
    }
}
function game() {
    let playerScore = 0;
    let computerScore =0;
    for (let i =1; i<=5; i++){
        let result = playRound(getPlayerChoice(),getComputerChoice());
        if (result == 0) {
            console.log("You tie, both chose same");
        }
        else if ( result == 1){
            playerScore++;
        }
        else{
            computerScore++;
        }
        console.log("Score: Computer> " + computerScore + " , Player>" + playerScore);
    }
    if (playerScore > computerScore){
        console.log("Player wins: " + playerScore+ " - " + computerScore);
    }
    else if (computerScore> playerScore){
        console.log("Computer wins: " + computerScore + " - " + playerScore);
    }
    else{
        console.log("TIE: " + computerScore + " - " + playerScore);
    }
}
game();
/*console.log(playRound(playerChoice,getComputerChoice()));*/

