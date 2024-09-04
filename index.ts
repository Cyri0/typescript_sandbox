const numEl: HTMLInputElement = document.getElementById("inputNum") as HTMLInputElement

const resultEl: HTMLParagraphElement = document.getElementById("result") as HTMLParagraphElement

const theNumber: number = Math.floor(Math.random() * 100) + 1

function guess(){
    const guessNumber: number = numEl.valueAsNumber
    if(isCorrect(guessNumber)){
        resultEl.innerText = "Eltaláltad!"
    }else{
        if(guessNumber < theNumber){
            resultEl.innerText = "A gondolt szám nagyobb!"
        }else{
            resultEl.innerText = "A gondolt szám kisebb!"
        }
    }
}

function isCorrect(guessNumber: number) : boolean {
    return guessNumber === theNumber
}