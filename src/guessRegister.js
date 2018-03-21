const validGuesses = "abcdefghijklmnopqrstuvwxyz".split("");
export default class GuessRegister {

  constructor(secretWord) {
    this.secretWord = secretWord
    this.correctGuesses = []
    this.wrongGuesses = []
  }

  remember(guess) {
    const lowerCaseGuess = guess.toLowerCase()
    if (this.isValid(lowerCaseGuess)) {
      this.differentiateGuessType(lowerCaseGuess)
    }
  }

  isValid(guess) {
    return validGuesses.includes(guess) && this.isNotAlreadyGuessed(guess);
  }

  differentiateGuessType(guess) {
    if (this.isGood(guess)) {
      this.correctGuesses.push(guess)
    } else {
      this.wrongGuesses.push(guess)
    }
  }

  isGood(guess) {
    return this.secretWord.includes(guess);
  }

  isNotAlreadyGuessed(guess) {
    const allGuesses = this.correctGuesses.concat(this.wrongGuesses)
    return !allGuesses.includes(guess)
  }
}
