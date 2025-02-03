// Game choices and rules object
const gameRules = {
    rock: { beats: ['scissors', 'lizard'] },
    paper: { beats: ['rock', 'spock'] },
    scissors: { beats: ['paper', 'lizard'] },
    lizard: { beats: ['paper', 'spock'] },
    spock: { beats: ['scissors', 'rock'] }
};

// Image paths for game choices
const images = {
    rock: 'assets/images/rock.png',
    paper: 'assets/images/paper.png',
    scissors: 'assets/images/scissors.png',
    lizard: 'assets/images/lizard.png',
    spock: 'assets/images/spock.png'
};

// Score tracking
let userScore = 0;
let computerScore = 0;

// Get Bang's choice
function getBangChoice() {
    const choices = Object.keys(gameRules);
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play round and determine winner
function playRound(userChoice) {
    const bangChoice = getBangChoice();
    
    // Update choice displays
    document.getElementById('user-choice').src = images[userChoice];
    document.getElementById('computer-choice').src = images[bangChoice];
    
    // Determine winner
    if (userChoice === bangChoice) {
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

// Update result message
function updateResult(message) {
    document.getElementById('result').textContent = message;
}

// Update scoreboard
function updateScoreboard() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// Event listeners for choice buttons
document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.getAttribute('data-choice'));
    });
});

// Reset game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScoreboard();
    document.getElementById('result').textContent = 'Choose your move!';
    document.getElementById('user-choice').src = 'assets/images/question.png';
    document.getElementById('computer-choice').src = 'assets/images/question.png';
}