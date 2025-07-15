// Variables
let humanChoice, computerChoice, roundCount;
let currentRound = 0;
let computerScore = humanScore = 0;

let roundCountBtn = document.querySelector("#round-count-btn");
let roundCountInput = document.querySelector("#round-count-input");

let playRoundBtn = document.querySelector("#play-round-btn");
let computerChoiceInput = document.querySelector("#computer-choice");
let rockRadio = document.querySelector("#rock");
let paperRadio = document.querySelector("#paper");
let scissorsRadio = document.querySelector("#scissors");

let roundDisplay = document.querySelector(".current-round");
let computerScoreText = document.querySelector("#computer-score-text");
computerScoreText.setAttribute("disabled", "");
let humanScoreText = document.querySelector("#human-score-text");
humanScoreText.setAttribute("disabled", "");

let roundWinner = document.querySelector("#round-winner");
roundWinner.setAttribute("disabled", "");
let gameWinner = document.querySelector("#game-winner");
gameWinner.setAttribute("disabled", "");

// Event listeners
roundCountBtn.addEventListener("click", (e) => {
    roundCount = String(roundCountInput.value);
    
    roundCountInput.setAttribute("disabled", "");
    roundCountBtn.setAttribute("disabled", "");
});

playRoundBtn.addEventListener("click", (e) => {
    currentRound++;
    roundDisplay.textContent = `${currentRound}/${roundCount}`;

    // Get choices
    computerChoice = getComputerChoice();

    if (rockRadio.checked) {
        humanChoice = rockRadio.value;
    } else if (paperRadio.checked) {
        humanChoice = paperRadio.value;
    } else {
        humanChoice = scissorsRadio.value;
    }

    computerChoiceInput.value = computerChoice;
            
    // Check if draw
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"
        ) {
            roundWinner.value = "Draw";
        }

    // Check if computer wins
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
        ) {
            roundWinner.value = "Computer wins this round!";
            computerScore++;
            computerScoreText.value = String(computerScore);
        }

    // Check if human wins
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
            roundWinner.value = "You win this round!";
            humanScore++;
            humanScoreText.value = String(humanScore);
        }

    // Check if match is over
    if (currentRound >= roundCount) {
        calcScore(computerScore, humanScore);
    }
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
        gameWinner.value = "You win this game!";
    } else if (computerScore > humanScore) {
        gameWinner.value = "Computer wins this game!";
    } else {
        gameWinner.value = "This game is a draw.";
    }
}