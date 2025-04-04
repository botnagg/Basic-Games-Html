const secretNumber = 50;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");

    const guess = parseInt(guessInput.value);

    if (guess === secretNumber) {
        // SweetAlert
        swal({
            title: "Congratulations!",
            text: `You guessd the number in ${attempts} attemps!`,
            icon: "success",
            buttons: {
                confirm: {
                    text: "Continue",
                    value: true,
                    visible: true,
                    className: "custom-button",
                    closeModal: true,
                }
            }
        }).then(()=>{
            swal("Press any key after writting the full sentence.",{
                buttons: false,
            }).then(() =>{ 
                window.location.href = "typing.html"; // Replace with the URL of the desired web page
        })
         });
        } else if (guess < secretNumber) {
            message.textContent = "Too small, try again!";
        } else if (guess > secretNumber) {
            message.textContent = "Too big, try again!";
        }

    attempts++;
}
