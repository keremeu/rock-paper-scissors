let winCount = 0;
let loseCount = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("What is your choice?", "").toLowerCase();

    if (playerChoice === computerChoice) {
        console.log("It is a tie");
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose, paper beats rock.");
        loseCount++;
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("You win, paper beats rock.");
        winCount++;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, rock beats scissors.");
        winCount++;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose, rock beats scissors.");
        loseCount++;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win, scissors beats paper.");
        winCount++;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors.") {
        console.log("You lose, scissors beat paper.");
        loseCount++;
    }
    else {
        console.log("Not a valid choice.")
    } 
}

function game() {

    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (winCount > loseCount) {
        alert("You won!");
    }
    else if (winCount < loseCount) {
        alert("You lost :(");
    }
    else {
        alert("It is a tie.")
    }
}