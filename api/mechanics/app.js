const express = require('express')
const bodyParser = require('body-parser')
const app = express()


var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const mechanicsController = require('./controller/mechanicsController')

app.use('/api/mechanics',mechanicsController)
module.exports = app