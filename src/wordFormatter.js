export class WordFormatter {

  constructor(guessRegister) {
    this.guessRegister = guessRegister
  }

  formattedWord(secretWord) {
    let secretWordLetters = secretWord.split("");
    let formattedWord = []
    for(let i = 0; i < secretWordLetters.length; i++) {
      this.hideOrReveal(secretWordLetters[i], formattedWord)
    }
    return formattedWord.join(" ");
  }

  hideOrReveal(letter, formattedWord) {
    if (this.guessRegister.correctGuesses.includes(letter)) {
      formattedWord.push(letter)
    } else {
      formattedWord.push("_")
    }
  }
}
