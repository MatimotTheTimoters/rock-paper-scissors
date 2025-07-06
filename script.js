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

function getHumanChoice() {
    const humanChoice = prompt(`Choose from either rock, paper or scissors: `).toLowerCase();
    return humanChoice;
}

function getRoundCount() {
    const roundCount = Number(prompt("Input maximum amount of rounds: "));
    return roundCount;
}

function playRound(computerChoice, humanChoice, roundCount) {
    for (let currentRound = 1; currentRound <= roundCount; currentRound++) {
        // Check if match is over
        if (currentRound > roundCount) {
            calcScore(computerScore, humanScore);
            break;
        }

        // Prompt choices
        console.log(`Round ${currentRound}/${roundCount}: `);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        
        // Check if draw
        if (humanChoice === "rock" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "scissors"
            ) {
                console.log(`Round ${currentRound}/${roundCount}: Draw`)
                continue;
            }

        // Check if computer wins
        if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock"
            ) {
                console.log(`Round ${currentRound}/${roundCount}: Computer wins!`)
                computerScore++;
            }

        // Check if human wins
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
            ) {
                console.log(`Round ${currentRound}/${roundCount}: Human wins!`)
                humanScore++;
            }
    }
}

function calcScore(computerScore, humanScore) {
    if (humanScore > computerScore) {
        console.log("Human wins this game!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins this game!");
    } else {
        console.log("This game is a draw.");
    }
}

// Main block
roundCount = getRoundCount();
playRound();