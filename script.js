function computerSelect() {
    let computerSelection;
    let randInt=Math.floor(Math.random()*3)+1;
    if (randInt == 1) {
        computerSelection = "Rock"
    } else if (randInt == 2) {
        computerSelection = "Paper"
    } else if (randInt == 3) {
        computerSelection = "Scissors"
    }
    return computerSelection;
}
function playerSelect() {
   let playerStance = prompt("What is your stance?");
   playerStance = playerStance.charAt(0).toUpperCase()+playerStance.slice(1).toLowerCase();
   return playerStance;
    }

// function call
let computerChoice = computerSelect();
let playerChoice = playerSelect();

function playRound(playerChoice,computerChoice) {
// computer Paper
    if (computerChoice == "Paper" && playerChoice=="Rock") {
        console.log("You Lose! Paper beats Rock!");
}   else if (computerChoice == "Paper" && playerChoice=="Scissors") {
        console.log("You Win! Scissors beat Paper!");
// computer Rock
}   else if (computerChoice == "Rock" && playerChoice=="Scissors") {
        console.log("You Lose! Rock beats Scissors!");
}   else if (computerChoice == "Rock" && playerChoice=="Paper") {
        console.log("You Win! Paper beats Rock!");
// computer Scissors
}    else if (computerChoice == "Scissors" && playerChoice=="Rock") {
    console.log("You Win! Rock beats Scissors!");
}   else if (computerChoice == "Scissors" && playerChoice=="Paper") {
    console.log("You Lose! Scissors beats Paper!");
// It's a draw
}
    else if (computerChoice == playerChoice){
        console.log("It's a draw!");
    }
}
playRound(playerChoice,computerChoice);