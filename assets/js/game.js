// Add difficulty settings
let currentDifficulty = 'normal';
const difficulties = ['easy', 'normal', 'hard'];

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
    rock: 'assets/images/rock.png',
    paper: 'assets/images/paper.png',
    scissors: 'assets/images/scissors.png',
    lizard: 'assets/images/lizard.png',
    spock: 'assets/images/spock.png',
    question: 'assets/images/question.gif'
};

// Score tracking
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to choice buttons
    document.querySelectorAll('.choice-btn').forEach(button => {
        button.addEventListener('click', () => {
            const choice = button.getAttribute('data-choice');
            if (choice) {
                playRound(choice);
            }
        });
    });
    
    // Initialize scoreboard
    updateScoreboard();

    // Set initial difficulty
    document.getElementById('difficulty-select').value = currentDifficulty;
});

// Replace toggleDifficulty with changeDifficulty
function changeDifficulty(difficulty) {
    currentDifficulty = difficulty;
    // Reset the game when difficulty changes
    resetGame();
}

// Add this function after the toggleDifficulty function
function handleHardMode() {
    const scoreDiff = userScore - computerScore;
    const buttons = document.querySelectorAll('.choice-btn');
    
    // Reset all buttons first
    buttons.forEach(btn => {
        btn.style.opacity = '1';
        btn.disabled = false;
    });

    // If player is winning by 2 or more points in hard mode
    if (currentDifficulty === 'hard' && scoreDiff >= 2) {
        // Get 3 random unique indices
        const disabledIndices = [];
        while (disabledIndices.length < 3) {
            const randomIndex = Math.floor(Math.random() * 5);
            if (!disabledIndices.includes(randomIndex)) {
                disabledIndices.push(randomIndex);
            }
        }
        
        // Disable the selected buttons
        disabledIndices.forEach(index => {
            buttons[index].style.opacity = '0.3';
            buttons[index].disabled = true;
        });
    }
}

// Modified getBangChoice function with difficulty levels
function getBangChoice() {
    const choices = Object.keys(gameRules);
    
    switch(currentDifficulty) {
        case 'easy':
            // 40% chance to pick a losing move
            if (Math.random() < 0.4) {
                const lastUserChoice = document.getElementById('user-choice').src;
                const userMove = Object.keys(images).find(key => images[key] === lastUserChoice.split('/').pop());
                if (userMove && gameRules[userMove]) {
                    return gameRules[userMove].beats[Math.floor(Math.random() * gameRules[userMove].beats.length)];
                }
            }
            break;
            
        case 'hard':
            // 40% chance to pick a winning move
            const userChoiceImg = document.getElementById('user-choice');
            if (userChoiceImg && Math.random() < 0.4) {
                const lastUserChoice = userChoiceImg.src.split('/').pop();
                for (const [move, rules] of Object.entries(gameRules)) {
                    if (rules.beats.includes(lastUserChoice)) {
                        return move;
                    }
                }
            }
            break;
            
        // 'normal' difficulty uses completely random choice (default behavior)
    }
    
    return choices[Math.floor(Math.random() * choices.length)];
}

// Add result display function
function updateResult(message) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = message;
    }
}

// Update scoreboard function
function updateScoreboard() {
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');
    const tieScoreElement = document.getElementById('tie-score');

    if (userScoreElement) userScoreElement.textContent = userScore.toString();
    if (computerScoreElement) computerScoreElement.textContent = computerScore.toString();
    if (tieScoreElement) tieScoreElement.textContent = tieScore.toString();
}

// Modify playRound function to ensure score updates
function playRound(userChoice) {
    const bangChoice = getBangChoice();
    
    // Update choice displays with error handling
    const userImg = document.getElementById('user-choice');
    const bangImg = document.getElementById('computer-choice');
    
    if (userImg && bangImg) {
        userImg.src = images[userChoice] || images.question;
        bangImg.src = images[bangChoice] || images.question;
    }
    
    // Determine winner with proper rule checking
    if (userChoice === bangChoice) {
        tieScore += 1;
        updateResult("It's a tie!");
    } else if (gameRules[userChoice].beats.includes(bangChoice)) {
        userScore += 1;
        const verb = userChoice === 'rock' ? 'crushes' :
                    userChoice === 'paper' ? 'covers' :
                    userChoice === 'scissors' ? 'cuts' :
                    userChoice === 'lizard' ? 'poisons' : 'vaporizes';
        updateResult(`You win! ${userChoice} ${verb} ${bangChoice}!`);
    } else {
        computerScore += 1;
        const verb = bangChoice === 'rock' ? 'crushes' :
                    bangChoice === 'paper' ? 'covers' :
                    bangChoice === 'scissors' ? 'cuts' :
                    bangChoice === 'lizard' ? 'poisons' : 'vaporizes';
        updateResult(`Bang wins! ${bangChoice} ${verb} ${userChoice}!`);
    }
    
    // Ensure scoreboard updates immediately after score changes
    updateScoreboard();
    handleHardMode();
    checkGameEnd();
}

// Add function to check for game end
function checkGameEnd() {
    const winningScore = 10; // You can adjust this number
    if (userScore >= winningScore || computerScore >= winningScore) {
        const winner = userScore > computerScore ? "You are" : "Bang is";
        updateResult(`Game Over! ${winner} the winner!`);
        // Optional: disable all buttons until reset
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
        });
    }
}

// Modify resetGame function to reset buttons
function resetGame() {
    userScore = 0;
    computerScore = 0;
    tieScore = 0;
    updateScoreboard();
    updateResult('Choose your move!');
    
    const userImg = document.getElementById('user-choice');
    const bangImg = document.getElementById('computer-choice');
    if (userImg && bangImg) {
        userImg.src = images.question;
        bangImg.src = images.question;
    }

    // Enable all buttons
    document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.style.opacity = '1';
        btn.disabled = false;
    });
}