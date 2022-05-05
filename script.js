function computerPlay() {
    let computerSelection;
    let randInt=Math.floor(Math.random()*3)+1;
    if (randInt == 1) {
        computerSelection = "Rock"
    } else if (randInt == 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
    return computerSelection;
}
function playerSelect() {
    let playerStance = prompt("What is your stance?");
    playerStance = playerStance.charAt(0).toUpperCase()+playerStance.slice(1).toLowerCase();
    return playerStance;
    }


