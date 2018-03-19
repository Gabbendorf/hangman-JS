export class WordFormatter {

  constructor(guessRegister) {
    this.guessRegister = guessRegister
  }

  formattedWord(secretWord) {
    const secretWordLetters = secretWord.split("");
    return secretWordLetters.map((letter) => this.hideOrReveal(letter)).join(" ");
  }

  hideOrReveal(letter) {
    if (this.guessRegister.correctGuesses.includes(letter)) {
      return letter.toUpperCase()
    } else {
      return "_"
    }
  }

  formatGuessed(secretWord) {
    return secretWord.toUpperCase()
  }
}
