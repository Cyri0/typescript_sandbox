"use strict";
const numEl = document.getElementById("inputNum");
const resultEl = document.getElementById("result");
const theNumber = Math.floor(Math.random() * 100) + 1;
function guess() {
    const guessNumber = numEl.valueAsNumber;
    if (isCorrect(guessNumber)) {
        resultEl.innerText = "Eltaláltad!";
    }
    else {
        if (guessNumber < theNumber) {
            resultEl.innerText = "A gondolt szám nagyobb!";
        }
        else {
            resultEl.innerText = "A gondolt szám kisebb!";
        }
    }
}
function isCorrect(guessNumber) {
    return guessNumber === theNumber;
}
