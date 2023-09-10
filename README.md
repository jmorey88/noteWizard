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
- Project Structure
- Contributing


## Introduction

Learning to read musical notes is an essential skill for anyone interested in music, whether you're a beginner or an experienced musician. noteWizard aims to make this learning process fun and engaging by gamifying the experience. With this project, you can start by practicing notes on the treble clef, specifically in the C3 to C4 range. In the future, we plan to expand this game to include different clefs and additional octaves.

## Features

Virtual Piano: Play realistic sounding notes on a virtual piano.

Flashcards: Learn to recognize notes presented on flashcards.

Progress Tracking: Keep track of your progress as you correctly identify notes.

Multiple Clefs: Future updates will include support for bass clef, alto clef, and more.

Expanded Octaves: Enjoy a wider range of notes as we expand the game to cover more than 2 octaves.

## Demo

http://www.notewizard.net 

## Getting Started

Follow these instructions to get a copy of noteWizard up and running on your local machine.

### Prerequisites 

- Ensure you have a modern web browser (e.g., Chrome, Firefox, Safari) installed.

### Installation

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/noteWizard.git
Navigate to the project directory:

bash
Copy code
cd noteWizard

Install dependencies:

bash
Copy code
npm install webkit lodash

Open index.html in your web browser to start the game.

## Usage

- Press the "Let's Play" button to start the game. 
- A flashcard displaying a musical note will appear.
- Identify the note and click the corresponding key on the virtual piano keyboard.
- Receive feedback on whether your answer was correct or incorrect.
- Continue until you've completed all the flashcards.
- Upon completion, a popup window will congratulate you and offer the option to play again.

## Technical Details

### Code Architecture

noteWizard follows a modular and organized code structure to maintain code readability and scalability. Here's an overview of the main components:

- **`index.html`**: The main HTML file that provides the structure of the game.

- **`note_master.css`**: The Cascading Style Sheets (CSS) file responsible for styling the game elements.

- **`game.js`**: Contains the core game logic, including flashcard handling, user interaction, and game flow control.

- **`keyboard.js`**: Defines the `Keyboard` class, which manages the virtual piano keyboard and note playback.

- **`deck.js`**: Defines the `Deck` class, responsible for managing flashcards and the card deck.

### Key Code Snippets

Here are some key code snippets that highlight the core functionality of the `noteWizard` project:

### Instantiating Game 

The 'Game' class handles game board set up and game logic.  It sets up the flashcard deck and piano keyboard while also checking to see if correct notes are selected and determines game state.

```javascript
// code snippet from game.js
class Game {
  constructor(renderInstructions) {
    this.instructions = renderInstructions
    this.deck = new Deck
    this.keyboard = new Keyboard(this.notePressed.bind(this))

    if (this.instructions) {
      this.renderInstuctions()
      this.instructionsListener()
    }
  }
  // other methods...
```
As shown in this section of code above the Game class constructor instantiates a new deck class and a new keyboard class.  It also handles the insturctions popup. If a new instance of Game is created and has true passed as an argument, the instructions will render.  If false is passed in, instructions will not show.

![noteWizard instructions Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/instructionsScreenshot.png)

### Create Deck and Displaying Flashcards

The Deck class creates a new shuffled deck, manages flashcards, displays them to the user, and tracks the player's progress.

```javascript
// Code snippet from deck.js
class Deck {
  constructor() {
    this.currentDeck = null
    this.#build()
    this.#displayCard(this.currentCard())
    this.#renderCardCount()
  }

  #build() {
    const newDeck = Object.keys(noteImages).map(key => ({ key, value: noteImages[key] }))
    this.currentDeck = _.shuffle(newDeck) 
  }

  #displayCard(topCard) {
    const img = document.createElement('img');
    img.src = topCard.value;
    img.alt = 'displayedCard';
    img.id = 'card_img';

    const container = document.querySelector('.deck');
    container.appendChild(img);
  }
}
```
In the above section of code, the 'Deck' class' constructor handles the Deck build, card display, and card count. 
The #build method utilizes the lodash library for efficient shuffling of the flashcard deck, ensuring a varied and randomized learning experience.  The currentDeck array is then used to display the current card and to obtain the card count which shows how many cards are left to finish the game.

#### Creating the Piano Keyboard

The `Keyboard` class dynamically generates the piano keyboard and handles user interactions, such as playing notes when keys are clicked.

```javascript
// Code snippet from keyboard.js
class Keyboard {
  // ... constructor and other methods ...

  #keyboardHTML() {
    return `
      <!-- Piano keys HTML structure -->
      <!-- White keys -->
      <div class="white_key first" data-key="C4">C4</div>
      <!-- Black keys -->
      <div class="black_key b1" data-key="C#4 / Db4"></div>
      <!-- Additional keys ... -->
    `;
  }

  #bindNotes() {
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
}
```

In this class file the #bindNotes method accesses the DOM to itterate through the different piano keys using their html classes white_key and black_key.  #bindNotes then adds a eventListener that waits for the user to click one of the keys at which point the corresponding note will play and the notePressedCallback will take over managing whether or not the clicked key was correct or not.  In the html each piano key was also givin a data-key to be passed into the notePressed method so it can be checked against the flash card value.  

### Game class game logic

The 'Game' class also handles checking if the users selections are correct, determining if the game is won or not, and what steps to take next accordingly.

```javascript
notePressed(note) {
    var status = " "
    const currentCardKey = this.deck.currentCard().key
    const splitNote = note.split(' / ')

    if (splitNote.includes(currentCardKey)) {
      status = "correct"
      this.#correctNote(status)
    }

    else {
      status = "incorrect"
      this.#wrongNote(status)
    }
  }
```
The notePressed method is the core of the noteWizard game play logic.  It checks to see if the piano key pressed by the user corresponds to the currently presented flashcard.  If the selected note is correct #correctNote method is called and if the note is incorrect, #wrongNote is called.  The constant splitNote is added to handle the use of enharmonics.  In music, enharmonics are notes that have 2 different possible names.  For example, a black key on the piano can be a Gb or and F#.  the splitNote constant takes the piano keys data-key which has both note names and splits them in order to compare them to the current card.

```javascript
#correctNote(status) {
    this.#manageTxt(status)
    this.deck.nextCard()

    if (this.#isWon()) {
      this.#showPopup()
      this.#popupListener()
    }
  }

  #wrongNote(status) {
    this.#manageTxt(status)
  }
```
The #correctNote and #wrongNote methods handle what the game does depending on the users selection.  The manageTxt method displays "Correct" on the DOM if the selection is correct, and "Try Again" if the selction is incorrect.  If the slection is correct, the #correctNote method goes on to check if the game is finished/won.  If the deck is complete, a popup is displayed stating the game is won, and asking if the user wants to play again.  If the game is not yet completed, the deck class' nextCard method is called, removing the current card from the deck and displaying the next.

![noteWizard "Correct" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/correctScreenshot.png)
![noteWizard "Try Again" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/tryAgainScreenshot.png)

If the game is won and all cards have been played through, the #showPopup method will be called which displays text stating the game has been won, and trigger the playAgian method which shows a "PlayAgain" button that will instantiate a new Game with a freshly shuffled deck.  Because this new Game is a repeate of the Game and not the first round, "false" will be passed to the game instance making sure that the instructions wont be displayed again

```javascript
  #playAgain() {
    this.#hidePopup()
    const anotherGame = new Game(false)
  }
```

![noteWizard "Try Again" Screenshot](https://notemaster.s3.us-west-1.amazonaws.com/gameWonScreenshot.png)
  
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
License

Contact
For inquiries or feedback, you can reach me at joel.morey88@gmail.com.


