const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

function getComputerChoice() {
    const numChoice = Math.floor(Math.random() * 3) + 1; //random int between 1 and 3.
    let wordChoice;
    switch(numChoice) {
        case 1:
            wordChoice = ROCK;
            break;
        case 2:
            wordChoice = PAPER;
            break;
        case 3:
            wordChoice = SCISSORS;
            break;
        default:
            break;
    }
    return wordChoice;
}

function playRound(playerSelection, computerSelection) {
    let outcome;
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;
    if (playerChoice == computerChoice) {
        outcome = 'draw';
    } else if (playerChoice == ROCK) {
        if (computerChoice == PAPER) {
            outcome = 'lose';
        } else if (computerChoice == SCISSORS) {
            outcome = 'win';
        }
    } else if (playerChoice == PAPER) {
        if (computerChoice == ROCK) {
            outcome = 'win';
        } else if (computerChoice == SCISSORS) {
            outcome = 'lose';
        }
    } else if (playerChoice == SCISSORS) {
        if (computerChoice == ROCK) {
            outcome = 'lose';
        } else if (computerChoice == PAPER) {
            outcome = 'win';
        }
    }
    return outcome;
}

const main = document.querySelector('#main');
const buttons = document.querySelectorAll('button');
const playerImage = document.querySelector('#player-image');
const comImage = document.querySelector('#com-image');
const choices = document.querySelector('#choices');


buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        playerImage.src = `assets/${button.id}.png`
    });

    button.addEventListener('click', () => {

        let playerChoice;
        let computerChoice = getComputerChoice();

        if (button.id === ROCK) playerChoice = ROCK;
        else if (button.id === PAPER) playerChoice = PAPER;
        else if (button.id === SCISSORS) playerChoice = SCISSORS;

        if (computerChoice === ROCK) comImage.src = `assets/${ROCK}.png`;
        else if (computerChoice === PAPER) comImage.src = `assets/${PAPER}.png`;
        else if (computerChoice === SCISSORS) comImage.src = `assets/${SCISSORS}.png`;

        let roundOutcome = playRound(playerChoice, computerChoice);
        playerChoice = playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1, playerChoice.length);

        main.removeChild(choices);

        const outcomeMsg = document.createElement('div');
        outcomeMsg.classList.add('outcome-msg')
        
        if (roundOutcome == 'win') {
            outcomeMsg.textContent = `Player wins! ${playerChoice} beats ${computerChoice}!`
        } else if (roundOutcome == 'draw') {
            outcomeMsg.textContent = `Draw! ${playerChoice} equals ${computerChoice}!`
        } else if (roundOutcome == 'lose') {
            outcomeMsg.textContent = `You lost! ${playerChoice} falls short of ${computerChoice}!`
        }

        main.appendChild(outcomeMsg);
        
    });
});