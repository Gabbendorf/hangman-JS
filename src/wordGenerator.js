export class WordGenerator {

  constructor(words) {
    this.words = words
  }

  randomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
}
