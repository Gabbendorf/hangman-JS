import {Rules} from '../src/rules'

let rules

beforeEach(() => {
  rules = new Rules("hello")
})

test("confirms is a good guess", () => {
  expect(rules.isGood("H")).toBe(true);
})

test("confirms is not a good guess", () => {
  expect(rules.isGood("i")).toBe(false);
})

test("confirms is not a valid guess", () => {
  expect(rules.isGood("3")).toBe(false);
})
