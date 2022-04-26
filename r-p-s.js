/* White Board Notes
I. create a function computerPlay() {
    return random of R-P-or-S
    * TIP: use console.log() to verify output before moving on
}    - CHECK
    Convo with Peter
    const compChoice = ["Rock", "Paper", "Scissors"]
    compChoice = math.Floor (math.Random ()*1) (keep between 1-3)
    compChoice[variable]
    ie: compChoice random number = 2 returns Scissors
    return [varible] 
    function computerPlay() {
    return ["Rock", "Paper", "Scissors"][random_number_value]
    Ok, let's go!
*/
const rpsValue = Math.floor(Math.random()*3)
function computerPlay() { 
    return ["rock", "paper", "scissors"][rpsValue]   
}
console.log(rpsValue) // = random number - CHECK
console.log(computerPlay()) // = random number converted to array value - CHECK
/*
II. create a function playRockPaperScissors() {
    i. parameter - playerSelection - CHECK
    * NOTE: make player selection case insensitive - CHECK
    ii. parameter - computerSelection
    iii. return a string with Winner Declaration
    * this is obviously missing:
    1. if else loop; rock > scissors > paper > rock
    2. input from player prompt to start
 
* Going to want to return the results of the game later, as wll add a Graphical Interface
} */
playerInput = prompt("Let's play Rock - Paper - Scissors! \n What's your choice?")
function playerSelection() {
return playerInput.toLowerCase()
}
console.log(playerInput) // = player input - CHECK
console.log(playerSelection()) // = player input converted to Capitalize, case insensitive - CHECK - changed to lowercase for simplicity

function playRPS() {
    if (playerSelection === computerPlay) {
        return "Tie Game!"
        } else if (
            (playerSelection === 'rock' && computerPlay === 'scissors') ||
            (playerSelection === 'scissors' && computerPlay === 'paper') ||
            (playerSelection === 'paper' && computerPlay === 'rock')) {
                return "Man beats machine! You win!" 
        } else {
            return "Machine wins, suffer shame."
        }
    //return winnerDeclaration
}
playRPS()
console.log(playRPS())


/*
III. create a function game() {
    i. call playRockPaperScissors()
    ii. play 5 rounds, keep score, & report winner
        for loop
}

**
feel free to rework the functions if wanted, particularly return value to something more useful
feel free to create more "helper functions" if I think it's useful


*/

