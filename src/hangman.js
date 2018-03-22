export class Hangman {

  constructor(guessRegister, secretWord) {
    this.guessRegister = guessRegister
    this.secretWord = secretWord
  }

  isOver() {
    if (this.isGuessedWord() || this.areChancesToGuessOver()) {
      return true;
    } else {
      return false;
    }
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
