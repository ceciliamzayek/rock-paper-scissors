function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  return prompt("Input rock, paper or scissors").trim().toLocaleLowerCase();
}

function parseInt(num) {
  if (num === 0) return "rock";
  else if (num === 1) return "paper";
  else if (num === 2) return "scissors";
  else return "Invalid int";
}

function parseString(choice) {
  if (choice === "rock") return 0;
  else if (choice === "paper") return 1;
  else if (choice === "scissors") return 2;
  alert("Invalid string");
  return -1;
}

function playRound(computerChoice, playerChoice) {
  // returns 0 if tie, 1 if computer wins, 2 if player wins
  if (computerChoice === playerChoice) return 0;
  else if (computerChoice === 1 || playerChoice === 1) {
    if (computerChoice > playerChoice) return 1;
    return 2;
  } else {
    if (computerChoice < playerChoice) return 1;
    return 2;
  }
}

function game() {
  let computerChoice;
  let playerChoice = -1;
  let computerScore = 0;
  let playerScore = 0;
  let currentGame;

  for (let i = 0; i < 5; i++) {
    console.log("ROUND ", i + 1);
    console.log("---------------------------");
    computerChoice = getComputerChoice();

    while (playerChoice < 0) playerChoice = parseString(getPlayerChoice());

    console.log("computer: ", parseInt(computerChoice));
    console.log("player: ", parseInt(playerChoice));

    currentGame = playRound(computerChoice, playerChoice);
    if (currentGame === 0) console.log("It's a tie!");
    else if (currentGame === 1) {
      console.log("The computer wins this round!");
      computerScore++;
    } else {
      console.log("The player wins this round!");
      playerScore++;
    }
    console.log("Score: \n");
    console.log("Computer: ", computerScore);
    console.log("Player: ", playerScore);
    console.log("---------------------------");
    playerChoice = -1;
  }
}

game();
