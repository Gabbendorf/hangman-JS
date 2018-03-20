import {GuessesFormatter} from '../src/guessesFormatter'

test("formats the list of guesses", () => {
  const guessesFormatter = new GuessesFormatter

  expect(guessesFormatter.formatted(["a", "b"])).toBe("A B")
})
