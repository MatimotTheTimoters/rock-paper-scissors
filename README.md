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
    - [x] Labels for computer choice
    - [x] Play round button
    - [x] Label for round win
    - [x] Labels for current score
    - [x] Label for game win

10. Add styles to index.html elements
    - [x] Display flex
    - [x] FlexFlow column
    - [x] FlexFlow row
    - [x] Justify content
    - [x] Align items
    - [x] Justify items
    - [x] Flex

11. Add function to the Confirm button in round-count-container
    - [x] Add event listener click 
    - [x] Assign round count value
    - [x] Make sure that button becomes disabled after click
    - [x] Fix button being disabled at the start

12. Make Play Round button functional
    - [x] Get radio buttons and play round button from DOM
    - [x] Add event listener
    - [x] Check each radio if checked
    - [x] Assign to human choice
    - [x] Call calculate results function

13. Alter playRound function
    - [x] Add fieldset to show current round and round winner
    - [x] Add round-display-container to styles.css
    - [x] Update current round display and winner

14. Debug files
    - [x] Fix round winner and round display not working
    - [x] Fix roundCount not taking value from roundCountInput input element
    - [] Add label to display computer choice