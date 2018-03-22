export class Hangman {

  constructor(guessRegister, secretWord) {
    this.guessRegister = guessRegister
    this.secretWord = secretWord
  }

  isOver() {
    return this.isGuessedWord() || this.areChancesToGuessOver()
  }

  isGuessedWord() {
    return this.uniqueWordLetters().sort().join("") ===
      this.guessRegister.correctGuesses.sort().join("")
  }

  areChancesToGuessOver() {
    return this.guessRegister.wrongGuesses.length === 11;
  }

  verdict() {
    if (this.isGuessedWord()) {
      return "You won!"
    } else {
      return "You lost!"
    }
  }

  uniqueWordLetters() {
    return [...new Set(this.secretWord.split(""))]
  }
}
