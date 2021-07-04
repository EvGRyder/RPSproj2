console.log("hello world!!!")

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let randInt = Math.floor(Math.random()*3)
    return choices[randInt]
}

const playerOptions = ["rock", "paper", "scissors"]

const result = document.querySelector('#result')

let score = 0


function playRound(playerSelection, computerSelection) {
    p1 = playerSelection.toLowerCase();
    p2 = computerSelection.toLowerCase();

    if (p1 == p2) return result.textContent = "it's a tie!"

    if (p1 == "rock") {
        if (p2 == "paper") {
            return result.textContent = winStatement("rock", "paper", 0)
        }
        if (p2 == "scissors") {
            score++
            if (score == 5) {return result.textContent = "You win everything"}
            return result.textContent = winStatement("rock", "scissors", 1)
        }
    }

    if (p1 == "scissors") {
        if (p2 == "rock") {
            return result.textContent = winStatement("scissors", "rock", 0)
        }
        if (p2 == "paper") {
            score++
            if (score == 5) {return result.textContent = "You win everything"}
            return result.textContent = winStatement("scissors", "paper", 1)
        }
    }

    if (p1 == "paper") {
        if (p2 == "scissors") {
            return result.textContent = winStatement("paper", "scissors", 0)
        }
        if (p2 == "rock") {
            score++
            if (score == 5) {return result.textContent = "You win everything"}
            return result.textContent = winStatement("paper", "rock", 1)
        }
    }
}


function winStatement(p1, p2, win) {
    return `You ${win ? "win" : "lose" }! ${p1} beats ${p2}. Score is currently ${score}`
}

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

rockBtn.addEventListener('click', function (e) {
    console.log(playRound("rock", computerPlay()))
})

paperBtn.addEventListener('click', function (e) {
    console.log(playRound("paper", computerPlay()))
})

scissorsBtn.addEventListener('click', function (e) {
    console.log(playRound("scissors", computerPlay()))
})
