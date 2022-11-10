const express = require('express');
const path = require('path');

const app = express();

const port = 3000; // porta de acesso ao servidor

const basePath = path.join(__dirname, 'templates');


const checarAutenticacao = function (req, res, next) {
    req.authStatus = true;

    if(req.authStatus) {
        console.log('Usuário Logado');
        next()
    }
    else {
        console.log('Usuário não está logado. Favor fazer o login');
        next();
    }

}

app.use(checarAutenticacao);

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log('Aplicação está rodando na porta ' + port);
})