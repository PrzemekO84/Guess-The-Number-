
let numberInput = document.getElementById("number"); 
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let numberOfTries = document.getElementById("numberOfTries");
let resetGame = document.getElementById("resetGame")
let hintsContainer = document.querySelector(".hintscontainer")
let counter = 0;
let maxAttempts = 6;

let randomNumber = Math.floor(Math.random() * (100)) + 1;
console.log(randomNumber);


function Game(){
    number = numberInput.value;
    number = Number(number);

    if(number < 1 || number > 100) {
        result.textContent = `Please enter a number between 0 and 100`
        return; 
    }

    counter++;
    console.log(counter);
    hintsContainer.style.display = "block";

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
        if(higherNumber >= 30){
            hintNo.textContent = `Hint ${counter}: The number is lower and you are not close! (${number})`
        }
        else if(higherNumber <= 29 && higherNumber > 16){
            hintNo.textContent = `Hint ${counter}: The number is lower and you it's getting closer! (${number})`
        }
        else if(higherNumber <= 15 && higherNumber >= 8){
            hintNo.textContent = `Hint ${counter}: The number is lower and you are close! (${number})`
        }
        else{
            hintNo.textContent = `Hint ${counter}: The number is lower and it's HOT HOT HOT! (${number})`
        }
    }
    else if(number < randomNumber){
        let lowerNumber = randomNumber - number;
        if(lowerNumber >= 30){
            hintNo.textContent = `Hint ${counter}: The number is higher and you are not close! (${number})`
        }
        else if(lowerNumber <= 29 && lowerNumber > 16){
            hintNo.textContent = `Hint ${counter}: The number is higher and you it's getting closer! (${number})`
        }
        else if(lowerNumber <= 15 && lowerNumber >= 8){
            hintNo.textContent = `Hint ${counter}: The number is higher and you are close! (${number})`
        }
        else{
            hintNo.textContent = `Hint ${counter}: The number is higher and it's HOT HOT HOT! (${number})`
        }
    }
}

function ResetGame(){
    // reseting whole data
    randomNumber = Math.floor(Math.random() * (100)) + 1;
    console.log(randomNumber);
    counter = 0;
    result.textContent = "";
    numberOfTries.textContent = "";
    submit.disabled = false;
    resetGame.style.display = "none";
    hintsContainer.style.display = "none";

    for(let i = 1; i <= maxAttempts - 1; i++){
        let hintNo = document.getElementById(`hintNo${i}`);
        hintNo.textContent = "";
    }  
}

submit.onclick = Game;







        


