import {GuessesFormatter} from '../src/guessesFormatter'

test("formats the wrong guesses", () => {
  let wrongGuesses = ["a", "b"]
  let guessesFormatter = new GuessesFormatter

  expect(guessesFormatter.formatted(wrongGuesses)).toBe("A B")
})
