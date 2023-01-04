const choices = ["rock", "paper", "scissors"];
let computerChoice = ""

function getComputerChoice() 
{
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
}