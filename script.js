// Variables
let computerChoice, humanChoice, roundCount;
let computerScore = humanScore = 0;

let confirmRoundCount = document.querySelector("#round-count-confirm-btn");

let playRoundBtn = document.querySelector("#play-round-btn");
let rockRadio = document.querySelector("#rock");
let paperRadio = document.querySelector("#paper");
let scissorsRadio = document.querySelector("#scissors");

let roundDisplay = document.querySelector(".current-round");
let roundWinner = document.querySelector("#round-winner");
roundWinner.setAttribute("disabled", "");
let gameWinner = document.querySelector("#game-winner");
gameWinner.setAttribute("disabled", "");

// Event listeners
confirmRoundCount.addEventListener("click", (e) => {
    let roundCountInput = document.querySelector("#round-count-input");
    roundCount = Number(roundCountInput.textContent);
    
    roundCountInput.setAttribute("disabled", "");
    confirmRoundCount.setAttribute("disabled", "");
});

playRoundBtn.addEventListener("click", (e) => {
    for (let currentRound = 1; currentRound <= roundCount; currentRound++) {
        roundDisplay.textContent = `${currentRound/roundCount}`;

    // Get choices
    computerChoice = getComputerChoice();

    if (rockRadio.checked) {
        humanChoice = rockRadio.value;
    } else if (paperRadio.checked) {
        humanChoice = paperRadio.value;
    } else {
        humanChoice = scissorsRadio.value;
    }
        
    // Check if draw
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"
        ) {
            roundWinner.textContent = "Draw";
            continue;
        }

    // Check if computer wins
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
        ) {
            roundWinner.textContent = "Computer wins this round!";
            computerScore++;
        }

    // Check if human wins
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
            roundWinner.textContent = "You win this round!";
            humanScore++;
        }
    }

    // Check if match is over
    calcScore(computerScore, humanScore);
});

// Functions

function getComputerChoice(min=1, max=100) {
    value = Math.floor(Math.random() * (max - min) + min);
    if (value <= 0 || value >= 32) {
        return "rock";
    } else if (value >= 33 || value <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function calcScore(computerScore, humanScore) {
    if (humanScore > computerScore) {
        gameWinner.textContent = "You win this game!";
    } else if (computerScore > humanScore) {
        gameWinner.textContent = "Computer wins this game!";
    } else {
        gameWinner.textContent = "This game is a draw.";
    }
}