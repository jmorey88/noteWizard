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
- Hosting
- AI-Generated Image Background
- Mobile Accessibility
- Contributing


## Introduction

Learning to read musical notes is an essential skill for anyone interested in music, whether they are a beginner or an experienced musician. noteWizard aims to make this learning process fun and engaging by gamifying the experience. With this project, you can start by practicing notes on the treble clef, specifically in the C4 to C6 range.

## Features

Virtual Piano: Play realistic sounding notes on a virtual piano.

Flashcards: Learn to recognize notes presented on flashcards.

Progress Tracking: Keep track of your progress as you correctly identify notes.

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
Copy code
git clone https://github.com/your-username/noteWizard.git
Navigate to the project directory:
```

```bash
Copy code
cd noteWizard
```

#### Install dependencies:

```bash
Copy code
npm install 
```

#### Development with Webpack:

noteWizard uses webpack for bundling your JavaScript code. The project is configured to work with webpack's default settings, so there's no need for a webpack.config.js file.

To build and bundle your code during development, you can use the following npm script:

```bash
Copy code
npm run build
```

This will automatically use webpack's default configuration to bundle your JavaScript files.

To keep the bundle updated automatically as you make changes to your code, you can use the following command with webpack --watch:

```bash
Copy code
webpack --watch --mode=development
```

This command will run webpack in watch mode, and your bundle will be updated whenever you save changes to your JavaScript files.

#### Running the Game Locally:

To run the game locally, you can use the http-server package. If you haven't already installed it globally, you can do so with the following command:

```bash
Copy code
npm install -g http-server
```

Once http-server is installed, you can start the local server by running:

```bash
Copy code
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

### Code Architecture

noteWizard follows a modular and organized code structure to maintain code readability and scalability. Here's an overview of the main components:

- **`index.html`**: The main HTML file that provides the structure of the game.

- **`src/index.js`**: Entry point of the JavaScript code.  

- **`note_master.css`**: The Cascading Style Sheets (CSS) file responsible for styling the game elements.

- **`src/game.js`**: Contains the core game logic, including flashcard handling, user interaction, and game flow control.

- **`src/keyboard.js`**: Defines the `Keyboard` class, which manages the virtual piano keyboard and note playback.

- **`src/deck.js`**: Defines the `Deck` class, responsible for managing flashcards and the card deck.

### Key Code Snippets

Here are some key code snippets that highlight the core functionality of the `noteWizard` project:

#### Instantiating Game 

The 'Game' class handles game board set up and game logic.  It sets up the flashcard deck and piano keyboard while also checking to see if correct notes are selected and determines game state.

```javascript
// code snippet from game.js
export class Game {
  constructor(renderInstructions) {
    this.instructions = renderInstructions
    this.deck = new Deck
    this.keyboard = new Keyboard(this.notePressed())

    if (this.instructions) {
      this.#renderInstuctions()
    }
  }
  // other methods...
}
```
As shown in this section of code above the Game class constructor instantiates a new deck class and a new keyboard class.  It also handles the insturctions popup. If a new instance of Game is created and has true passed as an argument, the instructions will render.  If false is passed in, instructions will not show.

![noteWizard instructions Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/instructionsScreenshot.png)

#### Create Deck and Displaying Flashcards

The Deck class creates a new shuffled deck, manages flashcards, displays them to the user, and tracks the player's progress.

```javascript
// Code snippet from deck.js
export class Deck {
  constructor() {
    this.currentDeck = null
    this.#build()
  }

  #build = () => {
    const newDeck = Object.keys(noteImages).map(key => ({ key, value: noteImages[key] })) 
    this.currentDeck = shuffle(newDeck) 
    this.#displayCard(this.currentCard())
  }

  #displayCard = (topCard) => {
    const img = document.createElement('img')
    img.src = topCard.value
    img.alt = 'displayed-card'
    img.id = 'card-img'

    const container = document.querySelector(".deck")
    container.appendChild(img)
    return this.#renderCardCount()
  }
}
```
In the above section of code, the 'Deck' class' constructor handles the Deck build, card display, and card count. 
The #build method utilizes the lodash utilty library for efficient shuffling of the flashcard deck, ensuring a varied and randomized learning experience.  The currentDeck array is then used to display the current card and to obtain the card count which shows how many cards are left to finish the game.

#### Creating the Piano Keyboard

The `Keyboard` class dynamically generates the piano keyboard and handles user interactions, such as playing notes when keys are clicked.

```javascript
// Code snippet from keyboard.js
export class Keyboard {
  // ... constructor and other methods ...

  #keyboardHTML = () => 
    `
      <!-- Piano keys HTML structure -->
      <!-- White keys -->
      <div class="white_key first" data-key="C4">C4</div>
      <!-- Black keys -->
      <div class="black_key b1" data-key="C#4 / Db4"></div>
      <!-- Additional keys ... -->
    `;
  }

  #bindNotes = () => {
    const newElement = document.querySelector('.keyboard')
    const keys = newElement.querySelectorAll('.white_key, .black_key')
    
    keys.forEach(key => {
      const note = key.getAttribute('data-key')
      const audio = new Audio(audio_files[note]);
      key.addEventListener('click', () => {
        audio.play()
        this.notePressedCallback(note)
      })
    })
  }
  // other methods...
```

In this class file the #bindNotes method accesses the DOM to itterate through the different piano keys using their html classes white_key and black_key.  #bindNotes then adds a eventListener that waits for the user to click one of the keys at which point the corresponding note will play and the notePressedCallback will take over managing whether or not the clicked key was correct or not.  In the html each piano key was also givin a data-key to be passed into the notePressed method so it can be checked against the flash card value.  

#### Game class game logic

The 'Game' class also handles checking if the users selections are correct, determining if the game is won or not, and what steps to take next accordingly.

```javascript
notePressed = (note) => {
    var status = " "
    const currentCardKey = this.deck.currentCard().key
    const splitNote = note.split(' / ')

    if (splitNote.includes(currentCardKey)) {
      status = "correct"
      this.#manageTxt(status)
      this.#correctNote()
    }

    else {
      status = "incorrect"
      this.#manageTxt(status)
    }
  }
```
The notePressed method is the core of the noteWizard game play logic.  It checks to see if the piano key pressed by the user corresponds to the currently presented flashcard.  If the selected note is correct #correctNote method is called and if the note is incorrect, #wrongNote is called.  The constant splitNote is added to handle the use of enharmonics.  In music, enharmonics are notes that have 2 different possible names.  For example, a black key on the piano can be a Gb or and F#.  the splitNote constant takes the piano keys data-key which has both note names and splits them in order to compare them to the current card.

```javascript
#correctNote = () => {
    this.deck.nextCard()

    if (this.#isWon()) {
      this.#showPopup()
      this.#popupListener()
    }
  }
```
The #correctNote and handles what the game does depending on the users selection.  The manageTxt method displays "Correct" on the DOM if the selection is correct, and "Try Again" if the selction is incorrect.  If the slection is correct, the #correctNote method goes on to check if the game is finished/won.  If the deck is complete, a popup is displayed stating the game is won, and asking if the user wants to play again.  If the game is not yet completed, the deck class' nextCard method is called, removing the current card from the deck and displaying the next.

![noteWizard "Correct" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/correctScreenshot.png)

![noteWizard "Try Again" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/tryAgainScreenshot.png)

If the game is won and all cards have been played through, the #showPopup method will be called which displays text stating the game has been won, and trigger the playAgian method which shows a "PlayAgain" button that will instantiate a new Game with a freshly shuffled deck.  Because this new Game is a repeate of the Game and not the first round, "false" will be passed to the game instance making sure that the instructions wont be displayed again

```javascript
 #playAgain = () => {
    this.#hidePopup()
    anotherGame = new Game(false)
  }
```

![noteWizard "Try Again" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/gameWonScreenshot.png)

## AI-Generated Image Background

For an enhanced visual experience, noteWizard utilizes an AI-generated image as a background. This captivating visual was created using [Picart.com](https://www.picart.com/), an AI art generator tool. By leveraging the power of artificial intelligence, a unique and mesmerizing background that adds an artistic touch to your learning journey was implemented.

This AI-generated background not only makes noteWizard visually appealing but also help set the mood for an immersive musical note recognition experience. Feel the artistic vibes while improving your musical skills!

To explore more AI-generated art and create your own, visit [Picart.com](https://www.picart.com/).

![AI-Generated Background](https://notemaster.s3.us-west-1.amazonaws.com/noteWizardBackground.jpeg)

## Hosting

noteWizard is hosted on AWS (Amazon Web Services) for reliable and scalable access to the game and its assets. The hosting setup involves the use of Amazon S3 buckets for storage and Amazon Route 53 for domain management.

### Amazon S3 Buckets

#### Project Files (Images and Audio)

We use an Amazon S3 bucket to store project files such as images and audio files. These assets are essential for the game's functionality and aesthetics. Storing them in an S3 bucket provides low-latency access and efficient content delivery to users.

#### JavaScript Files

Separately, another Amazon S3 bucket is dedicated to storing the project's JavaScript files. These files include the game logic and functionality. By using S3 for JavaScript files, we ensure fast and reliable access to the game's core code.

### Amazon Route 53

Amazon Route 53 is employed for domain registration and DNS management. Here's how it works:

1. **Domain Registration**: We registered a domain name (e.g., www.notewizard.net) using Route 53. This domain serves as the primary web address for accessing the game.

2. **DNS Management**: Route 53 is configured to route traffic to the appropriate AWS resources. Specifically, it's set up to direct requests for JavaScript files to the S3 bucket storing those files. This ensures seamless access to the game's interactive features.

By using AWS S3 and Route 53 in tandem, we guarantee high availability, robust performance, and a smooth user experience for players accessing noteWizard from various locations.

## Mobile Accessibility

noteWizard is primarily designed for desktop and larger screen devices. However, to ensure some level of accessibility on smaller screens, such as tablets and mobile phones, we've implemented media queries in the CSS to adapt the layout.

### Usage on Mobile Devices

While noteWizard can be accessed on mobile devices, please be aware of the following:

- **Intended for Desktop**: noteWizard is optimized for desktop and larger screens, offering the best user experience in that context.

- **Limited Mobile Support**: While efforts have been made to make noteWizard accessible on mobile devices, there may still be some remaining CSS bugs and layout issues when used on smaller screens.

- **Recommended Use**: For the best experience, we recommend using noteWizard on a desktop or tablet-sized screen.

Please keep these considerations in mind when accessing noteWizard on mobile devices. If you encounter any issues or have feedback regarding mobile usage, feel free to contact developer.
  
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


