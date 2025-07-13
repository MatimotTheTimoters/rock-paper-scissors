// Variables
let computerChoice, humanChoice;
let currentRound = roundCount = 1;
let computerScore = humanScore = 0;

let getRoundBtn = document.querySelector("#round-count-confirm-btn")

// Event listeners
getRoundBtn.addEventListener("click", (e) => {
    let roundInput = document.querySelector("#round-count-input");
    roundCount = Number(roundInput.textContent);
    
    roundCount.setAttribute("disabled", "");
    getRoundBtn.setAttribute("disabled", "")
});

// Functions
function getRoundCount() {
    roundCount = window.prompt("How many rounds do you want to play?: ", 3);
    return Number(roundCount);
}

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

function getHumanChoice() {
    humanChoice = window.prompt(`Choose from either rock, paper or scissors: `, "rock").toLowerCase();
    return humanChoice;
}

function playRound(roundCount) {
    for (let currentRound = 1; currentRound <= roundCount; currentRound++) {
        // Prompt choices
        alert(`Round ${currentRound}/${roundCount}`);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        
        // Check if draw
        if (humanChoice === "rock" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "scissors"
            ) {
                alert(`Round ${currentRound}/${roundCount}: Draw`)
                continue;
            }

        // Check if computer wins
        if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock"
            ) {
                alert(`Round ${currentRound}/${roundCount}: Computer wins this round!`)
                computerScore++;
            }

        // Check if human wins
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
            ) {
                alert(`Round ${currentRound}/${roundCount}: Human wins this round!`)
                humanScore++;
            }
    }
    // Check if match is over
    calcScore(computerScore, humanScore);

}

function calcScore(computerScore, humanScore) {
    if (humanScore > computerScore) {
        alert("Human wins this game!")
    } else if (computerScore > humanScore) {
        alert("Computer wins this game!");
    } else {
        alert("This game is a draw.");
    }
}

// Main block
roundCount = getRoundCount();
playRound(roundCount);