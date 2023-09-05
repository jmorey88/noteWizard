const Keyboard = require("./keyboard")
const Deck = require("./deck")

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

  renderInstuctions() {
    const instructions = document.querySelector(".instructions")
    instructions.innerHTML = this.#instructionsHTML()
    instructions.style.display = "block"
  }

  instructionsListener() {
    const playButton = document.getElementById("play-button")
    playButton.addEventListener('click', () => {
      this.#hideInstructions()
    })
  }

  #hideInstructions() {
    const instructions = document.querySelector(".instructions")
    instructions.style.display = "none"
  }

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

  #manageTxt(status) {
    const container = document.querySelector(".text")

    if (status == "correct") {
      container.innerHTML = this.#textHTML(status)
      setTimeout(() => {
        container.innerHTML = ''
      }, 2000)
    }

    else if(status == "incorrect") {
      container.innerHTML = this.#textHTML(status)
      setTimeout(() => {
        container.innerHTML = ''
      }, 2000)
    }
  }

  #textHTML(status) {
    if (status == "correct") {
      return `<p id="correct">CORRECT!</p>`
    }

    else if (status == "incorrect") {
      return `<p id="incorrect">Try Again</p>`
    }
  }

  #isWon() {
    if (this.deck.currentDeck.length == 0) {
      return true
    }

    else {
      return false
    }
  }

  #showPopup() {
    const popup = document.querySelector(".popup")
    popup.innerHTML = this.#popupHTML()
    popup.style.display = "block"
  }

  #popupListener() {
    const playAgainButton = document.getElementById('play-again-button')

    playAgainButton.addEventListener('click', () => {
      this.#playAgain()
    })
  }

  #hidePopup() {
    const popup = document.querySelector(".popup")
    popup.style.display = "none"
  }

  #popupHTML() {
    return `
      <div class="popup-content">
        <h2>Congratulations! You won the game.</h2>
        <button id="play-again-button">Play Again</button>
      </div>
    `
  }

  #playAgain() {
    this.#hidePopup()
    const anotherGame = new Game(false)
  }

  #instructionsHTML() {
    return `
      <div class="instructions-content">
        <p>Press the key on the piano that corresponds to the<br>
        presented flash card. Click "Let's Play" to begin!</p>
        <button id="play-button">Let's Play!</p>
      </div>
    `
  }
}



module.exports = Game;