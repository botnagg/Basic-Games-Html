const paragraphs = [
  "The sun set behind the mountains, painting the sky with orange hues.",
  "Quantum mechanics challenges our classical understanding of the universe.",
  "A sudden rainstorm caught everyone by surprise during the outdoor concert.",
  "She baked a delicious chocolate cake for her friend's birthday party",
  "The ancient ruins stood silent, whispering tales of a forgotten civilization.",
  "Artificial intelligence is revolutionizing many industries, from healthcare to finance."
];

const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.querySelector(".content button");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");

let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph() {
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  const characters = paragraphs[ranIndex].split("").map(char => `<span>${char}</span>`);
  typingText.innerHTML = characters.join("");
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  const characters = typingText.querySelectorAll("span");
  const typedChar = inpField.value.split("")[charIndex];

  if (charIndex < characters.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }

    if (typedChar === null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText === typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect")
        swal({
          title: "You make a mistake!",
          text: "Keep trying!",
          icon: "error",
          buttons:{
              confirm:{
                  text: "Try again",
                  value: true,
                  visible: true,
                  className: "custom-button",
                  closeModal: true,
              }
          }
        }).then(() => {
          window.location.href = "typing.html"
          });
      }
      charIndex++;
    }

    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 100);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    inpField.value = "";
  }

  if (charIndex === characters.length && mistakes === 0) {
    swal({
      title: "Congratulations!",
      text: "You can continue!",
      icon: "success",
      buttons:{
          confirm:{
              text: "Next",
              value: true,
              visible: true,
              className: "custom-button",
              closeModal: true,
          }
      }
    }).then(() =>{
      swal("1", {
          buttons: false,
      }).then(() => {
          window.location.href = "menua.html"
      })
    });
  }
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
    let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 100);
    wpmTag.innerText = wpm;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
