/* White Board Notes
I. create a function computerPlay() {
    return random of R-P-or-S
    * TIP: use console.log() to verify output before moving on
}    
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
    return ["Rock", "Paper", "Scissors"][rpsValue]   
}
computerPlay()
console.log(rpsValue)
console.log(computerPlay)
/*
II. create a function playRockPaperScissors() {
    i. parameter - playerSelection
    * NOTE: make player selection case insensitive
    ii. parameter - computerSelection
    iii. return a string with Winner Declaration
    * this is obviously missing:
    1.if else loop; rock > scissors > paper > rock
 }
* Going to want to return the results of the game later, as wll add a Graphical Interface

III. create a function game() {
    i. call playRockPaperScissors()
    ii. play 5 rounds, keep score, & report winner
        for loop
}

**
feel free to rework the functions if wanted, particularly return value to something more useful
feel free to create more "helper functions" if I think it's useful


*/

