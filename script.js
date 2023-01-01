const buttons= document.querySelectorAll('button.selection');
let computerSelection;
let playerSelection;
let Choices = document.querySelector("#choices")
let resultMessage = document.querySelector("#resultMessage")
let computerScore=0;
let playerScore=0;
let scoreBoard = document.querySelector("#scoreBoard");
scoreBoard.textContent = `${playerScore}- ${computerScore}`
Choices.textContent = "Chose Your Weapon, My Friend"











// Function that hides the startDiv and shows playDiv
    document.getElementById("startButton").onclick = function() {
    document.getElementById("startDiv").style.display = "none";
    document.getElementById("playDiv").style.display = "flex";
    document.getElementById("scoreDiv").style.display = "flex";

    } 

//Function that makes the computerPlay
function computerPlay(){
            let computerAnswer;
        //Randomly return Rock, Papper Or Scissors 
            //Randomly generate a number betwen 0 to 2
            let randomNumber = Math.floor(Math.random()*3);
                    // console.log(randomNumber);
            //Give each number a property
            // if it is 0 = Rock
            if(randomNumber === 0){
                computerAnswer = 'rock';}
            // if it is 1 = paper
            else if(randomNumber === 1){
                computerAnswer = 'paper';}
            // if it is 2 = Scissors
            else {
                computerAnswer = 'scissors';}
            //Return answer.
            return computerAnswer;
}

//Function that compares the poins 
function comparePoints(playerScore, computerScore){
    if (playerScore === 5 && computerScore < playerScore){
    document.getElementById("playDiv").style.display = "none";
    document.getElementById("endDiv").style.display = "flex";
    document.getElementById("scoreDiv").style.display = "none";
    resultMessage.textContent = "User Wins"

    }else if(computerScore === 5 && playerScore < computerScore){
    document.getElementById("playDiv").style.display = "none";
    document.getElementById("endDiv").style.display = "flex";
    document.getElementById("scoreDiv").style.display = "none";
    resultMessage.textContent = "Computer Wins";

    }else{
        return 'again'
    }

}

//Function that compare answers 
function roundPlay(computerSelection, playerSelection){
    if (computerSelection === 'rock' && playerSelection === 'paper' ){
        Choices.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`;
        playerScore++;
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors' ){
        computerScore++;
        Choices.textContent = `You lose! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors' ){
        playerScore++;
        Choices.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock' ){
        computerScore++;
        Choices.textContent = `You lose! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock' ){
        playerScore++;
        Choices.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper' ){
        computerScore++;
        Choices.textContent = `You lose! You chose ${playerSelection} and The computer chose ${computerSelection}`;
    }else{
        Choices.textContent = `It is a Tie! You chose ${playerSelection} and The computer chose ${computerSelection}`;
        
    }
}



//Function That takes the choice of the user and iniciates the computerSelection
buttons.forEach(button => {
    button.addEventListener("click",() =>{
        let pointsCompare = comparePoints(playerScore, computerScore);
        computerSelection = computerPlay();
        console.log('c',computerSelection)
        playerSelection =`${button.id}` ;
        console.log('p',playerSelection)
        let playRound= roundPlay(computerSelection, playerSelection);
        scoreBoard.textContent = `${playerScore}- ${computerScore}`
    })
})