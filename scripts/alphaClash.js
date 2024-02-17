function handleKeyboardButtonPress(event) {
  // console.log(event.key);
  const pressedKey = event.key;

  if (pressedKey === "Escape") {
    gameOver();
  }

  const screenText = document.getElementById("current-letter");
  const screenKey = screenText.innerText;
  const expectedKey = screenKey.toLocaleLowerCase();

  // console.log(pressedKey,expectedKey);
  if (pressedKey === expectedKey) {
    removeBackgroundColorById(expectedKey);
    continueGame();

    const currentScore = getTextElementById("current-score");
    const updateScore = currentScore + 1;
    setTextElement("current-score", updateScore);

    // const currentScore = document.getElementById("current-score");
    // const scoreText = currentScore.innerText;
    // const score = parseInt(scoreText);

    // currentScore.innerText = score + 1;
  } else {
    const currentLife = getTextElementById("current-life");
    const updateLife = currentLife - 1;
    setTextElement("current-life", updateLife);

    if (updateLife === 0) {
      gameOver();
    }

    // const currentLife = document.getElementById("current-life");
    // const lifeText = currentLife.innerText;
    // const life = parseInt(lifeText);

    // currentLife.innerText = life - 1;
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();

  const currentLetter = document.getElementById("current-letter");
  currentLetter.innerText = alphabet;

  setBackgroundColorById(alphabet);
}

function play() {
  addHidden("home");
  addHidden("final-score");
  removeHidden("play-ground");

  setTextElement("current-life", 5);
  setTextElement("current-score", 0);

  continueGame();
}

function gameOver() {
  addHidden("home");
  addHidden("play-ground");
  removeHidden("final-score");

  const lastScore = getTextElementById("current-score");
  setTextElement("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-letter");
  removeBackgroundColorById(currentAlphabet);
}
