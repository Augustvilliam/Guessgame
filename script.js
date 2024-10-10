let randomNumber = Math.floor(Math.random() * 100) +1;

const guess = document.querySelector('.guess');
const lastResult = document.querySelector('.last-result');
const lowHigh = document.querySelector('.low-high');
const brasse = document.querySelector('.fel')

const guessSubmit = document.querySelector('.number-submit');
//knappen
const guessField = document.querySelector('.number-input');
//textrutan

let guessCount = 1 ;
let resetButton;
console.log


function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guess.textContent = "Detta har du gissat innan:";
    }
    guess.textContent =`${guess.textContent} ${userGuess}`;
    
    if (userGuess === randomNumber) {
        lastResult.textContent = "Jippi du vann!"
        brasse.classList.remove("fel-open");
        lastResult.style.backgroundColor = "blue";
        lowHigh.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent ="Rackarns bannaner, jävlar vad du suger!"
        lowHigh.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "";
        lastResult.style.backgroundColor = "red";
        brasse.classList.add("fel-open");
        if (userGuess < randomNumber) {
            lowHigh.textContent = "FÖR LÅGT!";
        } else if (userGuess > randomNumber) {
            lowHigh.textContent = "FÖR HÖGT HUEHUEHEUHEUHE!";
        }
    }
    
    guessCount++;
    guessField.value ="";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "börja om!";
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame () {
    guessCount = 1;
    
    const resetCont = document.querySelectorAll('.result-container');
    for (const resetCont of "result-container") {
        resetCont.textContent = "";
    }
    
    
    resetButton.parentNode.removeChild(resetButton);
    lastResult.textContent = ""; 
    guess.textContent = ""; 
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    brasse.classList.remove("fel-open");

    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random()  * 100) +1;
}