console.log('HI');

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
}

getComputerChoice();