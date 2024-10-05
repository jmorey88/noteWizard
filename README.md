# noteWizard - Piano Keyboard and Flashcard Game

## Overview

noteWizard is a JavaScript-based learning game that helps users improve their musical note recognition skills through an interactive virtual piano. This project is designed to help aspiring musicians, music students, or anyone interested in learning how to read musical notes.

![noteWizard Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/noteWizardScreenshot.png)


## Table of Contents

- Introduction
- Features
- Demo
- Getting Started
- Usage
- Technical Details
  - Code Architecture 
  - Hosting
- Contributing


## Introduction

Learning to read musical notes is an essential skill for anyone interested in music, whether they are a beginner or an experienced musician. noteWizard aims to make this learning process fun and engaging by gamifying the experience. With this project, you can start by practicing notes on the treble clef, specifically in the C4 to C6 range.

## Features

- Virtual Piano: Play realistic sounding notes on a virtual piano.

- Flashcards: Learn to recognize notes presented on flashcards.

- Progress Tracking: Keep track of your progress as you correctly identify notes.

## Demo

Experience noteWizard by visiting http://www.notewizard.net 

## Getting Started

Follow these instructions to get a copy of noteWizard up and running on your local machine.

### Prerequisites 

Before you begin, make sure you have the following prerequisites:

- A modern web browser (e.g., Chrome, Firefox, Safari).
- Node.js and npm installed on your system.

To install Node.js and npm, follow these steps:
  
  1. Visit the official Node.js website at https://nodejs.org/.
  2. Download the recommended LTS (Long Term Support) version of Node.js for your operating system.
  3. Follow the installation instructions provided on the website to install Node.js and npm.
  
  To verify that Node.js and npm are installed correctly, open your terminal and run the following commands:
  
  ```bash
  node -v
  npm -v
  ```


### Installation

Clone the repository:

```bash
git clone https://github.com/jmorey88/noteWizard.git
```

Navigate to the project directory:

```bash
cd noteWizard
```

#### Install dependencies:

```bash
npm install 
```

#### Development with Webpack:

noteWizard uses webpack for bundling JavaScript code. The project is configured to work with webpack's default settings, so there is no need for a webpack.config.js file.

To build and bundle your code during development, you can use the following npm script:

```bash
npm run build
```

This will automatically use webpack's default configuration to bundle your JavaScript files.

To keep the bundle updated automatically as you make changes to your code, you can use the following command with webpack --watch:

```bash
webpack --watch --mode=development
```

This command will run webpack in watch mode, and your bundle will be updated whenever you save changes to your JavaScript files.

#### Running the Game Locally:

To run the game locally, you can use the http-server package. If you haven't already installed it globally, you can do so with the following command:

```bash
npm install -g http-server
```

Once http-server is installed, you can start the local server by running:

```bash
http-server
```

Your game should now be accessible locally at http://localhost:8080/ in your web browser.

You have successfully set up a local server using http-server to run the game locally.

## Usage

- Press the "Let's Play" button to start the game. 
- A flashcard displaying a musical note will appear.
- Identify the note and click the corresponding key on the virtual piano keyboard.
- Receive feedback on whether your answer was correct or incorrect.
- Continue until you have completed all the flashcards.
- Upon completion, a popup window will congratulate you and offer the option to play again.

## Technical Details

### Code Architecture:

noteWizard follows a modular and organized code structure to maintain code readability and scalability. Here's an overview of the main components:

#### **`index.html`**: 
The main HTML file that provides the structure of the game.

#### **`src/index.js`**: 
Entry point of the JavaScript code.  

#### **`note_master.css`**: 
The Cascading Style Sheets (CSS) file responsible for styling the game elements.

- For an enhanced visual experience, noteWizard utilizes an AI-generated image as a background. This captivating visual was created using [Picart.com](https://www.picart.com/), an AI art generator tool. 

  To explore more AI-generated art and create your own, visit [Picart.com](https://www.picart.com/).

![AI-Generated Background](https://notemaster.s3.us-west-1.amazonaws.com/noteWizardBackground.jpeg)

- noteWizard is primarily designed for desktop and larger screen devices. However, to ensure some level of accessibility on smaller screens, such as tablets and mobile phones, media queries were implemented in the CSS file to adapt the layout.


  - **Recommended Use**: For the best experience, we recommend using noteWizard on a desktop or tablet-sized screen.

  Please keep these considerations in mind when accessing noteWizard on mobile devices. If you encounter any issues or have feedback regarding mobile usage, feel free to contact developer.

#### **`src/game.js`**: 
Contains the core game logic, including flashcard handling, user interaction, and game flow control.

- Sets up the flashcard deck and piano keyboard while also checking to see if correct notes are selected and determines game state.

- Handles the instructions popup. If a new instance of Game is created and has true passed as an argument, the instructions will render.  If false is passed in, instructions will not show.

  ![noteWizard instructions Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/instructionsScreenshot.png)


- The 'Game' class also handles checking if the users selections are correct, determining if the game is won or not, and what steps to take next accordingly.

  - The notePressed method is the core of the noteWizard game play logic.  It checks to see if the piano key pressed by the user corresponds to the currently presented flashcard.  If the selected note is correct #correctNote method is called. If the note is incorrect, a message is displayed asking the user to try again.  The constant splitNote is added to handle the use of enharmonics.  In music, enharmonics are notes that have 2 different possible names.  For example, a black key on the piano can be a Gb or and F#.  The splitNote constant takes the piano key's data-key which has both note names and splits them in order to compare them to the current card.

  ```javascript
  notePressed = (note) => {
      var status = ' ';
      const currentCardKey = this.deck.currentCard().key;
      const splitNote = note.split(' / ');

      if (splitNote.includes(currentCardKey)) {
        status = CORRECT;
        this.#correctNote();
      } else {
        status = INCORRECT;
      }
      this.#manageTxt(status);
    };
  ```

  - The #correctNote method handles what the game does if the users selection was correct.  The manageTxt method displays "Correct" on the DOM and goes on to check if the game is finished/won.  If the game is not yet completed, the deck class' nextCard method is called, removing the current card from the deck and displaying the next.

  ![noteWizard "Correct" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/correctScreenShot.png)

  

  ![noteWizard "Try Again" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/tryAgainScreenshot.png)

  - If the game is won and all cards have been played through, the #showPopup method will be called which displays text stating the game has been won, and trigger the playAgain method which shows a "PlayAgain" button that will instantiate a new Game with a freshly shuffled deck.  Because this new Game is a repeat of the Game and not the first round, "false" will be passed to the game instance making sure that the instructions wont be displayed again.

  ```javascript
  #playAgain = () => {
      // ...
      anotherGame = new Game(false)
    }
  ```

  ![noteWizard "Try Again" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/gameWonScreenshot.png)

#### **`src/keyboard.js`**: 
Defines the `Keyboard` class, which manages the virtual piano keyboard and note playback.

- The `Keyboard` class dynamically generates the piano keyboard and handles user interactions, such as playing notes when keys are clicked.

- In this class file the #bindNotes method accesses the DOM to iterate through the different piano keys using their html classes white_key and black_key.  #bindNotes then adds an eventListener that waits for the user to click one of the keys at which point the corresponding note will play.

  ```javascript
  #bindNotes = () => {
      //... 
      keys.forEach(key => {
        // ...
        key.addEventListener('click', () => {
          audio.play()
          this.notePressedCallback(note)
        })
      })
    }
  ```

- The notePressedCallback will take over managing whether or not the clicked key was correct or not.  In the html each piano key was also given a data-key to be passed into the notePressed method so it can be checked against the flash card value.

#### **`src/deck.js`**: 
Defines the `Deck` class, responsible for managing flashcards and the card deck.

- The Deck class creates a new shuffled deck, manages flashcards, displays them to the user, and tracks the player's progress.

- The #build method utilizes the lodash utility library for efficient shuffling of the flashcard deck, ensuring a varied and randomized learning experience.  The currentDeck array is then used to display the current card and to obtain the card count which shows how many cards are left to finish the game.

  ```javascript
  #build = () => {
      // ...
      this.currentDeck = shuffle(newDeck) 
      // ...
    }
  ``` 

### Hosting:

noteWizard is hosted on AWS (Amazon Web Services) for reliable and scalable access to the game and its assets. The hosting setup involves the use of Amazon S3 buckets for storage and Amazon Route 53 for domain management.

#### Amazon S3 Buckets

- An Amazon S3 bucket was used to store project media such as images and audio files. Storing them in an S3 bucket provides low-latency access and efficient content delivery to users.

- Separately, another Amazon S3 bucket is dedicated to storing project source code. These files include the game logic and functionality.

#### Amazon Route 53

- Amazon Route 53 is employed for domain registration and DNS management. Here's how it works:

  1. **Domain Registration**: A domain name (e.g., www.notewizard.net) was registered using Route 53. This domain serves as the primary web address for accessing the game.

  2. **DNS Management**: Route 53 is configured to route traffic to the appropriate S3 buckets. 

- By using AWS S3 and Route 53 in tandem, we guarantee high availability, robust performance, and a smooth user experience for players accessing noteWizard from various locations.
  
## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and test thoroughly.
- Commit your changes with descriptive commit messages.
- Push your changes to your fork.
- Submit a pull request to the main repository.

### Expanding the Project

Supporting Different Clefs:

To expand the project and add support for different clefs (e.g., bass clef, tenor clef, alto clef), follow these steps:

  - Create additional flashcards and note images specific to the desired clefs.
  - Modify the game logic to allow users to switch between clefs.
  - Enhance the user interface to display the selected clef.
  - Ensure that the piano keyboard and sound effects align with the chosen clef.
  - Update the game instructions to reflect the change in clef.

## Credits

Developer: Joel Morey

License: MIT

Contact:
For inquiries or feedback, you can reach me at joel.morey88@gmail.com.


