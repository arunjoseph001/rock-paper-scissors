let playerSelection = "none"; //computerPlay();
let computerSelection = "none";
let winner = "none";
let playerScore = 0;
let computerScore = 0;

const scores = document.querySelectorAll("strong");
const clickMainImage = document.querySelector(".main img");
const mainClass = document.querySelector(".main");
const mainGame = document.querySelector(".game");
const restart = document.querySelector("button");
const clickImages = document.querySelector(".image");
const images = document.querySelectorAll("img");

function computerPlay() {
  // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 1) {
    return "rock";
  } else if (computerChoice == 2) {
    return "paper";
  } else return "scissors";
}

function playRound(player, computer) {
  // returns who won the round
  if (player == computer) {
    return "tie";
  } else if (player == "rock" && computer == "paper") {
    computerScore++;
    return "computer";
  } else if (player == "paper" && computer == "scissors") {
    computerScore++;
    return "computer";
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    return "computer";
  } else {
    playerScore++;
    return "user";
  }
}

function game(event) {
  // Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
  // or  Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
  playerSelection = event.target.alt;

  if (typeof playerSelection == "undefined") {
    return;
  }
  computerSelection = computerPlay();
  scores[0].innerText = playerSelection;
  scores[1].innerText = computerSelection;
  console.log("Computer choose " + computerSelection);
  console.log("Player choose " + playerSelection);
  winner = playRound(playerSelection, computerSelection);
  console.log("winner is " + winner);
  scores[2].innerText = winner;
  scores[3].innerText = playerScore;
  scores[4].innerText = computerScore;
  console.log("scores are " + playerScore + " and " + computerScore);
  if (playerScore == 5 || computerScore == 5) {
    gameOver();
  }
}

clickMainImage.addEventListener("click", () => {
  console.log("cliked on the main image");
  toggleDisplay();
});

restart.addEventListener("click", () => {
  console.log("cliked on the restart button");
  toggleDisplay();
  playerScore = 0;
  computerScore = 0;
  toggleImages();
});

clickImages.addEventListener("click", game);

const toggleDisplay = () => {
  mainClass.classList.toggle("display");
  mainGame.classList.toggle("display");
};

const toggleImages = () => {
  images.forEach(image => {
    image.classList.toggle("focal");
  });
};

const gameOver = () => {
  // need to stop game
  toggleImages();
  clickImages.removeEventListener("click", game);
};
