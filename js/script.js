let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const scoreBoard_p = document.querySelector(".result > p");*************
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


/* Function game */

function game(userChoice) {
    PUT FUCNTION getComputerChoice HeRE

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


/* Core Computer function*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];    
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
}


function convertToWord(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors";
}

/* Win condition */

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span = computerScore;
    const smallUserWord = "user".fontsize(3);
    const smallUserWord = "comp".fontsize(3);
    result_p.innerHTML = ""
    console.log(user);
    console.log(computer);

}

/* Lose condition */ **************
function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const userName = "(user)".fontsize(3).sup();
    const compName = "(comp)".fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
}

function draw() {
    console.log("Draw!!")
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
}
