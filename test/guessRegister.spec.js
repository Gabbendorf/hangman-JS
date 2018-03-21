import GuessRegister from '../src/guessRegister'

let guessRegister

beforeEach(() => {
  guessRegister = new GuessRegister("hi")
})

test("remembers a correct guess", () => {
  guessRegister.remember("h")

  expect(guessRegister.correctGuesses).toEqual(["h"])
})

test("remembers a not correctly guessed letter", () => {
  guessRegister.remember("e")

  expect(guessRegister.wrongGuesses).toEqual(["e"])
})

test("does not remember a number", () => {
  guessRegister.remember("3")

  expect(guessRegister.wrongGuesses).toEqual([])
})

test("does not remember a symbol", () => {
  guessRegister.remember(",")

  expect(guessRegister.wrongGuesses).toEqual([])
})

test("does remember a not correctly guessed letter only once", () => {
  guessRegister.remember("e")
  guessRegister.remember("e")

  expect(guessRegister.wrongGuesses).toEqual(["e"])
})

test("does remember a correctly guessed letter only once", () => {
  guessRegister.remember("h")
  guessRegister.remember("h")

  expect(guessRegister.correctGuesses).toEqual(["h"])
})
