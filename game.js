let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".game");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // Generate 0, 1, or 2
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Draw. Play Again!";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText= computerScore;
        msg.innerText = "Computer Wins!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice =", computerChoice);
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = computerChoice === "rock";
        } else {
            userWin = computerChoice === "paper";
        }
        showWinner(userWin);
    }
};

choices.forEach((game) => {
    game.addEventListener("click", () => {
        const userChoice = game.getAttribute("id");
        console.log("game was clicked", userChoice);
        playGame(userChoice);
    });
});