let playerChoice = 0;
let playerPontuacao = 0;
let computerChoice = 0;
let computerPontuacao = 0;
let winner = -1;

function play(choice) {
    playerChoice = choice;            
    computerChoice = Math.floor((Math.random () * (3 - 1 + 1))) + 1;

// 1 - Rock
// 2 - Paper
// 3 - Scissor

if((playerChoice == 1) && (computerChoice == 1)){
    winner = 0;
}              
else if((playerChoice == 1) && (computerChoice == 2)){
    winner = 2;
    computerPontuacao++;
}
else if((playerChoice == 1) && (computerChoice == 3)){
    winner = 1;
    playerPontuacao++;
}
else if((playerChoice == 2) && (computerChoice == 1)){
    winner == 1;
    playerPontuacao++;
}
else if((playerChoice == 2) && (computerChoice == 2)){
    winner = 0;
}
else if((playerChoice == 2) && (computerChoice == 3)){
    winner = 2;
    computerPontuacao++;
}
else if((playerChoice == 3) && (computerChoice == 1)){
    winner == 2;
    computerPontuacao++;
}
else if((playerChoice == 3) && (computerChoice == 2)){
    winner = 1;
    playerPontuacao++;
}
else if((playerChoice == 3) && (computerChoice == 3)){
    winner = 0;

}

document.getElementById("player-choice-1").classList.remove("selected");
document.getElementById("player-choice-2").classList.remove("selected");
document.getElementById("player-choice-3").classList.remove("selected");
document.getElementById("computer-choice-1").classList.remove("selected");
document.getElementById("computer-choice-2").classList.remove("selected");
document.getElementById("computer-choice-3").classList.remove("selected");

document.getElementById("player-choice-"+ playerChoice).classList.add("selected");
document.getElementById("computer-choice-" + computerChoice).classList.add("selected");

if(winner == 0){
    document.getElementById("messages").innerHTML = "Draw";
}
else if(winner == 1){
    document.getElementById("messages").innerHTML = "Player wins";
}
else if(winner == 2){
    document.getElementById("messages").innerHTML = "Computer wins";
}


document.getElementById("player-score").innerHTML = playerPontuacao;
document.getElementById("computer-score").innerHTML = computerPontuacao;

}
