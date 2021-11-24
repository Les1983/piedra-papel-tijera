let userPoints = 0;
let computerPoints = 0;

const CHOICE_ROCK = "piedra";
const CHOICE_PAPER = "papel";
const CHOICE_SCISSOR = "tijera";

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const result = document.querySelector(".result > p");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

function getComputerChoice() {
    const choices = [CHOICE_ROCK, CHOICE_PAPER, CHOICE_SCISSOR];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === CHOICE_ROCK) return "Piedra";
    if (letter === CHOICE_PAPER) return "Papel";
    return "Tijera";
}

function resultGlow(uChoice, glow = "grey-glow") {
    const clickedDiv = document.getElementById(uChoice);
    clickedDiv.classList.add(glow);
    setTimeout(() => clickedDiv.classList.remove(glow), 300);
}

function resultMessage(uChoice, cChoice, result = "draw") {
    let message;
    switch(result) {
        case "win":
            message = "¡Ganaste 🎉!";
            break;
        case "lose":
            message = "¡Perdiste 🤖!";
            break;
        case "draw":
        default:
            message = "Empate 🤦‍♂️";
    }

    result.innerHTML = `
        <span>😎 Usuario saca ${convertToWord(uChoice)}</span>
        <span>🤖 Computadora saca ${convertToWord(cChoice)}</span>
        <strong>${message}</strong>
    `;
}

function win(uChoice, cChoice) {
    userPoints++;
    userScore.innerHTML = userPoints;
    resultMessage(uChoice, cChoice, "win");
    resultGlow(uChoice, 'green-glow');
}

function lose (uChoice, cChoice) {
    computerPoints++;
    computerScore.innerHTML = computerPoints;
    resultMessage(uChoice, cChoice, "lose");
    resultGlow(uChoice, 'red-glow');
}

function draw(uChoice, cChoice) {
    resultMessage(uChoice, cChoice);
    resultGlow(uChoice);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const choices = userChoice + computerChoice;
    switch (choices) {
        case `${CHOICE_ROCK}${CHOICE_SCISSOR}`:
        case `${CHOICE_PAPER}${CHOICE_ROCK}`:
        case `${CHOICE_SCISSOR}${CHOICE_PAPER}`:
            win(userChoice, computerChoice);
            break;
        case `${CHOICE_ROCK}${CHOICE_PAPER}`:
        case `${CHOICE_PAPER}${CHOICE_SCISSOR}`:
        case `${CHOICE_SCISSOR}${CHOICE_ROCK}`:
            lose(userChoice, computerChoice);
            break;
        case `${CHOICE_ROCK}${CHOICE_ROCK}`:
        case `${CHOICE_PAPER}${CHOICE_PAPER}`:
        case `${CHOICE_SCISSOR}${CHOICE_SCISSOR}`:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    piedra.addEventListener("click", () => game(CHOICE_ROCK));
    papel.addEventListener("click", () => game(CHOICE_PAPER));
    tijera.addEventListener("click", () => game(CHOICE_SCISSOR));
}

main();