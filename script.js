// Variables
let computerChoice, humanChoice;
let currentRound = roundCount = 1;
let computerScore = humanScore = 0;

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

function getHumanChoice(currentRound, maxRound) {
    const humanChoice = prompt(`Choose from either rock, paper or scissors: `).toLowerCase();
    return humanChoice;
}

function getRoundCount() {
    const roundCount = Number(prompt("Input maximum amount of rounds: "));
    return rountCount;
}

function playRound() {

}

// Main block
computerChoice = getComputerChoice();
humanChoice = getHumanChoice()