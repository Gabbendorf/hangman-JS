import {ImageLibrary} from '../src/imageLibrary'
import {Hangman} from '../src/hangman'
import GuessRegister from '../src/guessRegister/'

let imageLibrary
let game
let guessRegister

beforeEach(() => {
  const secretWord = "hi"
  guessRegister = new GuessRegister(secretWord)
  game = new Hangman(guessRegister, secretWord)
  imageLibrary = new ImageLibrary(game)
})

test("chooses image start if game just started", () => {
  expect(imageLibrary.updatedImage([])).toBe("start")
})

test("chooses image corresponding to number of wrong guess", () => {
  expect(imageLibrary.updatedImage(["a"])).toBe("hangman_1")
})

test("chooses image heart if game is over and player won", () => {
  guessRegister.remember("h")
  guessRegister.remember("i")

  expect(imageLibrary.updatedImage([])).toBe("heart")
})

