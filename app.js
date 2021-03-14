
let playerPlay = prompt('Rock, paper or scissors?').toLowerCase();

let computerPlay = myFunction()

function myFunction() {
    let randomValue = Math.floor((Math.random() * 3) + 1); 
    if (randomValue === 1) {
        return 'rock';
    } else if (randomValue === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}    

function playRound (computerPlay, playerPlay) {
    if (computerPlay === 'rock' && playerPlay === 'scissors')
    alert("You Lose! Rock beats scissors");  
    if (computerPlay === 'rock' && playerPlay === 'rock')
    alert("Draw");
    if (computerPlay === 'rock' && playerPlay === 'paper')
    alert("You Win! Paper beats rock");
    
    if (computerPlay === 'paper' && playerPlay === 'scissors')
    alert("You Win! Scissors beat paper");  
    if (computerPlay === 'paper' && playerPlay === 'rock')
    alert("You Lose! Paper beats rock");
    if (computerPlay === 'paper' && playerPlay === 'paper')
    alert("Draw");

    if (computerPlay === 'scissors' && playerPlay === 'scissors')
    alert("Draw");  
    if (computerPlay === 'scissors' && playerPlay === 'rock')
    alert("You Win! Rock beats scissors");
    if (computerPlay === 'scissors' && playerPlay === 'paper')
    alert("You Lose! Scissors beat paper");
}

console.log(computerPlay);
console.log(playerPlay);
console.log(playRound(computerPlay, playerPlay));


