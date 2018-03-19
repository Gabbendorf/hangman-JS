import {ImageLibrary} from '../src/imageLibrary'
import {Rules} from '../src/rules'
import {Hangman} from '../src/hangman'
import GuessRegister from '../src/guessRegister/'

let imageLibrary
let rules
let game
let guessRegister

beforeEach(() => {
  rules = new Rules("hi")
  guessRegister = new GuessRegister(rules)
  game = new Hangman(rules, guessRegister, "hi")
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

