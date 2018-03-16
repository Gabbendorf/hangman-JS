export default class GuessRegister {

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

  isAlreadyGuessed(guess) {
    const allGuesses = this.correctGuesses.concat(this.wrongGuesses)
    return allGuesses.includes(guess)
  }
}
