let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



/* Core Computer function*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];    
}

/*************** check switch documentation***********

***************************************************** */

/* Core function game */

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
        lose();
         break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissors":
         draw();
        break;               
    }
}



function convertToWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors";
}

/* Win condition  put acima de core function game*/

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}. You Win!`;
   }


/* Lose condition */ **************

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}. You Lost!`;  
    userChoice.classList.add("red-glow"); 
    setTimeout(function() {
        userChoice.classList.remove("red-glow");},300);  
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}. It is a draw!`;

}

/*Convertcase */

function convertCase(anythingIwant) {
    if(anythingIwant ==="paper") return "Paper";
    if(anythingIwant ==="scissors") return "Scissors";
    return "Rock";
}

/* Event listener */

main ();

function main() {

rock_div.addEventListener("click", function() {
    console.log("you clicked on rock");
})

paper_div.addEventListener("click", function() {
    console.log("you clicked on paper");
})

scissors_div.addEventListener("click", function() {
    console.log("you clicked on scissors");
})
}
