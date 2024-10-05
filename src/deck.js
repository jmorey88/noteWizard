import { shuffle } from 'lodash';
import { noteImages } from './resources/images';

export default class Deck {
	constructor() {
		this.currentDeck = null;
		this.#build();
	}

	currentCard = () => this.currentDeck[0];

	nextCard = () => {
		if (this.currentDeck.length > 1) {
			this.currentDeck.shift();
			this.#removeCard();
			this.#displayCard(this.currentCard());
			this.#renderCardCount();
		} else {
			this.currentDeck.shift();
			this.#removeCard();
		}
	};

	#build = () => {
		const newDeck = Object.keys(noteImages).map((key) => ({ key, value: noteImages[key] }));
		this.currentDeck = shuffle(newDeck);
		this.#displayCard(this.currentCard());
	};

	#displayCard = (topCard) => {
		const img = document.createElement('img');
		img.src = topCard.value;
		img.alt = 'displayed-card';
		img.id = 'card-img';

		const container = document.querySelector('.deck');
		container.appendChild(img);
		return this.#renderCardCount();
	};

	#removeCard = () => {
		const container = document.querySelector('.deck');
		const card = document.getElementById('card-img');

		if (card) {
			container.removeChild(card);
		}
	};

	#renderCardCount = () => {
		const container = document.querySelector('.card-count');
		container.innerHTML = this.#cardCountHTML();
	};

	#cardCountHTML = () => {
		const cardCount = Object.keys(noteImages).length;
		return `
      <div class="card-count">
        ${this.currentDeck.length}/${cardCount}
      </div>
    `;
	};
}
