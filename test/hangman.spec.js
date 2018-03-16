import {Hangman} from '../src/hangman'
import {Rules} from '../src/rules'
import {GuessRegister} from '../src/guessRegister'

let hangman
let rules
let guessRegister
let wrongGuesses = ["a", "b", "c", "d", "e", "f", "g", "j", "k", "l", "m"]

beforeEach(() => {
  const secretWord = "hi"
  rules = new Rules(secretWord)
  guessRegister = new GuessRegister(rules)
  hangman = new Hangman(rules, guessRegister, secretWord)
})

test("confirms game is finished because player won", () => {
  guessRegister.remember("h")
  guessRegister.remember("i")

  expect(hangman.isOver()).toBe(true)
})

test("confirms game is finished because player lost", () => {
  for (let wrongGuess in wrongGuesses) {
    guessRegister.remember(wrongGuess)
  }

  expect(hangman.isOver()).toBe(true)
})

test("confirms game is not finished yet", () => {
  guessRegister.remember("h")

  expect(hangman.isOver()).toBe(false)
})
