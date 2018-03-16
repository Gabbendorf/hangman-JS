//require all dependencies
const express = require('express')
const app = express()
import {Words} from './src/words'
import {WordGenerator} from './src/wordGenerator'
import {images} from './src/imageLibrary'
import {WordFormatter} from './src/wordFormatter'
import {GuessRegister} from './src/guessRegister'
import {Rules} from './src/rules'
import {GuessesFormatter} from './src/guessesFormatter'

let wordGenerator = new WordGenerator(new Words().secretWords())
let randomWord = wordGenerator.randomWord()
let guessRegister = new GuessRegister(new Rules(randomWord))

//set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    title: 'Hangman',
    image: images[0],
    secretWord: new WordFormatter(guessRegister).formattedWord(randomWord),
    wrongGuesses: new GuessesFormatter().formatted(guessRegister.correctGuesses)
  })
})

app.listen(3000)
