export class Hangman {

  constructor(rules, guessRegister) {
    this.rules = rules
    this.guessRegister = guessRegister
  }

  isOver() {
    if (this.isGuessedWord() || this.areChancesToGuessOver()) {
      return true;
    } else {
      return false;
    }
  }

  isGuessedWord() {
    return this.rules.getWord().split("").sort().join("") ==
      this.guessRegister.correctGuesses.sort().join("")
  }

  areChancesToGuessOver() {
    return this.guessRegister.wrongGuesses.length == 11;
  }
}
