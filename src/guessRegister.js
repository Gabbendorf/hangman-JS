export class GuessRegister {

  constructor(rules) {
    this.rules = rules
    this.correctGuesses = []
    this.wrongGuesses = []
  }

  remember(guess) {
    if (this.rules.isGood(guess)) {
      this.correctGuesses.push(guess)
    } else {
      this.wrongGuesses.push(guess)
    }
  }
}
