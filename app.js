const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Task = require('./Task')

const app = express()

mongoose.connect('mongodb://localhost/todo-list')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index', {
      layout: false
  })
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000.');
})