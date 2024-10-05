import { audioFiles } from "./resources/audio";

export default class Keyboard {
  constructor(notePressedCallback) {
    this.notePressedCallback = notePressedCallback;
    this.#render();
    this.#bindNotes();
  }

  #render = () => {
    const container = document.querySelector(".keyboard");
    container.innerHTML = this.#keyboardHTML();
  };

  // #bindNotes = () => {
  //   const newElement = document.querySelector(".keyboard");
  //   const keys = newElement.querySelectorAll(".white-key, .black-key");

  //   keys.forEach((key) => {
  //     const note = key.getAttribute("data-key");
  //     const audio = new Audio(audioFiles[note]);
  //     key.addEventListener("click", () => {
  //       audio.play();
  //       this.notePressedCallback(note);
  //     });
  //   });
  // };

  #bindNotes = () => {
    const container = document.querySelector(".keyboard");

    // Using event delegation for efficient event handling
    container.addEventListener("click", (event) => {
      const key = event.target;

      // Check if the clicked element is a key
      if (
        key.classList.contains("white-key") ||
        key.classList.contains("black-key")
      ) {
        const note = key.getAttribute("data-key");
        const audio = new Audio(audioFiles[note]);
        audio.play();
        this.notePressedCallback(note);
      }
    });
  };

  #keyboardHTML = () =>
    `
      <div class="white-key first" data-key="C4" >C4</div>
      <div class="black-key b1" data-key="C#4 / Db4"></div>
      <div class="white-key" data-key="D4"></div>
      <div class="black-key b2" data-key="D#4 / Eb4"></div>
      <div class="white-key" data-key="E4"></div>
      <div class="white-key" data-key="F4"></div>
      <div class="black-key b3" data-key="F#4 / Gb4"></div>
      <div class="white-key" data-key="G4"></div>
      <div class="black-key b4" data-key="G#4 / Ab4"></div>
      <div class="white-key" data-key="A4"></div>
      <div class="black-key b5" data-key="A#4 / Bb4"></div>
      <div class="white-key" data-key="B4"></div>
      <div class="white-key" data-key="C5"></div>
      <div class="black-key b6" data-key="C#5 / Db5"></div>
      <div class="white-key" data-key="D5"></div>
      <div class="black-key b7" data-key="D#5 / Eb5"></div>
      <div class="white-key" data-key="E5"></div>
      <div class="white-key" data-key="F5"></div>
      <div class="black-key b8" data-key="F#5 / Gb5"></div>
      <div class="white-key" data-key="G5"></div>
      <div class="black-key b9" data-key="G#5 / Ab5"></div>
      <div class="white-key" data-key="A5"></div>
      <div class="black-key b10" data-key="A#5 / Bb5"></div>
      <div class="white-key" data-key="B5"></div>
      <div class="white-key last" data-key="C6"></div>
  `;
}
