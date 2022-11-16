const express = require('express');
const path = require('path');
const port = 3000;
const basePath = path.join(__dirname, 'templates');
const app = express();

app.listen(port, () => {
    console.log("A aplicação está rodando na porta " + port);
});

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

const home = require('./home');
const users = require('./users');
const hunches = require('./hunches');
const games = require('./games');

app.use('/home', home);
app.use('/users', users);
app.use('/hunches', hunches);
app.use('/games', games);






