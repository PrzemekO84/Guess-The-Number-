
let numberInput = document.getElementById("number"); 
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let resetGameLabel = document.getElementById("resetGameLabel");
let numberOfTries = document.getElementById("numberOfTries");
let resetGame = document.getElementById("resetGame")
let counter = 0;
let maxAttempts = 5;

let randomNumber = Math.floor(Math.random() * (100)) + 1;
console.log(randomNumber);


function Game(){
    number = numberInput.value;
    number = Number(number);
    counter++;
    console.log(counter);

    numberOfTries.textContent = `Tries: ${counter}`

    if(randomNumber === number){
        result.textContent = `Congratulations you won! the secret number is ${randomNumber}.`;
        submit.disabled = true;
        resetGame.style.display = "inline";
        resetGame.onclick = ResetGame;
    }
    else if(counter === maxAttempts){
        result.textContent = `Game Over! The sercet number was ${randomNumber}. Im sure you gonna win next time!`;
        submit.disabled = true;
        resetGame.style.display = "inline";
        resetGame.onclick = ResetGame;
    }
    else{
        result.textContent = `Wrong answer keep trying!`;
        Hints();
    }   
}

function Hints(){
    let hintNo = document.getElementById(`hintNo${counter}`);

    if(number > randomNumber){
        let higherNumber = number - randomNumber;
        if(higherNumber > 30){
            hintNo.textContent = `The number is lower and you are not close!`
        }
        else if(higherNumber <= 20 && higherNumber > 10){
            hintNo.textContent = `The number is lower and you are close!`
        }
        else{
            hintNo.textContent = `The number is lower and you are very close!`
        }
    }
    else if(number < randomNumber){
        let lowerNumber = randomNumber - number;
        if(lowerNumber >= 30){
            hintNo.textContent = `The number is higher and you are not close!`
        }
        else if(lowerNumber <= 20 && lowerNumber > 10){
            hintNo.textContent = `The number is higher and you are close!`
        }
        else{
            hintNo.textContent = `The number is higher and you are very close!`
        }
    }
}

function ResetGame(){
    resetGameLabel.textContent = `Play again!`;
    result.textContent = "";
    numberOfTries.textContent = "";
    submit.disabled = false;

    for(let i = 1; i <= 4; i++){
        let hintNo = document.getElementById(`hintNo${i}`);
        hintNo.textContent = "";
    }

    resetGame.onclick = function(){
        randomNumber = Math.floor(Math.random() * (100)) + 1;
        console.log(randomNumber);
        counter = 0;
    }  
}


submit.onclick = Game;







        


