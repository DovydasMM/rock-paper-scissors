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
   //let playerStance = prompt("What is your stance?");
   playerStance = playerStance.charAt(0).toUpperCase()+playerStance.slice(1).toLowerCase();
   if (playerStance != "Rock" && playerStance != "Paper" && playerStance != "Scissors") {
       alert("Wrong type!");
       playerSelect();
   }
   return playerStance;
    }

const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click',()=> {
    playerStance = "Rock";
    playRound();
});

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click',()=> {
    playerStance = "Paper";
    playRound();
});

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click',()=> {
    playerStance = "Scissors";
    playRound();
});

function playRound() {
    let computerChoice = computerSelect();
    let playerChoice = playerSelect();
    let roundWinner;
        // computer Paper
        if (computerChoice == "Paper" && playerChoice=="Rock") {
            const showWinner = document.createElement('div');
            showWinner.textContent = "You Lose! Paper beats Rock!";
            container.appendChild(showWinner);
        
            console.log("You Lose! Paper beats Rock!");
            roundWinner = "Computer";
    }   else if (computerChoice == "Paper" && playerChoice=="Scissors") {
            const showWinner = document.createElement('div');
            showWinner.textContent = "You Win! Scissors beat Paper!";
            container.appendChild(showWinner);
            console.log("You Win! Scissors beat Paper!");
            roundWinner = "Player";
    // computer Rock
    }   else if (computerChoice == "Rock" && playerChoice=="Scissors") {
            const showWinner = document.createElement('div');
            showWinner.textContent = "You Lose! Rock beats Scissors!";
            container.appendChild(showWinner);        
            console.log("You Lose! Rock beats Scissors!");
            roundWinner = "Computer";
    }   else if (computerChoice == "Rock" && playerChoice=="Paper") {
            const showWinner = document.createElement('div');
            showWinner.textContent = "You Win! Paper beats Rock!";
            container.appendChild(showWinner);             
            console.log("You Win! Paper beats Rock!");
            roundWinner = "Player";
    // computer Scissors
    }   else if (computerChoice == "Scissors" && playerChoice=="Rock") {
        const showWinner = document.createElement('div');
        showWinner.textContent = "You Win! Rock beats Scissors!";
        container.appendChild(showWinner);                     
        console.log("You Win! Rock beats Scissors!");
        roundWinner = "Player";
    }   else if (computerChoice == "Scissors" && playerChoice=="Paper") {
        const showWinner = document.createElement('div');
        showWinner.textContent = "You Lose! Scissors beats Paper!";
        container.appendChild(showWinner);                             
        console.log("You Lose! Scissors beats Paper!");
        roundWinner = "Computer";
    // It's a draw
    }
        else if (computerChoice == playerChoice){
            const showWinner = document.createElement('div');
            showWinner.textContent = "It's a draw!";
            container.appendChild(showWinner);                                         
            console.log("It's a draw!");
            roundWinner = "Draw";
        }
    return roundWinner;
}

//let gameRound = playRound(playerChoice,computerChoice);


function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) { // amount of rounds played.
        roundWinner = playRound();
        if (roundWinner == "Player") {
            playerPoints = playerPoints+1;
        }
        else if (roundWinner == "Computer") {
            computerPoints = computerPoints +1;

        }
console.log("You have " + playerPoints + " wins. The Computer has " + computerPoints + " wins.");
}
if (playerPoints > computerPoints){
    console.log("Congratulations! You have " + playerPoints +" wins in total! the Computer had " + computerPoints + " wins in the end.")
} else if (computerPoints > playerPoints){
    console.log("Booo! You lost. You only had " + playerPoints +" wins, while the Computer had " + computerPoints + " wins in the end.")
} else if (computerPoints == playerPoints){
    console.log("It's a draw. You both had " + playerPoints + " wins.")
}
}

