export class Keyboard{
  constructor(notePressedCallback) {
    this.notePressedCallback = notePressedCallback
    this.#render()
    this.#bindNotes()
  }

  #render = () => {
    const container = document.querySelector('.keyboard')
    container.innerHTML = this.#keyboardHTML()
  }

  #bindNotes = () => {
    const newElement = document.querySelector('.keyboard')
    const keys = newElement.querySelectorAll('.white-key, .black-key')
    
    keys.forEach(key => {
      const note = key.getAttribute('data-key')
      const audio = new Audio(audio_files[note]);
      key.addEventListener('click', () => {
        audio.play()
        this.notePressedCallback(note)
      })
    })
  }

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
  `
}


const audio_files = {
  'C4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C4.mp3',
  'C#4 / Db4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C%234%3ADb4.mp3',
  'D4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D4.mp3',
  'D#4 / Eb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D%234%3AEb4.mp3',
  'E4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/E4.mp3',
  'F4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F4.mp3',
  'F#4 / Gb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F%234%3AGb4.mp3',
  'G4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G4.mp3',
  'G#4 / Ab4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G%234%3AAb4.mp3',
  'A4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A4.mp3',
  'A#4 / Bb4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A%234%3ABb4.mp3',
  'B4': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/B4.mp3',
  'C5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C5.mp3',
  'C#5 / Db5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C%235%3ADb5.mp3',
  'D5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D5.mp3',
  'D#5 / Eb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/D%235%3AEb5.mp3',
  'E5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/E5.mp3',
  'F5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F5.mp3',
  'F#5 / Gb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/F%235%3AGb5.mp3',
  'G5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G5.mp3',
  'G#5 / Ab5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/G%235%3AAb5.mp3',
  'A5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A5.mp3',
  'A#5 / Bb5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/A%235%3ABb5.mp3',
  'B5': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/B5.mp3',
  'C6': 'https://notemaster.s3.us-west-1.amazonaws.com/noteMasterAudio/C6.mp3'
}

