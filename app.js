let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById("tijera");

function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"];
    const randomNumber = Math.floor(Math.random() *3);
    return choices [randomNumber];
}
function convertToWord(letter){
    if (letter === "piedra") return "Piedra";
    if (letter === "papel") return "Papel";
    return "Tijera";

}

function win (userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} gana a ${convertToWord(computerChoice)}${smallCompWord} Ganaste! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}


function lose (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} pierde con ${convertToWord(computerChoice)}${smallCompWord} Perdiste! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

function draw (userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} empata con ${convertToWord(computerChoice)}${smallCompWord} Empata! `;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow') , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
case "piedratijera":
case "papelpiedra":
case "tijerapapel":
win (userChoice, computerChoice);
break;
case "piedrapapel":
case "papeltijera":
case "tijerapiedra":
lose(userChoice, computerChoice);
    break;
    case "piedrapiedra":
    case "papelpapel":
    case "tijeratijera":
draw(userChoice, computerChoice);
    break;

 }
}

function main() {
    piedra_div.addEventListener ("click", function() {
    game("piedra");
    })
    papel_div.addEventListener ("click", function() {
    game("papel");
    })
    tijera_div.addEventListener ("click", function() {
    game("tijera");
    })
}

main();