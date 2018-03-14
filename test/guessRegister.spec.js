import {GuessRegister} from '../src/guessRegister'
import {Rules} from '../src/rules'

let guessRegister

beforeEach(() => {
  guessRegister = new GuessRegister(new Rules("hi"))
})

test("remembers a correct guess", () => {
  guessRegister.remember("h")

  expect(guessRegister.correctGuesses).toEqual(["h"])
})

test("remembers a wrong guess", () => {
  guessRegister.remember("e")

  expect(guessRegister.wrongGuesses).toEqual(["e"])
})
