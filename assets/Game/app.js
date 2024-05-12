// Initializing variables to keep track of user and computer scores
let userScore = 0;
let computerScore = 0;

// Selecting elements from the DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

// Function to generate computer's choice randomly
function getPCchoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to convert choice letter to corresponding text
function convertToText(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

// Function to handle win scenario
function win(userChoice, computerChoice) {
    const userAlias = `<sub style="font-size: 0.5em">user</sub>`;
    const computerAlias = `<sub style="font-size: 0.5em">computer</sub>`;
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToText(userChoice)}${userAlias} beats ${convertToText(computerChoice)}${computerAlias}. You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

// Function to handle lose scenario
function lose(userChoice, computerChoice) {
    const userAlias = `<sub style="font-size: 0.5em">user</sub>`;
    const computerAlias = `<sub style="font-size: 0.5em">computer</sub>`;
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToText(userChoice)}${userAlias} loses to ${convertToText(computerChoice)}${computerAlias}. You lost 😕`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

// Function to handle draw scenario
function draw(userChoice, computerChoice) {
    const userAlias = `<sub style="font-size: 0.5em">user</sub>`;
    const computerAlias = `<sub style="font-size: 0.5em">computer</sub>`;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToText(userChoice)}${userAlias} equals ${convertToText(computerChoice)}${computerAlias}. It's a draw 😜`;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() => userChoice_div.classList.remove('yellow-glow'), 500);
}

// Function to determine game outcome based on user and computer choices
function game(userChoice) {
    const computerChoice = getPCchoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice); // Passing both userChoice and computerChoice to win function
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Function to initialize the game by adding click event listeners to user choices
function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

// Calling main function to start the game
main();
