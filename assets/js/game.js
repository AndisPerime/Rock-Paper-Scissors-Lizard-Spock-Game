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