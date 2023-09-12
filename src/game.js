import { Keyboard } from "./keyboard"
import { Deck } from "./deck"

export class Game {
  constructor(renderInstructions) {
    this.instructions = renderInstructions
    this.deck = new Deck
    this.keyboard = new Keyboard(this.notePressed())

    if (this.instructions) {
      this.#renderInstuctions()
    }
  }

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

  #renderInstuctions = () => {
    const instructions = document.querySelector(".instructions")
    instructions.innerHTML = this.#instructionsHTML()
    instructions.style.display = "block"
    this.#instructionsListener()
  }
  
  #instructionsListener = () => {
    const playButton = document.getElementById("play-button")
    playButton.addEventListener('click', () => {
      this.#hideInstructions()
    })
  }

  #hideInstructions = () => {
    const instructions = document.querySelector(".instructions")
    instructions.style.display = "none"
  }

  #correctNote = () => {
    this.deck.nextCard()

    if (this.#isWon()) {
      this.#showPopup()
      this.#popupListener()
    }
  }

  #manageTxt = (status) => {
    const container = document.querySelector(".text")
    container.innerHTML = this.#textHTML(status)
    setTimeout(() => {
      container.innerHTML = ''
    }, 2000)
  }

  #textHTML = (status) => status === "correct" ? `<p id="correct">CORRECT!</p>` : `<p id="incorrect">Try Again</p>`;

  #isWon = () => this.deck.currentDeck.length === 0;

  #showPopup = () => {
    const popup = document.querySelector(".popup")
    popup.innerHTML = this.#popupHTML()
    popup.style.display = "block"
  }

  #popupListener = () => {
    const playAgainButton = document.getElementById('play-again-button')

    playAgainButton.addEventListener('click', () => {
      this.#playAgain()
    })
  }

  #hidePopup = () => {
    const popup = document.querySelector(".popup")
    popup.style.display = "none"
  }

  #popupHTML = () => 
    `
      <div class="popup-content">
        <h2>Congratulations! You won the game.</h2>
        <button id="play-again-button">Play Again</button>
      </div>
    `
    
  #playAgain = () => {
    this.#hidePopup()
    anotherGame = new Game(false)
  }

  #instructionsHTML = () => 
    `
      <div class="instructions-content">
        <p>Press the key on the piano that corresponds to the<br>
        presented flash card. Click "Let's Play" to begin!</p>
        <button id="play-button">Let's Play!</p>
      </div>
    `
}
