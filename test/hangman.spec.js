import {Hangman} from '../src/hangman'
import GuessRegister from '../src/guessRegister'

let hangman
let guessRegister

beforeEach(() => {
  const secretWord = "hi"
  guessRegister = new GuessRegister(secretWord)
  hangman = new Hangman(guessRegister, secretWord)
})

test("confirms game is finished because player won", () => {
  guessRegister.remember("h")
  guessRegister.remember("i")

  expect(hangman.isOver()).toBe(true)
})

test("confirms game is finished because player guessed 11 times not correctly", () => {
  ["a", "b", "c", "d", "e", "f", "g", "j", "k", "l", "m"].forEach(wrongGuess => {
    guessRegister.remember(wrongGuess)
  })

  expect(hangman.isOver()).toBe(true)
})

test("confirms game is not finished yet", () => {
  guessRegister.remember("h")

  expect(hangman.isOver()).toBe(false)
})
