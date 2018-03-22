export class GuessesFormatter {

  formatted(guesses) {
    return guesses.map((guess) => guess.toUpperCase()).join(" ")
  }
}
