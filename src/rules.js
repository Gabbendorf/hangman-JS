const validGuesses = "abcdefghijklmnopqrstuvwxyz".split("");
export class Rules {

  constructor(secretWord) {
    this.secretWord = secretWord
  }

  isGood(guess) {
    if (this.isCorrectlyGuessed(guess) && this.isValid(guess)) {
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
