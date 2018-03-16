export class GuessesFormatter {

  formatted(wrongGuesses) {
    return wrongGuesses.map((guess) => guess.toUpperCase()).join(" ")
  }
}
