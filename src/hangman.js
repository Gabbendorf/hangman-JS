export class Hangman {

  constructor(rules, guessRegister, secretWord) {
    this.rules = rules
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

  isOngoing() {
    return !this.isOver()
  }

  isGuessedWord() {
    return this.uniqWordLetters().sort().join("") ===
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

  uniqWordLetters() {
    return [...new Set(this.secretWord.split(""))]
  }
}
