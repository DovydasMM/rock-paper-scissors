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
function playRound() {
    let computerChoice = computerSelect();
    let playerChoice = playerStance;
    let roundWinner;
        /// computer Paper
        if (computerChoice == "Paper" && playerChoice=="Rock") {
            //const showWinner = document.createElement('div');
            //showWinner.textContent = "You Lose! Paper beats Rock!";
            //container.appendChild(showWinner);
            console.log("You Lose! Paper beats Rock!");
            roundWinner = "Computer";
    }   else if (computerChoice == "Paper" && playerChoice=="Scissors") {
            //const showWinner = document.createElement('div');
            //showWinner.textContent = "You Win! Scissors beat Paper!";
            //container.appendChild(showWinner);
            console.log("You Win! Scissors beat Paper!");
            roundWinner = "Player";
        // computer Rock
    }   else if (computerChoice == "Rock" && playerChoice=="Scissors") {
           // const showWinner = document.createElement('div');
            //showWinner.textContent = "You Lose! Rock beats Scissors!";
            //container.appendChild(showWinner);        
            console.log("You Lose! Rock beats Scissors!");
            roundWinner = "Computer";
    }   else if (computerChoice == "Rock" && playerChoice=="Paper") {
           // const showWinner = document.createElement('div');
           // showWinner.textContent = "You Win! Paper beats Rock!";
           // container.appendChild(showWinner);             
            console.log("You Win! Paper beats Rock!");
            roundWinner = "Player";
        // computer Scissors
    }   else if (computerChoice == "Scissors" && playerChoice=="Rock") {
            //const showWinner = document.createElement('div');
            //showWinner.textContent = "You Win! Rock beats Scissors!";
            //container.appendChild(showWinner);                     
            console.log("You Win! Rock beats Scissors!");
            roundWinner = "Player";
    }   else if (computerChoice == "Scissors" && playerChoice=="Paper") {
           // const showWinner = document.createElement('div');
            //showWinner.textContent = "You Lose! Scissors beats Paper!";
            //container.appendChild(showWinner);                             
            console.log("You Lose! Scissors beats Paper!");
            roundWinner = "Computer";
        // It's a draw
    }
        else if (computerChoice == playerChoice){
            //const showWinner = document.createElement('div');
            //showWinner.textContent = "It's a draw!";
            //container.appendChild(showWinner);                                         
            console.log("It's a draw!");
            roundWinner = "Draw";
        }
    return roundWinner;
}

function gameUpdated() {
let playerScore = 0;
let computerScore = 0;
const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click',()=> {
    playerStance = "Rock";
    roundWinner = playRound();
    if (roundWinner == "Player"){
        playerScore +=1;
    } else if (roundWinner == "Computer") {
        computerScore +=1;
    }
    const playerScoreHere = document.querySelector('.playerScoreHere');
    playerScoreHere.textContent = playerScore;
    
    const computerScoreHere = document.querySelector('.computerScoreHere');
    computerScoreHere.textContent = computerScore;

    if (playerScore ==  5 ){
        const gameWinner = document.querySelector('.game-winner');
        winner.children[0].remove(); 
        gameWinner.textContent = "Player wins!!"
        winner.appendChild(gameWinner);
        
    } 
    else if (computerScore == 5){
        const gameWinner = document.querySelector('.game-winner');
        gameWinner.textContent = "Computer wins"
        winner.children[0].remove(); 
        winner.appendChild(gameWinner);
    }
});
const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click',()=> {
    playerStance = "Paper";
    roundWinner = playRound();
    if (roundWinner == "Player"){
        playerScore +=1;
    } else if (roundWinner == "Computer") {
        computerScore +=1;
    }

    const playerScoreHere = document.querySelector('.playerScoreHere');
    playerScoreHere.textContent = playerScore;
    
    const computerScoreHere = document.querySelector('.computerScoreHere');
    computerScoreHere.textContent = computerScore;

    if (playerScore ==  5 ){
        const gameWinner = document.querySelector('.game-winner');
        winner.children[0].remove(); 
        gameWinner.textContent = "Player wins!!"
        winner.appendChild(gameWinner);
        
    } 
    else if (computerScore == 5){
        const gameWinner = document.querySelector('.game-winner');
        gameWinner.textContent = "Computer wins"
        winner.children[0].remove(); 
        winner.appendChild(gameWinner);
    }
});
const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click',()=> {
    playerStance = "Scissors";
    roundWinner = playRound();
    if (roundWinner == "Player"){
        playerScore +=1;
    } else if (roundWinner == "Computer") {
        computerScore +=1;
    }
    const playerScoreHere = document.querySelector('.playerScoreHere');
    playerScoreHere.textContent = playerScore;
    
    const computerScoreHere = document.querySelector('.computerScoreHere');
    computerScoreHere.textContent = computerScore;
    
    if (playerScore ==  5){
        const gameWinner = document.querySelector('.game-winner');
        winner.children[0].remove(); 
        gameWinner.textContent = "Player wins!!"
        winner.appendChild(gameWinner);
        
    } 
    else if (computerScore == 5){
        const gameWinner = document.querySelector('.game-winner');
        gameWinner.textContent = "Computer wins"
        winner.children[0].remove(); 
        winner.appendChild(gameWinner);
    }
});
}
const btnRestart = document.querySelector('.reload');
btnRestart.addEventListener('click',()=> {
    location.reload()
});
gameUpdated();
