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

  isGuessedWord() {
    return this.secretWord.split("").sort().join("") ==
      this.guessRegister.correctGuesses.sort().join("")
  }

  areChancesToGuessOver() {
    return this.guessRegister.wrongGuesses.length == 11;
  }
}
