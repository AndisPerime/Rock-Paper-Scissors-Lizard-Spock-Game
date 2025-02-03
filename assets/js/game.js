// Game choices and rules object
const gameRules = {
    rock: { beats: ['scissors', 'lizard'] },
    paper: { beats: ['rock', 'spock'] },
    scissors: { beats: ['paper', 'lizard'] },
    lizard: { beats: ['paper', 'spock'] },
    spock: { beats: ['scissors', 'rock'] }
};

// Image paths for game choices with error handling
const images = {
    rock: './assets/images/rock.png',
    paper: './assets/images/paper.png',
    scissors: './assets/images/scissors.png',
    lizard: './assets/images/lizard.png',
    spock: './assets/images/spock.png',
    question: './assets/images/question.png'
};

// Score tracking
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

// Get computer choice
function getBangChoice() {
    const choices = Object.keys(gameRules);
    return choices[Math.floor(Math.random() * choices.length)];
}

// Update result message
function updateResult(message) {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = message;
    }
}

// Play round and determine winner
function playRound(userChoice) {
    const bangChoice = getBangChoice();
    
    // Update choice displays with error handling
    const userImg = document.getElementById('user-choice');
    const bangImg = document.getElementById('computer-choice');
    
    if (userImg && bangImg) {
        userImg.src = images[userChoice] || images.question;
        bangImg.src = images[bangChoice] || images.question;
        userImg.style.width = '120px';
        userImg.style.height = '120px';
        bangImg.style.width = '120px';
        bangImg.style.height = '120px';
    }
    
    // Determine winner
    if (userChoice === bangChoice) {
        tieScore++;
        updateResult("It's a tie!");
    } else if (gameRules[userChoice].beats.includes(bangChoice)) {
        userScore++;
        updateResult("You win!");
    } else {
        computerScore++;
        updateResult("Bang wins!");
    }
    
    updateScoreboard();
}

// Update scoreboard
function updateScoreboard() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('tie-score').textContent = tieScore;
}

// Reset game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
    updateScoreboard();
    updateResult('Choose your move!');
    document.getElementById('user-choice').src = images.question;
    document.getElementById('computer-choice').src = images.question;
}