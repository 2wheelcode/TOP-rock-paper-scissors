/* White Board Notes
I. create a function computerPlay() { * Changing this name to computerSelection() for clarity
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
function computerSelection() { 
    return ["Rock", "Paper", "Scissors"][rpsValue]   
}
//console.log(rpsValue) // = random number - CHECK
//console.log(computerSelection()) // = random number converted to array value - CHECK
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
return playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
}
//console.log(playerInput) // = player input - CHECK
//console.log(playerSelection()) // = playerInput converted to Capitalize, case insensitive - CHECK

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection) // correct arguments being passed into function
    if (playerSelection === computerSelection) {
        return `Simple minds think alike, ${playerSelection} It's a DRAW!`
        } else if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock')) {
                return `Man over machine! ${playerSelection} beats ${computerSelection} You Win!` 
        } else {
            return `${computerSelection} beats ${playerSelection} When you match wits with a half wit...the Machines win, humans suffer shame.`
        }
    //return winnerDeclaration - CHECK - will come back later to see about changing "beats"
}
playRound(playerSelection(), computerSelection())
console.log(playRound(playerSelection(), computerSelection()))


function game() {
    console.log(i)
    for (let i = 0; i<5; i++) {
        playRound()
    } 
console.log(game())
}
/*
III. create a function game() {
    i. call playRound()
    ii. play 5 rounds, keep score, & report winner
        for loop
} */




/*
**
feel free to rework the functions if wanted, particularly return value to something more useful
feel free to create more "helper functions" if I think it's useful


*/

