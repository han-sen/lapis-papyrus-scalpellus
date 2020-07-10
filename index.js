const resultBox = document.querySelector("#resultBox");
const computerChoiceText = document.querySelector("#computerChoice");
const playerChoiceText = document.querySelector("#playerChoice");

const choices = ["Lapis", "Papyrus", "Scalpellus"];

const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};

const computerChooses = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const compareChoices = (computerChoice, playerChoice) => {
  
  const playerWin = `The player wins! The computer chose ${computerChoice} and the player chose ${playerChoice}.`;
  const computerWin = `The computer wins! The computer chose ${computerChoice} and the player chose ${playerChoice}.`;

  if (computerChoice === playerChoice) {
    return "It's a tie!";
  } else if (computerChoice === choices[0]) {
    if (playerChoice === choices[1]) {
      return playerWin;
    } else if (playerChoice === choices[2]) {
      return computerWin;
    }
  } else if (computerChoice === choices[1]) {
    if (playerChoice === choices[0]) {
      return computerWin;
    } else if (playerChoice === choices[2]) {
      return playerWin;
    }
  } else if (computerChoice === choices[2]) {
    if (playerChoice === choices[0]) {
      return playerWin;
    } else if (playerChoice === choices[1]) {
      return computerWin;
    }
  }
};

const runGame = () => {
  resultBox.style.backgroundSize = "500% 500%";
  computerChoiceText.innerHTML = computer.currentChoice;
  playerChoiceText.innerHTML = player.currentChoice;
  resultBox.innerHTML = compareChoices(
    computer.currentChoice,
    player.currentChoice
  );
};

document.querySelector("#lapis").onclick = function () {
  player.currentChoice = choices[0];
  computer.currentChoice = computerChooses();
  runGame();
};

document.querySelector("#papyrus").onclick = function () {
  player.currentChoice = choices[1];
  computer.currentChoice = computerChooses();
  runGame();
};

document.querySelector("#scalpellus").onclick = function () {
  player.currentChoice = choices[2];
  computer.currentChoice = computerChooses();
  runGame();
};
