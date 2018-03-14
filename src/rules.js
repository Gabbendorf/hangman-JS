const validGuesses = "abcdefghijklmnopqrstuvwxyz".split("");
export class Rules {

  constructor(secret_word) {
    this.secret_word = secret_word
  }

  isGoodGuess(guess) {
    if (this.isCorrectlyGuessed(guess) &&
         this.isValid(guess)) {
      return true
    } else {
      return false
    }
  }

  isCorrectlyGuessed(guess) {
    return this.secret_word.includes(guess);
  }

  isValid(guess) {
    return validGuesses.includes(guess);
  }
}
