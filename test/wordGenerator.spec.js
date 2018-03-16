import {WordGenerator} from '../src/wordGenerator'
import {WordsSpy} from '../test/wordsSpy'

test("gives a random word", () => {
  let words = new WordsSpy()
  let wordGenerator = new WordGenerator(words.secretWords())

  expect(wordGenerator.randomWord()).toBe("hello")
})

