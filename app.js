function playerFunction() {
    return prompt('Rock, paper or scissors?').toLowerCase();
}

function compFunction() {
    let randomValue = Math.floor((Math.random() * 3) + 1); 
    if (randomValue === 1) {
        return 'rock';
    } else if (randomValue === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}    

function playRound(computerSelection, playerSelection) {
    computerSelection = compFunction();
    playerSelection = playerFunction();
    console.log(computerSelection);
    console.log(playerSelection);
    if (computerSelection === 'rock' && playerSelection === 'scissors')
    alert("You Lose! Rock beats scissors");  
    else if (computerSelection === 'rock' && playerSelection === 'rock')
    alert("Draw");
    else if (computerSelection === 'rock' && playerSelection === 'paper')
    alert("You Win! Paper beats rock");
    
    else if (computerSelection === 'paper' && playerSelection === 'scissors')
    alert("You Win! Scissors beat paper");  
    else if (computerSelection === 'paper' && playerSelection === 'rock')
    alert("You Lose! Paper beats rock");
    else if (computerSelection === 'paper' && playerSelection === 'paper')
    alert("Draw");

    else if (computerSelection === 'scissors' && playerSelection === 'scissors')
    alert("Draw");  
    else if (computerSelection === 'scissors' && playerSelection === 'rock')
    alert("You Win! Rock beats scissors");
    else if (computerSelection === 'scissors' && playerSelection === 'paper')
    alert("You Lose! Scissors beat paper");
}

playRound();
playRound();




