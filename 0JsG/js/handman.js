const wordList = [
    {
      word: "guitar",
      hint: "Stringed musical instrument that is usually fretted."
    },
    {
      word: "laptop",
      hint: "A small, portable personal computer."
    },
    {
      word: "telephone",
      hint: "Telecommunications device that permits two or more users to conduct a conversation when they are too far apart to be easily heard directly."
    },
  ];
  
  const wordDisplay = document.querySelector(".word-display");
  const guessesText = document.querySelector(".guesses-text b");
  const keyboardDiv = document.querySelector(".keyboard");
  const hangmanImage = document.querySelector(".hangman-box img");
  const gameModal = document.querySelector(".game-modal");
  const playAgainBtn = gameModal.querySelector("button");
  
  // Initializing game variables
  let currentWord, correctLetters, wrongGuessCount;
  const maxGuesses = 6;
  
  const resetGame = () => {
    // Ressetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
  }
  
  const getRandomWord = () => {
    // Selecting a random word and hint from the wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; // Making currentWord as random word
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
  }
  
  const gameOver = (isVictory) => {
    if (isVictory) {
      // Show SweetAlert notification for victory
      swal({
        title: "Congratulations!",
        text: "Keep going!",
        icon: "success",
        buttons: {
          confirm: {
            text: "Next",
            value: true,
            visible: true,
            className: "custom-button",
            closeModal: true,
          },
        },
      }).then(() => {
        window.location.href = "menua.html";
      });
    } else {
      // Show a different SweetAlert notification for loss
      swal({
        title: "You missed...",
        text: "Wanna play again?",
        icon: "error",
        buttons: {
          confirm: {
            text: "Yes",
            value: true,
            visible: true,
            className: "custom-button",
            closeModal: true,
          },
          cancel: {
            text: "No",
            value: false,
            visible: true,
            className: "custom-button",
            closeModal: true,
          },
        },
      }).then((playAgain) => {
        if (playAgain) {
          getRandomWord();
        } else {
          swal({
            title: "YOU CAN NOT SAY NO",
            buttons: {
                confirm:{
                    text: "nop, u can't say no",
                    value: true,
                    visible: true,
                    className: "custom-button",
                    closeModal: true,
                }
            }
          }).then(()=>{
            getRandomWord();
          })
        }
      });
    }

  };
  
  
  const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter exists in the currentWord
    if (currentWord.includes(clickedLetter)) {
      // Showing all correct letters on the word display
      [...currentWord].forEach((letter, index) => {
        if (letter === clickedLetter) {
          correctLetters.push(letter);
          wordDisplay.querySelectorAll("li")[index].innerText = letter;
          wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
      });
    } else {
      // If clicked letter doesn't exist, then update the wrongGuessCount and hangman image
      wrongGuessCount++;
      hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
  
    button.disabled = true; // Disabling the clicked button so the user can't click it again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    // Calling gameOver function if any of these conditions are met
    if (wrongGuessCount === maxGuesses) {
      gameOver(false);
    }
    
    if (correctLetters.length === currentWord.length) {
      gameOver(true);
    }
  }
  
  // Creating keyboard buttons and adding event listeners
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
  }
  
  getRandomWord();
  playAgainBtn.addEventListener("click", getRandomWord);
  