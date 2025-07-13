# rock-paper-scissors

## Checklist

### Tasks:
1. Touch files
    - [x] index.html
    - [x] script.js

2. Initialize index.html
    - [x] Boilerplate
    - [x] Link to script.js

3. Initialize script.js
    - Variables
        - [x] computerChoice
        - [x] humanChoice
        - [x] roundCount
        - [x] computerScore
        - [x] humanScore
    - Functions
        - [x] getComputerChoice
        - [x] getHumanChoice
        - [x] getRoundCount
        - [x] playRound

4. Create getComputerChoice function
    - [x] Use Math.random function to get a value between 0 and 1
    - [x] If value is 0-32, return rock
    - [x] If value is 33-66, return paper
    - [x] If value is 67-100, return scissors
    - [x] Assign return value to computerChoice

5. Create getHumanChoice function
    - [x] Use prompt function to get choice
    - [x] Use toLowerCase function to make case-insensitive
    - [x] Assign return value to humanChoice

6. Create getRoundCount function
    - [x] Use prompt function to get choice
    - [x] Assign return value to roundCount

7. Create playRound function
    - [x] Have computerChoice, humanChoice, roundCount as parameters
    - [x] After round, increment scores, roundCount and print result to console

8. Create calcScore function
    - [x] Check if humanScore > computerScore, print result
    - [x] Check if humanScore < computerScore, print result
    - [x] Check if humanScore === computerScore, print result

9. Build DOM structure in index.html:
    - [x] Input element for round count
    - [x] Buttons for human choice
    - [] Labels for computer choice
    - [] Play round button
    - [] Label for round win
    - [] Labels for current score
    - [] Label for game win
