const _ = require('lodash')

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

  currentCard() {
    return this.currentDeck[0]
  }

  #displayCard(topCard) {
    const img = document.createElement('img')
    img.src = topCard.value
    img.alt = 'displayed-card'
    img.id = 'card-img'

    const container = document.querySelector(".deck")
    container.appendChild(img)
  }

  #removeCard() {
    const container = document.querySelector(".deck")
    const card = document.getElementById("card-img")

    if (card) {
      container.removeChild(card)
    }

  }
  
  nextCard() {
    if (this.currentDeck.length > 1) {
      this.currentDeck.shift()
      this.#removeCard()
      this.#displayCard(this.currentCard())
      this.#renderCardCount()
    }
    else {
      this.currentDeck.shift()
      this.#removeCard()
    }
  }

  #renderCardCount() {
    const container = document.querySelector(".card-count")
    container.innerHTML = this.#cardCountHTML()
  }

  #cardCountHTML() {
    const cardCount = Object.keys(noteImages).length
    return `
      <div class="card-count">
        ${this.currentDeck.length}/${cardCount}
      </div>
    `
  }
}


const noteImages= {
  'C4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C4.png',
  'C#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C%234.png',
  'Db4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Db4.png',
  'D4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D4.png',
  'D#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D%234.png',
  'Eb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Eb4.png',
  'E4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/E4.png',
  'F4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F4.png',
  'F#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F%234.png',
  'Gb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Gb4.png',
  'G4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G4.png',
  'G#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G%234.png',
  'Ab4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Ab4.png',
  'A4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A4.png',
  'A#4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A%234.png',
  'Bb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Bb4.png',
  'B4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/B4.png',
  'C5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C5.png',
  'C#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C%235.png',
  'Db5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Db5.png',
  'D5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D5.png',
  'D#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/D%235.png',
  'Eb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Eb5.png',
  'E5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/E5.png',
  'F5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F5.png',
  'F#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/F%235.png',
  'Gb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Gb5.png',
  'G5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G5.png',
  'G#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/G%235.png',
  'Ab5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Ab5.png',
  'A5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A5.png',
  'A#5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/A%235.png',
  'Bb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/Bb5.png',
  'B5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/B5.png',
  'C6': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterImages/C6.png'
}

module.exports = Deck