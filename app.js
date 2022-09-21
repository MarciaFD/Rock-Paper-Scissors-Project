const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber];    
}

 function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
       case "rockpaper":
       case "paperscissors":
       case "scissorsrock":

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

