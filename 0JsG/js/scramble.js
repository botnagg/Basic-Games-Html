const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;
//SWAL HEMEN
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        swal({
            title: "Time is over",
            text: "Hurry up!",
            icon: "warning",
            buttons:{
                confirm:{
                    text: "Try again",
                    value: true,
                    visible: true,
                    className: "custom-button",
                    closeModal: true,
                }
            }
        }).then(()=>{
            initGame();
        });
        
    }, 1000);
}

const initGame = () => {
    initTimer(40);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();
//SWAL HEMEN
const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return swal({
        title: "You did not type anything!",
        text: "Try again, you can do it!",
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
    }).then(()=>{
        initGame();
    });
    if(userWord !== correctWord) 
    return swal({
        title: "Word is not correct!",
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
    }).then(()=>{
        initGame();
    });
    
    swal({
        title: "Congratulations!",
        text: "Now you can continue!",
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
        swal("98", {
            buttons: false,
        }).then(() => {
            window.location.href = "menua.html"
        })
    });
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);