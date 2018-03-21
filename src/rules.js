const validGuesses = "abcdefghijklmnopqrstuvwxyz".split("");
export class Rules {

  constructor(secretWord) {
    this.secretWord = secretWord
  }

  isGood(guess) {
    const lowerCaseGuess = guess.toLowerCase()
    if (this.isCorrectlyGuessed(lowerCaseGuess) && this.isValid(lowerCaseGuess)) {
      return true
    } else {
      return false
    }
  }

  isCorrectlyGuessed(guess) {
    return this.secretWord.includes(guess);
  }

  isValid(guess) {
    return validGuesses.includes(guess);
  }
}
