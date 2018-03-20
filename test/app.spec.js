const request = require('supertest');
const app = require('../app')

test("shows an heading 'Guess the word!' in root", () => {
  return request(app).get("/").then(response => {
    expect(response.res.text).toContain("<h1>Guess the word!</h1>")
  })
});

test("shows a button 'Guess!' in root", () => {
  return request(app).get("/").then(response => {
    expect(response.res.text).toContain("button class=\"guess-button\" type=\"submit\">Guess!")
  })
});

test("shows the image for start of the game in root", () => {
  return request(app).get("/").then(response => {
    expect(response.res.text).toContain("src=\"start.jpg\"")
  })
});

test("'Wrong guesses' is empty in root when game has to start yet", () => {
  return request(app).get("/").then(response => {
    expect(response.res.text).toContain("<p class=\"wrong-guesses-displayed\"></p>")
  })
});

test('posting to /guess responds with a redirect to root if game is not over', () => {
  return request(app)
    .post("/guess")
    .send({letter: "h"})
    .type("form")
    .then(response => {
      expect(response.res.text).toContain("Redirecting to /")
    })
});

test('/game-over route shows message for lost game as word was not guessed', () => {
  return request(app).get("/game-over").then(response => {
    expect(response.res.text).toContain("<p>You lost!</p>")
  })
});

test('/game-over route has a button to play again', () => {
  return request(app).get("/game-over").then(response => {
    expect(response.res.text).toContain("<button class=\"replay-button\" type=\"replay\">Play again")
  })
});
