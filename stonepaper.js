let userScore =0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#Computer-score");

const getCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    // generate random values from 0 till 2 (because we multiplied by 3), floor make sure it is integer(not decimal)
    return options[randomIdx];
}


const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText ="Game was draw. Play again";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("You win! ");
        msg.innerText= `You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor ="green";
    }
    else{
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("You lose! ");
        msg.innerText= `You Loose! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "#B22222";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);

    //generate computer choice
    const compChoice  = getCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice==compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
            // computer can be paper or scisor
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false:true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choices)=>{
    choices.addEventListener("click", () =>{
        // console.log("choice was clicked")
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    })
})



