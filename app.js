const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


/* Core Computer function*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber];    
}

/*Convertcase */

function convertCase(anythingIwant) {
    if(anythingIwant ==="paper") return "Paper";
    if(anythingIwant ==="scissors") return "Scissors";
    return "Rock";
}

/* Core Game */

 function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log ("Game function:user choice is="+userChoice);
    console.log("Game function: computer choiceis="+computerChoice);

    switch(userChoice + computerChoice) {
        case "scissorpaper":
        case "rockscissors":
        case "paperrock":
        win(userChoice,computerChoice);
        console.log("user wins");
        
        break;
       case "rockpaper":
       case "paperscissors":
       case "scissorsrock":
        console.log("user losescomputer wins");

            break;
       case "rockrock":
       case "paperpaper":
       case "scissorscissors":
            console.log("Its a draw");
            break;  
             
  }
   

function main() {
    rock_div.addEventListener("click", function() {
        game("rock");        
    })
    
    paper_div.addEventListener("click", function() {
        game("paper");      
    })
    
    scissors_div.addEventListener("click", function() {
        game("scissors");        
    })  
}

main();
