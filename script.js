const choices = ["Rock", "Paper", "Scissors"];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function playGame(playerChoice) {
    const computerChoice = getRandomChoice();
    const result = determineWinner(playerChoice, computerChoice);
    const resultMessage = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    document.getElementById("result").innerText = resultMessage;
}
