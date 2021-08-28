let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_board_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function convertToWord(letter) {
    if(letter == 'r')
    return "Rock";
    if(letter == 'p')
    return "Paper";
    return "Scissors";
}

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3); 
    return choices[randomNumber];
}

function win(userChoice,computerChoice) {
    userScore++;
    // console.log("User Wins!!");
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = " user".fontsize(4).sub();
    const smallCampWord = " comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCampWord} You Win!!🔥🎁`;
    document.getElementById(userChoice).classList.add('win-glow'); 
};

function lose(userChoice,computerChoice){
    computerScore++;
    // console.log("User loses");
    // console.log(computerScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = " user".fontsize(4).sub();
    const smallCampWord = " comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCampWord} You lost...💩`;
    document.getElementById(userChoice).classList.add('lose-glow');

};
function tie(userChoice,computerChoice) { 
    const smallUserWord = " user".fontsize(4).sub();
    const smallCampWord = " comp".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCampWord} It's a Tie`;
    document.getElementById(userChoice).classList.add('tie-glow');
};

function game(userChoice){
    const computerChoice = getComputerChoice();
    // console.log("Computer choice  " + computerChoice);
    // console.log("user choice  " + userChoice)
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice,computerChoice);  
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();