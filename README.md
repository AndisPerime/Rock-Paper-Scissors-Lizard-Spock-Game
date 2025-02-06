
### JavaScript Hackaton Collaborative Project

# Bang Out! Game

### A Scissors-Paper-Rock-Lizard-Spock Game
### **Deployed Game URL: https://andisperime.github.io/Rock-Paper-Scissors-Lizard-Spock-Game/index.html**



## Table of Contents
1. [Introduction](#introduction)
2. [Project Planning](#project-planning)
3. [User Experience (UX)](#user-experience-ux)
4. [Features](#features)
5. [Technical Implementation](#technical-implementation)
6. [Technologies Used](#technologies-used)
7. [Use of AI](#use-of-ai)
8. [Future Features](#future-features)
9. [Contributors](#contributors)
10. [Credits](#credits)

## Introduction

### Project Purpose

The purpose of this collaborative project is to create an engaging and interactive game within a front-end web development environment. Utilizing the core technologies of HTML, CSS, and JavaScript, we aim to develop a dynamic and visually appealing static web application. This project will not only enhance our technical skills but also provide a platform for creativity and teamwork. By combining these powerful web development tools, we aspire to deliver an enjoyable and polished game experience for users.

### Game's Purpose

The purpose of this website is to offer a fun and engaging web-based implementation of the classic game "Rock, Paper, Scissors," enhanced with modern twists. Players can challenge an AI opponent named Bang, adding an exciting element of competition. The game introduces two additional options, Lizard and Spock, to enrich the gameplay with more variety and strategic depth.

To cater to different skill levels, the website allows players to select from a number of different levels before starting, effectively setting the game's difficulty. This gradual difficulty feature ensures that players of all ages and experience levels can enjoy a personalized and progressively challenging experience.

### Instructions for the Game

1. Read Rules and Instruction before start the game
2. Click on the Play Game button to start the game.
3. Choose difficulty level: 
- Easy: In this mode you have 40% bigger chance to win Bang.
- Normal: This game mode is standart game mode.
- Hard: In this mode if you win by +2 score, then three random choices are denied for you to use until the Bang catches you up in score.
5. Click one of the five buttons to select your move.
6. The individual round's result will be displayed, indicating who won or if it was a tie.
7. The score will update accordingly and show message confirming winner.
8. Click on the Reset Game button to reset the game.

### Game Rules

For each round there's an outcome according to the rules below: Either there's a winner and a loser or else the result can be a draw if the same variable is picked by both players.

These are the rules for the game:

- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- (and as it always has) Rock crushes Scissors

## Project Planning

During the initial project meeting, we focused on key considerations such as user experience (UX), design consistency, and we had some time for brainstorming ideas. 
We discussed the technical setup, including server configuration and repository management. 
Roles and tasks were assigned for project management, front-end development, internal game logic development and UX/UI design as well as documentation. 
The team framework was chosen, with a Scrum Master appointed to facilitate agile practices. This thorough planning set a solid foundation for our collaborative efforts and aimed to deliver a high-quality web application.

### Creation Process





### Strategy

- We need a website that is friendly and inviting to all ages.
- We want it to be animated and easy to use.
- Easy to choose the game mode.

### Scope

- The website needs to be available in multiple sizes for different devices.
- Easy to access the game style and difficulty levels.
- Find out about the developers in the about us section.
- How to play the game information.

**Brainstorm session**

 ![Miro board brainstorm](/assets/images/MIRO_brainstorm.PNG "Index page wireframe")

## User Experience (UX)

### External User Goals
- The site’s users want to play an online game that has elements of chance.

### Site Owner Goals
- The site’s goal is to provide a challenging game with increasing levels of difficulty to entertain online users.
### Target Audience
- Casual Gamers - Individuals who enjoy light-hearted, quick games that provide entertainment without requiring a long-term commitment or deep strategy.

- Fans of Classic Games - This audience enjoys nostalgic elements combined with new and interesting mechanics that keep the gameplay exciting and unpredictable.

- Pop Culture Enthusiasts - Followers of "The Big Bang Theory" where the game gained popularity. This public enjoys references from their favorite TV shows, movies... adding an extra layer of enjoyment.

- All Ages - Due to its simple rules yet engaging and strategic elements it's a great choice for family gatherings, classroom activities, or casual play with friends of varying age groups.

- Technology & Gaming Communities - Players interested in innovative and creative adaptations of classic games. This audience values originality and creativity in game design, and they appreciate the effort put into developing unique gameplay experiences that stand out from the crowd.

### User Stories
- As a user, I want to select one of the options (Rock, Paper, Scissors, Lizard, Spock) and play against the computer, so that I can enjoy the game.
- As a user, I want to see my score, my opponents and the number of draws so that I can track my progress and have a clear end goal.
- As a user, I want the game to have increasing levels of difficulty, so that it remains engaging and challenging.
- As a site owner, I want to provide a challenging game with increasing levels of difficulty and a score-tracking system, so that users stay engaged and motivated to keep playing.


### Wireframes
 **index.html**

 ![Index page wireframe](/assets/images/WIRE_index.PNG "Index page wireframe")

 **about-us.html**

 ![About Us page wireframe](/assets/images/WIRE_about.PNG "About Us page wireframe")

 **game-window.html**

 ![The Game page wireframe](/assets/images/WIRE_game.PNG "The Game page wireframe")

 




## Features

- Level selector.
- Game start button 
- Five selectable choices: Rock, Paper, Scissors, Lizard and Spock triggered by clicks on images
- AI (Bang) opponent makes random choices
- Displays both players' choices
- Compares each player's choices according rules and establishes a winner per round
- Displays message after each round ( Win, lose, draft)
- Total score tracking for player, Bang(AI) and draws. 
- Displays message after winner wins game and stops the game.
- Restart game button
- Animations.
- Dynamic design: Responsive to screen sizes, Expandable information, Modals, ...
- Visual effects impplemented with JavaScript and CSS


## Technical Implementation

### Interactivity

- Implemented dynamic button interactions for game choices
- Created responsive difficulty selection system
- Added real-time score tracking and updates
- Incorporated animated visual feedback for user actions
- Developed an intelligent computer opponent with varying difficulty levels
- 

### Experience Design

- Designed an intuitive user interface with clear visual feedback
- Used Javascript and CSS to create dynamic effects as screen size responsiveness, design and photographic effects, expandable  information displays and modals. 
- Used Krita to manipulate images to adapt to the design requirements to maintain consistent and appealing design.
- Created engaging animations
- Implemented a difficulty system that adapts to player performance
- Maintained consistent visual styling throughout the application

### Accessibility Features

- Ensured proper contrast ratios for text visibility
- Added clear visual indicators for interactive elements
- Implemented keyboard navigation support
- Included disabled state styling for buttons
- Used semantic HTML for better screen reader compatibility

## Technologies Used

### Languages Used

- HTML
- CSS
- JavaScript

### Frameworks, Libraries, Technologies & Programs Used

- Balsamiq - used to create wireframes.
- GitHub - used to save and store all files.
- Git - used for version control.
- Visual Studio Code - used as a workspace.
- Google Fonts - fonts were chosen and imported from here.
- Hotpot AI - for favicon.
- Dev Tools - to debug and for testing responsiveness.
- Google Lighthouse - for auditing the website.
- W3C Validator - for validating the HTML and CSS code.
- Krita - For touching up the images.

### Code Structure

The project is organized into several key components:
- CSS styling for visual presentation and animations
- JavaScript for game logic and DOM manipulation
- HTML structure for the game and other pages interfaces
- Asset management for images and other resources




## Use of AI

### Index page (created by Edite Budzilko)

During the development of this project, we utilized AI tools (specifically GitHub Copilot) to enhance our development process:
- Used AI for initial code structure suggestions
- Leveraged AI for debugging and code optimization
- Maintained creative control while using AI as a supportive tool
- Carefully reviewed and modified AI suggestions to ensure code quality and functionality

### About Us page (created by Ali Garrido)

For the about-us.html page, Copilot editor, chat and inline editors were used in VS Code to create the initial basic HTML structure of the website and to implement specific styles and functions with Javascript. 
I manually adimplemented some bootstrap code which later on I cleared off and removed completely with the help of Copilot editor.
Separately, I used Copilot's web service to generate text content structure for the sections which later was customised. I also generated profile images using the same chat. 

### Index page (created by Edite Budzilko)

During the development of this project, we utilized AI tools (specifically GitHub Copilot) to enhance our development process:
- Used AI for initial code structure suggestions
- Leveraged AI for debugging and code optimization
- Maintained creative control while using AI as a supportive tool
- Carefully reviewed and modified AI suggestions to ensure code quality and functionality





## Future Features

Planned enhancements include:
  - Additional animation effects
  - Enhanced difficulty modes
  - Mobile-specific optimizations
  - Sound effects and background music
  - Multiplayer capabilities


## Contributors
- Andis Budzilko
- Edite Budzilko
- Alicia Garrido


## Credits

Special thanks to the instructors and peers at Code Institute for their guidance and support throughout this project.

Thanks to Copilot for assisting in code generation and providing valuable suggestions during development.


Special thanks as well for the fellow coders who helped us out of muddy waters: Ben Darlington and Florian Sax.


Gratitude to the developers and contributors of the tools and libraries used in this project.


Fonts were sourced from Google Fonts.


Thanks to Bootstrap for making a fleeting appeareance. We luckily moved away from it in time.


**Content and Inspiration**


 Inspiration for this project was derived from various online resources, including articles and guidelines from other coders who already have chartered these waters.
 -  https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock

 -https://www.codespud.com/2022/rock-paper-scissors-lizard-spock/

 And finally, a massive big thanks to our Big Bang Theory heroes, for gifting us the gift of laugther and keeping alive the nerd in us, to whom we dedicate this game and the name of our AI Bot, "Bang". 

