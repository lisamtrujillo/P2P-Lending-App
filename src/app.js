const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('./database-connection');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

const person = require('./routes/personRouter');

app.use('/person', person);

const loanGroup = require('./routes/loanGroupRouter');

app.use('/loan-group-submit', loanGroup);

app.get('/', (req, res, next) => {
  res.render('person');
});

module.exports = app;
