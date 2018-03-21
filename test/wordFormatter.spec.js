import {WordFormatter} from '../src/wordFormatter'
import GuessRegister from '../src/guessRegister'

let wordFormatter
let guessRegister

beforeEach(() => {
  const secretWord = "hello"
  guessRegister = new GuessRegister(secretWord)
  wordFormatter = new WordFormatter(guessRegister)
})

test("hides the secret word", () => {
  expect(wordFormatter.formattedWord("hello")).toBe("_ _ _ _ _")
})

test("reveals correctly guessed letters in uppercase", () => {
  guessRegister.remember("h")
  guessRegister.remember("o")

  expect(wordFormatter.formattedWord("hello")).toBe("H _ _ _ O")
})

test("turns guessed secret word in uppercase", () => {
  expect(wordFormatter.formatGuessed("hello")).toBe("HELLO")
})

