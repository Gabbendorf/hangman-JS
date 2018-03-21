import {Words} from './src/words'
import {WordGenerator} from './src/wordGenerator'
import {images} from './src/imageLibrary'
import {WordFormatter} from './src/wordFormatter'
import GuessRegister from './src/guessRegister'
import {GuessesFormatter} from './src/guessesFormatter'
import {Hangman} from './src/hangman'
import {ImageLibrary} from './src/imageLibrary'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false})

let randomWord = new WordGenerator(new Words().secretWords()).randomWord()
let guessRegister = new GuessRegister(randomWord)

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', function (req, res) {
  const game = new Hangman(guessRegister, randomWord)
  res.render('home', {
    image: new ImageLibrary(game).updatedImage(guessRegister.wrongGuesses),
    secretWord: new WordFormatter(guessRegister).formattedWord(randomWord),
    wrongGuesses: new GuessesFormatter().formatted(guessRegister.wrongGuesses)
  })
})

app.post('/guess', urlencodedParser, function (req, res) {
  const game = new Hangman(guessRegister, randomWord)
  let letterGuessed = req.body.letter
  if (typeof(letterGuessed) === 'undefined') {
    letterGuessed = ""
  }
  guessRegister.remember(letterGuessed)
  if (game.isOver()) {
    res.redirect('/game-over')
  } else {
    res.redirect('/')
  }
})

app.get('/game-over', function (req, res) {
  const game = new Hangman(guessRegister, randomWord)
  res.render('gameOver', {
    image: new ImageLibrary(game).updatedImage(guessRegister.wrongGuesses),
    secretWordRevealed: new WordFormatter(guessRegister).formatGuessed(randomWord),
    verdictMessage: game.verdict()
  })
})

app.post('/play-again', urlencodedParser, function (req, res) {
  randomWord = new WordGenerator(new Words().secretWords()).randomWord()
  guessRegister = new GuessRegister(randomWord)
  res.redirect('/')
})


module.exports = app
