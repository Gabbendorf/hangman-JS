//require all dependencies
const express = require('express')
const app = express()

//set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('home', { title: 'Hangman',
    secretWord: "hello" })
})

app.listen(3000 , () => console.log('Test app listening on port 3000!'))
