let winCount = 0;
let loseCount = 0;
const buttons = document.querySelectorAll('button');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

// Event listener for buttons
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScore(){
    playerScore.textContent = winCount;
    computerScore.textContent = loseCount;
}

function playRound(e) {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.textContent.toLowerCase();
    const result = document.getElementById('result');

    if (playerChoice === computerChoice) {
        result.textContent = "It is a tie";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose, paper beats rock.";
        loseCount++;
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        result.textContent = "You win, paper beats rock.";
        winCount++;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win, rock beats scissors.";
        winCount++;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose, rock beats scissors.";
        loseCount++;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win, scissors beats paper.";
        winCount++;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose, scissors beat paper.";
        loseCount++;
    }
    else {
        result.textContent = "Not a valid choice.";
    }
    updateScore(); 
    if (winCount >= 5) {
        result.textContent = "You Won!!!"; 
        document.getElementById('buttons').style.display = "none";
    } else if (loseCount >= 5) {
        result.textContent = "You Lost :(";
        document.getElementById('buttons').style.display = "none";
    }
}