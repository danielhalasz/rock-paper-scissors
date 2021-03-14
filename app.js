
function computerPlay(){
    let randomValue = Math.floor((Math.random() * 3) + 1); 
    if (randomValue === 1) {
        return 'rock';
    } else if (randomValue === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(computerPlay());
