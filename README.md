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

Link to Demo

## Getting Started

Follow these instructions to get a copy of Note Master up and running on your local machine.

### Prerequisites 

- Ensure you have a modern web browser (e.g., Chrome, Firefox, Safari) installed.

### Installation

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/note-master.git
Navigate to the project directory:

bash
Copy code
cd note-master

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

## Project Structure

- main.js: Contains main game initialization and event listeners.
- index.js: Entry point of the JavaScript code.
- index.html: The HTML structure for the game interface.
- game.js: Implements the Game class to control game logic.
- keyboard.js: Contains the Keyboard class for virtual piano functionality.
- deck.js: Defines the Deck class for flashcard management.
  
## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

  Fork the repository.
  Create a new branch for your feature or bug fix.
  Make your changes and test thoroughly.
  Commit your changes with descriptive commit messages.
  Push your changes to your fork.
  Submit a pull request to the main repository.

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


