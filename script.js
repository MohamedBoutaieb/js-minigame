const play = ["Rock", "Scissors", "Paper"]
function computerPlay() {
    let random = (Math.floor(Math.random() * 3));
    let computerPlay = play[random];
    console.log("computer chose " + computerPlay.toLowerCase());
    return computerPlay;
}

function playRound(computerSelection, PlayerSelection) {
    if (!PlayerSelection){ 
             return -3; 
            }
    PlayerSelection = PlayerSelection.toUpperCase()
    switch (PlayerSelection) {
        case "ROCK":
            if (computerSelection == "Scissors") {
                console.log("you win the round ! rock beats scissors")
                return 1;
            }
            else if (computerSelection == "Rock") {
                console.log("Rocky draw !")
                return 0;
            }
            else {
                console.log("You lost the round :( ! paper beats rock")
                return -1;
            }
        case "SCISSORS":
            if (computerSelection == "Scissors") {
                console.log("Scissors draw !")
                return 0;
            }
            else if (computerSelection == "Rock") {
                console.log("you lost the round :( ! rock beats scissors")
                return -1;
            }
            else {
                console.log("you win the round ! scissors cuts paper")
                return 1;
            }
        case "PAPER":
            if (computerSelection == "Paper") {
                console.log("Paper draw !")
                return 0;
            }
            else if (computerSelection == "Rock") {
                console.log("you win the round ! paper flips rock")
                return 1;
            }
            else {
                console.log("you lost the round :( ! scissors cuts paper")
                return -1;
            }
        default:
            console.log("please enter a valid input :))))")
            return -2;
    }
}

function game() {
    let pcScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++){
        let choice = prompt("round " + (i + 1) + ".. enter your choice")
        console.log("you chose "+ choice)
        let result = playRound(computerPlay(), choice)
        switch (result) {
            case -2 : 
                i--;
            break;
            case -1 :
                pcScore+=1;
            break;
            case 1 :
                playerScore+=1;
            break;
            case 0 :
            break;
            case -3 :
            return 0;
            default:
            break;
        }
    }
    if (playerScore > pcScore) {
        console.log("congratulations !!! you're the ultimate winner" )
    }
    else if (playerScore < pcScore) {
        console.log("you lost ..")
    }
    else {
        console.log("that's unlikely to happen but it's a draw !")
    }
    alert("The score was : You " + playerScore + " - " + pcScore + " Computer" )
}
game();
