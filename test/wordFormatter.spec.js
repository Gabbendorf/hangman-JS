import {WordFormatter} from '../src/wordFormatter'
import {GuessRegister} from '../src/guessRegister'
import {Rules} from '../src/rules'

let wordFormatter
let guessRegister
let rules

beforeEach(() => {
  rules = new Rules("hello")
  guessRegister = new GuessRegister(rules)
  wordFormatter = new WordFormatter(guessRegister)
})

test("hides the secret word", () => {
  expect(wordFormatter.formattedWord("hello")).toBe("_ _ _ _ _")
})

test("reveals correctly guessed letters", () => {
  guessRegister.remember("h")
  guessRegister.remember("o")

  expect(wordFormatter.formattedWord("hello")).toBe("h _ _ _ o")
})
