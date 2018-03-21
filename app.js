//require all dependencies
import {Words} from './src/words'
import {WordGenerator} from './src/wordGenerator'
import {images} from './src/imageLibrary'
import {WordFormatter} from './src/wordFormatter'
import GuessRegister from './src/guessRegister'
import {Rules} from './src/rules'
import {GuessesFormatter} from './src/guessesFormatter'
import {Hangman} from './src/hangman'
import {ImageLibrary} from './src/imageLibrary'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false})

const randomWord = new WordGenerator(new Words().secretWords()).randomWord()
const rules = new Rules(randomWord)
const guessRegister = new GuessRegister(new Rules(randomWord))
const game = new Hangman(rules, guessRegister, randomWord)
const imageLibrary = new ImageLibrary(game)
const wordFormatter = new WordFormatter(guessRegister)

//set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    title: 'Hangman',
    image: imageLibrary.updatedImage(guessRegister.wrongGuesses),
    secretWord: wordFormatter.formattedWord(randomWord),
    wrongGuesses: new GuessesFormatter().formatted(guessRegister.wrongGuesses)
  })
})

app.post('/guess', urlencodedParser, function (req, res) {
  const firstLetterGuessed = req.body.letter[0]
  guessRegister.remember(firstLetterGuessed)
  if (game.isOver()) {
    res.redirect('/game-over')
  } else {
    res.redirect('/')
  }
})

app.get('/game-over', function (req, res) {
  res.render('gameOver', {
    title: 'Hangman',
    image: imageLibrary.updatedImage(guessRegister.wrongGuesses),
    secretWordRevealed: wordFormatter.formatGuessed(randomWord),
    verdictMessage: game.verdict()
  })
})

module.exports = app
