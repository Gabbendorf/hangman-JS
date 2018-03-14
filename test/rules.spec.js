import {Rules} from '../src/rules'

let rules

beforeEach(() => {
  rules = new Rules("hello")
})

test("confirms is a good guess", () => {
  expect(rules.isGoodGuess("h")).toBe(true);
})

test("confirms is not a good guess", () => {
  expect(rules.isGoodGuess("i")).toBe(false);
})

test("confirms is not a valid guess", () => {
  expect(rules.isGoodGuess("3")).toBe(false);
})
